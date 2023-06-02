import React from 'react'
import { useNavigate } from 'react-router-dom';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import "./Report.css"


const Report = (props) => {
  // const{fname, lname, age, gender, mriImage}=props;
  console.log(props);

  const navigate = useNavigate();

  const exportPDF=()=>{
    const input=document.getElementById("pdfdata")
    html2canvas(input,{logging:true, letterRendering:1, useCORS:true}).then(canvas=>{
    const imgWidth=210;
    const imgHeight=canvas.height*imgWidth/canvas.width;
    const imgData=canvas.toDataURL("img/png");
    const pdf=new jsPDF('p','mm','a4');
    pdf.addImage(imgData,'PNG',0,0,imgWidth,imgHeight);
    pdf.save("report.pdf")
    })
    
  }
  
  return (
    // <div className='report'>
    //   <div className='pdf-data' id="pdfdata">
    //     <p>first name:{props.firstname}</p>
    //     <p>last name:{props.lastname}</p>
    //     <p>gender:{props.gender}</p>
    //     <p>age:{props.age}</p>
    //     {<img src={props.mriImage} alt="Mri scan"/>}
    //     <br></br>
    //     <br></br>
    //   </div>
    //   <div>
    //     <button onClick={()=>navigate(-1)}> &larr; Previous</button>
    //     <button onClick={()=>exportPDF()}>Download PDF</button>
    //   </div>
    // </div>
    <div className='report'>
      <div className='pdf-data' id="pdfdata">
        <h3 className='heading'>Laboratory Test Report</h3>
        <table>
        <tr>
          <td><b>Patient Name:</b></td>
          <td>
            <div className='patient-name'>
              <div>{props.firstname}</div>
              <div>{props.lastname}</div>
            </div>            
          </td>
        </tr>
        <tr>
          <td><b>Gender:</b></td>
          <td>{props.gender}</td>
          </tr>
          <tr>
          <td ><b>Age:</b></td>
          <td>{props.age}</td>
        </tr>
        <tr>
          <td><b>Medical Case:</b></td>
          <td>Detection for Brain tumor</td>
        </tr>      
        </table>            
        <h4>MRI Scan:</h4>
        {<img src={props.mriImage} alt="Mri scan"/>}
        <p>Test Results:</p>
      </div>
      
      <div className='flex-btn'>
        <button onClick={()=>navigate(-1)}> &larr; Previous</button>
        <button onClick={()=>exportPDF()}>Download PDF</button>
      </div>
      
    </div>

    

  )
}

export default Report