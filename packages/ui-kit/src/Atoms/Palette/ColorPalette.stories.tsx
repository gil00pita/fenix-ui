import React from "react";
import colors from ".";
import { withKnobs, text, boolean, number, color, select } from "@storybook/addon-knobs";

export default {
  title: "Atoms/Colors",
  decorators: [withKnobs]
};

export const ColorPalette = () => {
  const colorsArray = [];

  Object.keys(colors).forEach((name) => {
    if (colors[name]) {
      Object.keys(colors[name]).forEach((hex) => {
      colorsArray.push(
        <div style={{
          order: 0,
          flex: '0 1 auto',
          alignSelf: 'auto',
          marginBottom: "5px",
          marginTop: "5px"
        }}>
          <div
            style={{
              backgroundColor: colors[name][hex],
              borderColor: (colors[name] === "#fff") ? 'rgba(#2c3643, 0.7)' : "transparent",
              borderStyle: "solid",
              borderWidth: "1px",
              display: "inline-block",
              height: "30px",
              marginRight: "10px",
              width: "30px",
            }}
          />
          <pre
            style={{
              display: "inline-block",
              fontSize: "14px",
              lineHeight: "30px",
              marginBottom: "0",
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: "250px",
              }}
            >
              <span style={{ userSelect: "none" }}>{colors[name][hex]}</span>
            </span><span>{name} {hex}</span>
          </pre>
        </div>
      );
      });
    }
  });

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignContent: 'stretch',
        alignItems: 'stretch',
        flexWrap: 'nowrap',
        overflow: 'scroll',
        height: '100vh',
      }}
    >
      <h1>Colors</h1>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'wrap-reverse',
          justifyContent: 'flex-start',
          alignContent: 'stretch',
          alignItems: 'stretch',
          listStyle: "none",
          margin: 0,
          padding: 0,
          textAlign: "left",
        }}
      >
        {colorsArray.map((el, i) => (
          <div key={i} style={{ borderTop: `1px solid rgba(#2c3643, 0.7)` }}>{el}</div>
        ))}
      </div>
    </div>
  );
}
