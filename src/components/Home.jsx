import { useEffect, useState } from "react";

function Home() {
  const [imagePosition, setImagePosition] = useState("0% 0%");
  const [banner, setBanner] = useState(null); 

  useEffect(() => {
    const updateImagePosition = () => {
      const height = window.innerHeight;
      if (height >= 800 && height <= 1250) {
        setImagePosition("center 10%");
      } else {
        setImagePosition("center top");
      }
    };

    updateImagePosition();
    window.addEventListener("resize", updateImagePosition);
    
    return () => window.removeEventListener("resize", updateImagePosition);
  }, []);

  useEffect(() => {
    fetch("/source.json")
      .then((response) => response.json())
      .then((data) => setBanner(data.home))
      .catch((error) => console.error("Error fetching banner:", error));
  }, []);

  if (!banner) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute w-full sm:insert-0 h-full md:h-[1200px]">
          <img 
            src={banner.src} 
            alt={banner.alt}
            className="w-full h-[800px] md:h-[1240px] object-cover"
            style={{ objectPosition: imagePosition
            }}
          />
        </div>
        
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white h-[40px] w-[175px] flex items-center justify-center">
          <p>{banner.text1.split(" ")[0]} {banner.text1.split(" ")[1]}<span className="text-red-600"> {banner.text1.split(" ")[2]}</span></p>
        </div>
        
        <div className="absolute top-[60%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white h-[40px] w-[175px] flex items-center justify-center">
          <p>{banner.text2.split(" ")[0]} {banner.text2.split(" ")[1]} {banner.text2.split(" ")[2]}  <span className="text-red-600">{banner.text2.split(" ")[3]}</span></p>
        </div>
        
        <div className="absolute top-[80%] left-[50%] text-white bg-red-500 translate-x-[-50%] translate-y-[-50%] h-[40px] w-[210px] flex items-center justify-center">
          {banner.buttonText}
        </div>
      </div>
    </>
  );
}

export default Home;

