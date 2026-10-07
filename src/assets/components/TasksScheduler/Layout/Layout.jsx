import s from "./Layout.module.css";
const Layout = ({ children }) => {
  return <div className={s.mainContainer}>{children}</div>;
};

export default Layout;
