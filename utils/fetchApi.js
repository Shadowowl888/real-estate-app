import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "eced5509d4msh94faafc229d42f4p1b7ac2jsn03c1af5842cc",
    },
  });

  return data;
};
