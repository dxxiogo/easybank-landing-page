import Logo from "../images/logo-footer.svg"
import IconInstagram from "../images/icon-instagram.svg"
import IconFacebook from "../images/icon-facebook.svg"
import IconPinterest from "../images/icon-pinterest.svg"
import IconTwitter from "../images/icon-twitter.svg"
import IconYoutube from "../images/icon-youtube.svg"
import RequestButton from "./RequestButton"


export default function Footer () {

    return(
        <footer className="bg-dark-blue w-full min-h-52 py-12 flex justify-around max-md:flex-col items-center w-full">
            <div className="flex gap-32 max-md:flex-col max-md:gap-4">
                <div className="flex flex-col gap-16 max-md: gap-4">
                    <img src={Logo} alt=""/>
                    <div className="flex gap-4">
                        <img src={IconFacebook} alt="" />
                        <img src={IconYoutube} alt="" />
                        <img src={IconTwitter} alt="" />
                        <img src={IconPinterest} alt="" />
                        <img src={IconInstagram} alt="" />
                    </div>
                </div>
                <div className="text-white flex gap-20 max-md:flex-col max-md:gap-4 max-md:text-center">
                    <ul className="flex flex-col gap-4">
                        <li>About</li>
                        <li>Contact</li>
                        <li>Blog</li>
                    </ul>
                    <ul className="flex flex-col gap-4">
                        <li>Careers</li>
                        <li>Support</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
            </div>
            <div className="max-md:mt-4 ">
                <RequestButton/>
            </div>
        </footer>
    )
}