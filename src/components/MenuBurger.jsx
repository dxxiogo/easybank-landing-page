import { useContext } from "react"
import { SidebarContext } from "../contexts/SideBarContext"

export default function MenuBurger () {

    const {isHidden, changeDisplay} = useContext(SidebarContext);
    
    return (
        <div className={`flex flex-col gap-[0.5rem] md:hidden`} onClick={() => changeDisplay(isHidden)}>
            <div className="h-0.5 w-10 bg-black"></div>
            <div className="h-0.5 w-8 bg-black"></div>
            <div className="h-0.5 w-6 bg-black"></div>
        </div>
    )
}