import React from "react";
import { connect } from "react-redux";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Typography from "@material-ui/core/Typography";
import {
  createStyles,
  makeStyles,
  Theme,
  withStyles
} from "@material-ui/core/styles";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import Menu, { MenuProps } from "@material-ui/core/Menu";
// import MenuItem from "@material-ui/core/MenuItem";
// import ListItemText from "@material-ui/core/ListItemText";
import Hidden from "@material-ui/core/Hidden";
import { FaWrench, FaTimesCircle } from "react-icons/fa";

import {
  setEnableChartAnimations,
  setLineType,
  setLegendType,
  setAnimationBegin,
  setAnimationDuration,
  setAnimationEasing
} from "../../state/redux/actions";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      // display: 'flex',
      // flexWrap: 'wrap',
    },
    formControl: {
      // margin: theme.spacing(1),
      minWidth: 120
      // maxWidth: 200,
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    },
    settingsIcon: {
      color: theme.palette.text.primary
    }
  })
);

const StyledMenu = withStyles((theme: any) => ({
  paper: {
    border: "1px solid #d3d4d5",
    width: "100%",
    padding: 20,
    opacity: 0.5,
    display: "block",
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - 260px - 40px)`
    },
    [theme.breakpoints.up("lg")]: {
      display: "none"
    }
  }
}))((props: MenuProps) => (
  <Menu
    elevation={6}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center"
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center"
    }}
    {...props}
    // style={{ opacity: 0.85 }}
    // classes={{ paper: { opacity: 0.25 } }}
  />
));

// const StyledMenuItem = withStyles(theme => ({
//   root: {
//     "&:focus": {
//       backgroundColor: theme.palette.grey[200],
//       "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
//         color: theme.palette.common.black
//       }
//     }
//   }
// }))(MenuItem);

function renderPageTitle(title: string) {
  const split = title.split("/");
  return split[1].replace("-", " ").toUpperCase();
}

interface IChartPropSettings {
  pageTitle: string;
  setEnableChartAnimations?: any;
  setLineType?: any;
  setLegendType?: any;
  setAnimationBegin?: any;
  setAnimationDuration?: any;
  setAnimationEasing?: any;
}

function ChartPropSettings({
  pageTitle,
  setEnableChartAnimations,
  setLineType,
  setLegendType,
  setAnimationBegin,
  setAnimationDuration,
  setAnimationEasing
}: IChartPropSettings) {
  const classes = useStyles();

  const [state, setState] = React.useState<{
    name: string;
    animations: boolean;
    lineTypes: string;
    legendType: string;
    animationBegin: number;
    animationDuration: number;
    animationEasing: string;
  }>({
    name: "",
    animations: false,
    lineTypes: "linear",
    legendType: "line",
    animationBegin: 0,
    animationDuration: 250,
    animationEasing: "ease-in"
  });

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  function handleClick(event: React.MouseEvent<HTMLElement>) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const handleChangeSelect = (name: keyof typeof state) => (
    event: React.ChangeEvent<{ value: unknown | boolean }>
  ) => {
    setState({
      ...state,
      [name]: event.target.value
    });

    switch (name) {
      case "lineTypes":
        setLineType(String(event.target.value));
        break;
      case "legendType":
        setLegendType(String(event.target.value));
        break;
      case "animationEasing":
        setAnimationEasing(String(event.target.value));
        break;
      default:
        break;
    }
  };

  const handleChange = (name: any) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (name === "animations") {
      setEnableChartAnimations(event.target.checked);
      setState({ ...state, [name]: event.target.checked });
      return;
    }

    if (name === "animationBegin") {
      setAnimationBegin(Number(event.target.value));
      setState({ ...state, [name]: event.target.value });
      return;
    }

    if (name === "animationDuration") {
      setAnimationDuration(Number(event.target.value));
      setState({ ...state, [name]: event.target.value });
      return;
    }
  };

  return (
    <div style={{ marginTop: 20 }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <Typography variant="h4" noWrap style={{ marginRight: 20 }}>
          {renderPageTitle(pageTitle)}
        </Typography>
        <Hidden lgUp>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleClick}
            className={classes.settingsIcon}
            color="primary"
          >
            <FaWrench />
          </IconButton>
        </Hidden>
      </div>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {/* <StyledMenuItem onClick={() => console.log("clicked!!!!!!")}>
          <ListItemText primary="basis" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemText primary="basis closed" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemText primary="Inbox" />
        </StyledMenuItem> */}
        <FormGroup>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            <FormControlLabel
              control={
                <Switch
                  checked={state.animations}
                  onChange={handleChange("animations")}
                  value="animations"
                  color="primary"
                />
              }
              label="Animations"
              labelPlacement="bottom"
            />
            <IconButton
              aria-label="close menu"
              // edge="start"
              onClick={handleClose}
              className={classes.settingsIcon}
            >
              <FaTimesCircle size={24} />
            </IconButton>
          </div>
          <FormControl className={classes.formControl} style={{ marginTop: 0 }}>
            <Select
              native
              value={state.lineTypes}
              onChange={handleChangeSelect("lineTypes")}
              inputProps={{
                name: "lineType",
                id: "change-chart-line-type"
              }}
              style={{ padding: 0 }}
            >
              <option value={"linear"}>Linear</option>
              <option value={"monotone"}>Monotone</option>
              <option value={"step"}>Step</option>
              <option value={"stepBefore"}>Step Before</option>
              <option value={"stepAfter"}>Step After</option>
            </Select>
            <FormHelperText>Line Type</FormHelperText>
          </FormControl>
          <FormControl
            className={classes.formControl}
            style={{ marginTop: 20 }}
          >
            <Select
              native
              value={state.legendType}
              onChange={handleChangeSelect("legendType")}
              inputProps={{
                name: "legendType",
                id: "change-chart-legend-type"
              }}
              style={{ padding: 0 }}
            >
              <option value={"line"}>Line</option>
              <option value={"square"}>Square</option>
              <option value={"rect"}>Rect</option>
              <option value={"circle"}>Circle</option>
              <option value={"cross"}>Cross</option>
              <option value={"diamond"}>Diamond</option>
              <option value={"square"}>Square</option>
              <option value={"triangle"}>Triangle</option>
              <option value={"wye"}>Wye</option>
            </Select>
            <FormHelperText>Legend Type</FormHelperText>
          </FormControl>
          <FormControl
            className={classes.formControl}
            style={{ marginTop: 20 }}
          >
            <TextField
              id="standard-number"
              value={state.animationBegin}
              onChange={handleChange("animationBegin")}
              type="number"
              style={{ padding: 0 }}
              inputProps={{
                name: "animationBegin",
                id: "change-chart-animation-begin"
              }}
            />
            <FormHelperText>Animation Begin [ms]</FormHelperText>
          </FormControl>
          <FormControl
            className={classes.formControl}
            style={{ marginTop: 20 }}
          >
            <TextField
              id="standard-number"
              value={state.animationDuration}
              onChange={handleChange("animationDuration")}
              type="number"
              style={{ padding: 0 }}
              inputProps={{
                name: "animationDuration",
                id: "change-chart-animation-duration"
              }}
            />
            <FormHelperText>Animation Duration [ms]</FormHelperText>
          </FormControl>
          <FormControl
            className={classes.formControl}
            style={{ marginTop: 20 }}
          >
            <Select
              native
              value={state.animationEasing}
              onChange={handleChangeSelect("animationEasing")}
              inputProps={{
                name: "animationEasing",
                id: "change-chart-animation-easing"
              }}
              style={{ padding: 0 }}
            >
              <option value={"ease"}>Ease</option>
              <option value={"ease-in"}>Ease In</option>
              <option value={"ease-out"}>Ease Out</option>
              <option value={"ease-in-out"}>Ease-In-Out</option>
              <option value={"linear"}>Linear</option>
            </Select>
            <FormHelperText>Animation Easing</FormHelperText>
          </FormControl>
        </FormGroup>
      </StyledMenu>
      <Hidden mdDown>
        <FormGroup row style={{ alignItems: "center", marginTop: 10 }}>
          <FormControlLabel
            control={
              <Switch
                checked={state.animations}
                onChange={handleChange("animations")}
                value="animations"
                color="primary"
              />
            }
            label="Animations"
            labelPlacement="bottom"
          />
          <FormControl className={classes.formControl} style={{ marginTop: 0 }}>
            <Select
              native
              value={state.lineTypes}
              onChange={handleChangeSelect("lineTypes")}
              inputProps={{
                name: "lineType",
                id: "change-chart-line-type"
              }}
              style={{ padding: 0 }}
            >
              <option value={"linear"}>Linear</option>
              <option value={"monotone"}>Monotone</option>
              <option value={"step"}>Step</option>
              <option value={"stepBefore"}>Step Before</option>
              <option value={"stepAfter"}>Step After</option>
            </Select>
            <FormHelperText>Line Type</FormHelperText>
          </FormControl>
          <FormControl
            className={classes.formControl}
            style={{ marginTop: 0, marginLeft: 10 }}
          >
            <Select
              native
              value={state.legendType}
              onChange={handleChangeSelect("legendType")}
              inputProps={{
                name: "legendType",
                id: "change-chart-legend-type"
              }}
              style={{ padding: 0 }}
            >
              <option value={"line"}>Line</option>
              <option value={"square"}>Square</option>
              <option value={"rect"}>Rect</option>
              <option value={"circle"}>Circle</option>
              <option value={"cross"}>Cross</option>
              <option value={"diamond"}>Diamond</option>
              <option value={"square"}>Square</option>
              <option value={"triangle"}>Triangle</option>
              <option value={"wye"}>Wye</option>
            </Select>
            <FormHelperText>Legend Type</FormHelperText>
          </FormControl>
          <FormControl
            className={classes.formControl}
            style={{ marginTop: 0, marginLeft: 10 }}
          >
            <TextField
              id="standard-number"
              value={state.animationBegin}
              onChange={handleChange("animationBegin")}
              type="number"
              style={{ padding: 0 }}
              inputProps={{
                name: "animationBegin",
                id: "change-chart-animation-begin"
              }}
            />
            <FormHelperText>Animation Begin [ms]</FormHelperText>
          </FormControl>
          <FormControl
            className={classes.formControl}
            style={{ marginTop: 0, marginLeft: 10 }}
          >
            <TextField
              id="standard-number"
              value={state.animationDuration}
              onChange={handleChange("animationDuration")}
              type="number"
              style={{ padding: 0 }}
              inputProps={{
                name: "animationDuration",
                id: "change-chart-animation-duration"
              }}
            />
            <FormHelperText>Animation Duration [ms]</FormHelperText>
          </FormControl>
          <FormControl
            className={classes.formControl}
            style={{ marginTop: 0, marginLeft: 10 }}
          >
            <Select
              native
              value={state.animationEasing}
              onChange={handleChangeSelect("animationEasing")}
              inputProps={{
                name: "animationEasing",
                id: "change-chart-animation-easing"
              }}
              style={{ padding: 0 }}
            >
              <option value={"ease"}>Ease</option>
              <option value={"ease-in"}>Ease In</option>
              <option value={"ease-out"}>Ease Out</option>
              <option value={"ease-in-out"}>Ease-In-Out</option>
              <option value={"linear"}>Linear</option>
            </Select>
            <FormHelperText>Animation Easing</FormHelperText>
          </FormControl>
        </FormGroup>
      </Hidden>
    </div>
  );
}

export default connect(
  null,
  {
    setEnableChartAnimations,
    setLineType,
    setLegendType,
    setAnimationBegin,
    setAnimationDuration,
    setAnimationEasing
  }
)(ChartPropSettings);
