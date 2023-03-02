export const fetchOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    // TODO what is this?
    'Access-Control-Request-Headers': '*',
    'api-key': process.env.MONGODB_API_KEY as string,
  },
};
export const fetchBody = {
  dataSource: 'Cluster0',
  database: 'product_feedback',
  collection: 'feedback',
};
export const endpoint = `${process.env.MONGODB_URL_ENDPOINT}/action`;
