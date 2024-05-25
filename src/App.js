import AppContext from "./context/Context.js"
import {Route,Routes,BrowserRouter} from "react-router-dom";
import Home from './components/home/home';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';

function App() {
  return (
    <>
      <BrowserRouter>
      <AppContext>
      <Navbar/>
        <Routes>
          <Route path='/' element={<><Home/><Footer/></>} />
        </Routes>
        </AppContext>
      </BrowserRouter>
    </>
  );
}

export default App;
