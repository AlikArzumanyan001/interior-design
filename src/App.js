import './assets/style/global.scss';
import { Route, Routes } from 'react-router-dom';
import Footer from './pages/Footer';
import Header from './pages/Header';
import Home from './pages/Home';
import Services from './pages/Services';
import Designers from './pages/Designers';
import Packages from './pages/Packages';
import Contact from './pages/Contact';
import useLoading from './hook/useLoading';
import Loader from './loader';

function App() {
  const {loading} = useLoading()

  if(loading){
    return <Loader/>
  }

  return (
    <div className="App">
      <Header/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/designers' element={<Designers/>}/>
      <Route path='/packages' element={<Packages/>}/>
      <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App;
