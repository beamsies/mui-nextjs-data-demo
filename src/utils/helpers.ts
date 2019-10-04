import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";

function titleize(string: string) {
  return string
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function pageToTitle(page: any) {
  if (page.title === false) {
    return null;
  }

  if (page.title) {
    return page.title;
  }

  const path = page.subheader || page.pathname;
  const name = path.replace(/.*\//, "");

  if (path.indexOf("/api/") !== -1) {
    return upperFirst(camelCase(name));
  }

  return titleize(name);
}

function getCookie(name: any) {
  const regex = new RegExp(`(?:(?:^|.*;*)${name}*=*([^;]*).*$)|^.*$`);
  return document.cookie.replace(regex, "$1");
}

export { pageToTitle, getCookie };
