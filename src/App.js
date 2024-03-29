import { useRef, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Chat } from "./pages/Chat/Chat";
import { Begin } from "./pages/Dashboard/Begin";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import Home from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { OpenChat } from "./pages/OpenChat/OpenChat";
import { Register } from "./pages/Register/Register";
import { User } from "./pages/User/User";


export default function App() {
   const [begin,setBegin] = useState(true)
   /*Send a request to see wether 
   the user is a beginer or not.
   preferably use axios.*/
  let dashboard = useRef(null)
  dashboard = (begin)? <Begin setBegin={setBegin}/> :<Dashboard/>
  console.log("render")
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/dashboard" element={dashboard}/>
        <Route path="/chat" element={<Chat />}/>
        <Route path="/openchat" element={<OpenChat />}/>
        <Route path="/user" element={<User />}/>
      </Routes>
    </BrowserRouter>
  );
}