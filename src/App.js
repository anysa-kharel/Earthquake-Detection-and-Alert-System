
import './App.css';
import Navbar from './components/Navbar';
import {Routes , Route} from 'react-router-dom';
import Home from './pages/Home';
import LiveData from './pages/LiveData';

function App() {
  return (
<>
<Navbar/>
<Routes>
     
     <Route index element={<Home/>}/>
     <Route exact path="/live-data" element={<LiveData/>}/>
     <Route exact path="/home" element={<Home/>}/>

 </Routes>


</>
  );
}

export default App;
