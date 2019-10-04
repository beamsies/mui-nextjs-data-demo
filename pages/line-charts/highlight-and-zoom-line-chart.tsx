import React from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceArea,
  ResponsiveContainer,
  Legend
} from "recharts";

import ChartWidget from "../../src/components/ChartWidget";

const data = [
  { name: 1, cost: 4.11, impression: 100 },
  { name: 2, cost: 2.39, impression: 120 },
  { name: 3, cost: 1.37, impression: 150 },
  { name: 4, cost: 1.16, impression: 180 },
  { name: 5, cost: 2.29, impression: 200 },
  { name: 6, cost: 3, impression: 499 },
  { name: 7, cost: 0.53, impression: 50 },
  { name: 8, cost: 2.52, impression: 100 },
  { name: 9, cost: 1.79, impression: 200 },
  { name: 10, cost: 2.94, impression: 222 },
  { name: 11, cost: 4.3, impression: 210 },
  { name: 12, cost: 4.41, impression: 300 },
  { name: 13, cost: 2.1, impression: 50 },
  { name: 14, cost: 8, impression: 190 },
  { name: 15, cost: 0, impression: 300 },
  { name: 16, cost: 9, impression: 400 },
  { name: 17, cost: 3, impression: 200 },
  { name: 18, cost: 2, impression: 50 },
  { name: 19, cost: 3, impression: 100 },
  { name: 20, cost: 7, impression: 100 }
];

const getAxisYDomain = (from: any, to: any, ref: any, offset: any) => {
  const refData: Array<any> = data.slice(from - 1, to);
  let [bottom, top]: [number, number] = [refData[0][ref], refData[0][ref]];
  refData.forEach(d => {
    if (d[ref] > top) top = d[ref];
    if (d[ref] < bottom) bottom = d[ref];
  });
  return [(bottom | 0) - offset, (top | 0) + offset];
};

const initialState = {
  data,
  left: "dataMin",
  right: "dataMax",
  refAreaLeft: "",
  refAreaRight: "",
  top: "dataMax+1",
  bottom: "dataMin-1",
  top2: "dataMax+20",
  bottom2: "dataMin-20",
  animation: true
};

interface IState {
  data: Array<any>;
  left: any;
  right: any;
  refAreaLeft: any;
  refAreaRight: any;
  top: any;
  bottom: any;
  top2: any;
  bottom2: any;
  animation: boolean;
}

class App extends React.PureComponent<{ charts: any }, IState> {
  constructor(props: any) {
    super(props);
    this.state = initialState;
  }

  zoom() {
    let { refAreaLeft, refAreaRight, data } = this.state;

    if (refAreaLeft === refAreaRight || refAreaRight === "") {
      this.setState(() => ({
        refAreaLeft: "",
        refAreaRight: ""
      }));
      return;
    }

    // xAxis domain
    if (refAreaLeft > refAreaRight)
      [refAreaLeft, refAreaRight] = [refAreaRight, refAreaLeft];

    // yAxis domain
    const [bottom, top] = getAxisYDomain(refAreaLeft, refAreaRight, "cost", 1);
    const [bottom2, top2] = getAxisYDomain(
      refAreaLeft,
      refAreaRight,
      "impression",
      50
    );

    this.setState(() => ({
      refAreaLeft: "",
      refAreaRight: "",
      data: data.slice(),
      left: refAreaLeft,
      right: refAreaRight,
      bottom,
      top,
      bottom2,
      top2
    }));
  }

  zoomOut() {
    const { data } = this.state;
    this.setState(() => ({
      data: data.slice(),
      refAreaLeft: "",
      refAreaRight: "",
      left: "dataMin",
      right: "dataMax",
      top: "dataMax+1",
      bottom: "dataMin",
      top2: "dataMax+50"
      // bottom: "dataMin+50"
    }));
  }

  handleMouseDown(e: any) {
    if (e && e.activeLabel) {
      this.setState({ refAreaLeft: e.activeLabel });
      return;
    }
    return;
  }

  render() {
    const {
      data,
      // barIndex,
      left,
      right,
      refAreaLeft,
      refAreaRight,
      top,
      bottom,
      top2,
      bottom2
    } = this.state;

    return (
      <>
        <Box my={4}>
          <div
            style={{ display: "flex", alignItems: "center", marginBottom: 20 }}
          >
            <Typography variant="h6" component="h2">
              Highlight &amp; Zoom
            </Typography>

            <Button
              variant="contained"
              color="secondary"
              style={{ marginLeft: 20 }}
              onClick={this.zoomOut.bind(this)}
            >
              Zoom Out
            </Button>
          </div>
          <ChartWidget>
            <ResponsiveContainer minWidth={500} minHeight={320}>
              <LineChart
                width={800}
                height={400}
                data={data}
                onMouseDown={e => this.handleMouseDown(e)}
                onMouseMove={e =>
                  this.state.refAreaLeft &&
                  this.setState({ refAreaRight: e.activeLabel })
                }
                onMouseUp={this.zoom.bind(this)}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  allowDataOverflow
                  dataKey="name"
                  domain={[left, right]}
                  type="number"
                />
                <YAxis
                  allowDataOverflow
                  domain={[bottom, top]}
                  type="number"
                  yAxisId="1"
                />
                <YAxis
                  orientation="right"
                  allowDataOverflow
                  domain={[bottom2, top2]}
                  type="number"
                  yAxisId="2"
                />
                <Tooltip labelStyle={{ color: "#616161" }} />
                <Legend />
                <Line
                  yAxisId="1"
                  dataKey="cost"
                  stroke="#2196f3"
                  type={this.props.charts.lineType}
                  isAnimationActive={this.props.charts.animations}
                  animationBegin={this.props.charts.animationBegin}
                  animationDuration={this.props.charts.animationDuration}
                  animationEasing={this.props.charts.animationEasing}
                  legendType={this.props.charts.legendType}
                />
                <Line
                  yAxisId="2"
                  dataKey="impression"
                  stroke="#f44336"
                  type={this.props.charts.lineType}
                  isAnimationActive={this.props.charts.animations}
                  animationBegin={this.props.charts.animationBegin}
                  animationDuration={this.props.charts.animationDuration}
                  animationEasing={this.props.charts.animationEasing}
                  legendType={this.props.charts.legendType}
                />

                {refAreaLeft && refAreaRight ? (
                  <ReferenceArea
                    yAxisId="1"
                    x1={refAreaLeft}
                    x2={refAreaRight}
                    strokeOpacity={0.3}
                  />
                ) : null}
              </LineChart>
            </ResponsiveContainer>
          </ChartWidget>
        </Box>
      </>
    );
  }
}

const mapStateToProps = (state: any) => ({
  charts: state.charts
});

export default connect(mapStateToProps)(App);
