const API_URL = 'http://localhost:8001/bots';

export const fetchBots = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
};

export const deleteBot = async (id) => {
  await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
};
