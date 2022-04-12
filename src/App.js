import NavbarGlobal from "./components/content";
import SidebarWithHeader from "./components/sidebar";
import "./styles/global/style.css";
import { BrowserRouter as Router } from "react-router-dom";
import { RoutesFunction } from "./routes";
import { useState } from "react";
import AppContext from './AppContext'
const {Provider} = AppContext;
function App() {
  const [openPage, setOpenPage] = useState(false)
  return (
<Provider value={[openPage,setOpenPage]}>
       <Router>
          {/* <NavbarGlobal /> */}
          {/* <Content /> */}
          
          <SidebarWithHeader>
          <RoutesFunction />
          </SidebarWithHeader>
       
      </Router>
</Provider>
     
 
  );
}

// const Content = () => {
//   return <div id="content"></div>;
// };

export default App;
