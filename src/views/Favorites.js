import React, { useEffect, useState } from "react";
import db from "../firebase-config";

const Favorites = () => {
  const [isfood, setFood] = useState([]);
  const [showInfo, setShowInfo] = useState(false);
  const [selectedFood, setSelectedFood] = useState(null);

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
            console.log(doc.id);
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

  
  return (

    <div className='bg-orange-300 '>
      <div className='pb-52'>
        <h1 className='text-3xl'>Favorites Recipes</h1>
      </div>

      {/* Featured recipes from the user input */}
      <div className=' w-screen border flex justify-center pb-10'>
        
        <div className="">
        <h1 className='text-3xl text-center py-5'>Featured Recipes</h1>
        <hr></hr>
          <div className='rounded-md flex flex-wrap w-[1000px] gap-5 justify-center  mt-5 '>
          
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
              ))}
            </div>
           
          </div>
                    
      </div>

      <footer className="w-screen bg-orange-600 mt-10 py-2">
        <div className="grid grid-cols-3">
          {/* First Grid */}
          <div className="p-5">
              <div className="text-left">Food <span className="text-white font-bold">Nouveau</span></div>
              <div className="pt-2">
                <ul className="flex gap-2">
                  <li className="border-r-2 border-black pr-1">Home</li>
                  <li className="border-r-2 border-black pr-1">Blog</li>
                  <li className="border-r-2 border-black pr-1">Pricing</li>
                  <li className="border-r-2 border-black pr-1">About</li>
                  <li className="border-r-2 border-black pr-1">Faq</li>
                  <li className=" pr-1">Contact</li>
                </ul>
              </div>
              <div className="text-left pt-2">Copyright © 2023</div>
          </div>

          {/* Second Grid */}
          <div className=" p-5 ">
             <div className="text-left">444 S. Sakahan Ave <br/> Brgy Kalye, San Pedro, Nueva Ecija</div>
             <div className="text-left pt-2">
              +1.555.555.5555
             </div>
             <div className="text-left pt-2">
              support@FoodNouveau.com
             </div>
          </div>

          {/* Third Grid */}
          <div className="p-5">
              <div className="text-left text-xl font-black">About the company</div>
              <div className="text-left indent-6 pt-2">Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.</div>

          </div>
        </div>
     </footer>
    </div>
  );



};

export default Favorites;
