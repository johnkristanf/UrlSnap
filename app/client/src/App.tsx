import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense } from 'react';

const urlSnapScreen = React.lazy(() => import('./pages/urlSnapScreen'));

const App = () => {

  return(

    <>
      <BrowserRouter basename="/">

        <Suspense fallback={<div>Loading....</div>}>

            <Routes>
               <Route path="/" Component={urlSnapScreen} />

            </Routes>

        </Suspense>

      </BrowserRouter>

    </>

  )
}

export default App;