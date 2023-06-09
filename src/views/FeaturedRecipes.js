import React from 'react'
import { useState, useEffect } from 'react';
import db from "../firebase-config";
const FeaturedRecipes = () => {

    const [isfood, setFood] = useState([]);
    const [showInfo, setShowInfo] = useState(false);
    const [selectedFood, setSelectedFood] = useState(null);
    const [isOpenFeatured, setOpenFeatured] = useState(false);
  
    const toggleFood = (food) => {
      setShowInfo(!showInfo);
      setSelectedFood(food);
    };
  
    const closePopup = () => {
      setShowInfo(false);
      setSelectedFood(null);
    };
    useEffect(() => {
      db.collection("food")
        .orderBy("datetime", "desc")
        .onSnapshot((snapshot) => {
          setFood(
            snapshot.docs.map((doc) => {
              return {
                id: doc.id,
                foodName: doc.data().foodName,
                foodCountry: doc.data().foodCountry,
                foodCategory: doc.data().foodCategory,
                foodIngredients: doc.data().foodIngredients,
                foodSummary: doc.data().foodSummary,
                image: doc.data().images,
                datetime: doc.data().datetime,
              };
            })
          );
        });
    }, []);

    const getRandomElements = (arr, count) => {
        const shuffled = arr.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
      };
    
      const randomData = getRandomElements(isfood, 4);


  console.log(isfood);
  return (<div className=' w-screen border flex justify-center pb-10'>
        
       <div className="">
       <h1 className='text-3xl text-center py-5'>Featured Recipes</h1>
       <hr></hr>
         <div className='rounded-md flex flex-wrap w-[1000px] gap-5 justify-center  mt-5 '>
         
             {randomData.map((food,index) => (
               
               <div key={index}>
                 <div className='w-52 rounded overflow-hidden'>
                   <img
                     className='w-48 h-48' src={food.image} alt='food'/>
                   <div className='px-6 py-3'>
                     <div className='font-bold text-sm mb-2 text-center'>
                       {food.foodName.toUpperCase()}
                     </div>
                   </div>
                 </div>
                
                 <div className="text-center mb-4">
                   <button onClick={()=>
                     toggleFood(food)
                   } className="p-2 hover:bg-orange-600 hover:text-white hover: rounded-lg bg-orange-500 font-bold">Read More</button>
                 </div>

                 {showInfo && selectedFood === food && (
                   <div className='fixed bg-slate-950/50 w-screen h-screen rounded drop-shadow-lg randomInfo'>
                     <div className='p-5 inline-block w-9/12 h-[42rem] bg-orange-300 foodInfo mb-1 pt-12 overflow-auto pb-28'>
                       <h1 className="text-4xl">{food.foodName.toUpperCase()}</h1>
                       <hr></hr>
                       <h3>
                         <strong>Ingredients</strong>
                       </h3>
                       <div className="grid grid-cols-2">
                       <div className="pl-5">
                         <p><span className="font-medium">{food.foodIngredients}</span> </p>
                        
                       </div>
                   
                     </div>
                       <div>
                       <h3 className="pt-5">
                         <strong>Instructions:</strong>
                       </h3>
                       <p className="indent-10 text-justify px-5">{food.foodSummary}</p>
                   
                     

                       <h3 className="pt-5">
                         <strong>Image:</strong>
                       </h3>
                       <img
                         className='w-80 h-80 ml-5 mt-3 rounded-lg'
                         src={food.image}
                         alt='Food'
                       />
                         <button
                           className=' absolute border border-black p-2 top-4   right-4 p-2 hover:bg-orange-600 hover:text-white hover:   rounded-lg bg-orange-500 font-bold'
                           onClick={closePopup}>
                             {" "}
                           Close
                       </button>
                       </div>
                     </div>
                     
                   </div>
                 )}
               </div>
             ))}
        <br></br>
             <button onClick={()=>{ setOpenFeatured(!isOpenFeatured)}}>See More</button>

             { isOpenFeatured && <div className='absolute  bg-white  w-auto h-auto'><div className='relative'>
             <button className='absolute right-2 top-0' onClick={()=>{setOpenFeatured(false)}}>Close</button>
            
            
             <div className='flex m-20'>
                
                
                {isfood.map((food) => (
               
               <div key={food.id}>
                 <div className='w-52 rounded overflow-hidden'>
                   <img
                     className='w-48 h-48' src={food.image} alt='food'/>
                   <div className='px-6 py-3'>
                     <div className='font-bold text-sm mb-2 text-center'>
                       {food.foodName.toUpperCase()}
                     </div>
                   </div>
                 </div>
                
                 <div className="text-center mb-4">
                   <button onClick={()=>
                     toggleFood(food)
                   } className="p-2 hover:bg-orange-600 hover:text-white hover: rounded-lg bg-orange-500 font-bold">Read More</button>
                 </div>

                 {showInfo && selectedFood === food && (
                   <div className='fixed bg-slate-950/50 w-screen h-screen rounded drop-shadow-lg randomInfo'>
                     <div className='p-5 inline-block w-9/12 h-[42rem] bg-orange-300 foodInfo mb-1 pt-12 overflow-auto pb-28'>
                       <h1 className="text-4xl">{food.foodName.toUpperCase()}</h1>
                       <hr></hr>
                       <h3>
                         <strong>Ingredients</strong>
                       </h3>
                       <div className="grid grid-cols-2">
                       <div className="pl-5">
                         <p><span className="font-medium">{food.foodIngredients}</span> </p>
                        
                       </div>
                   
                     </div>
                       <div>
                       <h3 className="pt-5">
                         <strong>Instructions:</strong>
                       </h3>
                       <p className="indent-10 text-justify px-5">{food.foodSummary}</p>
                   
                     

                       <h3 className="pt-5">
                         <strong>Image:</strong>
                       </h3>
                       <img
                         className='w-80 h-80 ml-5 mt-3 rounded-lg'
                         src={food.image}
                         alt='Food'
                       />
                         <button
                           className=' absolute border border-black p-2 top-4   right-4 p-2 hover:bg-orange-600 hover:text-white hover:   rounded-lg bg-orange-500 font-bold'
                           onClick={closePopup}>
                             {" "}
                           Close
                       </button>
                       </div>
                     </div>
                     
                   </div>
                 )}
               </div>
             ))}</div> </div> </div>  }
           </div>
          
         </div>
                   
     </div>
  )
}

export default FeaturedRecipes
