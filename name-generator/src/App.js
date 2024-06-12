import "./App.css";
import Navbar from "./Components/Navbar";
import Display from "./Components/Display";
import Result from "./Components/Result";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useState from 'react'

 function App() {
 
  const [newArr, setNewArr] = useState([]);


  return (
    <>
     <BrowserRouter>
        <Navbar/>

        <Routes>
          <Route
            exact
            path="/"
            element={
              <Display onClick={generateName}/>
            }
          ></Route>

          <Route exact path="/result" element={<Result/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;


export async function generateName() {


  const userInput = document.querySelector('.busVal').value;
  const URL = `https://api.datamuse.com/words?rel_syn=${userInput}`;
  let response = await fetch(URL);
  let result = await response.json();
  setNewArr(result.word);
  console.log(newArr);

  return <Result/>


//  newArr.map((e) => {
//      return <Result res={e}/>
//  })

}