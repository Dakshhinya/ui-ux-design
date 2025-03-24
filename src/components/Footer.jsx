
import { useState, useEffect } from "react";

function Footer() {
  const [data, setData] = useState({
    icons: {},
    footerLinks: [],
    socialIcons: [],
    contactInfo: { address: [], email: "", phone: "" }, 
  });

  useEffect(() => {
    fetch("/source.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <div className="h-full w-full flex flex-col">
        <div className="relative flex flex-row h-1/4 items-center justify-center">
          <img
            src="footer.png"
            alt="footer"
            className="object-cover h-[390px] w-full filter brightness-50"
          />

          <div className="absolute flex flex-col items-center gap-5">
            <p className="font-bold text-2xl text-white">
              GET COUPONS & STYLE GUIDES
            </p>
            <p className="font-normal text-xl text-white">
              Subscribe to our Newsletter
            </p>

            <div className="relative flex flex-col md:flex-row gap-2 py-5 w-full">
              <input
                placeholder="   Email ID"
                type="text"
                className="w-full md:w-[350px] h-[40px] flex items-center"
              />
              <button className="bg-red-600 w-full h-[40px] md:w-[136px]">
                Submit
              </button>
            </div>
          </div>
        </div>

        <div className="bg-[#333333] flex flex-col md:flex-row h-full md:h-full w-full items-center justify-around px-10 gap-6 md:gap-0 pb-10 pt-10">
          <div className="text-white flex flex-col items-center md:items-start mt-5 gap-6 md:gap-7">
            {data.footerLinks?.map((link, index) => (
              <p key={index}>{link}</p>
            ))}
          </div>
          <div className="flex flex-col items-center py-7">
            <h1 className="text-2xl text-white bg-red-600 px-4 py-2 h-16">
              MADE UP
            </h1>
            <p className="mt-3 text-white">Stay in touch with us</p>
            <div className="mt-2 gap-4 flex">
              
              <svg width="35" height="35" viewBox="0 0 35 35" fill="white">
                  <path d={data.socialIcons.facebook}/>
              </svg>
              <svg width="35" height="35" viewBox="0 0 35 35" fill="white">
              {data?.socialIcons?.instagram?.map((d,index)=>(
                  <path key={index} d={d}/>
                ))}
              </svg>
              <svg width="35" height="35" viewBox="0 0 35 35" fill="white">
                {data?.socialIcons?.youtube?.map((d,index)=>(
                  <path key={index} d={d}/>
                ))}
              </svg>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-end leading-6 text-white py-5">
            <p className="font-semibold">Our Corporate Office</p>
            {data.contactInfo?.address?.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
            <br />
            <div className="flex flex-row gap-2 mt-1">
              <svg
                className="mt-2" width="18" height="14" viewBox="0 0 14 10" fill="black">
                  <path d={data.socialIcons?.email || "NA"}/>
                </svg>
              
              <p>{data.contactInfo?.email || "Not Available"}</p>
            </div>
            <div className="flex flex-row gap-3 mt-3">

              <svg className="mt-1" width="18" height="14" viewBox="0 0 13 14"fill="black">
                <path d={data.icons?.phone || "NA"}/>
              </svg>
                
              <p>{data.contactInfo?.phone || "Not Available"}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
