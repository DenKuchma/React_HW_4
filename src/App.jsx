import './App.css';
import {
  Route,
  Routes,
} from "react-router-dom";
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import ErrorPage from "./components/Error_page";
import Sidebar_page from './components/Sidebar_page';
import MainContent from './components/MainContent';


const Layout = () => {
  return (
    <div className="wrapper">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};


function App() {
  return(
      <Routes>
        <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
          <Route path="sidebar/*" element={<Sidebar_page/>} />
          <Route path="home/*" element={<MainContent/>} />
        </Route>
      </Routes>
  )
}

export default App;