import { QrCodeInput } from "../ui/inputs";
import { QrCodeColorPickerInput } from "../ui/inputs";
import { QrCodeResolutionInput } from "../ui/inputs";

import { GenerateQrBtn } from "../ui/button";

export const CustomQrCodeForm = () => {

    return(
        <>
            <div className="bg-slate-200 p-8 mt-8 w-[60%] h-[93%] rounded-md">

                <form action="#" method="post">
                   <QrCodeInput />

                   <QrCodeColorPickerInput />

                   <QrCodeResolutionInput />

                   <GenerateQrBtn />

                </form>
               
            </div>
        </>
    )
}