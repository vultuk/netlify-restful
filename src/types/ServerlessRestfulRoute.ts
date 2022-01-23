import { ServerlessRestfulRequest, ServerlessRestfulResponse } from '.';

type Route<Data = any, Body = any, Query = any> = (
  req: ServerlessRestfulRequest<Body, Query>,
) => Promise<ServerlessRestfulResponse<Data>>;

export default Route;
