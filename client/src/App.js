import { useEffect, useState } from "react";
import Button from './components/Button/Button.jsx';

const API_URL = process.env.REACT_APP_API;

function App() {
  const [data, setData] = useState("No data :(");

  // This is from the sample code!
  useEffect(() => {
    async function getData() {
      const url = `${API_URL}/hello`;
      const response = await fetch(url);
      const data = await response.json();
      setData(data.msg);
    }
    getData();
  }, []);

  return (
    <>
      <h1>EARTH LAW CENTER x H4I INITIAL CODE</h1>
      {/* Edit this all to Button by passing in the props you create! */}
      <Button />
    </>

  );
}

export default App;
