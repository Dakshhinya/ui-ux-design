import { useEffect, useState } from "react";

function Images() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch("/source.json")
            .then((response) => response.json())
            .then((data) => setImages(data.banners))
            .catch((error) => console.error("Error fetching images:", error));
    }, []);

    return (
        <div className="w-full h-full flex flex-col md:flex-row pl-0 items-start gap-2 mt-3">
            {images.length > 0 ? (
                <div className="relative w-full md:w-1/2 md:h-[740px]">
                    <img
                        src={images[0].src}
                        alt={images[0].alt}
                        className="w-full h-[400px] md:h-[740px] object-cover"
                    />
                    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col bg-white h-[40px] w-[175px] items-center justify-center">
                        <p>
                            <span className="text-red-600">Summer</span> is here and
                        </p>
                    </div>
                    <div className="absolute top-[65%] md:top-[57%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white h-[40px] w-[160px] flex items-center justify-center">
                        <p>
                            so is our <span className="text-red-600">Collection</span>
                        </p>
                    </div>
                </div>
            ) : (
                <p>Loading images...</p>
            )}

            <div className="relative w-full md:w-1/2 flex flex-col gap-2">
                {images.slice(1).map((image) => (
                    <div key={image.id} className="relative w-full">
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-[400px] md:h-[365px] object-cover"
                        />
                        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white h-[40px] w-[165px] flex items-center justify-center">
                            <p>
                                <span className="text-red-600">{image.text1.split(" ")[0]}  </span>
                                {image.text1.split(" ")[1]} </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Images;
