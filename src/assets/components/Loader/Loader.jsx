import { DotLoader } from "react-spinners";
import s from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={s.wrapperLoader}>
      <DotLoader className={s.loader} />
    </div>
  );
};

export default Loader;
