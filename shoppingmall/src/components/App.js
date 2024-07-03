import React from 'react';
import Footer from "./Footer/Footer";
import NavBar from './NavBar/NavBar';
import { BrowserRouter as Router , Routes, Route  } from "react-router-dom";

function App() {
  return (
    <div className="App">   
      <NavBar /> 
      <div style={{ minHeight: '100vh' }}>
        {/* 요청된 경로로 페이지 이동: 특정 컴포넌트 실행 (인라인 문법) */}
        <Router>
          <Routes>
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}
// {/* minheight: 최소 높이 */}
export default App;