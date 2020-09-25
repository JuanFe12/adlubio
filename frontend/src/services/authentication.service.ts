import callFetch, { CallFetchInterface } from "./config.service";
import { UserInteface, LoginInterface } from "../interfaces/user.interface";

export const authenticationRegister = (user: UserInteface): Promise<any> => {
  const rsp = callFetch({
    url: "user",
    method: "POST",
    data: user,
  })
    .then((result) => {
      console.log(result);
      const data = result.data;
      return data;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
  return rsp;
  console.log(rsp);
};

export const authenticationLogin = (user: LoginInterface): Promise<any> => {
  const rsp = callFetch({
    url: "login",
    method: "POST",
    data: user,
  })
    .then((result) => {
      return result.data;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
  return rsp;
  console.log(rsp);
};
