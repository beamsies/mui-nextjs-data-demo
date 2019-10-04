import React from "react";
import Router, { useRouter } from "next/router";
import NProgress from "nprogress";
import { useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { FaLightbulb, FaRegLightbulb } from "react-icons/fa";

import AppDrawer from "../AppDrawer";
import { useChangeTheme } from "../ThemeContext";
import ChartPropSettings from "../ChartPropSettings";

Router.events.on("routeChangeStart", () => NProgress.start());

Router.events.on("routeChangeComplete", () => NProgress.done());

Router.events.on("routeChangeError", () => NProgress.done());

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex"
    },
    drawer: {
      [theme.breakpoints.up("md")]: {
        width: drawerWidth,
        flexShrink: 0
      }
    },
    appBar: {
      marginLeft: drawerWidth,
      [theme.breakpoints.up("md")]: {
        width: `calc(100% - ${drawerWidth}px)`
      },
      backgroundColor: theme.palette.background.level1
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("md")]: {
        display: "none"
      },
      color: theme.palette.text.primary
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth
    },
    content: {
      flexGrow: 1,
      display: "flex",
      flexDirection: "column",
      backgroundColor: theme.palette.background.level2,
      minHeight: "100vh",
      maxWidth: "100vw",
      paddingLeft: 20,
      paddingRight: 20,
      [theme.breakpoints.up("md")]: {
        maxWidth: "calc(100% - 260px)"
      }
    },
    avatar: {
      margin: 10
    },
    button: {
      width: "100%",
      textTransform: "none",
      "& a:hover": {
        textDecoration: "none"
      }
    },
    active: {
      color: theme.palette.secondary.main,
      fontWeight: theme.typography.fontWeightMedium
    },
    icon: {
      color: theme.palette.text.primary
    },
    toolbarText: {
      [theme.breakpoints.up("md")]: {
        marginLeft: 20
      },
      color: theme.palette.text.primary
    }
  })
);

interface ResponsiveDrawerProps {
  children?: JSX.Element;
}

export default function ResponsiveDrawer(props: ResponsiveDrawerProps) {
  const { children } = props;
  const theme = useTheme();
  const classes = useStyles();
  const router = useRouter();

  const [mobileOpen, setMobileOpen] = React.useState(false);

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  function handleDrawerOpen() {
    setMobileOpen(true);
  }

  function handleDrawerClose() {
    setMobileOpen(false);
  }

  const changeTheme = useChangeTheme();
  function handleTogglePaletteType() {
    const paletteType = theme.palette.type === "light" ? "dark" : "light";
    changeTheme({ paletteType });
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap className={classes.toolbarText}>
            Charting Demo
          </Typography>
          <div style={{ flexGrow: 1 }} />
          <IconButton
            className={classes.icon}
            aria-label="toggle theme"
            onClick={handleTogglePaletteType}
          >
            {theme.palette.type === "light" ? (
              <FaRegLightbulb />
            ) : (
              <FaLightbulb />
            )}
          </IconButton>
        </Toolbar>
      </AppBar>
      <AppDrawer
        className={classes.drawer}
        onClose={handleDrawerClose}
        onOpen={handleDrawerOpen}
        mobileOpen={mobileOpen}
      />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {router.pathname.includes("line-chart") ||
        router.pathname.includes("area-chart") ? (
          <ChartPropSettings pageTitle={router.pathname} />
        ) : null}
        {children}
        <div
          style={{
            marginTop: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            padding: 40
          }}
        >
          <p
            style={{ fontSize: 16, textAlign: "center", marginTop: 40 }}
            className="text-white"
          >
            by Ben Siewert
          </p>
        </div>
      </main>
    </div>
  );
}
