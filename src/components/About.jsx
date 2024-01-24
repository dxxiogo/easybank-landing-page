import Topic from "./Topic";
import IconOnline from "../images/icon-online.svg"
import IconBudgeting from "../images/icon-budgeting.svg"
import IconOnboarding from "../images/icon-Onboarding.svg"
import IconApi from "../images/icon-api.svg"
import {motion} from "framer-motion"


export default function About () {

    return (
        <section className="flex flex-col gap-20 items-center p-20 bg-light-grayish-blue sm:flex-wrap-reverse max-md:p-10 max-md:text-center">
            <div className="w-full text-left max-md:text-center">
                <motion.h2 className="text-3xl mb-4 text-dark-blue max-md:text-xl"
                           initial={{ opacity: 0, x: -100}} 
                           whileInView={{ opacity: 1, scale: 1, x: 0}}
                           transition={{ duration: 1 }}    
                           viewport={{ once: true}} 
                >Why choose Easybank?</motion.h2>
                <motion.p  className="text-grayish-blue inline max-md:text-sm"
                           initial={{ opacity: 0, x: -100}} 
                           whileInView={{ opacity: 1, scale: 1, x: 0 }}
                           transition={{ duration: 1.5 }}    
                           viewport={{ once: true}} 
                >We leverage Open Banking to turn your bank account into your financial hub. <br />Control your finances like never before</motion.p>
            </div>
            <div className="grid grid-cols-4 gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1">
                <Topic title="Online Banking" 
                        content="Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
                        image={IconOnline}/>

                <Topic 
                        title="Simple Budgeting"
                        content="See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits. "
                        image={IconBudgeting}/>

                <Topic title='Fast Onboarding'
                        content='We don’t do branches. Open your account in minutes online and start taking control of your finances right away.'
                        image={IconOnboarding}/>

                <Topic title="Open API" 
                        content="Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."
                        image={IconApi}/>
            </div>
      </section>
    )
}