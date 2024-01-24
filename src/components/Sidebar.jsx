import { useContext } from "react";
import RequestButton from "./RequestButton";
import { SidebarContext } from "../contexts/SideBarContext";

export default function Sidebar () {

    const {isHidden} = useContext(SidebarContext);

    return (
        <aside className={`bg-white h-full fixed w-full flex justify-center items-center flex-col ${isHidden ? 'hidden' : 'block'} `}>
            <nav className="h-40">
                <ul className="flex  justify-center gap-6 h-16 items-center max-md:flex-col">
                    <li className="text-grayish-blue cursor-pointer hover:border-b-4 h-16 flex items-center">Home</li>
                    <li className="text-grayish-blue cursor-pointer h-16 flex items-center">About</li>
                    <li className="text-grayish-blue cursor-pointer h-16 flex items-center">Contact</li>
                    <li className="text-grayish-blue cursor-pointer h-16 flex items-center">Blog</li>
                    <li className="text-grayish-blue cursor-pointer h-16 flex items-center">Careers</li>
                </ul>
            </nav>
            <RequestButton/>
        </aside>
    )
}