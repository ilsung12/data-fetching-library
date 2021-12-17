import { rest } from 'msw';

export const handlers = [
  rest.get('http://localhost:3000/api/user/:userId', async (req, res, ctx) => {
    const { userId } = req.params;
    return res(
      ctx.json({
        name: `coil (${userId})`,
      })
    );
  }),
];
