import DiseaseCard from '../components/discover_components/DiseaseCard'
import useFetch from '../hooks/UseFetch'
import { diseaseApi } from '../utils/api'
import { DiscoverPoster } from '../utils/variables'

export default function DiscoverPage() {
    const { data, loading, error } = useFetch(diseaseApi)

    return (
        <div>
            {/* Poster Section */}
            <img src={DiscoverPoster} alt="discover poster" className="w-full"/>
            {/* Decease List Section */}
            <div className="container my-5">
                <p className="text-lg mb-3 font-medium">Eyes Diseases</p>
                <div className="grid grid-cols-2 gap-5 tablet-lg:grid-cols-1">
                   {loading && <p>Loading...</p>}
                   {error && <p>{error}</p>}
                   {data && data.length > 0 ? (
                        data.map((item) => (
                            <DiseaseCard 
                                key={item.id}
                                image="https://miro.medium.com/v2/resize:fit:952/0*jqH0JigQrjhIy4V4"
                                title={item.title}
                                description={item.description}
                            />
                        ))
                   ) : (!loading && !error && <p>No data available</p>) }
                </div>
            </div>
            
        </div>
    )
}