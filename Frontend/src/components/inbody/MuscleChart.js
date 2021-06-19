import React, { Component } from "react";
import { ResponsiveLine } from "@nivo/line";

export default class InbodyChart extends Component {
  state = {
    chart: [
      {
        id: "weight",
        color: "hsl(14, 70%, 50%)",
        data: [
          {
            x: "plane",
            y: 50,
          },
          {
            x: "helicopter",
            y: 213,
          },
          {
            x: "boat",
            y: 241,
          },
          {
            x: "train",
            y: 204,
          },
          {
            x: "subway",
            y: 43,
          },
          {
            x: "bus",
            y: 228,
          },
          {
            x: "car",
            y: 157,
          },
          {
            x: "moto",
            y: 151,
          },
          {
            x: "bicycle",
            y: 84,
          },
          {
            x: "horse",
            y: 152,
          },
          {
            x: "skateboard",
            y: 148,
          },
          {
            x: "others",
            y: 6,
          },
        ],
      },
      {
        id: "fat",
        color: "hsl(119, 70%, 50%)",
        data: [
          {
            x: "plane",
            y: 87,
          },
          {
            x: "helicopter",
            y: 247,
          },
          {
            x: "boat",
            y: 56,
          },
          {
            x: "train",
            y: 294,
          },
          {
            x: "subway",
            y: 233,
          },
          {
            x: "bus",
            y: 91,
          },
          {
            x: "car",
            y: 165,
          },
          {
            x: "moto",
            y: 2,
          },
          {
            x: "bicycle",
            y: 33,
          },
          {
            x: "horse",
            y: 70,
          },
          {
            x: "skateboard",
            y: 160,
          },
          {
            x: "others",
            y: 216,
          },
        ],
      },
      {
        id: "protein",
        color: "hsl(106, 70%, 50%)",
        data: [
          {
            x: "plane",
            y: 195,
          },
          {
            x: "helicopter",
            y: 141,
          },
          {
            x: "boat",
            y: 141,
          },
          {
            x: "train",
            y: 45,
          },
          {
            x: "subway",
            y: 69,
          },
          {
            x: "bus",
            y: 271,
          },
          {
            x: "car",
            y: 102,
          },
          {
            x: "moto",
            y: 239,
          },
          {
            x: "bicycle",
            y: 260,
          },
          {
            x: "horse",
            y: 237,
          },
          {
            x: "skateboard",
            y: 248,
          },
          {
            x: "others",
            y: 278,
          },
        ],
      },
    ],
  };
  render() {
    return (
      <ResponsiveLine
        data={this.state.chart}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: "bottom",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Inbody",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          orient: "left",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "count",
          legendOffset: -40,
          legendPosition: "middle",
        }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    );
  }
}
