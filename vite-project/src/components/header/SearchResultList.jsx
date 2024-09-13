import React from 'react'

const SearchResultList = ({results,searchListRef,onSelect

}) => {

    const held=()=>{
        console.log("Hemlo gg");
    }
  return (
    <div ref={searchListRef} className='bg-[#f6f6f6] absolute top-full left-0 w-full shadow-lg rounded-b-lg z-10 text-left overflow-y-auto max-h-[300px] border border-slate-500'>


         {results.map((result,id)=>{
            return <div key={id} className='border-b border-gray-200 p-2 pl-4 text-sm hover:bg-[#eee]' onClick={()=>onSelect(result)}>{result.title}</div>  
        })}

        {/* <FilteredProduct></FilteredProduct> */}
        

    </div>
  )
}

export default SearchResultList
