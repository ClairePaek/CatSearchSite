const API_ENDPOINT =
  'https://q9d70f82kd.execute-api.ap-northeast-2.amazonaws.com/dev';

const request = async (url) => {
  try {
    const result = await fetch(`${API_ENDPOINT}/${url}`);

    switch (result.status) {
      case 200:
      case 204:
        return result.json();
      default:
        throw new Error(result);
    }
  } catch (e) {
    console.log(e.status);
    await request(url);
  }
};

const api = {
  getCatsByKeyword: async (keyword) =>
    await request(`api/cats/search?q=${keyword}`),
  getRandomCats: async () => await request('api/cats/random50'),
  getCatById: async (id) => await request(`api/cats/${id}`),
};

export { api };
