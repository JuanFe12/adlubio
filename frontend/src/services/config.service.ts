import axios from "axios";
import { envConfig } from "../constants/enviroment.contants";

export interface CallFetchInterface {
  baseUrl?: string;
  url: string;
  method: any;
  data?: any;
  headers?: any;
}

const BASEURL: string = envConfig?.apiUrl
  ? envConfig.apiUrl
  : "http://fe2128070a25.ngrok.io/";

const headers = {
  "Content-Type": "application/json",
};

const callFetch = async ({
  baseUrl = BASEURL,
  url,
  method,
  data = {},
  headers,
}: CallFetchInterface): Promise<any> =>
  axios({
    method,
    url: baseUrl + url,
    data,
    headers,
  });

export default callFetch;
