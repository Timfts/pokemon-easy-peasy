import React from "react";
import useAuthRoute from "./auth-route.hook";

const AuthRoute = () => {
  const [value] = useAuthRoute();
  return <p>authRoute</p>;
};


export default AuthRoute
