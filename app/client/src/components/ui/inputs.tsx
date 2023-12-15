import { urlPattern } from "../../utils/patterns";
import { fetchCustomizableQrCode } from "../../services/qrcode/fetchCustomizableQr";

import React, { useState } from 'react';


export const ShorturlInput = ({ register, placeholder }: any) => {

    return(
        <input {...register("longUrl", { pattern: urlPattern, required: true })} 
        placeholder={placeholder} 
        className="w-full p-3 rounded-md"
        /> 
    )
}



export const QrCodeInput = ({ register }: any) => {

    return(
        <>
            <label className="text-slate-700 text-xl font-bold">Website URL</label>

            <input 
                type="text" 

                {...register("qrCodeURL", { pattern: urlPattern, required: true })} 
                className="w-full p-5 rounded-md bg-violet-700 placeholder:font-bold mt-2 focus:outline-none text-white"

                placeholder="Place a URL below to link with your QR Code"
            />

        </>

    )
}

const displayCustomizableQrCode = async (backgroundColor: string, foregroundColor: string, setCustomizableQrCode: any): Promise<void> => {

  const QrCodeUrl = await fetchCustomizableQrCode(backgroundColor, foregroundColor);

  setCustomizableQrCode(QrCodeUrl);

}

export const QrCodeColorPickerInput = ({ register }: any) => {

    const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');
    const [foregroundColor, setForegroundColor] = useState('#000000');

    const [CustomizableQrCode, setCustomizableQrCode] = useState<string>('');
  
    const handleBackgroundColorChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setBackgroundColor(value);

      await displayCustomizableQrCode(backgroundColor, foregroundColor, setCustomizableQrCode);

    } 
  
    const handleForegroundColorChange = async (e: React.ChangeEvent<HTMLInputElement>) => { 
      const { value } = e.target;
      setForegroundColor(value);

      await displayCustomizableQrCode(backgroundColor, foregroundColor, setCustomizableQrCode);

    }

    console.log('CustomizableQrCode', typeof CustomizableQrCode)
  

    return (

      <div className="my-8 flex flex-col gap-3 relative">

        <label className="font-bold text-slate-700">Background Color</label>

        <div className="relative">

          <input
            type="text"
            value={backgroundColor}
            readOnly
            className="w-1/4 p-2 rounded-md bg-violet-700 text-white"/>

          <input
            type="color"
            className="bg-violet-700 rounded-lg p-2 absolute left-[20%] top-[-12%] mt-2"
            style={{ height: '36px', width: '36px' }}
            
            value={backgroundColor}
            {...register("qrcode_bgcolor", { required: true })} 
            onChange={handleBackgroundColorChange} />


        </div>
  

        <label className="font-bold text-slate-700">Foreground Color</label>
  
        <div className="relative">

          <input
            type="text"
            value={foregroundColor}
            readOnly
            className="w-1/4 p-2 rounded-md bg-violet-700 text-white" />


          <input
            type="color"
            className="bg-violet-700 rounded-lg p-2 absolute left-[20%] top-[-12%] mt-2"
            style={{ height: '36px', width: '36px' }}

            value={foregroundColor}
            {...register("qrcode_foregroundcolor", { required: true })} 
            onChange={handleForegroundColorChange} />

        </div>

        <img src={CustomizableQrCode} />

      </div>

    );

}



export const QrCodeResolutionInput = ({ register }: any) => {


  return (

    <div className="mt-3 flex gap-3">

        <label>Low</label>
        <input type="checkbox" value="L" {...register("resolution", { required: true })} />

        <label>Medium</label>
        <input type="checkbox" value="M" {...register("resolution", { required: true })} />

        <label>High</label>
        <input type="checkbox" value="H" {...register("resolution", { required: true })} />

    </div>

  );
}