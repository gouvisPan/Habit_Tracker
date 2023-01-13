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
import { authActions } from "./store/reducers/authSlice";
import { normalizeUser } from "./helpers/normalizeUser";
import Profile from "./pages/Profile/Profile";
import { habitActions } from "./store/reducers/habitSlice";
import { logoutUser } from "./store/actions/auth-actions";

function App() {
  const dispatch = useAppDispatch();
  // dispatch(habitActions.clearHabits());
  dispatch(logoutUser());

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(authActions.autoLoginUser());
      } else {
        dispatch(authActions.setLoginStatus(false));
        dispatch(userActions.autoLoginUser(null));
      }
    });
  }, [dispatch]);

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
            <Route path="/profile" element={<Profile />} />
          </Route>
          {/*<---------------------------- USER ROUTE*/}
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
