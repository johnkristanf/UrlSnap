import { Logo } from "./shorturl/ui/logo";
import { NavLinks } from "./shorturl/ui/navLinks";
import { NavBtn } from "./ui/button";

export const NavBar = () => {

    return(

        <div className="sticky top-0 w-full h-24 bg-slate-200 flex items-center justify-around">

            <div className="flex gap-10 items-center">
               <Logo />
               <NavLinks />
            </div>

            <NavBtn />
            
        </div>
    )
}