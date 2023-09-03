import React from "react";
import DatamapsIndia from "react-datamaps-india";

const MapChart = () => {
  return (
    <DatamapsIndia
      regionData={{
        Punjab: {
          value: 100
        },
        Maharashtra: {
          value: 10
        },
        Rajasthan: {
          value: 1000
        },
        Gujarat: {
          value: 800
        },
        Karnataka: {
          value: 700
        },
        TamilNadu: {
          value: 190
        },
        Kerala: {
          value: 890
        }
      }}
      hoverComponent={({ value }) => {
        return (
          <div>
            <div>{value.name}</div>
          </div>
        );
      }}
      mapLayout={{
        startColor: "#FFDAB9",
        endColor: "#FF6347",
        hoverTitle: "Count",
        noDataColor: "#D36418",
        borderColor: "#8D8D8D",
        hoverBorderColor: "#8D8D8D",
        hoverColor: "green",
        height: 70,
        weight: 30
      }}
    />
  );
};

export default MapChart;
