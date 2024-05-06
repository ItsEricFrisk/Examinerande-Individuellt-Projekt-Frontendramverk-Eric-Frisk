import "./Theme.scss";

import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../../redux/actions/actions";

export default function Theme() {
  const dispatch = useDispatch();
  const currentTheme = useSelector((state) => state.theme);

  const toggleTheme = () => {
    const newTheme =
      currentTheme === "primary-image" ? "secondary-image" : "primary-image";
    dispatch(setTheme(newTheme));
  };

  return (
    <button onClick={toggleTheme} className="theme-toggle">
      Change background
    </button>
  );
}
