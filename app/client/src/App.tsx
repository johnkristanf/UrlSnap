import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense } from 'react';

const shortUrlScreen = React.lazy(() => import('./pages/shortUrlScreen'));

const qrCodeScreen = React.lazy(() => import('./pages/qrCodeScreen'));


const App = () => {

  return(

    <>
      <BrowserRouter basename="/">

        <Suspense fallback={<div>Loading....</div>}>

            <Routes>
               <Route path="/" Component={shortUrlScreen} />
               <Route path="/qrcode-generator" Component={qrCodeScreen} />

            </Routes>

        </Suspense>

      </BrowserRouter>

    </>

  )
}

export default App;