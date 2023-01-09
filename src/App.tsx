import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Error from "./pages/Error/Error";
import Home from "./pages/Home/Home";
import Auth from "./pages/auth/Auth";
import Layout from "./pages/Layout/Layout";
import RequireAuth from "./pages/auth/RequireAuth";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { userActions } from "./store/reducers/userSlice";

function App() {
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       dispatch(userActions.autoLoginUser(user));
  //     } else {
  //       dispatch(userActions.setLoginStatus(false));
  //       dispatch(userActions.autoLoginUser(null));
  //     }
  //   });
  // }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* PUBLIC ROUTE ---------------------------->*/}
          <Route path="login" element={<Auth />} />
          {/*<---------------------------- PUBLIC ROUTE */}
          {/* USER ROUTE ---------------------------->*/}
          <Route element={<RequireAuth />}>
            <Route path="" element={<Home />} />
            <Route path="/home" element={<Home />} />
          </Route>
          {/*<---------------------------- USER ROUTE*/}
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
