import { useEffect,useState } from "react";
// const abortcont= new AbortController();
const useFetch = (url) => {
   const [blogs,setblogs]=useState(null);
    const[ispending,setIspending]=useState(true);
    const[error,setError]=useState(null);
     
 
   
    
         useEffect(()=>
   {
   //  const abortcont= new AbortController();
     setTimeout(()=>
   {
       fetch(url).then(res=>
   
         { if(!res.ok)
         {
            throw Error("data  is not fetched");
         }
            return res.json();} 
      ).then(data=>
      {setblogs(data);
         setIspending(false);
         setError(false);
      }
      ).catch(e=>{
       
         setIspending(false);
         setError(e.message);
      })
   },1000);
   // return abortcont.abort();
      // console.log("hello kumar website is rerendered");
   },[url])
  
     return {blogs,ispending,error}
}
 
export default useFetch;