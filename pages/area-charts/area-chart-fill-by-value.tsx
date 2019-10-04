import React from "react";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/styles";
import { Theme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";

import ChartWidget from "../../src/components/ChartWidget";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Page C",
    uv: -1000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Page D",
    uv: 500,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Page E",
    uv: -2000,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Page F",
    uv: -250,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];

const gradientOffset = () => {
  const dataMax = Math.max(...data.map(i => i.uv));
  const dataMin = Math.min(...data.map(i => i.uv));

  if (dataMax <= 0) {
    return 0;
  }
  if (dataMin >= 0) {
    return 1;
  }

  return dataMax / (dataMax - dataMin);
};

const off = gradientOffset();

function App(props: any) {
  const theme: Theme = useTheme();
  return (
    <>
      <Box my={4}>
        <Typography variant="h6" component="h1" gutterBottom>
          Fill by Value
        </Typography>
        <ChartWidget>
          <ResponsiveContainer minWidth={500} minHeight={320}>
            <AreaChart
              width={500}
              height={400}
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip labelStyle={{ color: theme.palette.grey.A700 }} />
              <Legend />
              <defs>
                <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
                  <stop offset={off} stopColor="green" stopOpacity={1} />
                  <stop offset={off} stopColor="red" stopOpacity={1} />
                </linearGradient>
              </defs>
              <Area
                dataKey="uv"
                stroke="#000"
                fill="url(#splitColor)"
                type={props.charts.lineType}
                isAnimationActive={props.charts.animations}
                animationBegin={props.charts.animationBegin}
                animationDuration={props.charts.animationDuration}
                animationEasing={props.charts.animationEasing}
                legendType={props.charts.legendType}
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartWidget>
      </Box>
    </>
  );
}

const mapStateToProps = (state: any) => ({
  charts: state.charts
});

export default connect(mapStateToProps)(App);