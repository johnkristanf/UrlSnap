import { useMutation, useQueryClient } from "react-query"

import { deleteShortUrl } from "../../../services/shorturl/delete";

import Swal from 'sweetalert2'

export const AuthBtn = () => {

    return(

        <div className="flex gap-8 text-white">
            <button className="bg-violet-700 rounded-md p-3 font-semibold hover:opacity-75">Login</button>
            <button className="bg-slate-800 rounded-md p-3 font-semibold hover:opacity-75">SignUp</button>
        </div>
    )
}

export const ServicesBtn = ({ btnText, Submitting }: any) => {
    return <button type="submit" 
                   className="w-2/5 bg-violet-700 p-3 rounded-md text-white font-semibold"
                   disabled={Submitting} 
                   
                   >

                  { btnText }
            </button>
            
}

export const DataDisplayBtn = ( { url_id, clicks, urlToCopy } : any) => {

    const queryClient = useQueryClient();

    console.log('clicks', clicks)

    const copyToClipboard = async () => {
        await navigator.clipboard.writeText(`localhost:5000/${urlToCopy}`);
    }



    const deleteMutation = useMutation(deleteShortUrl, {
        onSuccess: () => {
          queryClient.invalidateQueries('shorturls')
        },
    });


    const numberOfClicks = () => {
        Swal.fire({
          position: "top-end",
          title: "Your URL Total Clicks",
          html: `<div class="text-6xl font-bold p-3">${clicks}</div>`,
          showConfirmButton: true,
        });
      };


    const displayBtn = [
        { 
            name: 'Copy', 
            classname: 'text-violet-700  font-semibold hover:opacity-75', 
            onclickFunction: copyToClipboard 
        },

        { 
            name: 'Clicks', 
            classname: 'text-slate-500 font-semibold hover:opacity-75', 
            onclickFunction: numberOfClicks
        },

        { 
            name: 'Delete', 
            classname: 'text-red-700 font-semibold hover:opacity-75', 
            onclickFunction: () => deleteMutation.mutate(url_id) 
        }
    ]

    return(

        <div className="flex gap-5">
            {

              displayBtn.map((data: any) => (

                <button key={data.name} onClick={async () => await data.onclickFunction()} className={data.classname} > 
                    {data.name} 
                </button>

              ))

            }
        </div>
    )
}
