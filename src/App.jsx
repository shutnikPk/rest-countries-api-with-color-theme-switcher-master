import Layout from "./components/Layout"

import { Routes, Route, Link } from 'react-router-dom'

import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import Details from "./pages/Details";
import { useState } from "react";



function App() {

  const [countries, setCountries] = useState([])

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="" element={<HomePage countries={countries} setCountries={setCountries} />} />
          <Route path="country/:name" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;
