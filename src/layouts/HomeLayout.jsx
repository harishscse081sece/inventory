import { Outlet } from "react-router";
import Header from "../components/Header";

const HomeLayout = () => {
  return (
    <>
      <Header />
     <Outlet />
      {/* <Outlet /> */}
    </>
  );
};

export default HomeLayout;
