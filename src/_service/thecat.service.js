import Axios from "axios";

const base_url = "https://api.thecatapi.com/v1";

function getList() {
  return Axios.get(base_url + "/images/search?limit=10");
}

function getCategories() {
  return Axios.get(base_url + "/categories");
}

export const theCatService = {
  getList,
  getCategories
};
