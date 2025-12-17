// import React from 'react';
// const App = () =>{
//   // jsx - javascript XML -> combine html and javascript
//   // class instead -> className
//   // JSX -> Should have one parent element
//   // react everything is component -> functional and class component 
//   let  firstname = "smith"
//   let  secondname = "john"
//   let fullname
//   return (
//     <React.Fragment>
//     <h1>Student Details</h1>
//   <div className = "bg-green-500">
//     firstname : {firstname} <br />
//     secondname :{secondname} <br />
//     fullname : {firstname} {secondname} 
//     </div>
//       </React.Fragment>

//   )
// }

// export default App 


// import React from 'react';
// import StudentCard from './components/StudentCard';
// const App = () =>{
//   // jsx - javascript XML -> combine html and javascript
//   // class instead -> className
//   // JSX -> Should have one parent element
//   // react everything is component -> functional and class component 
//   let  firstname = "smith"
//   let  secondname = "john"
//   let fullname
//   return (
//     <>
    
//     <h1>Student Details</h1>
//    <StudentCard fname = {firstname} lname = {secondname} />
//    <StudentCard fname = {firstname} lname = {secondname} />
//     </>

//   )
// }

// export default App 

// import {useState,useEffect} from 'react';
// import StudentCard from "./components/StudentCard";
// import Counter from "./components/Counter";
// import UserDetails from "./components/UserDetails";
// import Pagination from "./components/pagination";
// import Footer_1 from './components/Footer_1';


// const App = () => {
//   // JSX -> Javascript XML
//   // let firstName = "John";
//   // let lastName = "Smith";
//   const[currentPage,setCurrentPage]=useState(()=>{
//     const page=localStorage.getItem("page");
//     return page?Number(page):1
//   });
//   return (
//     <>
//       {/* <h1 className="text-4xl mb-2">Students Details</h1>
//       <StudentCard fname={firstName} lname={lastName} age={20}/> */}
//       {/* {StudentCard({fname:"Tony",lname:"Stark",age:30})} */}
//       {/* {Counter() */}
//       {/* <Counter/> */}
//       <UserDetails currentPage = {currentPage}/>
//       {/* <Pagination currentPage = {currentPage} setCurrentPage = {setCurrentPage}/> */}
//       <Footer_1 currentPage = {currentPage} setCurrentPage = {setCurrentPage}/> 
//     </>
//   )
// }

// export default App;


// import React from "react";
// import Navbar from "./components/Navbar";
// import ProductCard from "./components/ProductCard";
// import Footer from "./components/Footer";

// export default function App() {
//   return (
//     <div className="min-h-screen bg-blue-950 flex flex-col">
//       <Navbar />

//       <main className="flex-grow flex justify-center items-center p-6">
//         <ProductCard />
//       </main>

//       <Footer />
//     </div>
//   );
// }

// Form Handling 
// Control components and uncontrol conponents

import {useState,useEffect} from 'react';
// import Counter from "./components/Counter";
import UserDetails from "./components/UserDetails";
import Pagination from "./components/pagination";
import Footer_1 from './components/Footer_1';
import { GlobalProvider } from './Contexts/GlobalContext';
import LoginForm from './components/LoginForm';
import ProductCard from './components/ProductCard';
import ProductList from './components/ProductList';
import Header from './components/Header';



const App = () => {
  // JSX -> Javascript XML
  // let firstName = "John";
  // let lastName = "Smith";
  
  return (
    <>
      {/* <h1 className="text-4xl mb-2">Students Details</h1>
      <StudentCard fname={firstName} lname={lastName} age={20}/> */}
      {/* {StudentCard({fname:"Tony",lname:"Stark",age:30})} */}
      {/* {Counter() */}
      {/* <Counter/> */}
      {/* <UserDetails currentPage = {currentPage}/>
      {/* <Pagination currentPage = {currentPage} setCurrentPage = {setCurrentPage}/> */}
      {/* <Footer_1 currentPage = {currentPage} setCurrentPage = {setCurrentPage}/>  */} 
      {/* <Header/> */}
      <GlobalProvider>
        <UserDetails/>
        <Footer_1/>
      </GlobalProvider>
      <LoginForm/>
      
      
      <ProductList/>
    </>
  )
}
export default App;