import axios from "axios";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, useNavigate } from "react-router-dom";
import BuyPass from "./Components/BuyPass";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Main from "./Components/Main";
import { isLoginFunc } from "./data/dataSlice";


function App() {
  const [cookies, setCookies] = useCookies('user')
  const dispatch = useDispatch();
  // encodeURI
  useEffect(() => {
    cookies.user && dispatch(isLoginFunc(true));
    if(cookies.user){
      axios.post('http://localhost:5111/api/check-skin', {cookies}).then(response => {
          setCookies('user', {...cookies.user.user_data, decoded_skin: response.data},{encode: true});
          console.log({...cookies.user.user_data, decoded_skin: response.data});
        })
    }
    console.log(cookies);

  }, [])

  return (
    <div className="App">

      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/buy-pass" element={<BuyPass />} />
        <Route path="/home" element={<Home />}/>
        <Route path="*" element={<div>Page Not Found - 404</div>} /> 
      </Routes>   

      {/* <Footer /> */}
    </div>
  );
}

export default App;
