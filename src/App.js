import Bejelentkezes from "./pages/Bejelentkezes";
import Kezdolap from "./pages/Kezdolap";
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";
import Regisztracio from "./pages/Regisztracio";
import React from 'react';
import {Route, Routes} from "react-router-dom";

function App() {
  return(
      <Routes>
      <Route path="/" element={<Layout />}>
          <Route index element={<Kezdolap />} />
          <Route path="bejelentkezes" element={<Bejelentkezes />} />
          <Route path="regisztracio" element={<Regisztracio />} />
          <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  );
}

export default App;
