import DestinationCard from "@/components/DestinationCard";


const DestinationPage = async() => {

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination`);
    const destinations = await res.json();
    // console.log(destinations);
    return (
        <div className="w-10/12 mx-auto my-10">
            <h1 className="text-2xl font-bold">All Destinations</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-10 mt-5">
                {
                    destinations.map(destination => <DestinationCard key={destination._id} destination={destination}></DestinationCard>)
                }
            </div>
        </div>
    );
};

export default DestinationPage