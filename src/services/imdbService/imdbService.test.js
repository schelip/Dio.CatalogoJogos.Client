import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { getPosterURL } from './index';

const testExp = 'Dark%20Souls%202011';
const url = `https://imdb-api.com/en/API/SearchTitle/${process.env.REACT_APP_IMDB_KEY}/${testExp}`;
const response = {
  searchType: 'Title',
  expression: 'Dark Souls 2011',
  results: [{
    id: 'tt2015348', resultType: 'Title', image: 'https://imdb-api.com/images/original/MV5BMzYxYWE3MWYtNTMzYS00NmIwLWI1ZjAtNDA5ZmI5Y2I0ZTY5XkEyXkFqcGdeQXVyMTg2NzgzMDE@._V1_Ratio0.7600_AL_.jpg', title: 'Dark Souls', description: '(2011 Video Game)',
  }, {
    id: 'tt2348796', resultType: 'Title', image: 'https://imdb-api.com/images/original/nopicture.jpg', title: 'Dark Night of the Soul', description: '(2011)',
  }, {
    id: 'tt2122649', resultType: 'Title', image: 'https://imdb-api.com/images/original/nopicture.jpg', title: 'Game One', description: '(2006– )',
  }, {
    id: 'tt2242687', resultType: 'Title', image: 'https://imdb-api.com/images/original/nopicture.jpg', title: 'The Angry Joe Show', description: '(2009– )',
  }, {
    id: 'tt6861110', resultType: 'Title', image: 'https://imdb-api.com/images/original/nopicture.jpg', title: 'The Tommy Wi-Show', description: '(2011– )',
  }, {
    id: 'tt8254012', resultType: 'Title', image: 'https://imdb-api.com/images/original/nopicture.jpg', title: 'Super Best Friends Play', description: '(2010– )',
  }],
  errorMessage: '',
};

const server = setupServer(
  rest.get(url, (req, res, ctx) => res(ctx.json(response))),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('returns url', async () => {
  const posterURL = await getPosterURL('Dark Souls', 2011);

  expect(posterURL).toStrictEqual(response.results[0].image);
});
