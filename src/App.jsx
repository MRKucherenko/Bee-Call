import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { Layout } from "./Components/Layout/Layout";
import { Cabinet } from "./Pages/Cabinet/Cabinet";
import { PhoneBook } from "./Pages/PhoneBook/PhoneBook";
import { Register } from "./Pages/Register/Register";
import { Login } from "./Pages/Login/Login";
import { PrivetRoute } from "./Components/CustomRoute/PrivetRoute";
import { RestrictedRoute } from "./Components/CustomRoute/ResrictedRoute";
import { useDispatch } from "react-redux";
import { useAuth } from "./Components/Hooks/hooks";
import { useEffect } from "react";
import { curentUser } from "./redux/auth/authOperations";

export const App = () => {
  const dispatch = useDispatch();
  const { isCurentUser } = useAuth();

  useEffect(() => {
    dispatch(curentUser());
  }, [dispatch]);

  console.log('isCurentUser', isCurentUser)

  return isCurentUser ? (
    <h1>Loading...</h1>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route
          path="/cabinet"
          element={<PrivetRoute reDirectTo={"/"} component={<Cabinet />} />}
        />
        <Route
          path="/phoneBook"
          element={<PrivetRoute reDirectTo={"/"} component={<PhoneBook />} />}
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute reDirectTo={"/cabinet"} component={<Register />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute reDirectTo={"/cabinet"} component={<Login />} />
          }
        />
      </Route>
    </Routes>
  );
};
