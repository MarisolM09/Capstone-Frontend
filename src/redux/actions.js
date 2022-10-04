import axios from "axios";

export const addHike = (hike) => {
  axios.post("https://capstone-backend-sigma.vercel.app/hikes", hike);
  return {
    type: "ADD_HIKE",
    value: hike,
  };
};

export const removeHike = (index) => {
  axios.post("https://capstone-backend-sigma.vercel.app/hikes", index);
  return {
    type: "REMOVE_HIKE",
    value: index,
  };
};
