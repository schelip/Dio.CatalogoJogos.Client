const requestOptions = {
  method: 'GET',
  redirect: 'follow',
};

export const getPosterURL = async (name, year) => {
  const searchExp = `${name} ${year}`;
  const url = `https://imdb-api.com/en/API/SearchTitle/${process.env.REACT_APP_IMDB_KEY}/${searchExp}`;
  const responseJSON = await fetch(url, requestOptions).then((response) => response.json());
  let result;
  if (responseJSON.results) { result = responseJSON.results.find((r) => r.description.endsWith('Video Game)')); }
  if (result) return result.image; return undefined;
};
