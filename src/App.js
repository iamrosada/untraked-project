import NavbarGlobal from "./components/content";
import "./styles/global/style.css";

function App() {
  return (
    <>
      <NavbarGlobal />
      <Content />
    </>
  );
}

const Content = () => {
  return <div id="content"></div>;
};

export default App;
