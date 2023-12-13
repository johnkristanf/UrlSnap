import { ServicesBtn } from "./button";
import { urlPattern } from "../../../utils/patterns";
import { createShortUrl } from "../../../services/shorturl/create";
import { ShortURLFormInput } from "../../../utils/types/shorturl";

import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";

import { useMutation, useQueryClient } from 'react-query'



export const ServicesForm = ({ btnText, placeholder }: any) => {

    const [Submitting, setSubmitting] = useState(false);

    const queryClient = useQueryClient();

    const { register, handleSubmit, reset, formState: { errors } } = useForm<ShortURLFormInput>();

    const mutation = useMutation(createShortUrl, {
        onSuccess: () => {
          queryClient.invalidateQueries('shorturls')
        },
    })


    const onSubmit: SubmitHandler<ShortURLFormInput> = async (data) => {
        setSubmitting(true)

        mutation.mutate(data); 
        reset();

        setSubmitting(false)
    }
    
    return(
        <>

            { isLoading(mutation) }

            { isError(errors) }

            <form onSubmit={handleSubmit(onSubmit)} className="flex items-center justify-center gap-3 w-1/2 mt-5">

                <input {...register("longUrl", { pattern: urlPattern, required: true })} 
                    placeholder={placeholder} 
                    className="w-full p-3 rounded-md"
                    /> 

                <ServicesBtn btnText={btnText} Submitting={Submitting} />

            </form>
            
        </>
    )
}


const isLoading = (mutation: any) => {
    return mutation.isLoading && <div className="text-red-800 font-bold text-4xl">Loading....</div> 
}


const isError = (errors: any) => {
    return errors.longUrl && ( <p className="text-red-700 text-lg mt-5 font-bold">Invalid URL! please try another url.</p> ) 
}