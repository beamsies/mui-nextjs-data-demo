import React from "react";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import { useTheme } from "@material-ui/styles";

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
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Page F",
    uv: 2390,
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

function CustomizedLabel(props: any) {
  const { x, y, stroke, value } = props;

  return (
    <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">
      {value}
    </text>
  );
}

function CustomizedAxisTick(props: any) {
  const { x, y, payload, stroke } = props;

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={16}
        textAnchor="end"
        fill={stroke}
        transform="rotate(-35)"
      >
        {payload.value}
      </text>
    </g>
  );
}

function App(props: any) {
  const theme: any = useTheme();
  return (
    <>
      <Box my={4}>
        <Typography variant="h6" component="h1" gutterBottom>
          Labeled Line Chart
        </Typography>
        <ChartWidget>
          <ResponsiveContainer minWidth={500} minHeight={320}>
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="name"
                height={60}
                tick={
                  <CustomizedAxisTick stroke={theme.palette.text.primary} />
                }
              />
              <YAxis />
              <Tooltip labelStyle={{ color: theme.palette.grey.A700 }} />
              <Legend />
              <Line
                dataKey="pv"
                stroke={theme.palette.primary.dark}
                label={<CustomizedLabel stroke={theme.palette.text.primary} />}
                type={props.charts.lineType}
                isAnimationActive={props.charts.animations}
                animationBegin={props.charts.animationBegin}
                animationDuration={props.charts.animationDuration}
                animationEasing={props.charts.animationEasing}
                legendType={props.charts.legendType}
              />
              <Line
                dataKey="uv"
                stroke={theme.palette.secondary.dark}
                type={props.charts.lineType}
                isAnimationActive={props.charts.animations}
                animationBegin={props.charts.animationBegin}
                animationDuration={props.charts.animationDuration}
                animationEasing={props.charts.animationEasing}
                legendType={props.charts.legendType}
              />
            </LineChart>
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
