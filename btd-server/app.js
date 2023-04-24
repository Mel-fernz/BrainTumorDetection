const express = require('express'),
      mongoose = require('mongoose'),
      bcrypt = require('bcryptjs'),
      path = require('path'),
      app = express();
      nodemailer = require('nodemailer');

app.use(express.json());

const root = path.join(__dirname, '../btd-client', 'build')
app.use(express.static(root));

//xj4Q8FQmR5qKmUtj
mongoose.connect('mongodb+srv://btd:xj4Q8FQmR5qKmUtj@btd.fdkzatf.mongodb.net/?retryWrites=true&w=majority');

const db = mongoose.connection;
db.once('open', () => {
  console.log('MongoDB connection successful');
});

const UserSchema = new mongoose.Schema({
email: String,
name: String,
password: String,
token: String

});

const User = mongoose.model('User', UserSchema);




app.get('/api', async (req, res) => {
    res.status(200).json({
        message: 'Hello'
    });
});

app.post('/api/register', async (req, res) => {
  try {

    console.log("req.body",req.body);
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ name, email, password: hashedPassword });
    return await user.save().then((data)=>{
        console.log("db updated",data);
        return res.status(200).json({ message: 'User created successful' });
    }).catch(error =>{
        console.error("db error",error);
        return res.status(500).json({ message: 'Error while creating user' });
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'user not found' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    res.status(200).json({ message: 'login successful' , token: user.token});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});



app.post('/api/reset-password', (req, res) => {
  const { email } = req.body;

  let _email = "srirajdesai29@gmail.com";
  let _password = "wnmdargkxexcbnzc";
  // Generate a random token
  const timestamp = Date.now().toString(36);
  const randomString = Math.random().toString(36).substring(2, 8);
  const token = `${timestamp}-${randomString}`;
  // Store the token and user's email address in the database

  User.findOneAndUpdate(
    { email: email },
    { $set: { token: token } },
    { returnOriginal: false }
  ).then((result) => {
    console.log("result",result);
    if (!result) {
      res.status(404).json({ message: 'User not found',  })
    } else {
      // Send an email to the user with a link to reset their password
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // use SSL
        auth: {
            user: _email,
            pass: _password
        }
      });
      const mailOptions = {
        from: _email,
        to: email,
        subject: 'Reset Your Password',
        text: `Click this link to reset your password: http://localhost:3000/auth/reset?token=${token}`
      };
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error(error);
          res.status(500).json({ message: 'internal server error',  });
        } else {
          console.log(`Email sent to ${email}`);
          res.status(200).json({ message: 'email sent',  });
        }
      });
    }
  })
  .catch((err) => {
    console.error(err);
    res.status(500).send('Internal server error');
  });
  
});

app.post('/api/update-password', async (req, res) => {
  const { token, newPassword } = req.body;

  const hashedPassword = await bcrypt.hash(newPassword, 10);
  // Find the user in the database
  db.collection('users').findOne({token: token }, (err, user) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal server error');
    } else if (!user) {
      res.status(404).send('User not found');
    } else {
      // Update the user's password in the database
      db.collection('users').updateOne({ email: user.email }, { $set: { password: hashedPassword } }, (err, result) => {
        if (err) {
          console.error(err);
          res.status(500).send('Internal server error');
        } else {
          res.status(200).send('password updated');
        }
      })
    }
  })
});




app.get("*", (req, res) => {
  res.sendFile('index.html', { root });
})
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});