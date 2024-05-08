import "./Theme.scss";

import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../../redux/actions/actions";

export default function Theme() {
  const dispatch = useDispatch();
  const currentTheme = useSelector((state) => state.theme);

  // Function to toggle the theme
  const toggleTheme = () => {
    const newTheme =
      // If the current theme is primary-image, set the new theme to secondary-image
      currentTheme === "primary-image" ? "secondary-image" : "primary-image";
    // Dispatch the new theme
    dispatch(setTheme(newTheme));
  };

  return (
    <button onClick={toggleTheme} className="theme-toggle">
      Change background
    </button>
  );
}
