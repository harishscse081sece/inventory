// import Pagination from "./pagination";
// // Passing the props inside nested component is called as the prop drilling and this is not required for the project because this is complex
// const Footer_1 = (props) => {
//     const {currentPage,setCurrentPage} = props
//      return (
//       <Pagination currentPage = {currentPage} setCurrentPage = {setCurrentPage}/>
//     )
// }
// export default Footer_1;


import { useContext,useEffect } from "react"
import Pagination from "./pagination"
//Props Drilling:The component such as pagination is nested in Footer this is called prop drilling
const Footer_1=()=>{
    return(
        <Pagination/>
    )
}
export default Footer_1;