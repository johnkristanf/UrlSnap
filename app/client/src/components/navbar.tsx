import { Logo } from "./ui/logo";
import { NavLinks } from "./ui/navLinks";
import { AuthBtn } from "./ui/button";

export const NavBar = () => {

    return(

        <div className="sticky w-full h-24 bg-slate-200 flex items-center justify-around">

            <div className="flex gap-10 items-center">
               <Logo />
               <NavLinks />
            </div>

            <AuthBtn />
            
        </div>
    )
}