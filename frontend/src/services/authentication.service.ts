import callFetch, { CallFetchInterface } from "./config.service";
import { UserInteface, LoginInterface } from "../interfaces/user.interface";

const BASEURL: string = "http://localhost:4848/";

const headers = {
  "Content-Type": "application/json",
};

export const authenticationRegister = (user: UserInteface): Promise<any> => {
  const rsp = callFetch({
    baseUrl: BASEURL,
    url: "user",
    method: "POST",
    data: user,
    headers,
  })
    .then((result) => {
      console.log(result);
      return result;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
  return rsp;
  console.log(rsp);
};
