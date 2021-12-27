import { rest } from "msw";

const todos = [
  {
    id: `1`,
    title: `coil 1 `,
  },
  {
    id: `2`,
    title: `coil 2 `,
  },
  {
    id: `3`,
    title: `coil 3 `,
  },
  {
    id: `4`,
    title: `coil 4 `,
  },
  {
    id: `5`,
    title: `coil 5 `,
  },
];

export const handlers = [
  rest.post("http://localhost:3000/api/todo", async (req, res, ctx) => {
    const { todo } = req.body;
    console.log(JSON.stringify(todo));
    todos.push(todo);
    return res(ctx.json(todos));
  }),
  rest.get("http://localhost:3000/api/todos", async (req, res, ctx) => {
    return res(ctx.json(todos));
  }),
  // SWR Pagination Example
  rest.get("http://localhost:3000/api/users", async (req, res, ctx) => {
    const pageIndex = req.url.searchParams.get("page");
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
      ])
    );
  }),
  // React Query Pagination Example
  rest.get("http://localhost:3000/api/projects", async (req, res, ctx) => {
    const pageIndex = req.url.searchParams.get("page");
    return res(
      ctx.json({
        projects: [
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
        ],
        hasMore: pageIndex < 4,
        nextCursor: pageIndex < 4 ? parseInt(pageIndex) + 1 : undefined,
      })
    );
  }),
  rest.get("http://localhost:3000/api/user/:userId", async (req, res, ctx) => {
    const { userId } = req.params;
    return res(
      ctx.json({
        name: `coil (${userId})`,
      })
    );
  }),
];
