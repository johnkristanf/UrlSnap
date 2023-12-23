import { NavBar } from "../components/navbar";
import { Footer } from "../components/footer";
import { CoverterDescription } from "../components/converter/converterDescription";
import { ConverterForm } from "../components/converter/converterForm";

import { QueryClientProvider, QueryClient } from "react-query";

const YTConverter = () => {

    const queryClient = new QueryClient();
    
    
    return(

        <>
          <NavBar />

          <div className="mt-10 pb-24 flex flex-col justify-start items-center w-full h-[50vh]">

                <CoverterDescription />

                <div className="w-full flex justify-around h-full">
                    <QueryClientProvider client={queryClient}>
                        <ConverterForm />
                        
                    </QueryClientProvider>
                  
                </div>

              
            </div>

        <Footer />
          
        </>
    )
}

export default YTConverter;