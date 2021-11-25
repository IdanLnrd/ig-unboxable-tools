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
function App() {
  return (
    <div className="App">
         <Navbar>
              <NavbarGroup align={Alignment.LEFT}>
                  <NavbarHeading>IG</NavbarHeading>
                  <NavbarDivider />
                  <AnchorButton className={Classes.MINIMAL} href="/" icon="home" text="" />
                  <NavbarDivider />
                  <AnchorButton className={Classes.MINIMAL} href="/shapes" icon="shapes" text="Shapes" />
              </NavbarGroup>
          </Navbar>
          <BrowserRouter>
              <Routes>
                  <Route path="/shapes" element={<ShapesEditor />} />
              </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
