import logo from './logo.svg';
import './App.css';
import Home from './components/Home.js';
import Register from './components/Register';
import OrderList from './components/OrderList';
import ClientHome from './components/ClientHome';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/register' element={<Register/>}/>
                    <Route path='/client_home' element={<ClientHome/>}/>
                    <Route path='/order_list' element={<OrderList/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
