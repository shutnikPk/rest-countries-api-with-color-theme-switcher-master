import axios from "axios";
import { useState, useEffect } from "react"
import { Routes, Route, Link } from 'react-router-dom'

import Header from "./components/Header";
import Main from "./components/Main";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import Details from "./pages/Details";


function App() {

  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/country/:name" element={<Details />} />
          <Route path="*" element={<NotFound />} />

        </Routes>
      </Main>
    </>
  )
}

export default App;
