enum ApiStatus {
  success = 200,
  unknown = 500,
}

const BASE_URL = 'https://a975-14-191-194-112.ngrok-free.app/api/v1';

const NOVEL_GROUP = `${BASE_URL}/novels`;

const novelEndpoints = {
  GET: {
    searchNovels: () => `${NOVEL_GROUP}`,
    getByID: (id: number) => `${NOVEL_GROUP}/${id}`,
  },
};

const endpoints = {
  novel: novelEndpoints,
};

export { endpoints, ApiStatus };
