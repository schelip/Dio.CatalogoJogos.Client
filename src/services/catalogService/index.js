export const getGames = async (page, quant) => {
  const url = `${process.env.REACT_APP_API}jogos?pagina=${page}&quantidade=${quant}`;
  return fetch(url).then((response) => response.json());
};

export const getGame = (uuid) => {
  const url = `${process.env.REACT_APP_API}jogos/${uuid}`;
  return fetch(url).then((response) => response.json());
};

export const getProducers = (page, quant) => {
  const url = `${process.env.REACT_APP_API}produtoras?pagina=${page}&quantidade=${quant}`;
  return fetch(url).then((response) => response.json());
};

export const getProducer = (uuid) => {
  const url = `${process.env.REACT_APP_API}produtoras/${uuid}`;
  return fetch(url).then((response) => response.json());
};

export const authenticate = async (email, password) => {
  const userData = {
    email,
    senha: password,
  };
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  };
  const url = `${process.env.REACT_APP_API}usuarios/login`;
  return fetch(url, options).then((response) => response.json());
};

export const patchUserGames = (token, userId, gameId) => {
  const options = {
    method: 'PATCH',
    withCredentials: true,
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      accept: 'text/plain',
      Authorization: `Bearer ${token}`,
    },
  };
  const url = `${process.env.REACT_APP_API}usuarios/${userId}/jogos/${gameId}`;
  return fetch(url, options).then((response) => response.json());
};
