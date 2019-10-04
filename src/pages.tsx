import React from "react";

import {
  LineChartIcon,
  AreaChartIcon,
  BarChartIcon,
  ScatterChartIcon,
  PieChartIcon
} from "./components/vectors/Icons";

const pages: any = [
  {
    pathname: "/line-charts",
    icon: <LineChartIcon />,
    children: [
      { pathname: "/line-charts/simple-line-chart" },
      { pathname: "/line-charts/dashed-line-chart" },
      { pathname: "/line-charts/vertical-line-chart" },
      { pathname: "/line-charts/biaxial-line-chart" },
      { pathname: "/line-charts/line-chart-reference-lines" },
      { pathname: "/line-charts/labeled-line-chart" },
      { pathname: "/line-charts/synchronized-line-chart" },
      { pathname: "/line-charts/highlight-and-zoom-line-chart" }
    ]
  },
  {
    pathname: "/area-charts",
    icon: <AreaChartIcon />,
    children: [
      { pathname: "/area-charts/simple-area-chart" },
      { pathname: "/area-charts/stacked-area-chart" },
      { pathname: "/area-charts/percent-area-chart" },
      { pathname: "/area-charts/synchronized-area-chart" },
      { pathname: "/area-charts/area-chart-fill-by-value" }
    ]
  },
  {
    pathname: "/bar-charts",
    icon: <BarChartIcon />,
    children: [
      { pathname: "/bar-charts/simple-bar-chart" },
      { pathname: "/bar-charts/stacked-bar-chart" },
      { pathname: "/bar-charts/mixed-bar-chart" },
      { pathname: "/bar-charts/positive-and-negative-bar-chart" },
      { pathname: "/bar-charts/brush-bar-chart" },
      { pathname: "/bar-charts/biaxial-bar-chart" },
      { pathname: "/bar-charts/bar-chart-with-background" },
      { pathname: "/bar-charts/bar-chart-with-multi-x-axis" }
    ]
  },
  {
    pathname: "/scatter-charts",
    icon: <ScatterChartIcon />,
    children: [
      { pathname: "/scatter-charts/simple-scatter-chart" },
      { pathname: "/scatter-charts/line-scatter-chart" }
    ]
  },
  {
    pathname: "/pie-charts",
    icon: <PieChartIcon />,
    children: [
      { pathname: "/pie-charts/simple-pie-chart" },
      { pathname: "/pie-charts/simple-donut-chart" }
    ]
  },
  { pathname: "/", displayNav: false, title: false },
  { pathname: "/terms-of-use", displayNav: false, title: false },
  { pathname: "/privacy-policy", displayNav: false, title: false }
];

export default pages;
