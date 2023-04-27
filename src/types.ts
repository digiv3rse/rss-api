export type RssAppCredentials = {
  apiKey: string;
  apiSecret: string;
};

export type RssAppOptions = {
  host?: string;
  port?: string;
  protocol?: string;
};

export type CreateFeedOptions = {
  url: string;
};

export type RssAppApi = {
  host: string;
  protocol: string;
  basePath: string;
};

export type RssAppListOptions = {
  offset?: number;
  limit?: number;
};

export enum ERssAppRequestMethod {
  POST = 'POST',
  GET = 'GET',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export type MakeRequestOptions = {
  path: string;
  method: ERssAppRequestMethod;
  body?: any;
  params?: any;
};

export type RssAppFeedFeedItem = {
  title: string;
  url: string;
  description_text: string;
  description_html?: string;
  date_published: string;
  thumbnail: string;
};

export type RssAppFeed = {
  [x: string]: any;
  id: string;
  title: string;
  description: string;
  source_url: string;
  icon: {
    url: string;
    mimeType: string;
  };
  items: RssAppFeedFeedItem[];
};

export type RssAppFeedList = {
  total: number;
  offset: number;
  limit: number;
  data: RssAppFeed[];
};

export type RssAppErrorResponse = {
  message: string;
  statusCode: number;
  errors: {
    title: string;
    code: string;
  }[];
};

export type RssAppError = Error & { response?: RssAppErrorResponse; status?: number };
