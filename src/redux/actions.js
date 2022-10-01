import axios from "axios";
// export const addHike = (hike) => {
//     return {
//       type: "ADD_HIKE",
//       value: hike,
//     };
//   };

export const addHike = (hike) => {
  axios.post("http://localhost:5000/hikes", hike);
  return {
    type: "ADD_HIKE",
    value: hike,
  };
};

export const removeHike = (index) => {
  return {
    type: "REMOVE_HIKE",
    value: index,
  };
};
