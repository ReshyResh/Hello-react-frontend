import Greeting from './components/Greeting';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Greeting/>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
