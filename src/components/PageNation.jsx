
import { useState } from "react";


function PageNation() {

    const vegitems = ["potato","onion","jai","apple","mango","tomato","potato","onion","jai","apple","potato","potato","onion","jai","apple","onion","jai","apple"];

    let pageitems = 5;
    // let totalpages = vegitems.length/pageitems;
    let totalpages = Math.ceil(vegitems.length / pageitems); 
  console.log(totalpages);
    let [pagenumber,setpagenumber]= useState(1);

    let endingIndexItems = pageitems * pagenumber;
    let startingIndexItems = endingIndexItems - pageitems;

    let currnetItems = vegitems.slice(startingIndexItems,endingIndexItems);
       const currnetItemsPrintdata = currnetItems.map((data,index)=>(
            <li key={index} >
                {data}
            </li>
       ))


    
    const handlePage = (page)=>{
        setpagenumber(page);
    }

    // console.log(totalpages)

  return (
    <>
    {console.log(totalpages)}
    {currnetItemsPrintdata}
    
    <button onClick={()=>setpagenumber(pagenumber-1)}   disabled={pagenumber === 1} >prev</button>

    {Array.from({ length: totalpages }, (_, index) => (
        <button key={index} onClick={() => handlePage(index+1 )}>
          {index + 1}
        </button>
      ))}

    <button onClick={()=>setpagenumber(pagenumber+1)} disabled={pagenumber === totalpages} >next</button>
   

    </>
  )
}

export default PageNation