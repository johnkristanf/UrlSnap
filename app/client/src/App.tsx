import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense } from 'react';

const shortUrlScreen = React.lazy(() => import('./pages/shortUrlScreen'));

const App = () => {

  return(

    <>
      <BrowserRouter basename="/">

        <Suspense fallback={<div>Loading....</div>}>

            <Routes>
               <Route path="/" Component={shortUrlScreen} />

            </Routes>

        </Suspense>

      </BrowserRouter>

    </>

  )
}

export default App;