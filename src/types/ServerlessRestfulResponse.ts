export type ServerlessRestfulResponse<Data = any> = {
  status?: number;
  data: Data | { success: false; message: string };
};
