import React from "react";
import Paper from "@material-ui/core/Paper";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

import { IReactChildren } from "../../interfaces";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(3, 2),
      overflowX: "auto",
      maxWidth: "100vw",
    }
  })
);

interface IWidgetProps extends IReactChildren {
  classNames?: string;
}

const ChartWidget = ({ children, classNames }: IWidgetProps) => {
  const classes = useStyles();

  return (
    <Paper
      className={clsx(classes.root, classNames)}
    >
      {children}
    </Paper>
  );
};

export default ChartWidget;
