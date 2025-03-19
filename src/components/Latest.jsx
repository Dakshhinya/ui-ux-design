import { useEffect, useState } from "react";

function Latest() {
    const [collections, setCollections] = useState([]);

    useEffect(() => {
        fetch("/source.json")
            .then(response => response.json())
            .then(data => setCollections(data.latestCollections))
            .catch(error => console.error("Error fetching latest collections:", error));
    }, []);

    if (collections.length === 0) {
        return <p>Loading...</p>; 
    }

    return (
        <>
            <div className="flex items-center py-14">
                <div className="flex items-center w-full px-6 md:px-24">
                    <div className="flex-grow border-t-2 mx-5 border-cyan-200"></div>
                    <p className="font-serif text-[#333333] flex text-lg items-center justify-center">
                        LATEST COLLECTIONS
                    </p>
                    <div className="flex-grow border-t-2 mx-5 border-cyan-200"></div>
                </div>
            </div>
            <div className="w-full overflow-x-auto scrollbar-hide px-0 md:px-24">
                <div className="flex gap-4 w-max">
                    {collections.map((item, index) => (
                        <div key={index} className="w-[200px] md:w-[250px] flex-shrink-0 flex flex-col items-center text-center">
                            <img src={item.src} alt={item.name} className="w-full h-[250px] md:h-[300px] object-cover" />
                            <p className="mt-2 font-thin text-sm md:text-base">{item.name}</p>
                            <p className="text-red-700 text-sm md:text-base">{item.price}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Latest;
