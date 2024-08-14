export const fetchBots = async () => {
  try {
    const response = await fetch('http://localhost:8001/bots');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch bots:', error);
    return [];
  }
};
