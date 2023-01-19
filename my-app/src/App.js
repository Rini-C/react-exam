import Header from './Shared Documents/Header/Header';
import Add from './Shared Documents/Add/Add';
import View from './Shared Documents/View/View';
import Edit from './Shared Documents/Edit/Edit';
import Data from './Shared Documents/Data';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path='/Add' element={<Add/>} />
    <Route path='/' element={<View/>} />
    <Route path='/Edit' element={<Edit/>} />
    <Route path='/Data' element={<Data/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
