import { ServerlessRestfulRequest, ServerlessRestfulResponse } from '.';

export type ServerlessRestfulActions<Data = any, Body = any, Query = any> = {
  get?: (req: ServerlessRestfulRequest<Body, Query>) => Promise<ServerlessRestfulResponse<Data>>;
  post?: (req: ServerlessRestfulRequest<Body, Query>) => Promise<ServerlessRestfulResponse<Data>>;
  put?: (req: ServerlessRestfulRequest<Body, Query>) => Promise<ServerlessRestfulResponse<Data>>;
  patch?: (req: ServerlessRestfulRequest<Body, Query>) => Promise<ServerlessRestfulResponse<Data>>;
  delete?: (req: ServerlessRestfulRequest<Body, Query>) => Promise<ServerlessRestfulResponse<Data>>;
};
