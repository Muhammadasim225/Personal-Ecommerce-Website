const Headersecondpage = (props) => {
    const { title, day, showTimer,arrows } = props;
  
    return (
      <div className="  flex absolute -bottom-28 left-10 items-center mt-10 space-x-10 font-custom">
        {/* Today's Text */}
        <div className="flex items-center space-x-3">
          <div className="box w-5 h-10 bg-red-500 rounded-md"></div>
          <span className="text-red-500 font-bold">{day}</span>
        </div>
  
        {/* Flash Sales Text */}
        <div className="flex relative right-36 top-12 items-center mt-10 space-x-24">
          <h1 className="text-3xl font-semibold mt-2 font-custom">{title}</h1>
  
          {/* Conditional Countdown Timer */}
          {/* {showTimer && ( */}
            <div className="flex mt-4 relative -left-10">
              <div className="flex flex-col items-center space-y-2">
                <span className="text-3xl font-semibold">03</span>
                <span className="text-gray-600 text-xs">Days</span>
              </div>
              <span className="text-3xl font-semibold mx-2">:</span>
              <div className="flex flex-col items-center space-y-2">
                <span className="text-3xl font-semibold">20</span>
                <span className="text-gray-600 text-xs">Hours</span>
              </div>
              <span className="text-3xl font-semibold mx-2">:</span>
              <div className="flex flex-col items-center space-y-2">
                <span className="text-3xl font-semibold">19</span>
                <span className="text-gray-600 text-xs">Minutes</span>
              </div>
              <span className="text-3xl font-semibold mx-2">:</span>
              <div className="flex flex-col items-center space-y-2">
                <span className="text-3xl font-semibold">56</span>
                <span className="text-gray-600 text-xs">Seconds</span>
              </div>
            </div>
          {/* )} */}
  
          {/* Navigation Arrows */}
  
          
             <div className="flex mt-4 relative left-2/3 ">
             <button className="bg-gray-200 rounded-full p-2 mx-2 h-10">
               <FontAwesomeIcon icon={faArrowLeft} />
             </button>
             <button className="bg-gray-200 rounded-full p-2 mx-2 h-10">
               <FontAwesomeIcon icon={faArrowRight} />
             </button>
           </div>
  
          
  
         
        </div>
      </div>
    );
  };
  
  export default Headersecondpage;