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

function App(props: any) {
  const theme: any = useTheme();
  return (
    <>
      <Box my={4}>
        <Typography variant="h6" component="h1" gutterBottom>
          Biaxial Line Chart
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
              <XAxis dataKey="name" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip labelStyle={{ color: theme.palette.grey.A700 }} />
              <Legend />
              <Line
                yAxisId="left"
                dataKey="pv"
                stroke={theme.palette.primary.dark}
                activeDot={{ r: 8 }}
                type={props.charts.lineType}
                isAnimationActive={props.charts.animations}
                animationBegin={props.charts.animationBegin}
                animationDuration={props.charts.animationDuration}
                animationEasing={props.charts.animationEasing}
                legendType={props.charts.legendType}
              />
              <Line
                yAxisId="right"
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
