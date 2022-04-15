import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import LawsDisplay from './pages/LawsDisplay/LawsDisplay'; 
import LettersDisplay from './pages/LettersDisplay/LettersDisplay'; 
import NavBar from './components/NavBar/NavBar';
import ResourceDisplay from './pages/ResourceDisplay/ResourceDisplay'; 
import TemplateFiller from './pages/TemplateFiller/TemplateFiller'; 

const API_URL = process.env.REACT_APP_API;

function App() {
  const [data, setData] = useState("No data :(");

  // This is from the sample code!
  // useEffect(() => {
  //   async function getData() {
  //     const url = `${API_URL}/hello`;
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     setData(data.msg);
  //   }
  //   getData();
  // }, []);

  return (
    <Router>
      {/* all the pages */}
      <NavBar/>
      <Routes>
        {/* add logged in variables to each game page  */}
        <Route path='/' element={<Landing/>} />
        <Route path='/laws' element={<LawsDisplay/>} />
        <Route path='/letters' element={<LettersDisplay/>} />
        <Route path='/resources' element={<ResourceDisplay/>} />
        <Route path='/template-filler' element={<TemplateFiller/>} />
      </Routes>

    </Router>
  );
}

export default App;
