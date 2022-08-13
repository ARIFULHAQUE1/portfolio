
import {Routes,Route} from 'react-router-dom'
import About from './Pages/Home/About';
import Blog from './Pages/Home/Blog';
import Contact from './Pages/Home/Contact';
import Home from './Pages/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
