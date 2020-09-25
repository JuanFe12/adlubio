import { envApi } from "../interfaces/env.interface";

export const envConfig: envApi = {
  nodeEnv: process.env.NODE_ENV,
  publicUrl: process.env.PUBLIC_URL,
  enviroment: process.env.REACT_APP_ENVIROMENT,
  apiUrl: process.env.REACT_APP_API_URL,
  apiUrlGraphql: process.env.REACT_APP_API_GRAPHQL_URL,
};
