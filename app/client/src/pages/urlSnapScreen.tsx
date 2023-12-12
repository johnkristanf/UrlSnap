import { NavBar } from "../components/navbar";
import { ServicesForm } from "../components/ui/ServicesForm";
import { DataDisplay } from "../components/ui/dataDisplay";

export default () => {

    return(
        <>
          <NavBar />

            <div className="mt-12 flex flex-col justify-start items-center w-full h-[80vh]">
                <h1 className="text-white text-5xl font-semibold">Free Url Snap</h1>
                <h1 className="text-white font-semibold opacity-75 mt-5">URLSnap efficiently transforms extensive web URLs into concise and shareable links.</h1>

                <ServicesForm btnText='Snap URL' placeholder='Enter link here'/>

                <DataDisplay />
            </div>
        </> 
    )
}