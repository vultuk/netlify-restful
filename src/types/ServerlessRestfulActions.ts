import { ServerlessRestfulRequest, ServerlessRestfulResponse } from '.';
import Route from './ServerlessRestfulRoute';

export type ServerlessRestfulActions<Data = any, Body = any, Query = any> = {
  get?: Route<Data, Body, Query>;
  post?: Route<Data, Body, Query>;
  put?: Route<Data, Body, Query>;
  patch?: Route<Data, Body, Query>;
  delete?: Route<Data, Body, Query>;
};
