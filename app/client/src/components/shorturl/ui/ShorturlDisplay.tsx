import { DataDisplayBtn } from "../../ui/button";

import { fetchShortUrl } from "../../../services/shorturl/fetch";
import { ShortURLFormInputTypes } from "../../../utils/types/shorturl";
import { generateRandomString } from "../../../utils/generateKey";

import { useQuery } from 'react-query';

import '../../../../public/scrollStyle.css';


export const DataDisplay = () => {

    const url = useQuery('shorturls', fetchShortUrl);

    return(

        <div className="overflow-auto scrollable-container px-5 mt-8 h-[75%] w-[53%]">

        {
            url.data?.data.map((data: ShortURLFormInputTypes) => (

                <div key={generateRandomString(5)} className="flex w-full justify-between w-1/2 mb-5 bg-slate-200 p-5 rounded-md">

                   <div className="w-1/4 text-ellipsis overflow-hidden font-semibold whitespace-nowrap">{data.longUrl}</div>
                   <a href={data.longUrl} target="_blank" className="font-semibold text-violet-700">urlsnap.vercel.app/{data.shortUrl}</a>
    
                    <DataDisplayBtn url_id={data._id} clicks={data.clicks} urlToCopy={data.shortUrl} />

                </div>

            ))
        }

        </div>
        
    )
}