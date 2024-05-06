import { Link } from "react-router-dom";
import "./ErrorPage.scss";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="errorContainer">
      <h1 className="errorContainer__title">Oh no..</h1>
      <p className="errorContainer__message">
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to={"/"} className="errorContainer__btn">
        Go back
      </Link>
    </div>
  );
}
