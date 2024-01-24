import RequestButton from "../components/RequestButton";
import Bg_intro_desktop from '../images/bg-intro-desktop.svg'
import Image_mockups from '../images/image-mockups.png'
import {motion} from "framer-motion"

export default function Home () {
    return (
        <section className="bg-very-light-gray flex min-h-screen justify-between gap-5 max-md:flex-wrap-reverse max-md:gap-0">
            <div className="h-full p-10 flex flex-col gap-6  ml-10 max-md:p-2 max-md:ml-2 max-md:text-center max-md:items-center mb-10">
                < motion.h1 className="text-5xl leading-tight text-dark-blue max-md:text-3xl mt-32 max-md:mt-0"
                initial={{ opacity: 0, x: -100}} 
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 1 }}   
                viewport={{ once: true}}    
                >Next generation digital banking</motion.h1>
                <motion.p className="text-grayish-blue max-md:text-sm"
                    initial={{ opacity: 0, x: -100}} 
                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 1.5 }}
                    viewport={{ once: true}} 
                >Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.
                </motion.p>
                <RequestButton/>
            </div>
            <div className="w-full h-screen max-md:max-h-min">
                <div className="bg-cover bg-left-bottom w-full flex justify-center bg-no-repeat h-screen "
                     style={{ backgroundImage: `url(${Bg_intro_desktop})`}}
                     >
                    <div className="bg-left-bottom  h-[125vh] w-full  max-lg:hidden mt-10" style={{ backgroundImage: `url(${Image_mockups})`}}>
                    </div>
                    <img src={Image_mockups} alt=""  className="hidden max-lg:block"/>
                </div>
            </div>
        </section>
    )
}