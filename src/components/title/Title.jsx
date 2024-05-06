import "./Title.scss";
import { Link } from "react-router-dom";

export default function Title({ description }) {
  return (
    <div className="title">
      <Link className="title__title-text" to="/">
        Eric Frisk
      </Link>
      <p className="title__description">{description}</p>
      <div className="title__underline"></div>
    </div>
  );
}
