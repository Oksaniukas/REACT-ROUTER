import React from "react";
import { Routes, Route} from 'react-router-dom';
import { Help } from "./pages/Help";
import { Join } from "./pages/JoinUs";
import { SignIn } from "./pages/SignIn";
import { FirstPage } from "./pages/FirstPage";
import { NotFound } from "./pages/NotFound"
import { Layout } from "./components/Layout";

function App() {
  return (
    <div className="app-wrapper">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<FirstPage />} />
          <Route path="/help" element={<Help />} />
          <Route path="/joinus" element={<Join />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;
