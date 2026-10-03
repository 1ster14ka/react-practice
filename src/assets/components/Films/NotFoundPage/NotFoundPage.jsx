import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <p>Not Found</p>
      <Link to="/">Go Home</Link>
    </div>
  );
};

export default NotFoundPage;
