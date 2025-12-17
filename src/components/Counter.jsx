// //normal varaible cannot change immediately in dom
// import { useState } from "react";

// const Counter =() =>{
//     // let count=0;
//      // Normal variable vs state variable
//     // React will re-render the component when the state variable is changed
//     // Hooks are like a utility function written inside react
//     // Functions starts with use is a called a hook
//     // useState will return an array with 2 values
//     // 1.State variable 
//     // 2.Function to update the state variable
//     const [count,setCount]=useState(0);
//     const increment =() =>{
//         console.log("Increment button clicked");
//         setCount(count+1);
//     }

//     const decrement = () =>{
//         console.log("Decrement button clicked");
//         setCount(count-1);
//     }
//     return (
//         <div className="w-[400px] p-4 mx-auto m-3 bg-gray-300 rounded-[30px] shadow-lg flex flex-col items-center justify-center">
//             <h1 className="text-xl mb-2 font-bold">Counter</h1>
//             <p className="text-4xl mb-2 mt-3">{count}</p>

//             <div className="flex gap-2 m-4 mb-5">
//             <button className="bg-red-500 p-3 pr-4 pl-4 rounded-[15px]" onClick={decrement}>decrement</button>
//             <button className="bg-green-500 p-3 pr-4 pl-4 rounded-[15px]" onClick={increment}>Increment</button>
//             </div>

//         </div>
//     )
// }

// export default Counter;

//normal varaible cannot change immediately in dom
// import {useEffect, useState } from "react";

// const Counter =() =>{
//     // useeffect is a hook used to handle side effects in react
//     // Arguments: 
//     // 1.Callback 2.Dependency array
//     // 1.empty dependencey arr: runs only once after the component is mounted
//     // 2.Non-Empty dependency array: runs after the componenrt is mounted
//     // and when the dependency array changes
//     // 3.No dependency array: Runs after the component is mounted and whenever any state variable changes

    

//     const [count,setCount]=useState(0);
    
//     useEffect(() => {
//         console.log('Outside useEffect')
//     },[count]);

//     const increment =() =>{
//         console.log("Increment button clicked");
//         setCount(count+1);
//     }

//     const decrement = () =>{
//         console.log("Decrement button clicked");
//         setCount(count-1);
//     }
//     return (
//         <div className="w-[400px] p-4 mx-auto m-3 bg-gray-300 rounded-[30px] shadow-lg flex flex-col items-center justify-center">
//             <h1 className="text-xl mb-2 font-bold">Counter</h1>
//             <p className="text-4xl mb-2 mt-3">{count}</p>

//             <div className="flex gap-2 m-4 mb-5">
//             <button className="bg-red-500 p-3 pr-4 pl-4 rounded-[15px]" onClick={decrement}>decrement</button>
//             <button className="bg-green-500 p-3 pr-4 pl-4 rounded-[15px]" onClick={increment}>Increment</button>
//             </div>

//         </div>
//     )
// }

// export default Counter;
