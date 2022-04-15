import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import LawsDisplay from './pages/LawsDisplay/LawsDisplay'; 
import LettersDisplay from './pages/LettersDisplay/LettersDisplay'; 
import NavBar from './components/NavBar/NavBar';
import Button from './components/Button/Button.jsx';
import TemplateCard from "./components/TemplateCard/TemplateCard";
import './App.css';

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
        <Route path='/landing' element={<Landing/>} />
        <Route path='/laws' element={<LawsDisplay/>} />
        <Route path='/letters' element={<LettersDisplay/>} />
      </Routes>
      
      {/* Edit this all to Button by passing in the props you create! */}
      <div className="testBox">
        <TemplateCard title="title 3" summary="test summary ahhahahahahahahahah"/>
        <TemplateCard title="title 2" summary="test summary numbah 2 ahhahahahahahahahah"/>
        <TemplateCard title="title 3" summary="test summary numbah 3 oh baby"/>
      </div>
    </Router>
    
  );
}

export default App;
