import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
  params: { hl: "en", gl: "US" },
  headers: {
    "X-RapidAPI-Key":
      process.env.REACT_APP_YOUTUBE_API_KEY ||
      "508d2aab1fmshcc381179436a8e9p1c8f75jsncf723de612b4",
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

export const fetchDataFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};
