import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Landing from './pages/Landing/Landing';
import LawsDisplay from './pages/LawsDisplay/LawsDisplay';
import LettersDisplay from './pages/LettersDisplay/LettersDisplay';
import About from './pages/About/About.jsx';
import ResourceDisplay from './pages/ResourceDisplay/ResourceDisplay';
import TemplateFiller from './pages/TemplateFiller/TemplateFiller';
import FinalDownload from './pages/FinalDownload/FinalDownload';
import Preview from "./pages/Preview/Preview";
import Error from "./pages/Error/Error";
import { Navigate } from 'react-router-dom';

function App() {

  // This is from the sample code!
  // const [data, setData] = useState("No data :(");
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
      {/* navigation bar that shows up on all pages except template filler*/}
      {/* {window.location.pathname === '/template-filler' ? null : <NavBar/>} */}
      <Routes>
        {/* All pages below */}
        <Route path='/' element={<Landing />} />
        <Route path='/laws' element={<LawsDisplay />} />
        <Route path='/letters' element={<LettersDisplay />} />
        {/* <Route path='/about' element={<About/>} /> */}
        <Route path='/resources' element={<ResourceDisplay />} />
        <Route path='/template-filler' element={<TemplateFiller />} />
        <Route path='/final-download' element={<FinalDownload />} />
        <Route path='/preview' element={<Preview />} />
        <Route path='/error' element={<Error />}/>
        <Route path="*" element={<Navigate to="/error" replace />} />
      </Routes>
    </Router>

  );
}

export default App;
