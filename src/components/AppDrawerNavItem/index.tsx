import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Button from "@material-ui/core/Button";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import Link from "../Link";

const useStyles = makeStyles(theme => ({
  item: {
    display: "block",
    paddingTop: 0,
    paddingBottom: 0
  },
  itemLeaf: {
    display: "flex",
    paddingTop: 0,
    paddingBottom: 0
  },
  listItemIcon: {
    minWidth: "auto"
  },
  button: {
    letterSpacing: 0,
    padding: "15px 10px",
    justifyContent: "space-between",
    textTransform: "none",
    width: "100%"
  },
  buttonLeaf: {
    letterSpacing: 0,
    justifyContent: "flex-start",
    textTransform: "none",
    width: "100%",
    fontWeight: theme.typography.fontWeightRegular,
    "&.depth-0": {
      fontWeight: theme.typography.fontWeightMedium
    }
  },
  active: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium
  }
}));

function AppDrawerNavItem(props: any) {
  const {
    children,
    depth,
    href,
    onClick,
    openImmediately = true,
    topLevel = false,
    title,
    linkProps,
    leafIcon,
    ...other
  } = props;
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen((oldOpen: boolean) => !oldOpen);
  };

  const style = {
    paddingLeft: 8 * (3 + 2 * depth)
  };

  if (href) {
    return (
      <ListItem className={classes.itemLeaf} disableGutters {...other}>
        <Button
          component={Link}
          naked
          activeClassName={`drawer-active ${classes.active}`}
          href={href}
          className={clsx(classes.buttonLeaf, `depth-${depth}`)}
          disableTouchRipple
          onClick={onClick}
          style={style}
          {...linkProps}
        >
          {title}
        </Button>
      </ListItem>
    );
  }

  return (
    <ListItem className={classes.item} disableGutters {...other}>
      <Button
        classes={{
          root: classes.button,
          label: topLevel ? "algolia-lvl0" : ""
        }}
        onClick={handleClick}
        style={style}
      >
        {leafIcon ? (
          <ListItemIcon className={classes.listItemIcon}>
            {leafIcon}
          </ListItemIcon>
        ) : null}

        {title}
        {open ? <ExpandLess /> : <ExpandMore />}
      </Button>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {children}
      </Collapse>
    </ListItem>
  );
}

export default AppDrawerNavItem;
