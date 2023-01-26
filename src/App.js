import './App.css';
import Footer from './Pages/footer/Footer';
import Home from './Pages/home/Home';
import Header from './Pages/Navbar/Header';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import "E:/Projects/material ui/wallet/node_modules/bootstrap/dist/js/bootstrap.min.js"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Contact from './Pages/contactUs/components/Contact';
import Service from './Pages/contactUs/components/Service';
import About from './Pages/contactUs/components/About';
import AddRecord from './Pages/contactUs/components/AddRecord';
import Login from './Pages/contactUs/components/Login';
import SignUp from './Pages/contactUs/components/SignUp';
function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="Contact" element={<Contact/>}/>
    <Route path="Service" element={<Service/>}/>
    <Route path="About" element={<About/>}/>
    <Route path="AddRecord" element={<AddRecord/>}/>
    <Route path="Login" element={<Login/>}/>
    <Route path="SignUp" element={<SignUp/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
