import React from "react";

const getSeason = (lat, month) => {
  if (month < 9 && month > 2) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  console.log(season);
  return <div>Season Display</div>;
};

export default SeasonDisplay;
