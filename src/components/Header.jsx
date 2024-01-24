import Logo from "../images/logo.svg"
import MenuBurger from "./MenuBurger"
import Navbar from "./Navbar"
import RequestButton from "./RequestButton"

export default function Header ()  {

    return (
        <header className="flex w-full justify-around fixed p-6 shadow h-16 items-center bg-white max-md:justify-between">
          <div>
              <img src={Logo} alt="" />
          </div>
          <Navbar/>
          <div className="max-md:hidden">
            <RequestButton/>
          </div>
          <MenuBurger/>
      </header>
    )

}