import  { OptionsBtn }  from "../ui/button";
import { SetselectedQrCodeOption } from "../../utils/interface/qrcodes";

import React from "react";


const QrOptions: React.FC<SetselectedQrCodeOption> = ({ setselectedQrCodeOption }) => {


    return(

        <div className="bg-slate-200 mt-12 p-5 rounded-md h-[50%] w-1/4 flex flex-col gap-5">
            <h1 className="text-center font-bold text-xl">Qr Code Options</h1>
            <OptionsBtn setselectedQrCodeOption={setselectedQrCodeOption} />
        </div>
        
    )
}

export default QrOptions