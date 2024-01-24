import {motion} from "framer-motion"

export default function Topic ({title, content, image}) {

    return (
        <motion.div className="flex flex-col gap-5 max-md:items-center" 
                    initial={{ opacity: 0, y: -100}} 
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1 }}   
                    viewport={{ once: true}} 
        >
            <img src={image} alt="" className="h-16 w-16"/>
            <h3 className="text-dark-blue text-xl">{title}</h3>
            <p className="text-grayish-blue max-md:text-sm">{content}</p>
        </motion.div>
    )
}