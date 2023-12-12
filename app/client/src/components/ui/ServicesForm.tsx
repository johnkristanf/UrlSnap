import { ServicesBtn } from "./button";

export const ServicesForm = ({ btnText, placeholder }: any) => {

    return(
        <>
            <form action="#" method="POST" className="flex items-center justify-center gap-3 w-1/2 mt-5">
              <input type="text" placeholder={placeholder} className="w-full p-3 rounded-md"/>
              <ServicesBtn btnText={btnText} />

            </form>
        </>
    )
}