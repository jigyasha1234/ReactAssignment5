import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import LandingPage from './LandingPage'
import PostView from './PostView';
import Nav from './Nav'
function App() {
  return (
    <>
      <div className="app">
        <Router>
          <Nav />
          <Routes>
            <Route path='/' exact element={<LandingPage />} />
            <Route path='/posts' element={<PostView />} />
          </Routes>
        </Router>
      </div>
    </>

  );

}
// const Home = () => {
//   <div>
//     <h1>Home Page</h1>
//   </div>
// }

export default App;