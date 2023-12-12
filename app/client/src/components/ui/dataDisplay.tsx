import { DataDisplayBtn } from "./button";

export const DataDisplay = () => {

    return(
        <div className="flex justify-between w-1/2 mt-5 bg-slate-200 p-5 rounded-md">
            <div className="w-1/4 text-ellipsis overflow-hidden font-semibold whitespace-nowrap">https://tailwindcss.com/docs/width</div>
            <div className="font-semibold">snap.vercel.app/qi30kr</div>

            <DataDisplayBtn />
        </div>
    )
}