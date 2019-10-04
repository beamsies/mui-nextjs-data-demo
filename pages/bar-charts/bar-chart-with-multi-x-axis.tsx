import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";
import { useTheme } from "@material-ui/styles";

import ChartWidget from "../../src/components/ChartWidget";

const data = [
  {
    date: "2000-01",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    date: "2000-02",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    date: "2000-03",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    date: "2000-04",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    date: "2000-05",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    date: "2000-06",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    date: "2000-07",
    uv: 3490,
    pv: 4300,
    amt: 2100
  },
  {
    date: "2000-08",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    date: "2000-09",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    date: "2000-10",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    date: "2000-11",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    date: "2000-12",
    uv: 1890,
    pv: 4800,
    amt: 2181
  }
];

const monthTickFormatter = (tick: any) => {
  const date = new Date(tick);

  return date.getMonth() + 1;
};

const renderQuarterTick = (tickProps: any) => {
  const { x, y, payload } = tickProps;
  const { value, offset } = payload;
  const date = new Date(value);
  const month = date.getMonth();
  const quarterNo = Math.floor(month / 3) + 1;
  // const isMidMonth = month % 3 === 1;

  if (month % 3 === 1) {
    return (
      <text
        x={x + offset}
        y={y - 4}
        textAnchor="middle"
      >{`Q${quarterNo}`}</text>
    );
  }

  const isLast = month === 11;

  if (month % 3 === 0 || isLast) {
    const pathX = Math.floor(isLast ? x + offset * 2 : x) + 0.5;

    return <path d={`M${pathX},${y - 4}v${-35}`} stroke="red" />;
  }
  return null;
};

export default function App() {
  const theme: any = useTheme();
  return (
    <>
      <Box my={4}>
        <Typography variant="h6" component="h1" gutterBottom>
          Bar Chart w/ Multi-X Axis
        </Typography>
        <ChartWidget>
          <ResponsiveContainer minWidth={500} minHeight={320}>
            <BarChart
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
              <XAxis dataKey="date" tickFormatter={monthTickFormatter} />
              <XAxis
                dataKey="date"
                axisLine={false}
                tickLine={false}
                interval={0}
                tick={renderQuarterTick}
                height={1}
                scale="band"
                xAxisId="quarter"
              />
              <YAxis />
              <Tooltip labelStyle={{ color: theme.palette.grey.A700 }} />
              <Legend />
              <Bar dataKey="pv" fill={theme.palette.secondary.main} />
              <Bar dataKey="uv" fill={theme.palette.primary.main} />
            </BarChart>
          </ResponsiveContainer>
        </ChartWidget>
      </Box>
    </>
  );
}
