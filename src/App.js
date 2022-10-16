import './index.css';
import Footer from './components/Footer';
import Header from './components/Header';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Form from './components/Form';
import Success from './components/Success';
import View from './components/View';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={
        <>
        <div className='font-laila'>
<Header/>
<Form/>
<Footer/>
        </div>
        </>
      }/>
      <Route exact path='/success' element={
        <>
        <div className='font-laila'>
          <Header/>
          <Success/>
          <Footer/>
        </div>
        </>
      }/>
      <Route exact path='/view' element={
        <>
        <div className='font-laila'>
<Header/>
<View/>
<Footer/>
        </div>
        </>
      }/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
