// import {userState, useState} from "react";

// const Pagination = () => {
//     const [currentPage,setCurrentPage] = useState(1);
//  const handlePrevious =() => {
//     setCurrentPage(currentPage - 1)
//  }
//  const handleNext = () => {
//     setCurrentPage(currentPage + 1)
//  }
// }


// return (
//     <div className = 'w-p[300px] mx-auto bg-yellow-50 m-4 mx-auto p-4 ></div>
// )

// const Pagination=(props)=>{

//     const {currentPage,setCurrentPage}=props;
    

//     const handlePrev=()=>{
//         setCurrentPage(currentPage - 1);
//          localStorage.setItem('page',currentPage - 1);
//         // setCurrentPage(currentPage-1);
//     }

//     const handleNext=()=>{
//         setCurrentPage(currentPage + 1);
//          localStorag.setItem('page',currentPage + 1)
//         // setCurrentPage(currentPage+1)
//     }

//     return(
//         <div className="w-[300px] p-4 mx-auto m-3 rounded-xl shadow-lg bg-yellow-300 flex flex-row items-center">
//             <button className=" bg-blue-400 hover:bg-blue-500 px-2 py-2 w-[100px] m-2 rounded-lg " onClick={handlePrev}>{"<"}</button>
//             <p className='text-2xl'>{currentPage}</p>
//             <button className=" bg-blue-400 hover:bg-blue-500 px-2 py-2 w-[100px] m-2 rounded-lg " onClick={handleNext}>{">"}</button>
//         </div>
//     )
// }

// export default Pagination;


// const Pagination=(props)=>{

//     const {currentPage,setCurrentPage}=props;
    

//     const handlePrev=()=>{
//         setCurrentPage(currentPage - 1);
//          sessionStorage.setItem('page',currentPage - 1);
//         // setCurrentPage(currentPage-1);
//     }

//     const handleNext=()=>{
//         setCurrentPage(currentPage + 1);
//          sessionStorage.setItem('page',currentPage + 1)
//         // setCurrentPage(currentPage+1)
//     }

//     return(
//         <div className="w-[300px] p-4 mx-auto m-3 rounded-xl shadow-lg bg-yellow-300 flex flex-row items-center">
//             <button className=" bg-blue-400 hover:bg-blue-500 px-2 py-2 w-[100px] m-2 rounded-lg " onClick={handlePrev}>{"<"}</button>
//             <p className='text-2xl'>{currentPage}</p>
//             <button className=" bg-blue-400 hover:bg-blue-500 px-2 py-2 w-[100px] m-2 rounded-lg " onClick={handleNext}>{">"}</button>
//         </div>
//     )
// }

// export default Pagination;

import { useContext } from "react"
import { useState } from "react"
import GlobalContext from "../Contexts/GlobalContext"

const Pagination=()=>{
    const{currentPage,setCurrentPage}=useContext(GlobalContext)
    const handlePrevious=()=>{
        setCurrentPage(currentPage-1)
        localStorage.setItem('page',currentPage-1);
    }
    const handleNext=()=>{
        setCurrentPage(currentPage+1)
        localStorage.setItem('page',currentPage+1)
    }
    return(
         <div className="w-[300px] m-4 mx-auto p-4 rounded-md bg-yellow-50 shadow-lg flex flex-row gap-2 justify-center">
                <button className="bg-red-400 text-white p-5 rounded-full m-2 " onClick={handlePrevious} >{"<"}</button><br/>
                <div className="text-xl bg-yellow-300 rounded-full p-5 m-2 w-full text-center">{currentPage}</div>
                <button className="bg-red-400 text-white p-5 rounded-full m-2" onClick={handleNext} >{">"}</button><br/>
        </div>
    )
}
export default Pagination


