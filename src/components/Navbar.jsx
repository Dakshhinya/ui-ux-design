import { useState, useEffect, useRef } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState({
    categories: [],
    icons: {}
  });
  const [isLoading,setIsLoading] = useState(true);
  const [error,setError] = useState(null);
  const scrollContainerRef = useRef(null);
  useEffect(() => {
    fetch("/source.json") 
            .then((response) => response.json())
            .then((data) => setData(data),setIsLoading(false))
            .catch((error) => console.error("Error fetching images:", error),setError(error),setIsLoading(false));
  },[error]);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200;
      const currentScroll = scrollContainerRef.current.scrollLeft;
      
      scrollContainerRef.current.scrollTo({
        left: direction === 'left' ? currentScroll - scrollAmount : currentScroll + scrollAmount,
        behavior: 'smooth'
      });
    }
  };
  // if (isLoading) {
  //   return <div className="flex justify-center items-center h-16">Loading...</div>;
  // }

  // if (error) {
  //   return <div className="flex justify-center items-center h-16 text-red-600">Error: {error}</div>;
  // }

  return (
    <div className="flex flex-col">
      <nav className="bg-white h-[55px] shadow-sm">
        <div className="flex items-center justify-between px-4 md:px-8 h-full">
          <h1 className="bg-red-600 text-white font-bold flex items-center justify-start h-full py-1 pb-5 px-3">MADE UP</h1>

          <div className="hidden md:flex items-center">
            <div className="hidden md:flex lg:hidden items-center gap-2 max-w-full overflow-x-auto">
              {data.categories.map((category, index) => (
                <a 
                  key={index}
                  href="/" 
                  className={`${category.active ? "text-red-700" : "text-gray-700"} whitespace-nowrap text-sm px-2`}
                >
                  {category.name}
                </a>
              ))}
            </div>
            <div className="hidden lg:flex items-center gap-11">
              {data.categories.map((category, index) => (
                <a 
                  key={index} 
                  href="/" 
                  className={category.active ? "text-red-700" : "text-gray-700"}>
                  {category.name}
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                 dangerouslySetInnerHTML={{ __html: data.icons.search }}/>

            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"
                 dangerouslySetInnerHTML={{ __html: data.icons.cart }}/>

            <div className="hidden md:block">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                   dangerouslySetInnerHTML={{ __html: data.icons.user }}/>
            </div>
            
            <button className="md:hidden focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                   dangerouslySetInnerHTML={{ __html: data.icons.menu }}
              />
            </button>
          </div>
        </div>
      </nav>
      
      <div className="md:hidden bg-gray-50 overflow-hidden relative">
        <button 
          onClick={() => scroll('left')}
          className="absolute left-1 top-1/2 transform -translate-y-1/2 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md z-10"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
               dangerouslySetInnerHTML={{ __html: data.icons.leftArrow }}
          />
        </button> 
        <button 
          onClick={() => scroll('right')}
          className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md z-10"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
               dangerouslySetInnerHTML={{ __html: data.icons.rightArrow }}
          />
        </button>
        
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto no-scrollbar px-10 py-4 space-x-6 scrollbar-hide">
          {data.categories.map((category, index) => (
            <div key={index} className="flex-none flex flex-col items-center">
              <div className={`w-16 h-16 rounded-full overflow-hidden border-2 ${category.active ? 'border-red-600' : 'border-gray-200'}`}>
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className={`text-xs mt-1 ${category.active ? 'text-red-600 font-medium' : 'text-gray-700'}`}>
                {category.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;