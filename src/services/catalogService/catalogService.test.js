import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { getGame } from './catalogService';

const testGuid = 'e7d11d89-e2f1-4b3e-a6a5-10525f58f18e';
const url = `${process.env.REACT_APP_API}jogos/${testGuid}`;
const response = { test: 'testing' };

const server = setupServer(
  rest.get(url, (req, res, ctx) => res(ctx.json(response))),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('transforms json response into object', async () => {
  const game = await getGame(testGuid);

  expect(game).toStrictEqual(response);
});
