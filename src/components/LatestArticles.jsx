import ImgCurrency from "../images/image-currency.jpg"
import ImgConffeti from "../images/image-confetti.jpg"
import ImgPlane from "../images/image-plane.jpg"
import ImgRestaurant from "../images/image-restaurant.jpg"
import ArticleResume from "./ArticleResume"

export default function LatestArticles () {

    return (
        <section className="bg-very-light-gray p-20 max-md:p-10">
            <h2 className="text-3xl mb-10 text-dark-blue">Latest Articles</h2>
            <div className="grid grid-cols-4 gap-10 max-md:grid-cols-1 max-[1212px]:grid-cols-2 max-lg:grid-cols-2 ">
                <ArticleResume image={ImgCurrency}
                               title="Receive money in any currency with no fees"
                               resume="The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single"
                               author="Claire Robinson"/>
                <ArticleResume image={ImgRestaurant}
                               title="Treat yourself without worrying about money"
                               resume="Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you"
                               author="Wilson Hutton"
                               />
                <ArticleResume image={ImgPlane}
                               title="Take your Easybank card wherever you go"
                               resume="We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …"
                               author="Wilson Hutton"/>
                <ArticleResume image={ImgConffeti}
                               title="Our invite-only Beta accounts are now live!"
                               resume="After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site"
                               author="Claire Robinson"/>
            </div>
        </section>
    )

}