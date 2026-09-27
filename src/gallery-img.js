import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";
const API_KEY = "ItYBw9ZkTgg0YpWBZWnbUYlIoK01tBTiWQrDar-WIgk";

export const fetchImgGallery = async (query, page = 1) => {
  const params = {
    query,
    page,
    client_id: API_KEY,
    per_page: 12,
  };
  const { data } = await axios.get(`/search/photos`, {
    params,
  });
  return data;
};
