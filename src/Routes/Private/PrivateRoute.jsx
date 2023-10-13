import React, { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const locaton = useLocation()
  console.log(locaton.pathname);
  if (loading) {
    return (
      <div className="flex justify-center mt-80">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate state={locaton.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;
