import { useEffect, useState } from "react";

function Testimonials() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("/source.json")
            .then((response) => response.json())
            .then((data) => setItems(data.testi))
            .catch((error) => console.error("Error fetching testimonials:", error));
    }, []);

    const renderStars = (count) => {
        return (
            <div className="flex mt-2">
                {Array.from({ length: count }).map((_, index) => (
                    <svg key={index} width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M8 1L10 6H15L11 9L12 14L8 11L4 14L5 9L1 6H6L8 1Z" fill="#FDC02F" />
                    </svg>
                ))}
            </div>
        );
    };

    return (
        <div className="bg-[#F9F9F9] py-10 w-full flex flex-col px-4 mt-10">
            <div className="flex flex-col items-center">
                <p className="font-medium text-gray-600 mb-11">TESTIMONIALS</p>
            </div>
            <div className="w-full overflow-x-auto md:overflow-hidden scrollbar-hide px-6 md:px-24">
                <div className="flex flex-nowrap gap-8 p-4">
                    {items.map((item, index) => (
                        <div key={index} className="w-[300px] md:w-[400px] p-3 flex-shrink-0">
                            <div className="relative bg-white flex flex-col p-6 h-[190px] shadow-md rounded-md">
                                <img src={item.src} alt="customer" className="rounded-full absolute -top-5 left-5 object-cover h-[50px] w-[50px]" />
                                <div className="text-[#404040] flex justify-between items-center mt-4">
                                    <p className="font-semibold">{item.name}</p>
                                    <div>{renderStars(item.stars)}</div>
                                </div>
                                <p className="text-sm text-[#707070] leading-relaxed p-1">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Testimonials;
