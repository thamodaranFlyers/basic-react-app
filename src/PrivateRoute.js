import { useNavigate } from "react-router-dom";

export const PrivateRoute = ({ children, ...rest }) => {
  const navigate = useNavigate();
  let auth = { token: true };
  return auth.token ? children : navigate("/login");
  //   return auth ? <Component /> : <Navigate to="/login" />
};
