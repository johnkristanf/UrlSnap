import { urlPattern } from "../../utils/patterns";

import React, { useState } from 'react';


export const ShorturlInput = ({ register, placeholder }: any) => {

    return(
        <input {...register("longUrl", { pattern: urlPattern, required: true })} 
        placeholder={placeholder} 
        className="w-full p-3 rounded-md"
        /> 
    )
}



export const QrCodeInput = () => {

    return(
        <>
            <label className="text-slate-700 text-xl font-bold">Website URL</label>

            <input 
                type="text" 
                className="w-full p-5 rounded-md bg-violet-700 placeholder:font-bold mt-2 
                focus:outline-none text-white"

                placeholder="Place a URL below to link with your QR Code"
            />

        </>

    )
}


export const QrCodeColorPickerInput = () => {

    const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');
    const [foregroundColor, setForegroundColor] = useState('#000000');
  
    const handleBackgroundColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setBackgroundColor(e.target.value);
    };
  
    const handleForegroundColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setForegroundColor(e.target.value);
    };
  

    return (

      <div className="my-8 flex flex-col gap-3 relative">

        <label className="font-bold text-slate-700">Background Color</label>

        <div className="relative">

          <input
            type="text"
            value={backgroundColor}
            className="w-1/4 p-2 rounded-md bg-violet-700 text-white"/>

          <input
            type="color"
            className="bg-violet-700 rounded-lg p-2 absolute left-[20%] top-[-12%] mt-2"
            style={{ height: '36px', width: '36px' }}
            value={backgroundColor}
            onChange={handleBackgroundColorChange} />


        </div>
  

        <label className="font-bold text-slate-700">Foreground Color</label>
  
        <div className="relative">

          <input
            type="text"
            value={foregroundColor}
            className="w-1/4 p-2 rounded-md bg-violet-700 text-white" />


          <input
            type="color"
            className="bg-violet-700 rounded-lg p-2 absolute left-[20%] top-[-12%] mt-2"
            style={{ height: '36px', width: '36px' }}
            value={foregroundColor}
            onChange={handleForegroundColorChange} />

        </div>

      </div>

    );

}



export const QrCodeResolutionInput = () => {

    return(

        <>
          <label className="font-bold text-slate-700">Resolution</label>

          <div className="mt-3 flex gap-3">

            <label>Low</label>
             <input type="radio" name="Low"/>

              <label>Medium</label>
               <input type="radio" name="Medium"/>

               <label>High</label>
                <input type="radio" name="High"/>

          </div>

        </>

    )
}