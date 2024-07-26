import LearnComponents from "./components/LearnComponents"
import Qrcode from "./components/Qrcode";
import UserProfile from "./components/UserProfile";


function App() {
const handleclick = () =>{
  alert(" Thanks for clicked me ");
}
  return (
    <>
    {/* <h1>FrontEnd</h1> */}
    {/* <LearnComponents handleclick={handleclick} /> */}
    {/* <UserProfile /> */}
    <Qrcode />
    </>
    
  )
}

export default App
