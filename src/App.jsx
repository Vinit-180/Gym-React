import { BrowserRouter,Routes, Route } from "react-router-dom";

import Home from "./Pages/home/home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Gallery from "./Pages/Gallery/Gallery";
import NotFound from "./Pages/NotFound/NotFound";
import Plans from "./Pages/Plans/Plans";
import Trainers from "./Pages/Trainers/Trainers";
import Navbar from "./components/Navbar";
import Footer from './components/Footer'

const App = () => {
  return (
    <BrowserRouter>
    {/* <div> */}
    <Navbar/>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path='/about' element={<About/>}  />
      <Route path='/Contact' element={<Contact/>}  />
      <Route path='/Gallery' element={<Gallery/>}  />
      <Route path='*' element={<NotFound/>}  />
      <Route path='/Plans' element={<Plans/> }  />
      <Route path='/Trainers' element={<Trainers/>}  />
    </Routes>
    <Footer/>
        {/* <About/>

        */}

    {/* </div> */}
    </BrowserRouter>
    // <div>React Website</div>
  )
}

export default App;