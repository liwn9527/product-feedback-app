import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // TODO what is this?
        'Access-Control-Request-Headers': '*',
        'api-key': process.env.MONGODB_API_KEY as string,
      },
    };
    const fetchBody = {
      dataSource: 'Cluster0',
      database: 'product_feedback',
      collection: 'feedback',
    };
    const endpoint = `${process.env.MONGODB_URL_ENDPOINT}/action`;
    let resJson;

    switch (req.method) {
      // GET
      default:
        const { s, o, c } = req.query;
        const pipeline: any[] = [
          { $sort: { [s as string]: o === 'desc' ? -1 : 1 } },
          {
            $project: {
              commentsCount: {
                $size: {
                  $ifNull: ['$comments', []],
                },
              },
              id: 1,
              title: 1,
              description: 1,
              category: 1,
              upvotes: 1,
              status: 1,
              createAt: 1,
              name: 1,
              username: 1,
              avatar: 1,
              _id: 0,
            },
          },
        ];

        if (c !== 'All') {
          pipeline.unshift({ $match: { category: c } });
        }

        resJson = await fetch(`${endpoint}/aggregate`, {
          ...fetchOptions,
          body: JSON.stringify({
            ...fetchBody,
            pipeline,
          }),
        });
    }

    const statusCode = resJson.status;

    if (!resJson.ok) {
      if (statusCode === 404) throw { statusCode };

      const resData = await resJson.json();

      throw { statusCode, message: resData.error };
    }

    const resData = await resJson.json();

    res.status(200).send(resData.documents);
  } catch (error) {
    const { statusCode = 500, message } = error as { statusCode?: number; message?: string };

    res.status(statusCode).send(message);
  }
}
