import React from "react";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
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
import { useTheme } from "@material-ui/styles";
import { Theme } from "@material-ui/core/styles";

import ChartWidget from "../../src/components/ChartWidget";

const data = [
  {
    month: "2015.01",
    a: 4000,
    b: 2400,
    c: 2400
  },
  {
    month: "2015.02",
    a: 3000,
    b: 1398,
    c: 2210
  },
  {
    month: "2015.03",
    a: 2000,
    b: 9800,
    c: 2290
  },
  {
    month: "2015.04",
    a: 2780,
    b: 3908,
    c: 2000
  },
  {
    month: "2015.05",
    a: 1890,
    b: 4800,
    c: 2181
  },
  {
    month: "2015.06",
    a: 2390,
    b: 3800,
    c: 2500
  },
  {
    month: "2015.07",
    a: 3490,
    b: 4300,
    c: 2100
  }
];
const getPercent = (value: number, total: number) => {
  const ratio = total > 0 ? value / total : 0;

  return toPercent(ratio, 2);
};

const toPercent = (decimal: number, fixed = 0) =>
  `${(decimal * 100).toFixed(fixed)}%`;
const renderTooltipContent = (o: any) => {
  const { payload, label } = o;
  const total = payload.reduce(
    (result: any, entry: any) => result + entry.value,
    0
  );

  return (
    <div style={{ backgroundColor: "white", padding: 5 }}>
      <p style={{ color: "#616161" }}>{`${label} (Total: ${total})`}</p>
      <ul>
        {payload.map((entry: any, index: any) => (
          <li key={`item-${index}`} style={{ color: entry.color }}>
            {`${entry.name}: ${entry.value}(${getPercent(entry.value, total)})`}
          </li>
        ))}
      </ul>
    </div>
  );
};

function App(props: any) {
  const theme: Theme = useTheme();
  return (
    <>
      <Box my={4}>
        <Typography variant="h6" component="h1" gutterBottom>
          Percent Area Chart
        </Typography>
        <ChartWidget>
          <ResponsiveContainer minWidth={500} minHeight={320}>
            <AreaChart
              width={500}
              height={400}
              data={data}
              stackOffset="expand"
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis tickFormatter={toPercent} />
              <Tooltip content={renderTooltipContent} />
              <Legend />
              <Area
                dataKey="a"
                stackId="1"
                stroke={theme.palette.primary.dark}
                fill={theme.palette.primary.dark}
                type={props.charts.lineType}
                isAnimationActive={props.charts.animations}
                animationBegin={props.charts.animationBegin}
                animationDuration={props.charts.animationDuration}
                animationEasing={props.charts.animationEasing}
                legendType={props.charts.legendType}
              />
              <Area
                dataKey="b"
                stackId="1"
                stroke={theme.palette.secondary.dark}
                fill={theme.palette.secondary.dark}
                type={props.charts.lineType}
                isAnimationActive={props.charts.animations}
                animationBegin={props.charts.animationBegin}
                animationDuration={props.charts.animationDuration}
                animationEasing={props.charts.animationEasing}
                legendType={props.charts.legendType}
              />
              <Area
                dataKey="c"
                stackId="1"
                stroke={theme.palette.primary.light}
                fill={theme.palette.primary.light}
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
