import { createContext, useState } from "react";



export const SidebarContext = createContext();


export default function SidebarProvider ({children}) {

    const [isHidden, setIsHidden] = useState(true);

    const changeDisplay = (isHiddenValue) => {
        setIsHidden(isHiddenValue? false : true);
    }
    

    return <SidebarContext.Provider value={{changeDisplay, isHidden}}>{children}</SidebarContext.Provider>
}