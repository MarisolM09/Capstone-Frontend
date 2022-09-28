export const addHike = (hike) => {
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