// function Footer(){
//     return(
//         <>
//         <div className="h-full w-full flex flex-col">
//             <div className="relative flex flex-row h-1/4 items-center justify-center">
//              <img src="footer.png" alt="footer" className="object-cover h-[390px] w-full filter brightness-50"/>


              
//                 <div className="absolute flex flex-col items-center gap-5">
                
//                     <p className="font-bold text-2xl text-white">GET COUPONS & STYLE GUIDES</p>
//                     <p className="font-normal text-xl text-white">Subscribe to our Newsletter</p>
                    
//                     <div className="relative flex flex-col md:flex-row  gap-2 py-5 w-full">
//                     <input placeholder="   Email ID" type="text" className="w-full md:w-[350px] h-[40px] flex items-center" />
//                     <button className=" bg-red-600 w-full h-[40px] md:w-[136px]">Submit</button>
//                     </div>
//                 </div>
            
//             </div>

//             <div className="bg-[#333333] flex flex-col md:flex-row h-full md:h-full w-full items-center justify-around px-10 gap-6 md:gap-0 pb-10 pt-10">

//                     <div className="text-white flex flex-col items-center md:items-start mt-5 gap-6 md:gap-7">
//                         <p>About Us</p>
//                         <p>Delivery Information</p>
//                         <p>Returns & Exchange</p>
//                         <p>Technical & Privacy</p>
//                         <p>Order Status</p>
//                     </div>

