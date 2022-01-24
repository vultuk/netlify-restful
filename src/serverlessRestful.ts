import { Event } from '@netlify/functions/dist/function/event';
import { netlifyData } from './netlifyData';
import {
  NetlifyDataResponse,
  ServerlessRestfulActions,
  ServerlessRestfulRequest,
  ServerlessRestfulResponse,
} from './types';

export const serverlessRestful = (event: Event) => async <Body = any, Query = any>(
  actions: ServerlessRestfulActions<Body, Query>,
): Promise<NetlifyDataResponse> => {
  const parsedRequestObject: ServerlessRestfulRequest<Body, Query> = {
    path: event.path,
    query: (event.queryStringParameters as unknown) as Query,
    body: (JSON.parse(event.body || '{}') as unknown) as Body,
  };

  try {
    let ranAction: ServerlessRestfulResponse;

    switch (event.httpMethod) {
      case 'GET':
        if (!actions.get) throw new Error('Page Not Found');
        ranAction = await actions.get(parsedRequestObject);
        break;
      case 'POST':
        if (!actions.post) throw new Error('Page Not Found');
        ranAction = await actions.post(parsedRequestObject);
        break;
      case 'PUT':
        if (!actions.put) throw new Error('Page Not Found');
        ranAction = await actions.put(parsedRequestObject);
        break;
      case 'PATCH':
        if (!actions.patch) throw new Error('Page Not Found');
        ranAction = await actions.patch(parsedRequestObject);
        break;
      case 'DELETE':
        if (!actions.delete) throw new Error('Page Not Found');
        ranAction = await actions.delete(parsedRequestObject);
        break;
      default:
        ranAction = {
          status: 404,
          data: {
            success: false,
            message: 'Page Not Found',
          },
        };
        break;
    }

    return netlifyData(ranAction.data, ranAction.status ?? 200);
  } catch (e) {
    return netlifyData(
      {
        success: false,
        message: 'Page Not Found',
      },
      404,
    );
  }
};
