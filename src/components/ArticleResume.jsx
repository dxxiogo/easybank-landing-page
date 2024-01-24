import {motion} from "framer-motion"

export default function ArticleResume ({author, resume, image, title}) {

    return (
        <motion.div className="bg-white shadow rounded min-w-64" 
                    initial={{ opacity: 0, scale: 0.5 }} 
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true}} >
            <img src={image} alt=""  className="h-52 w-full"/>
            <div className="p-6 flex flex-col gap-2">
                <span className="text-grayish-blue text-sm">By {author}</span>
                <h1 className="text-lg cursor-pointer hover:text-lime-green">{title}</h1>
                <p className="text-grayish-blue text-base max-md:text-sm">{resume}</p>
            </div>
        </motion.div>
    )
}