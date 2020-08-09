const getDataFromApi = (page) => {
  return fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
    .then((response) => response.json())
    .then((data) => {
      return data.results;
    });
};

const getDataByNameFromApi = (name) => {
  return fetch(`https://rickandmortyapi.com/api/character/?name=${name}`)
    .then((response) => response.json())
    .then((data) => {
      return data.results;
    });
};

const getDataByIdFromApi = (id) => {
  return fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => response.json())
    .then((data) => data);
};

export default {
  all: getDataFromApi,
  name: getDataByNameFromApi,
  id: getDataByIdFromApi,
};
