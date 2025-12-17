// import { useEffect, useState } from "react";

// const UserDetails = (props) => {

// const{currentPage}=props

//   const [userData, setUserData] = useState({});
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true)
//       const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
//       const data = await response.json();
//       console.log(data);
//       setUserData(data);
//       setLoading(false);
//     };

//     fetchData();
//   }, [currentPage]);

//   return (
//     <div className="w-[300px] mx-auto bg-orange-100 flex flex-col p-3">
//       <h1 className="text-xl mb-2">UserDetails</h1>

//       {loading ? (
//         <p className="text-xl mb-2">Loading...</p>
//       ) : (
//         <p className="text-xl mb-2">{userData.name}</p>
//       )}
//     </div>
//   );
// };

// export default UserDetails;


import { useContext, useEffect, useState } from "react";
import GlobalContext from "../Contexts/GlobalContext";

const UserDetails = () => {

    const [userData, setUserData] = useState({});
    const [loading, setLoading] = useState(true);

    const { currentPage } = useContext(GlobalContext);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${currentPage}`);
            const data = await response.json();
            setLoading(false);
            console.log(data);
            setUserData(data);
        };
        fetchData();
    }, [currentPage]);

    return (
        <div className="w-[400px] mx-auto bg-orange-200 flex flex-col rounded-md shadow-lg items-left p-5">
            <h1 className="text-xl mb-2 font-bold">User Details</h1>

            {loading ? (
                <p className="text-xl mb-2">Loading...</p>
            ) : (
                <>
                    <p className="text-lg text-black"><strong>Name:</strong> {userData.name}</p>
                    <p className="text-lg text-black"><strong>Email:</strong> {userData.email}</p>
                    <p className="text-lg text-black"><strong>Phone:</strong> {userData.phone}</p>
                    <p className="text-lg text-black"><strong>Website:</strong> {userData.website}</p>
                    <p className="text-lg text-black">
                        <strong>Company:</strong> {userData.company?.name}
                    </p>
                </>
            )}
        </div>
    );
};

export default UserDetails;

