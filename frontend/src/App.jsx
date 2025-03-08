import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserDetails from './components/UserDetails';
import Home from "./components/Home";
import Update from './components/Update';
function App() {
  return (
     <>
       <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
       <Route path="/users/:id" element={<UserDetails />} />
        <Route path='/user/:id' element={<Update/>}/>
      </Routes>
    </Router>
     </> 
  );
}

export default App;



