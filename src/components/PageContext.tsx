import React from "react";

const PageContext = React.createContext({
  activePage: {
    pathname: ""
  },
  pages: []
});

export default PageContext;
