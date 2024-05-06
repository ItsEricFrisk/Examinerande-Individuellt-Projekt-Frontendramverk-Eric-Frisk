import Nav from "./components/nav/Nav";
import "./App.scss";
import Title from "./components/title/Title";
import { Outlet } from "react-router-dom";
import Theme from "./components/themeToggle/Theme";
import { useSelector } from "react-redux";

function App() {
  const theme = useSelector((state) => state.theme);

  return (
    <main className={`main ${theme}`}>
      <Theme />
      <Nav />
      <section className="main__infomation">
        <Title description={"A web developer in the making"} />
      </section>
      <section className="container">
        <Outlet />
      </section>
    </main>
  );
}

export default App;
