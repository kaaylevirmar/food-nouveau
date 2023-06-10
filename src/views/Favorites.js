import React from 'react'
import { useState, useEffect } from 'react'
import db from "../firebase-config"


const Favorites = () => {
  const [data, setData] = useState([]);
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
      // Replace with your Firebase SDK configuration
  
  
      // Initialize Firebase
      
  
      // Get a reference to the Firestore database
     
  
      // Retrieve the data from Firestore
      db.collection("favorites").get().then(querySnapshot => {
        const documents = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setData(documents);
      });
    }, []);
    console.log(data);

    const handleDelete = (id) => {
      // Get a reference to the Firestore database
     
  
      // Delete the document with the specified ID
      db.collection("favorites").doc(id).delete().then(() => {
        console.log(`Document with ID ${id} deleted successfully.`);
        // Update the data state to reflect the deletion
        const updatedData = data.filter(item => item.id !== id);
        setData(updatedData);
      }).catch(error => {
        console.error("Error deleting document: ", error);
      });
    };
  
    


    
  return (
    <div className=' w-screen border flex justify-center pb-10'>
        
    <div className="">
    <h1 className='text-3xl text-center py-5'>Favorites</h1>
    <hr></hr>
      <div className='rounded-md flex flex-wrap w-[1000px] gap-5 justify-center  mt-5 '>
      
          {data.map((food) => (
            
            <div key={food.id}>
              <div className='w-52 rounded overflow-hidden'>
                <img
                  className='w-48 h-48' src={food.strMealThumb} alt='food'/>
                <div className='px-6 py-3'>
                  <div className='font-bold text-sm mb-2 text-center'>
                    {food.strMeal.toUpperCase()}
                  </div>
                </div>
              </div>
              <button onClick={() => handleDelete(food.id)}>Delete</button>
              <div className="text-center mb-4">
                <button onClick={()=>
                  toggleFood(food)
                } className="p-2 hover:bg-orange-600 hover:text-white hover: rounded-lg bg-orange-500 font-bold">Read More</button>
                
              </div>

              {showInfo && selectedFood === food && (
                <div className='fixed bg-slate-950/50 w-screen h-screen rounded drop-shadow-lg randomInfo'>
                  <div className='p-5 inline-block w-9/12 h-[42rem] bg-orange-300 foodInfo mb-1 pt-12 overflow-auto pb-28'>
                    <h1 className="text-4xl">{food.strMeal.toUpperCase()}</h1>
                    <hr></hr>
                    <h3>
                      <strong>Ingredients</strong>
                    </h3>
                    <div className="grid grid-cols-2">
                    <div className="pl-5">
                      <p><span className="font-medium">{food.strIngredient1}</span> </p>
                      <p><span className="font-medium">{food.strIngredient2}</span> </p>
                      <p><span className="font-medium">{food.strIngredient3}</span> </p>
                      <p><span className="font-medium">{food.strIngredient4}</span> </p>
                      <p><span className="font-medium">{food.strIngredient5}</span> </p>
                      <p><span className="font-medium">{food.strIngredient6}</span> </p>
                      <p><span className="font-medium">{food.strIngredient7}</span> </p>
                      <p><span className="font-medium">{food.strIngredient8}</span> </p>
                      <p><span className="font-medium">{food.strIngredient9}</span> </p>
                      <p><span className="font-medium">{food.strIngredient10}</span> </p>
                      <p><span className="font-medium">{food.strIngredient11}</span> </p>
                      <p><span className="font-medium">{food.strIngredient12}</span> </p>
                      <p><span className="font-medium">{food.strIngredient13}</span> </p>
                      <p><span className="font-medium">{food.strIngredient14}</span> </p>
                      <p><span className="font-medium">{food.strIngredient15}</span> </p>
                      <p><span className="font-medium">{food.strIngredient16}</span> </p>
                      <p><span className="font-medium">{food.strIngredient17}</span> </p>
                      <p><span className="font-medium">{food.strIngredient18}</span> </p>
                      <p><span className="font-medium">{food.strIngredient19}</span> </p>
                      <p><span className="font-medium">{food.strIngredient20}</span> </p>
                     
                    </div>
                
                  </div>
                    <div>
                    <h3 className="pt-5">
                      <strong>Instructions:</strong>
                    </h3>
                    <p className="indent-10 text-justify px-5">{food.strInstructions}</p>
                
                  

                    <h3 className="pt-5">
                      <strong>Image:</strong>
                    </h3>
                    <img
                      className='w-80 h-80 ml-5 mt-3 rounded-lg'
                      src={food.strMealThumb}
                      alt='Food'
                    />
                      <button
                        className=' absolute border border-black p-2 top-4   right-4  hover:bg-orange-600 hover:text-white hover:   rounded-lg bg-orange-500 font-bold'
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
  )
}

export default Favorites
