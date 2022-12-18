import axios from "axios";

const getFirstApi = async () => {
  const data = await axios
    .get("/data/keywordSearch.json")
    .then(res => res.data.items)
    .catch(err => err);
  return data;
};

export { getFirstApi };
