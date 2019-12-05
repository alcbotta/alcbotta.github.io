import React, { Suspense } from "react";
import DefaultLayout from "./containers/layout/DefaultLayout";

import './App.css';
function App() {
  return (
    <Suspense fallback="loading">
      <DefaultLayout />
    </Suspense>
  );
}


export default App;
