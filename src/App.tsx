import './App.css';
import {
  Alignment,
  AnchorButton,
  Classes,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
} from "@blueprintjs/core";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShapesEditor from './components/ShapesEditor';
import Applications from './pages/applications';
import Home from './pages/home';
function App() {
  return (
    <div className="App">
         <Navbar>
              <NavbarGroup align={Alignment.LEFT}>
                  <NavbarHeading>
                  <AnchorButton className={Classes.MINIMAL} href="/" icon="home" text="" />

                  </NavbarHeading>
                  <NavbarDivider />
                  <AnchorButton 
                        text="Unboxable" 
                        href="https://www.unboxable.com" 
                        target="_blank" icon="cube" className={Classes.MINIMAL} /> 
                  <NavbarDivider />
                  <AnchorButton className={Classes.MINIMAL} href="/applications" icon="applications" text="Applications" />
              </NavbarGroup>
          </Navbar>
          <BrowserRouter>
              <Routes>
                  <Route path="/applications/shapes" element={ <ShapesEditor storeLocally={true} />} />
                  <Route path="/applications" element={ <Applications/> }/>
                  <Route path="/" element={<Home/>}/>
              </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
