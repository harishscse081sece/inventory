import { useState,useRef } from "react"
import { useNavigate } from "react-router";
import AdminPage from "./AdminPage";
import { toast } from "react-toastify";
import axios from "axios";

const LoginForm=()=>{
    const [username,setuserName]=useState('');
    const [password,setPassword]=useState('');
    const [role,setRole]=useState('');
    const navigate= useNavigate()
    const passwordRef=useRef('')
    
    const handleNameChange=(e)=>{
        setuserName(e.target.value)
    }
    
    const handlePasswordChange=(e)=>{
        setPassword(e.target.value)
    }
    const handleRoleChange=(e)=>{
        setRole(e.target.value)
    }
    
    const handleSubmit= async (e)=>{
        e.preventDefault();
        console.log(username,passwordRef.current.value)
        try {
            const {data} = await axios.post("https://vite-backend-1sq4.onrender.com/auth/login",{
                email:username,
                password:passwordRef.current.value
            })
            console.log("response =>",data)
            toast.success(data.message);
            sessionStorage.setItem("token",data.token);
            sessionStorage.setItem('isLoggedIn', 'true');
            navigate('/products');
        } catch (error) {
            // Fallback to hardcoded credentials
         if (username === "abc" && passwordRef.current.value === "admin" && role === "user") {
      toast.success("Login Successful");
      sessionStorage.setItem("isLoggedIn", "true");
      sessionStorage.setItem("role", "user");
      navigate("/");
    } else if (username === "admin" && passwordRef.current.value === "admin" && role === "admin") {
      toast.success("Login Successful to admin");
      sessionStorage.setItem("isLoggedIn", "true");
      sessionStorage.setItem("role", "admin");
      navigate("/AdminPage");
    } else {
      toast.error("Invalid Credentials");
    }
        }
    }


    console.log(username)
    console.log(password)
    return(
        <div className="w-[400px]  shadow-xl mt-50 rounded-xl px-70 py-20 flex justify-center bg-white mx-auto">    
            <form className="flex flex-col mt-1">
                <h1 className="text-center text-2xl mt-1 mb-5 font-bold">LOGIN</h1>
                <input type="text" id="email" name="E-MAIL" placeholder="Username" value={username} className=" bg-gray-200 border-2 mt-5 text-lg rounded-lg pl-1 px-30 py-5 w-full my-2 " onChange={handleNameChange}/>
                <input type="password" id="pass"name="PASSWORD" placeholder="Password" value={password} className=" bg-gray-200 border-2 mt-5 text-black rounded-lg px-40 py-5 w-full my-2 "onChange={handlePasswordChange} ref={passwordRef}/>
                <input type="text" id="role" name="Role" placeholder="Role" value={role} className=" bg-gray-200 border-2 mt-5 text-lg rounded-lg pl-1 px-30 py-5 w-full my-2 " onChange={handleRoleChange}/>
                <button className="bg-blue-500  hover:bg-blue-300 text-white mt-10 mb-2 p-2 rounded-full" onClick={handleSubmit}>Login</button>
            </form>
        </div>
    )
}
export default LoginForm;