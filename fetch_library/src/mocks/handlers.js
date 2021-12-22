import { rest } from 'msw';

export const handlers = [
  rest.get('http://localhost:3000/api/users', async (req, res, ctx) => {
    const pageIndex = req.url.searchParams.get('page');
    return res(
      ctx.json([
        {
          id: `1 ${pageIndex} `,
          name: `coil 1 (${pageIndex})`,
        },
        {
          id: `2 ${pageIndex} `,
          name: `coil 2 (${pageIndex})`,
        },
        {
          id: `3 ${pageIndex} `,
          name: `coil 3 (${pageIndex})`,
        },
        {
          id: `4 ${pageIndex} `,
          name: `coil 4 (${pageIndex})`,
        },
        {
          id: `5 ${pageIndex} `,
          name: `coil 5 (${pageIndex})`,
        },
        {
          id: `6 ${pageIndex} `,
          name: `coil 6 (${pageIndex})`,
        },
        {
          id: `7 ${pageIndex} `,
          name: `coil 7 (${pageIndex})`,
        },
        {
          id: `8 ${pageIndex} `,
          name: `coil 8 (${pageIndex})`,
        },
        {
          id: `9 ${pageIndex} `,
          name: `coil 9 (${pageIndex})`,
        },
        {
          id: `10 ${pageIndex} `,
          name: `coil 10 (${pageIndex})`,
        },
      ])
    );
  }),
  rest.get('http://localhost:3000/api/user/:userId', async (req, res, ctx) => {
    const { userId } = req.params;
    return res(
      ctx.json({
        name: `coil (${userId})`,
      })
    );
  }),
];
