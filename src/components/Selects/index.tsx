import React from "react";
import { connect } from "react-redux";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
// import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
// import NativeSelect from '@material-ui/core/NativeSelect';

import { setLineType } from "../../state/redux/actions";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      // display: 'flex',
      // flexWrap: 'wrap',
    },
    formControl: {
      // margin: theme.spacing(1),
      minWidth: 120
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    }
  })
);

function NativeSelects(props: any) {
  const classes = useStyles();
  const [state, setState] = React.useState<{ name: string; lineType: string }>({
    name: "",
    lineType: "monotone"
  });

  // const inputLabel = React.useRef<HTMLLabelElement>(null);
  // const [labelWidth, setLabelWidth] = React.useState(0);
  // React.useEffect(() => {
  //   setLabelWidth(inputLabel.current!.offsetWidth);
  // }, []);

  const handleChange = (name: keyof typeof state) => (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setState({
      ...state,
      [name]: event.target.value
    });
    props.setLineType(String(event.target.value));
  };

  return (
    <>
      <FormControl className={classes.formControl} style={{ marginTop: 0 }}>
        {/* <InputLabel htmlFor="age-native-simple">Age</InputLabel> */}
        <Select
          native
          value={state.lineType}
          onChange={handleChange("lineType")}
          inputProps={{
            name: "lineType",
            id: "change-chart-line-type"
          }}
          style={{ padding: 0 }}
        >
          {/* <option value={"basisClosed"}>Basis Closed</option>
          <option value={"basisOpen"}>Basis Open</option> */}
          <option value={"linear"}>Linear</option>
          {/* <option value={"linearClosed"}>Linear Closed</option> */}
          <option value={"natural"}>Natural</option>
          <option value={"monotone"}>Monotone</option>
          <option value={"basis"}>Basis</option>
          <option value={"step"}>Step</option>
          <option value={"stepBefore"}>Step Before</option>
          <option value={"stepAfter"}>Step After</option>
        </Select>
        <FormHelperText>Line Type</FormHelperText>
      </FormControl>
    </>
  );
}

export default connect(
  null,
  { setLineType }
)(NativeSelects);
