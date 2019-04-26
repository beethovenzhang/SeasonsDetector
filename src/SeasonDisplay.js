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
  const text =
    season === "winter" ? "Burr, it is chilly" : "Let us go to the beach";
  return (
    <div>
      <h1>{text}</h1>
    </div>
  );
};

export default SeasonDisplay;
