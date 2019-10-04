import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

import AppDrawerNavItem from "../AppDrawerNavItem";
import PageContext from "../PageContext";
import { pageToTitle } from "../../utils/helpers";
import Link from "../Link";

const drawerWidth = 260;

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
      }
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("md")]: {
        display: "none"
      }
    },
    toolbar: {
      ...theme.mixins.toolbar,
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center"
    },
    drawerPaper: {
      width: drawerWidth
    },
    content: {
      flexGrow: 1
    },
    avatar: {
      margin: "0px 20px"
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
      color: theme.palette.primary.main
    }
  })
);

function renderNavItems(options: any) {
  const { pages, ...params } = options;

  return (
    <List>
      {pages.reduce(
        (items: any, page: any) =>
          reduceChildRoutes({ items, page, ...params }),
        []
      )}
    </List>
  );
}

interface IChildRoutes {
  props: any;
  activePage: any;
  items: any;
  page: any;
  depth: any;
}

function reduceChildRoutes({
  props,
  activePage,
  items,
  page,
  depth
}: IChildRoutes) {
  if (page.displayNav === false) {
    return items;
  }

  if (!activePage) {
    return items;
  }

  if (page.children && page.children.length > 1) {
    const title = pageToTitle(page);
    const topLevel = activePage.pathname.indexOf(`${page.pathname}/`) === 0;

    items.push(
      <AppDrawerNavItem
        linkProps={page.linkProps}
        depth={depth}
        key={title}
        topLevel={topLevel && !page.subheader}
        openImmediately={topLevel || Boolean(page.subheader)}
        title={title}
        leafIcon={page.icon}
      >
        {renderNavItems({
          props,
          pages: page.children,
          activePage,
          depth: depth + 1
        })}
      </AppDrawerNavItem>
    );
  } else {
    const title = pageToTitle(page);
    page =
      page.children && page.children.length === 1 ? page.children[0] : page;

    items.push(
      <AppDrawerNavItem
        linkProps={page.linkProps}
        depth={depth}
        key={title}
        title={title}
        href={page.pathname}
        onClick={props.onClose}
      />
    );
  }

  return items;
}

export default function AppDrawer(props: any) {
  const classes = useStyles();
  const { mobileOpen, onClose } = props;
  const { activePage, pages } = React.useContext(PageContext);

  const drawer = (
    <>
      <Link onClick={onClose} href="/">
        <div className={classes.toolbar}>
          <Avatar
            alt=""
            src="/static/bp-logo-new.svg"
            className={classes.avatar}
          />
          <Typography variant="subtitle1" component="h6">
            Charting Demo!
          </Typography>
        </div>
      </Link>

      <Divider />
      {renderNavItems({ props, pages, activePage, depth: 0 })}
    </>
  );

  return (
    <nav className={classes.drawer} aria-label="main navigation">
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Hidden smUp implementation="css">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={onClose}
          classes={{
            paper: classes.drawerPaper
          }}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper
          }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  );
}
