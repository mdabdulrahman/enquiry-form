import './index.css';
import Header from './components/Header';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Form from './components/Form';
import Success from './components/Success';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={
        <>
        <div className='font-laila'>
<Header/>
<Form/>
        </div>
        </>
      }/>
      <Route exact path='/success' element={
        <>
        <div className='font-laila'>
          <Header/>
          <Success/>
        </div>
        </>
      }/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
