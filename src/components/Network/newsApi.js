import fetch from 'isomorphic-fetch';

// const apiUrl = 'http://34.229.201.249:1337/';
const apiUrl = 'http://localhost:1338/';

const newsApi = {
  async getNews(page, perPage) {
    const response = await fetch(`${apiUrl}api/sucesos/paginas?sort=&page=${page}&per_page=${perPage}`);
    const data = await response.json();
    return data.data;
  },
  async getNew(id) {
    const response = await fetch(`${apiUrl}api/sucesos/findsql/${id}`);
    const data = await response.json();
    return data;
  },
  async getDelitos() {
    const response = await fetch(`${apiUrl}api/delitos/`);
    const data = await response.json();
    return data;
  },
  async getPorParroquiasMes() {
    const response = await fetch(`${apiUrl}api/sucesos/AcuAnoActualParro`);
    const data = await response.json();
    return data.acu_mes;
  },
  async getPorParroquiasAno() {
    const response = await fetch(`${apiUrl}api/sucesos/AcuAnoActualParro`);
    const data = await response.json();
    return data.acumu_ano;
  },
};

export default newsApi;
