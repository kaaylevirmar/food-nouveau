import React, { useEffect, useState } from "react";


export default function Category({ category }) {
  const [isOpen, setIsOpen] = useState(false);
  const [categoryStage, setCategoryState] = useState([]);
  const [categoryInfo, setCategoryInfo] = useState([]);

  const [showInfo, setShowInfo] = useState(false);
  const [selectedFood, setSelectedFood] = useState(null);

  const closePopup = () => {
    setShowInfo(false);
    setSelectedFood(null);
  };


  const toggleCategoryFood = async (catStage) => {
    setShowInfo(!showInfo);
    setSelectedFood(catStage);
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${catStage.idMeal}`
      );
      const data = await response.json();
      setCategoryInfo(data.meals);
    } catch (error) {
      console.log("Error:", error);
    }
    console.log(categoryInfo);
  }


  
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category.strCategory}`)
      .then((response) => response.json())
      .then((data) => setCategoryState(data.meals));
  }, []);

  return (
    <div className="">
      <img onClick={()=> setIsOpen(true)} src={category.strCategoryThumb} alt="categories" className="rounded-lg"/>
      <div className="font-bold" onClick={()=> setIsOpen(true)}>{category.strCategory}</div>
      

      {isOpen && 
        <div className="fixed bg-slate-950/50 w-screen h-screen rounded drop-shadow-lg randomInfo">
          <div className="p-5 w-9/12 h-[42rem] bg-orange-300 foodInfo mb-1 pt-12 overflow-auto pb-10">
            <div className="flex justify-center">
              <div className="text-center">
                <img src={category.strCategoryThumb} alt="categories" className="rounded-lg"/>
                <h1 className="text-4xl">{category.strCategory}</h1>
                
              </div>
              <button onClick={()=>{setIsOpen(false)}} className='border border-black p-2  top-4 right-4 rounded-lg hover:bg-orange-600 hover:text-white   hover:rounded-lg bg-orange-500 font-bold absolute'>Close </  button>
            </div>
            <div className="flex justify-center">
            <hr className="w-[1000px] text-center"></hr>
            </div>
            <div className="flex flex-wrap mt-10 gap-10 justify-center">
            {categoryStage.map(catStage =>(
            
                <div key={catStage.idMeal}>

                  <div className="h-80">

                    <div className="text-center flex flex-col justify-center w-52">
                      <img src={catStage.strMealThumb} alt="Modal images" className="rounded-lg "/>

                      <div className="h-16 flex justify-center">
                        <p className="font-bold text-sm mb-2 self-center text-center">{catStage.strMeal}</p>
                      </div>
                    </div>
                    
                    <div className="justify-center flex">
                      <button onClick={()=>toggleCategoryFood(catStage)} className="p-2 hover:bg-orange-600 hover:text-white hover: rounded-lg bg-orange-500 font-bold">Read More</button>
                    </div>
                    
                  </div>
                  
                  
               
                  {showInfo && selectedFood === catStage && ( 
                    <div className='fixed w-screen h-screen rounded drop-shadow-lg randomInfo'>
                      {categoryInfo.map((categoryDiv) =>
                        <div key={categoryDiv.idMeal} className='p-5 w-9/12 h-[42rem] bg-orange-300 foodInfo mb-1 pt-12 overflow-auto pb-28'>
                          <div className="flex">
                            <div className="w-8/12">
                              <h1 className="text-4xl">{categoryDiv.strMeal}</h1>
                            </div>
                            <div className="self-end ">
                              <button className=" ml-5 p-1 mt-1 px-3 rounded-full hover:bg-orange-600  hover:text-white bg-orange-500 font-bold mb-1"> Add to favorites</button>
                            </div>
                          </div>
                          <hr></hr>
                          <h3>
                          <strong>Ingredients:</strong>
                          </h3>

                          <div className="grid grid-cols-2">
                            <div className="pl-5">
                              <p><span className="font-medium">{categoryDiv.strIngredient1}</ span> - {categoryDiv.strMeasure1}</p>
                              <p><span className="font-medium">{categoryDiv.strIngredient2}</ span> - {categoryDiv.strMeasure2}</p>
                              <p><span className="font-medium">{categoryDiv.strIngredient3}</ span> - {categoryDiv.strMeasure3}</p>
                              <p><span className="font-medium">{categoryDiv.strIngredient4}</ span> - {categoryDiv.strMeasure4}</p>
                              <p><span className="font-medium">{categoryDiv.strIngredient5}</ span> - {categoryDiv.strMeasure5}</p>
                              <p><span className="font-medium">{categoryDiv.strIngredient6}</ span> - {categoryDiv.strMeasure6}</p>
                              <p><span className="font-medium">{categoryDiv.strIngredient7}</ span> - {categoryDiv.strMeasure7}</p>
                              <p><span className="font-medium">{categoryDiv.strIngredient8}</ span> - {categoryDiv.strMeasure8}</p>
                              <p><span className="font-medium">{categoryDiv.strIngredient9}</ span> - {categoryDiv.strMeasure9}</p>
                              <p><span className="font-medium">{categoryDiv.strIngredient10}  </span> - {categoryDiv.strMeasure10}</p>
                            </div>
                            <div>
                              <p><span className="font-medium">{categoryDiv.strIngredient11}</span> - {categoryDiv.strMeasure11}</p>
                              <p><span className="font-medium">{categoryDiv.strIngredient12}</span> - {categoryDiv.strMeasure12}</p>
                              <p><span className="font-medium">{categoryDiv.strIngredient13}</span> - {categoryDiv.strMeasure13}</p>
                              <p><span className="font-medium">{categoryDiv.strIngredient14}</span> - {categoryDiv.strMeasure14}</p>
                              <p><span className="font-medium">{categoryDiv.strIngredient15}</span> - {categoryDiv.strMeasure15}</p>
                              <p><span className="font-medium">{categoryDiv.strIngredient16}</span> - {categoryDiv.strMeasure16}</p>
                              <p><span className="font-medium">{categoryDiv.strIngredient17}</span> - {categoryDiv.strMeasure17}</p>
                              <p><span className="font-medium">{categoryDiv.strIngredient18}</span> - {categoryDiv.strMeasure18}</p>
                              <p><span className="font-medium">{categoryDiv.strIngredient19}</span> - {categoryDiv.strMeasure19}</p>
                              <p><span className="font-medium">{categoryDiv.strIngredient20}</span> - {categoryDiv.strMeasure20}</p>
                            </div>
                          </div>
                          <div>
                            <h3 className="pt-5">
                              <strong strong>Instructions:</strong>
                            </h3>
                            <p className="indent-10 text-justify px-5">{categoryDiv.strInstructions}</p>

                            <h3 className="pt-5">
                              <strong>Youtube:</strong>
                            </h3>
                            <a href={categoryDiv.strYoutube} target="_blank" rel="noreferrer"className="ml-5 hover:underline ">{categoryDiv.strYoutube}</a>

                            <h3 className="pt-5">
                            <strong>Source:</strong>
                            </h3>
                            <a href={categoryDiv.strSource} target="_blank" rel="noreferrer" className="ml-5 hover:underline">{categoryDiv.strSource}</a>

                            <h3 className="pt-5">
                              <strong>Image:</strong>
                            </h3>
                            <img
                              className='w-80 h-80 ml-5 mt-3 rounded'
                              src={categoryDiv.strMealThumb}
                              alt="Food_Picture_Search"
                            />
                        
                          </div>
                          <button onClick={closePopup} className=' absolute border border-black p-2 top-4 right-4 p-2 hover:bg-orange-600 hover:text-white hover: rounded-lg bg-orange-500 font-bold'>Close</button>
                        </div>
                      )}
                      
                    </div>
                  )}
                
                
                
                </div>
                
            ))}
            
             </div>
             
          </div>
          
          

        </div>
      }
    
    </div>
  )
      
}
