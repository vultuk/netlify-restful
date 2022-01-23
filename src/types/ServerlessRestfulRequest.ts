export type ServerlessRestfulRequest<Body = any, Query = any> = {
  path: string;
  query: Query;
  body: Body;
};
