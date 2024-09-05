import NewsBigCard from "../../components/news_components/NewsBigCard";
import NewsSmallCard from "../../components/news_components/NewsSmallCard";

export default function NewsPage() {
    return (
        <>
            {/* Big News Card Section */}
            <NewsBigCard/>
            {/* Small News Card Lists Section */}
            <div className="container">
                <p className="text-lg font-semibold">Recent News</p>
                <div className="flex flex-col mt-2">
                    {[1,2,3,4,5].map((item, index) => (
                        <NewsSmallCard key={index}/>
                    ))}
                </div>
            </div>
        </>
    )
}