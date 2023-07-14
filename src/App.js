import { useEffect, useState } from "react";
import "./App.css";
import { Footer, LoginButton } from "./Components";
import LoginSignupButn from "./Components/login_Button";
import AppRoutes from "./Utility/Routers";
import axios from "axios";
import { AllData } from "./constants/ApiList";

function App() {
  const [data, setData] = useState(null);


  useEffect(() => {
    const API = AllData;
    axios
      .get(API, data)
      .then((res) => setData(res.data[0]))
      .catch((err) => console.log(err));
  }, []);
  // console.log(data);



  return (
    <div className="App">
      {/* <div className="LoginPos"><LoginSignupButn/></div>  */}
      {/* <div className="LoginPos"><LoginButton/></div>  */}
      {/* {name && <p className="welcomeMsg"><span>Welcome to The siren {localStorage.getItem("name")}</span></p>}   */}
     
  {/* {data?
     (<>   */}
     
     <AppRoutes />
      <Footer />
      {/* </>):
      <div className="loadCont"><h1 className="loadData">Loading...</h1></div>
      
      
     }  */}

   
  
    </div>
  );
}

export default App;
