import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Alluser from './components/Alluser';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<Alluser/>}/>
        <Route exact path='/all' element={<Alluser/>}/>
        <Route exact path='/add' element={<AddUser/>}/>
        <Route exact path='/edit/:id' element={<EditUser/>}/>
      </Routes>
      </BrowserRouter>
   
   
    </div>
  );
}

export default App;
