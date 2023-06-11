import React, { useEffect, useState } from "react";


export default function Category({ category }) {
  const [isOpen, setIsOpen] = useState(false);
  const [categoryStage, setCategoryState] = useState([]);
  
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category.strCategory}`)
      .then((response) => response.json())
      .then((data) => setCategoryState(data.meals));
  }, []);

  return (
    <div className="" >
      <img onClick={()=> setIsOpen(true)} src={category.strCategoryThumb} alt="categories" className="rounded-lg"/>
      <div className="font-bold text-center" onClick={()=> setIsOpen(true)}>{category.strCategory}</div>
      

      {isOpen && 
      <div className="fixed bg-slate-950/50 w-screen h-screen rounded drop-shadow-lg randomInfo">
         <div className="p-5 inline-block w-9/12 h-[42rem] bg-orange-300 foodInfo mb-1 pt-12 overflow-auto pb-28">
          <div>
          <img src={category.strCategoryThumb} alt="categories" className="rounded-lg"/>
          <h1>{category.strCategory}</h1>
          </div>

          {categoryStage.map(catStage =>(
          <div key={catStage.idMeal} className="justify-self-center w-56 text-center mt-2">

            <div className="flex justify-center">
              <img src={catStage.strMealThumb} alt="Modal images" className="rounded-lg "/>

            </div>
            <p><strong>{catStage.strMeal}</strong></p>
            <button onClick={()=>{setIsOpen(false)}} className='fixed border border-black p-2 top-14 right-60 p-2 rounded-lg hover:bg-orange-600 hover:text-white hover:rounded-lg bg-orange-500  font-bold'>Close</button>
        
          </div>
        
      ))}
      </div>
      </div>
      }
    
    </div>
  )
      
}
