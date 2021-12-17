export const getGames = async (page, quant) => {
  const url = `${process.env.REACT_APP_API}jogos?pagina=${page}&quantidade=${quant}`;
  return fetch(url).then((response) => response.json());
};

export const getGame = (uuid) => {
  const url = `${process.env.REACT_APP_API}jogos/${uuid}`;
  return fetch(url).then((response) => response.json());
};

export const getProducer = (uuid) => {
  const url = `${process.env.REACT_APP_API}produtoras/${uuid}`;
  return fetch(url).then((response) => response.json());
};
