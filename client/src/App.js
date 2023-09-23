import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SpendLifeSpanApp from './pages/SpendLifeSpanApp';
import Header from './components/Header';
import SetLifeAmount from './pages/SetLifeAmount';
import Admin from './pages/admin/Admin';
import NoMatch from './components/NoMatch';

function App() {
  return (
    <div className="bg-gray-200 p-3">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<SpendLifeSpanApp/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/setLife' element={<SetLifeAmount/>}/>
        <Route path="*" element={<NoMatch/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
