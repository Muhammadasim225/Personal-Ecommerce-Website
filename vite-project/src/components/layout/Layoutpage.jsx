
import ps4 from '../../assets/images/Frame 684.jpg';
import women from '../../assets/images/Frame 685.jpg';
import speaker from '../../assets/images/Frame 686.jpg';
import perfumes from '../../assets/images/Frame 687.jpg';

const Layoutpage = () => {


  
    return (
        <div className="bg-white p-10">
          <div className="flex flex-col">
            <div className="flex items-center mb-4">
            <div className="bg-red-500 mr-4 w-5 h-10 rounded-md"></div>
            <h2 className="text-md font-custom text-red-500 font-bold flex-grow">Featured</h2>
            </div>



            <h1 className="text-3xl font-semibold text-gray-900 mb-8 relative right-3 my-6 font-custom ">New Arrival</h1>    
            <div className="grid grid-cols-2 gap-4 mx-10 my-5">
              <div className="relative">
                <img
                  src={ps4}
                  alt="PlayStation 5"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-14 left-9 text-white">
                  <h2 className="text-3xl font-custom font-semibold">PlayStation 5</h2>
                  <p className='relative top-3 w-64 font-custom'>Black and White version of the PS5 coming out on sale.</p>
                  <button className=" relative top-8 text-xl text-white border-b-2 border-b-white font-custom font-semibold">Shop Now</button>
                </div>
              </div>
    
              <div className="grid grid-cols-1 gap-4">
                <div className="relative">
                  <img
                    src={women}
                    alt="Women's Collections"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-14 left-9  text-white">
                    <h2 className="text-3xl font-custom font-semibold">Women's Collections</h2>
                    <p className='relative top-3 w-64 font-custom'>Featured woman collections that give you another vibe.</p>
                    <button className="relative top-8 text-xl text-white border-b-2 border-b-white font-custom font-semibold">Shop Now</button>
                  </div>
                </div>
    
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <img
                      src={speaker}
                      alt="Speakers"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-7 left-5 text-white">
                      <h2 className="text-2xl font-custom font-semibold my-1">Speakers</h2>
                      <p className='relative w-64 text-sm font-custom'>Amazon wireless speakers</p>
                      <button className="relative top-2  text-white border-b-2 border-b-white font-custom font-semibold text-md">Shop Now</button>
                    </div>
                  </div>
    
                  <div className="relative">
                    <img
                      src={perfumes}
                      alt="Perfume"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-7 left-5 text-white">
                      <h2 className="text-2xl font-custom font-semibold my-1">Perfume</h2>
                      <p className='relative w-64 text-sm font-custom'>GUCCI INTENSE OUD EDP</p>
                      <button className="relative top-2  text-white border-b-2 border-b-white font-custom font-semibold text-md">Shop Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}
 
export default Layoutpage;