//                     <div className="flex flex-col items-center py-7">
//                         <h1 className="text-2xl text-white bg-red-600 px-4 py-2 h-16  ">MADE UP</h1>
//                         <p className="mt-3 text-white">Stay in touch with us</p>
//                         <div className="mt-2 gap-3 flex">
//                         <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M30 15C30 12.0333 29.1203 9.13319 27.4721 6.66645C25.8238 4.19972 23.4812 2.27713 20.7403 1.14181C17.9994 0.00649929 14.9834 -0.290551 12.0737 0.288228C9.16394 0.867006 6.49119 2.29562 4.3934 4.3934C2.29562 6.49119 0.867006 9.16394 0.288228 12.0737C-0.290551 14.9834 0.00649929 17.9994 1.14181 20.7403C2.27713 23.4812 4.19972 25.8238 6.66645 27.4721C9.13319 29.1203 12.0333 30 15 30C15.088 30 15.176 30 15.264 29.994V18.322H12.041V14.566H15.264V11.8C15.264 8.59501 17.221 6.84901 20.08 6.84901C21.0451 6.84605 22.0095 6.89646 22.969 7.00001V10.352H21C19.447 10.352 19.143 11.09 19.143 12.174V14.565H22.864L22.378 18.321H19.143V29.421C22.2728 28.5216 25.0249 26.628 26.9835 24.0264C28.9422 21.4248 30.001 18.2565 30 15Z" fill="#BBBBBB"/>
//                         </svg>
//                         <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M17.8709 14.9999C17.8709 15.5677 17.7025 16.1228 17.3871 16.595C17.0716 17.0671 16.6232 17.4351 16.0986 17.6524C15.574 17.8697 14.9967 17.9265 14.4398 17.8157C13.8829 17.705 13.3713 17.4315 12.9698 17.03C12.5683 16.6285 12.2949 16.1169 12.1841 15.56C12.0733 15.0031 12.1301 14.4258 12.3474 13.9012C12.5647 13.3766 12.9327 12.9282 13.4049 12.6128C13.877 12.2973 14.4321 12.1289 14.9999 12.1289C15.7614 12.1289 16.4916 12.4314 17.03 12.9698C17.5684 13.5082 17.8709 14.2385 17.8709 14.9999Z" fill="#BBBBBB"/>
//                         <path d="M21.7141 9.92055C21.5709 9.54897 21.3514 9.21152 21.0698 8.92992C20.7882 8.64832 20.4507 8.42882 20.0791 8.28555C19.5669 8.09454 19.0257 7.99305 18.4791 7.98555C17.5711 7.94455 17.2981 7.93555 14.9981 7.93555C12.6981 7.93555 12.4261 7.94455 11.5171 7.98555C10.9706 7.99311 10.4293 8.09459 9.91713 8.28555C9.54562 8.42893 9.20822 8.64847 8.92664 8.93005C8.64505 9.21164 8.42552 9.54903 8.28214 9.92055C8.09114 10.4327 7.98965 10.974 7.98213 11.5206C7.94113 12.4286 7.93213 12.7015 7.93213 15.0015C7.93213 17.3015 7.94113 17.5735 7.98213 18.4825C7.98963 19.0291 8.09112 19.5704 8.28214 20.0826C8.42541 20.4541 8.6449 20.7916 8.9265 21.0732C9.2081 21.3548 9.54555 21.5743 9.91713 21.7175C10.4293 21.9087 10.9705 22.0102 11.5171 22.0175C12.4251 22.0585 12.6971 22.0676 14.9971 22.0676C17.2971 22.0676 17.5701 22.0585 18.4781 22.0175C19.0247 22.0102 19.566 21.9087 20.0781 21.7175C20.4497 21.5743 20.7872 21.3548 21.0688 21.0732C21.3504 20.7916 21.5699 20.4541 21.7131 20.0826C21.9041 19.5703 22.0056 19.0291 22.0131 18.4825C22.0541 17.5745 22.0631 17.3015 22.0631 15.0015C22.0631 12.7015 22.0541 12.4296 22.0131 11.5206C22.0061 10.974 21.9049 10.4328 21.7141 9.92055ZM15.0001 19.4205C14.1254 19.4205 13.2702 19.1611 12.5428 18.6751C11.8155 18.1891 11.2486 17.4984 10.9138 16.6902C10.5791 15.882 10.4915 14.9926 10.6621 14.1347C10.8328 13.2767 11.254 12.4886 11.8726 11.87C12.4912 11.2514 13.2793 10.8302 14.1373 10.6595C14.9952 10.4889 15.8845 10.5765 16.6927 10.9112C17.5009 11.246 18.1917 11.8129 18.6777 12.5403C19.1637 13.2676 19.4231 14.1228 19.4231 14.9975C19.4234 15.5785 19.3092 16.1539 19.087 16.6908C18.8649 17.2276 18.5391 17.7154 18.1284 18.1264C17.7176 18.5373 17.23 18.8633 16.6932 19.0857C16.1565 19.3081 15.5811 19.4225 15.0001 19.4225V19.4205ZM19.6001 11.4335C19.3956 11.4335 19.1957 11.3729 19.0257 11.2593C18.8556 11.1457 18.7231 10.9842 18.6448 10.7952C18.5666 10.6063 18.5461 10.3984 18.586 10.1978C18.6259 9.99725 18.7244 9.813 18.869 9.6684C19.0136 9.52379 19.1978 9.42532 19.3984 9.38542C19.599 9.34552 19.8069 9.366 19.9958 9.44426C20.1848 9.52252 20.3463 9.65505 20.4599 9.82509C20.5735 9.99513 20.6341 10.195 20.6341 10.3996C20.6344 10.5357 20.6078 10.6705 20.5558 10.7963C20.5038 10.9221 20.4275 11.0364 20.3313 11.1327C20.235 11.2289 20.1207 11.3053 19.9949 11.3572C19.8691 11.4092 19.7343 11.4358 19.5981 11.4355L19.6001 11.4335Z" fill="#BBBBBB"/>
//                         <path d="M15 0C12.0333 0 9.13319 0.879735 6.66645 2.52796C4.19972 4.17618 2.27713 6.51886 1.14181 9.25975C0.00649929 12.0006 -0.290551 15.0166 0.288228 17.9264C0.867006 20.8361 2.29562 23.5088 4.3934 25.6066C6.49119 27.7044 9.16394 29.133 12.0737 29.7118C14.9834 30.2906 17.9994 29.9935 20.7403 28.8582C23.4812 27.7229 25.8238 25.8003 27.4721 23.3336C29.1203 20.8668 30 17.9667 30 15C30 11.0218 28.4197 7.20644 25.6066 4.3934C22.7936 1.58035 18.9783 0 15 0V0ZM23.561 18.551C23.5469 19.2656 23.4116 19.9726 23.161 20.642C22.9399 21.2143 22.6017 21.734 22.1678 22.1678C21.734 22.6016 21.2143 22.9399 20.642 23.161C19.9726 23.4115 19.2656 23.5468 18.551 23.561C17.632 23.603 17.339 23.613 15 23.613C12.661 23.613 12.367 23.603 11.449 23.561C10.7344 23.5468 10.0274 23.4115 9.35801 23.161C8.78572 22.9399 8.26598 22.6016 7.83217 22.1678C7.39836 21.734 7.06007 21.2143 6.83901 20.642C6.58836 19.9726 6.4531 19.2656 6.43901 18.551C6.40001 17.633 6.38701 17.339 6.38701 15C6.38701 12.661 6.39701 12.367 6.43901 11.449C6.45314 10.7344 6.58839 10.0274 6.83901 9.358C7.06044 8.78593 7.39887 8.26639 7.83264 7.83263C8.2664 7.39887 8.78594 7.06044 9.35801 6.839C10.0274 6.58848 10.7344 6.45323 11.449 6.439C12.368 6.397 12.661 6.387 15 6.387C17.339 6.387 17.633 6.397 18.551 6.439C19.2656 6.45327 19.9726 6.58852 20.642 6.839C21.2141 7.06033 21.7337 7.39872 22.1675 7.8325C22.6013 8.26627 22.9397 8.78587 23.161 9.358C23.4116 10.0274 23.5469 10.7344 23.561 11.449C23.603 12.368 23.613 12.661 23.613 15C23.613 17.339 23.6 17.633 23.561 18.551Z" fill="#BBBBBB"/>
//                         </svg>
//                         <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M13.1309 17.8094L18.0099 14.9995L13.1309 12.1895V17.8094Z" fill="#BBBBBB"/>
//                         <path d="M15 0C12.0333 0 9.13319 0.879735 6.66645 2.52796C4.19972 4.17618 2.27713 6.51886 1.14181 9.25975C0.00649929 12.0006 -0.290551 15.0166 0.288228 17.9264C0.867006 20.8361 2.29562 23.5088 4.3934 25.6066C6.49119 27.7044 9.16394 29.133 12.0737 29.7118C14.9834 30.2906 17.9994 29.9935 20.7403 28.8582C23.4812 27.7229 25.8238 25.8003 27.4721 23.3336C29.1203 20.8668 30 17.9667 30 15C30 11.0218 28.4197 7.20644 25.6066 4.3934C22.7936 1.58035 18.9783 0 15 0ZM24.373 15.015C24.3823 16.5266 24.2531 18.0359 23.987 19.524C23.8797 19.9195 23.6708 20.2801 23.381 20.5699C23.0911 20.8598 22.7306 21.0687 22.335 21.176C19.9009 21.4625 17.4508 21.5918 15 21.563C12.5488 21.5934 10.0984 21.4597 7.66501 21.163C7.26946 21.0557 6.90887 20.8468 6.61906 20.5569C6.32926 20.2671 6.12032 19.9065 6.01301 19.511C5.74622 18.0224 5.61701 16.5123 5.62701 15C5.61765 13.4884 5.74686 11.9791 6.01301 10.491C6.12262 10.095 6.33209 9.73368 6.62135 9.4418C6.9106 9.14991 7.26997 8.93719 7.66501 8.824C10.0992 8.5378 12.5493 8.40887 15 8.438C17.4512 8.40729 19.9017 8.54092 22.335 8.838C22.7306 8.94531 23.0911 9.15425 23.381 9.44406C23.6708 9.73386 23.8797 10.0944 23.987 10.49C24.2615 11.9823 24.3908 13.4977 24.373 15.015Z" fill="#BBBBBB"/>
//                         </svg>

