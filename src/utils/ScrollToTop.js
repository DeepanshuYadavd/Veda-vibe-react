import { useEffect } from "react";
import { useLocation } from "react-router-dom";
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default ScrollToTop;

// explaination:
// useLocation is a hook provided by react-router-dom.
// Specifically, this hook extracts the pathname property from the location object returned by useLocation(). The pathname represents the current URL path or current route.

// now,pathname ko as a dependency use krenge  useEffect ke andar or jab v pathname change hoga (means ki route change hoga) then window scroll hojegi top par.
