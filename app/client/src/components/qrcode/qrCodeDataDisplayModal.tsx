

export const QrCodeDataDisplayModal = ({ qrCodeData }: any) => {

    // const imageData = `data:image/png;base64,${qrCodeData.qrCode}`;

    return(

    <>
        <div className="bg-gray-800 w-full h-screen fixed top-0 z-[500] opacity-75"></div>

        <div className="w-full h-screen fixed top-0 z-[600] flex justify-center py-16">

            <div className="bg-slate-200 w-[60%] rounded-md flex justify-evenly items-center">

                <img src={qrCodeData.qrCode} width={150} />

                <div className="flex flex-col">

                   <label className="font-bold text-slate-700">Qr Code Long URL</label>
                   <h1 className="font-bold text-xl text-violet-700">{qrCodeData.qrCodeLongURL}</h1>

                   <label className="font-bold text-slate-700">Qr Code Short URL</label>
                   <h1 className="font-bold text-xl text-violet-700">http://localhost:8000/{qrCodeData.qrCodeShortURL}</h1>

                </div>

            </div>

        </div>

    </>

    )
}