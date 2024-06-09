export const fetchData = async () => {
  try {
    const res = await fetch('https://freetestapi.com/api/v1/cars');
    if (!res.ok) {
      throw new Error('Could not fetch data');
    }
    const data = await res.json();
    console.log(data)
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

fetchData();
