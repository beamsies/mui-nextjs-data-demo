import React from "react";
import App, { Container } from "next/app";
import { NextPage } from "next";
import { Provider as ReduxProvider } from "react-redux";
import { useRouter } from "next/router";
import Head from "next/head";
import find from "lodash/find";
import CssBaseline from "@material-ui/core/CssBaseline";

import ResponsiveDrawer from "../src/components/AppLayout";
import pages from "../src/pages";
import PageContext from "../src/components/PageContext";
import { ThemeProvider } from "../src/components/ThemeContext";
import initRedux from "../src/state/redux/initRedux";

function findActivePage(currentPages: any, pathname: string): any {
  const activePage: any = find(currentPages, page => {
    if (page.children) {
      if (pathname.indexOf(`${page.pathname}/`) === 0) {
        // Check if one of the children matches (for /components)
        return findActivePage(page.children, pathname);
      }
    }

    // Should be an exact match if no children
    return pathname === page.pathname;
  });

  if (!activePage) {
    return null;
  }

  // We need to drill down
  if (activePage.pathname !== pathname) {
    return findActivePage(activePage.children, pathname);
  }

  return activePage;
}

function AppWrapper(props: any) {
  const { children } = props;
  const router = useRouter();
  let pathname = router.pathname;

  const [redux] = React.useState(() => initRedux());

  const activePage = findActivePage(pages, pathname);

  return (
    <Container>
      <Head>
        <title>Charts Demo | Ben Siewert</title>
      </Head>
      <ReduxProvider store={redux}>
        <PageContext.Provider value={{ activePage, pages }}>
          <ThemeProvider>{children}</ThemeProvider>
        </PageContext.Provider>
      </ReduxProvider>
    </Container>
  );
}

class MyApp extends App<NextPage> {  

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentNode!.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <AppWrapper>
        <CssBaseline />
        <ResponsiveDrawer>
          <Component {...pageProps} />
        </ResponsiveDrawer>
      </AppWrapper>
    );
  }
}

export default MyApp;
