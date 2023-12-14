import { NavBar } from "../components/navbar";
import { Footer } from "../components/footer";

import { QrOptions } from "../components/qrcode/qrOptions";

import { QrCodeDescription } from "../components/qrcode/qrDescription";
import { CustomQrCodeForm } from "../components/qrcode/customQrcodeForm";

import { QueryClient, QueryClientProvider } from "react-query";

const qrCodeScreen = () => {

    const queryClient = new QueryClient();

    return(
        
        <>
        <NavBar />

            <div className="mt-8 pb-24 flex flex-col justify-start items-center w-full h-[110vh]">

                <QrCodeDescription />

                <div className="w-full flex justify-around h-full">

                    <QrOptions />

                    <QueryClientProvider client={queryClient}>
                        <CustomQrCodeForm />

                    </QueryClientProvider>
                  
                </div>

              
            </div>

        <Footer />
        </> 
    )
}

export default qrCodeScreen;