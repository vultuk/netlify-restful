import { ServerlessRestfulRequest, ServerlessRestfulResponse } from '.';

export type ServerlessRestfulActions<Body = any, Query = any> = {
  get?: <Data = any>(req: ServerlessRestfulRequest<Body, Query>) => Promise<ServerlessRestfulResponse<Data>>;
  post?: <Data = any>(req: ServerlessRestfulRequest<Body, Query>) => Promise<ServerlessRestfulResponse<Data>>;
  put?: <Data = any>(req: ServerlessRestfulRequest<Body, Query>) => Promise<ServerlessRestfulResponse<Data>>;
  patch?: <Data = any>(req: ServerlessRestfulRequest<Body, Query>) => Promise<ServerlessRestfulResponse<Data>>;
  delete?: <Data = any>(req: ServerlessRestfulRequest<Body, Query>) => Promise<ServerlessRestfulResponse<Data>>;
};
