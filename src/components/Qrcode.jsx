import { useState } from "react"

const Qrcode = () => {
  const [img,setimg]= useState("");
  const [load,setload]= useState(false);
  const [qrdata,setqrdata]= useState("");
  const [qrsize,setqrsize]= useState("");
  async function generateQR(){
    // setimg("Images/images (1).jfif")
    setload(true);
    try{
      const url=`https://api.qrserver.com/v1/create-qr-code/?size=${qrsize}x${qrsize}&data=${encodeURIComponent(qrdata)}`;
      setimg(url);
    }
    catch(error){
      console.error("Encounter a error ", error);
    }
    finally{
      setload(false);
    }
  }
  return (
    <div className="container">
       {load && <p>Please wait...</p>}
       {img && <img src={img} alt="" />}
        <div className="input">
      <label htmlFor="inputdata">Date for the Qrcode:</label>
      <input type="text" id="inputdata" className="input-field" onChange={(e)=>setqrdata(e.target.value)} placeholder="Enter your data for Qrcode"/>
      <label htmlFor="qrsize">Size of the Qrcode (e.g., 100,150):</label>
      <input type="text" id="qrsize" className="input-field" onChange={(e)=>setqrsize(e.target.value)} placeholder="Enter the size of Qrcode"/>
      </div>
      <div className="buttons">
      <button onClick={generateQR} disabled={load}>Generate Qrcode</button>
      <button>Download Qrcode</button>
      </div>
    </div>
  )
}

export default Qrcode