//                         </div>
//                     </div>

//                     <div className="flex flex-col items-center md:items-end leading-6 text-white py-5">
//                         <p className="font-semibold">Our Corporate Office</p>
//                         <p>No: 7,A2B road, Adayar Rajpuram,</p>
//                         <p>T-Nagar, Chennai - 642002</p>
//                         <br />
//                         <div className="flex flex-row gap-2 mt-1">
//                         <svg className="mt-2" width="18" height="14" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M2.1718 1H11.543C11.8614 1.00664 12.1634 1.11564 12.3831 1.3031C12.6027 1.49057 12.7219 1.74118 12.7145 2V8C12.7219 8.25882 12.6027 8.50943 12.3831 8.6969C12.1634 8.88436 11.8614 8.99336 11.543 9H2.1718C1.85348 8.99336 1.5514 8.88436 1.33179 8.6969C1.11218 8.50943 0.992979 8.25882 1.00032 8V2C0.992979 1.74118 1.11218 1.49057 1.33179 1.3031C1.5514 1.11564 1.85348 1.00664 2.1718 1V1Z" stroke="#BBBBBB" stroke-linecap="round" stroke-linejoin="round"/>
// <path d="M12.7147 2L6.85732 5.5L1.00049 2" stroke="#BBBBBB" stroke-linecap="round" stroke-linejoin="round"/>
// </svg> 
// <p>sales@madeup.com</p>

