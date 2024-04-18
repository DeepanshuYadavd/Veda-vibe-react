import { Outlet, Navigate } from "react-router-dom";

const RouteToSpecificUser = (admin) => {
  if (admin) {
    let adminAuth = true;
    return adminAuth ? <Outlet /> : <Navigate to="/login" />;
  } else {
    let userAuth = true;
    return userAuth ? <Outlet /> : <Navigate to="/login" />;
  }
};

export default RouteToSpecificUser;
