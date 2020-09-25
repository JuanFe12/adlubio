import { useState } from "react";
/*Redux */
import { useDispatch, useSelector } from "react-redux";
import { registerAction } from "../../../flux/actions/authentication/register.action";

export const useRegister = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const startRegisterDispacht = (user: any) => dispatch(registerAction(user));

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
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
    startRegisterDispacht(user);
  };

  return {
    user,
    setUser,
    handleChange,
    sendData,
  };
};
