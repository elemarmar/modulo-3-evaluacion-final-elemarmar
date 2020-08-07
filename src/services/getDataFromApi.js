const getDataFromApi = () => {
    return fetch('https://rickandmortyapi.com/api/character/')
        .then(response => response.json())
        .then(data => {
            return data.results;
        })
}

const getDataByNameFromApi = (name) => {
    return fetch(`https://rickandmortyapi.com/api/character/?name=${name}`)
    .then(response => response.json())
    .then(data => {
        return data.results;
    })
}

export default {
    all: getDataFromApi,
    name: getDataByNameFromApi

}