import { useState } from "react";
/*Redux */
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../../flux/actions/authentication/login.action";

export const useLogin = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const startLoginDispacht = async (user: any) =>
    await dispatch(loginAction(user));

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const sendData = async () => {
    console.log(user);
    startLoginDispacht(user);
  };

  return {
    user,
    setUser,
    handleChange,
    sendData,
  };
};