//                         </div>
//                         <div className="flex flex-row gap-3 mt-3">

//                         <svg className="mt-1" width="18" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M11.9987 11.9866V10.2105C12.012 9.92974 11.9232 9.65363 11.7487 9.43324C11.5743 9.21284 11.3259 9.06308 11.0495 9.01162C10.5167 8.93627 9.99491 8.7972 9.49527 8.5974C9.29662 8.51848 9.07869 8.50169 8.87029 8.54924C8.66189 8.5968 8.47282 8.70646 8.32806 8.86374L7.62563 9.61824C6.22008 8.75384 5.07331 7.5268 4.30584 6.06606L5.00828 5.31157C5.15894 5.1447 5.26163 4.94017 5.30547 4.71967C5.3493 4.49916 5.33264 4.27091 5.25726 4.0591C5.07029 3.51952 4.9413 2.96157 4.87247 2.39468C4.8439 2.11934 4.71541 1.86402 4.51131 1.67702C4.30721 1.49002 4.04165 1.38431 3.76487 1.37988H2.10497C1.9492 1.38118 1.79557 1.41633 1.65474 1.4829C1.51391 1.54948 1.38923 1.64588 1.28936 1.76543C1.1847 1.8902 1.1057 2.03441 1.05689 2.18978C1.00808 2.34514 0.990414 2.50862 1.00492 2.67083C1.18171 4.48587 1.76115 6.23863 2.70102 7.80141C3.53406 9.21435 4.66738 10.427 6.02081 11.3536C7.43749 12.3434 9.07681 12.9678 10.793 13.1712C10.9481 13.1853 11.1044 13.1651 11.2509 13.112C11.3973 13.0589 11.5302 12.9743 11.6403 12.8641C11.7554 12.749 11.8463 12.6121 11.9078 12.4614C11.9694 12.3108 12.0003 12.1493 11.9987 11.9866Z" stroke="#BBBBBB" stroke-linecap="round" stroke-linejoin="round"/>
// </svg> <p>044 9999 9999</p>
//                         </div>

//                     </div>

//             </div>
         
            
//         </div>
//         </>
//     )
// }

// export default Footer
import { useState, useEffect } from "react";

function Footer() {
  const [data, setData] = useState({
    icons: {},
    footerLinks: [],
    socialIcons: [],
    contactInfo: { address: [], email: "", phone: "" }, // Default values
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
          {/* Footer Links */}
          <div className="text-white flex flex-col items-center md:items-start mt-5 gap-6 md:gap-7">
            {data.footerLinks?.map((link, index) => (
              <p key={index}>{link}</p>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex flex-col items-center py-7">
            <h1 className="text-2xl text-white bg-red-600 px-4 py-2 h-16">
              MADE UP
            </h1>
            <p className="mt-3 text-white">Stay in touch with us</p>
            <div className="mt-2 gap-3 flex">
              {data.socialIcons?.map((icon, index) => (
                <svg
                  key={index}
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  dangerouslySetInnerHTML={{ __html: icon?.svg || "" }}
                />
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-end leading-6 text-white py-5">
            <p className="font-semibold">Our Corporate Office</p>
            {data.contactInfo?.address?.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
            <br />
            <div className="flex flex-row gap-2 mt-1">
              <svg
                className="mt-2"
                width="18"
                height="14"
                viewBox="0 0 14 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                dangerouslySetInnerHTML={{ __html: data.icons?.email || "" }}
              />
              <p>{data.contactInfo?.email || "Not Available"}</p>
            </div>
            <div className="flex flex-row gap-3 mt-3">
              <svg
                className="mt-1"
                width="18"
                height="14"
                viewBox="0 0 13 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                dangerouslySetInnerHTML={{ __html: data.icons?.phone || "" }}
              />
              <p>{data.contactInfo?.phone || "Not Available"}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
