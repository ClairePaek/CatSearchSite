const API_ENDPOINT =
  'https://q9d70f82kd.execute-api.ap-northeast-2.amazonaws.com/dev';

const request = async (url) => {
  try {
    const result = await fetch(`${API_ENDPOINT}/${url}`);
    return result.json();
  } catch (e) {
    console.warn(e);
    return [];
  }
};

const api = {
  fetchCats: async (keyword) => await request(`api/cats/search?q=${keyword}`),
  fetchRandom: async () => await request('api/cats/random50'),
  fetchCatById: async (id) => await request(`api/cats/${id}`),
};

export { api };
