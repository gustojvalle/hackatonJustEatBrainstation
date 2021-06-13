import axios from "axios";

const retrieveRestaurant = async (postCode) => {
  console.log(process.env.RESTAURANTS_URL);
  const res = await axios.get(`http://localhost:8080/restaurant/${postCode}`);
  return res.data;
};

export { retrieveRestaurant };
