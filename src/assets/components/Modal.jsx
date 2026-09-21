import { useEffect } from "react";

const Modal = () => {
  useEffect(() => {
    const itnervalId = setInterval(() => {
      console.log(`${Date.now()}`);
    }, 2000);
    return () => {
      clearInterval(itnervalId);
    };
  }, []);
  return (
    <div>
      <p>Is Open</p>
    </div>
  );
};

export default Modal;
