import { ServicesBtn } from "../../ui/button";
import { createShortUrl } from "../../../services/shorturl/create";
import { ShortURLFormInputTypes } from "../../../utils/types/shorturl";

import { ShorturlInput } from "../../ui/inputs";

import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";

import { useMutation, useQueryClient } from 'react-query';



export const ServicesForm = ({ btnText, placeholder }: any) => {

    const [Submitting, setSubmitting] = useState(false);

    const queryClient = useQueryClient();

    const { register, handleSubmit, reset, formState: { errors } } = useForm<ShortURLFormInputTypes>();

    const mutation = useMutation(createShortUrl, {
        onSuccess: () => {
          queryClient.invalidateQueries('shorturls')
        },
    })


    const onSubmit: SubmitHandler<ShortURLFormInputTypes> = async (data) => {
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

                <ShorturlInput register={register} placeholder={placeholder} />
                
                <ServicesBtn btnText={btnText} Submitting={Submitting} />

            </form>
            
        </>
    )
}


export const isLoading = (mutation: any) => {
    return mutation.isLoading && <div className="text-red-800 font-bold text-4xl">Loading....</div> 
}


export const isError = (errors: any) => {
    return errors.longUrl || errors.qrCodeURL && ( <p className="text-red-700 text-lg mt-5 font-bold">Invalid URL! please try another url.</p> ) 
}