import NavbarGlobal from "./components/content";
import SidebarWithHeader from "./components/sidebar";
import "./styles/global/style.css";

function App() {
  return (
    <>
      {/* <NavbarGlobal /> */}
      <Content />
      <SidebarWithHeader />
    </>
  );
}

const Content = () => {
  return <div id="content"></div>;
};

export default App;
