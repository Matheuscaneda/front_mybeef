import React from "react";
import ReactSpeedometer from "react-d3-speedometer";
import './speedometer.css'

const styles = {
  dial: {
    display: "inline-block",
    width: `300px`,
    height: `auto`,
    color: "#000",
    border: "0.5px solid #fff",
    padding: "2px"
  },
  title: {
    fontSize: "1em",
    color: "#000"
  }
};

export const Speedometer = ({ id, value, title }) => {
  return (
    <div className="dials">
      <ReactSpeedometer
        maxValue={120}
        minValue={0}
        height={190}
        width={290}
        value={value}
        needleTransition="easeQuadIn"
        needleTransitionDuration={1000}
        needleColor="red"
        startColor="red"
        segments={10}
        endColor="green"
      />
      <div style={styles.title}>{title}</div>
    </div>
  );
};

export default Speedometer;