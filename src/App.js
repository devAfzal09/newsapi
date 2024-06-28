// import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react'
import Navebar from './Components/Navebar';
import News from './Components/News';
// import NewsItems from './Components/NewsItems';
import {
  BrowserRouter as Router,
  Routes, Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () =>{

  
  const pageSize = 6;  
 

  

  const [progress, setProgress] = useState(0)

  
  
    return (
      <div>
        <Router>
        <Navebar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
        // onLoaderFinished={() => setProgress(0)}
        />
        <Routes>
        
        <Route exact path="/" element={<News changeProgress={setProgress} key="general" pageSize={pageSize} country="in" category="general"/>}></Route>
        <Route exact path="/business" element={<News changeProgress={setProgress} key="business" pageSize={pageSize} country="in" category="business"/>}></Route>
        <Route exact path="/entertainment"element={<News changeProgress={setProgress} key="entertainment" pageSize={pageSize} country="in" category="entertainment"/>}></Route>
        <Route exact path="/general" element={<News changeProgress={setProgress} key="general" pageSize={pageSize} country="in" category="general"/>}></Route>
        <Route exact path="/health" element={<News changeProgress={setProgress} key="health" pageSize={pageSize} country="in" category="health"/>}></Route>
        <Route exact path="/science" element={<News changeProgress={setProgress} key="science" pageSize={pageSize} country="in" category="science"/>}></Route>
        <Route exact path="/sports" element={<News changeProgress={setProgress} key="sports" pageSize={pageSize} country="in" category="sports"/>}></Route>
        <Route exact path="/technology" element={<News changeProgress={setProgress} key="technology" pageSize={pageSize} country="in" category="technology"/>}></Route>

        {/* <News changeProgress={setProgress} apikey={apikey}Items/> */}
        </Routes>
        </Router>
      </div>
    )
 
}


export default App;
