import axios from "axios";

const getFirstApi = async keyword => {
  const data = await axios
    .get(`/data/${keyword === "search" ? "search" : "popular"}.json`)
    .then(res => res.data.items)
    .catch(err => err);
  return data;
};

export { getFirstApi };
