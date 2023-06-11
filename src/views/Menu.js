import React from "react";
import 'firebase/firestore';
import db from "../firebase-config";

import { useState, useEffect } from "react";
import AmericaFlag from '../images/american.png';
import BritishFlag from '../images/british.png';
import CanadianFlag from '../images/canada.png';
import ChineseFlag from '../images/chinese.png';
import CroatianFlag from '../images/Croatian.png';
import DutchFlag from '../images/Dutch.png';
import EgyptianFlag from '../images/Egyptian.png';
import PhilippineFlag from '../images/Philippines.png';
import FrenchFlag from '../images/French.png';
import GreekFlag from '../images/Greek.png';
import IndianFlag from '../images/Indian.png';
import IrishFlag from '../images/Irish.png';
import ItalianFlag from '../images/Italian.png';
import JamaicanFlag from '../images/Jamaican.png';
import JapanFlag from '../images/Japanese.png';
import KenyaFlag from '../images/Kenyan.png';
import MalasiaFlag from '../images/Malaysian.png';
import MexicoFlag from '../images/Mexican.png';
import MoroocanFlag from '../images/Moroccan.png';
import PolishFlag from '../images/Polish.png';
import PortugueseFlag from '../images/Portuguese.png';
import RussianFlag from '../images/Russian.png';
import SpanishFlag from '../images/Spanish.png';
import ThaiFlag from '../images/Thai.png';
import Tunisian from '../images/Tunisian.png';
import TurkishFlag from '../images/Turkish.png'
import VietnamFlag from '../images/Vietnamese.png';
import SearchIcon from '../images/icons8-search-50.png';



const Menu = () => {
  const [favoriteSend, setFavoriteSend] = useState(false);
  const [addFavorite, setAddFavorite] = useState('');



  //-------------------------- 1st random recipe
  const [foodApi1, getFoodApi1] = useState([]);
  const [popupInfoApi1, setPopupInfoApi1] = useState(false);
 // --------------------------add to favorites
const handleAddToFirestore1 = (data) => {
  db.collection('favorites').add(data)
    .then(() => {
      setFavoriteSend(true);
      setAddFavorite(data.strMeal);
      setTimeout(() => {
        setFavoriteSend(false)
      },2000)
    })
    .catch((error) => {
      console.error('Error adding data to Firestore:', error);
    });
};

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
      .then((response) => response.json())
      .then((data) => getFoodApi1(data.meals));
  }, []);

  //-------------------------- 2nd random recipe

  const [foodApi2, getFoodApi2] = useState([]);
  const [popupInfoApi2, setPopupInfoApi2] = useState(false);
// --------------------------add to favorites
  const handleAddToFirestore2 = (data) => {
    db.collection('favorites').add(data)
      .then(() => {
        setFavoriteSend(true);
        setAddFavorite(data.strMeal);
        setTimeout(() => {
        setFavoriteSend(false)
        },2000)
      })
      .catch((error) => {
        console.error('Error adding data to Firestore:', error);
      });
  };

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
      .then((response) => response.json())
      .then((data) => getFoodApi2(data.meals));
  }, []);

  //-------------------------- 3rd random recipe
  const [foodApi3, getFoodApi3] = useState([]);
  const [popupInfoApi3, setPopupInfoApi3] = useState(false);
  // --------------------------add to favorites
  const handleAddToFirestore3 = (data) => {
    db.collection('favorites').add(data)
      .then(() => {
        setFavoriteSend(true);
        setAddFavorite(data.strMeal);
        setTimeout(() => {
        setFavoriteSend(false)
        },2000)
      })
      .catch((error) => {
        console.error('Error adding data to Firestore:', error);
      });
  };

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
      .then((response) => response.json())
      .then((data) => getFoodApi3(data.meals));
  }, []);

  //-------------------------- 4th random recipe
  const [foodApi4, getFoodApi4] = useState([]);
  const [popupInfoApi4, setPopupInfoApi4] = useState(false);
// --------------------------add to favorites
  const handleAddToFirestore4 = (data) => {
    db.collection('favorites').add(data)
      .then(() => {
        setFavoriteSend(true);
        setAddFavorite(data.strMeal);
        setTimeout(() => {
        setFavoriteSend(false)
        },2000)
      })
      .catch((error) => {
        console.error('Error adding data to Firestore:', error);
      });
  };
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
      .then((response) => response.json())
      .then((data) => getFoodApi4(data.meals));
  }, []);

  //-------------------------- 5th random recipe
  const [foodApi5, getFoodApi5] = useState([]);
  const [popupInfoApi5, setPopupInfoApi5] = useState(false);
  // --------------------------add to favorites
  const handleAddToFirestore5 = (data) => {
    db.collection('favorites').add(data)
      .then(() => {
        setFavoriteSend(true);
        setAddFavorite(data.strMeal);
        setTimeout(() => {
        setFavoriteSend(false)
        },2000)
      })
      .catch((error) => {
        console.error('Error adding data to Firestore:', error);
      });
  };
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
      .then((response) => response.json())
      .then((data) => getFoodApi5(data.meals));
  }, []);

  //-------------------------- 6th random recipe
  const [foodApi6, getFoodApi6] = useState([]);
  const [popupInfoApi6, setPopupInfoApi6] = useState(false);
  // --------------------------add to favorites
  const handleAddToFirestore6 = (data) => {
    db.collection('favorites').add(data)
      .then(() => {
        setFavoriteSend(true);
        setAddFavorite(data.strMeal);
        setTimeout(() => {
        setFavoriteSend(false)
        },2000)
      })
      .catch((error) => {
        console.error('Error adding data to Firestore:', error);
      });
  };
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
      .then((response) => response.json())
      .then((data) => getFoodApi6(data.meals));
  }, []);

  //-------------------------- 7th random recipe
  const [foodApi7, getFoodApi7] = useState([]);
  const [popupInfoApi7, setPopupInfoApi7] = useState(false);
  // --------------------------add to favorites
  const handleAddToFirestore7 = (data) => {
    db.collection('favorites').add(data)
      .then(() => {
        setFavoriteSend(true);
        setAddFavorite(data.strMeal);
        setTimeout(() => {
        setFavoriteSend(false)
        },2000)
      })
      .catch((error) => {
        console.error('Error adding data to Firestore:', error);
      });
  };
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
      .then((response) => response.json())
      .then((data) => getFoodApi7(data.meals));
  }, []);

  //-------------------------- 8th random recipe
  const [foodApi8, getFoodApi8] = useState([]);
  const [popupInfoApi8, setPopupInfoApi8] = useState(false);
  // --------------------------add to favorites
  const handleAddToFirestore8 = (data) => {
    db.collection('favorites').add(data)
      .then(() => {
        setFavoriteSend(true);
        setAddFavorite(data.strMeal);
        setTimeout(() => {
        setFavoriteSend(false)
        },2000)
      })
      .catch((error) => {
        console.error('Error adding data to Firestore:', error);
      });
  };
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
      .then((response) => response.json())
      .then((data) => getFoodApi8(data.meals));
  }, []);

  // -------------------------- Search
  const [foodSearch, setFoodSearch] = useState("");
  const [getFoodApi, setGetFoodApi] = useState([]);
  const [isHidden, setIsHidden] = useState(true);
  

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

  const handleAddToFirestoreSearch = (data) => {
    db.collection('favorites').add(data)
      .then(() => {
        setFavoriteSend(true);
        setAddFavorite(data.strMeal);
        setTimeout(() => {
        setFavoriteSend(false)
        },2000)
      })
      .catch((error) => {
        console.error('Error adding data to Firestore:', error);
      });
  };

const [notFound, setNotFound] =  useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    setCountryDiv(true);
    setNotFound(false);
    if (typeof foodSearch !== 'string' || !/^[a-zA-Z\s]+$/.test(foodSearch)) {

       
      alert("pls input valid ")

    
    }
      
      
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodSearch}`
      );
      const data = await response.json();
      setGetFoodApi(data.meals);
      setFoodSearch("");
    } catch (error) {
      console.log("Error:", error);
    }

      if(getFoodApi === null){

        setNotFound(false);
        
        
        
      } else {
        setNotFound(false);
    
      }


    if (foodSearch === "") {
      setIsHidden(true);
     
     
    } else{
      setIsHidden(false);
      
    }
   
    
};

  const HandleChangeFoodSearch = (e) => {
    setFoodSearch(e.target.value);
    
  };

//-----------------------------------------Country div
const [countryDiv, setCountryDiv] = useState(true);
const [country, getCountry] = useState([]);
const [countryCode, setCountryCode] = useState('');
const [countryFlag, setCountryFlag] = useState('');
const [countryFoodDiv , setCountryFoodDiv] = useState([]);



const toggleCountryFood = async (food) => {
  setShowInfo(!showInfo);
  setSelectedFood(food);
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${food.idMeal}`
    );
    const data = await response.json();
    setCountryFoodDiv(data.meals);
  } catch (error) {
    console.log("Error:", error);
  }
}




const AmericanFlagButton = async() =>{
  try{
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=american`)
    const data = await response.json();
    getCountry(data.meals);
    
  } catch (error){
    console.log("Error:", error);
  }
  setCountryDiv(false);
  setCountryCode('America');
  setCountryFlag(`${AmericaFlag}`);
  window.scrollTo({top:0, left:0 ,behavior: 'smooth'});
  
  
}

const BritishFlagButton = async() =>{
 
  try{
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=british`)
    const data = await response.json();
    getCountry(data.meals);
  } catch (error){
    console.log("Error:", error);
  }
  setCountryDiv(false);
  setCountryCode('British');
  setCountryFlag(`${BritishFlag}`);
  window.scrollTo({top:0, left:0 ,behavior: 'smooth'});
}

const CanadaFlagButton = async() =>{
 
  try{
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=canadian`)
    const data = await response.json();
    getCountry(data.meals);
  } catch (error){
    console.log("Error:", error);
  }
  setCountryDiv(false);
  setCountryCode('Canada');
  setCountryFlag(`${CanadianFlag}`);
  window.scrollTo({top:0, left:0 ,behavior: 'smooth'});
}

const ChineseFlagButton = async() =>{
  try{
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=chinese`)
    const data = await response.json();
    getCountry(data.meals);
  } catch (error){
    console.log("Error:", error);
  }
  setCountryDiv(false);
  setCountryCode('China');
  setCountryFlag(`${ChineseFlag}`);
  window.scrollTo({top:0, left:0 ,behavior: 'smooth'});
}

const CroatianFlagButton = async() =>{
  try{
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=Croatian`)
    const data = await response.json();
    getCountry(data.meals);
  } catch (error){
    console.log("Error:", error);
  }
  setCountryDiv(false);
  setCountryCode('Croatia');
  setCountryFlag(`${CroatianFlag}`);
  window.scrollTo({top:0, left:0 ,behavior: 'smooth'});
}

const DuctchFlagButton = async() =>{
  try{
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=Dutch`)
    const data = await response.json();
    getCountry(data.meals);
  } catch (error){
    console.log("Error:", error);
  }
  setCountryDiv(false);
  setCountryCode('Netherlands');
  setCountryFlag(`${DutchFlag}`);
  window.scrollTo({top:0, left:0 ,behavior: 'smooth'});
}

const EgyptianFlagButton = async() =>{
  try{
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=Egyptian`)
    const data = await response.json();
    getCountry(data.meals);
  } catch (error){
    console.log("Error:", error);
  }
  setCountryDiv(false);
  setCountryCode('Egypt');
  setCountryFlag(`${EgyptianFlag}`);
  window.scrollTo({top:0, left:0 ,behavior: 'smooth'});
}

const PhilippineFlagButton = async() =>{
  try{
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=Filipino`)
    const data = await response.json();
    getCountry(data.meals);
  } catch (error){
    console.log("Error:", error);
  }
  setCountryDiv(false);
  setCountryCode('Philippines');
  setCountryFlag(`${PhilippineFlag}`);
  window.scrollTo({top:0, left:0 ,behavior: 'smooth'});
}

const FrenchFlagButton = async() =>{
  try{
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=french`)
    const data = await response.json();
    getCountry(data.meals);
  } catch (error){
    console.log("Error:", error);
  }
  setCountryDiv(false);
  setCountryCode('France');
  setCountryFlag(`${FrenchFlag}`);
  window.scrollTo({top:0, left:0 ,behavior: 'smooth'});
 }
 
 const GreekFlagButton = async() =>{
  try{
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=greek`)
    const data = await response.json();
    getCountry(data.meals);
  } catch (error){
    console.log("Error:", error);
  }
  setCountryDiv(false);
  setCountryCode('Greece');
  setCountryFlag(`${GreekFlag}`);
  window.scrollTo({top:0, left:0 ,behavior: 'smooth'});
 }

 const IndianFlagButton = async() =>{
  try{
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian`)
    const data = await response.json();
    getCountry(data.meals);
  } catch (error){
    console.log("Error:", error);
  }
  setCountryDiv(false);
  setCountryCode('India ');
  setCountryFlag(`${IndianFlag}`);
  window.scrollTo({top:0, left:0 ,behavior: 'smooth'});
 }

 const IrishFlagButton = async() =>{
  try{
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=irish`)
    const data = await response.json();
    getCountry(data.meals);
  } catch (error){
    console.log("Error:", error);
  }
  setCountryDiv(false);
  setCountryCode('Ireland');
  setCountryFlag(`${IrishFlag}`);
  window.scrollTo({top:0, left:0 ,behavior: 'smooth'});
 }

 const ItalianFlagButton = async() =>{
  try{
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=italian`)
    const data = await response.json();
    getCountry(data.meals);
  } catch (error){
    console.log("Error:", error);
  }
  setCountryDiv(false);
  setCountryCode('Italy');
  setCountryFlag(`${ItalianFlag}`);
  window.scrollTo({top:0, left:0 ,behavior: 'smooth'});
 }

 const JamaicanFlagButton = async() =>{
  try{
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=jamaican`)
    const data = await response.json();
    getCountry(data.meals);
  } catch (error){
    console.log("Error:", error);
  }
  setCountryDiv(false);
  setCountryCode('Jamaica');
  setCountryFlag(`${JamaicanFlag}`);
  window.scrollTo({top:0, left:0 ,behavior: 'smooth'});
 }

 const JapaneseFlagButton = async() =>{
  try{
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=japanese`)
    const data = await response.json();
    getCountry(data.meals);
  } catch (error){
    console.log("Error:", error);
  }
  setCountryDiv(false);
  setCountryCode('Japan');
  setCountryFlag(`${JapanFlag}`);
  window.scrollTo({top:0, left:0 ,behavior: 'smooth'});
 }

 const KenyanFlagButton = async() =>{
  try{
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=kenyan`)
    const data = await response.json();
    getCountry(data.meals);
  } catch (error){
    console.log("Error:", error);
  }
  setCountryDiv(false);
  setCountryCode('Kenya');
  setCountryFlag(`${KenyaFlag}`);
  window.scrollTo({top:0, left:0 ,behavior: 'smooth'});
 }

 const MalasianFlagButton = async() =>{
  try{
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=malaysian`)
    const data = await response.json();
    getCountry(data.meals);
  } catch (error){
    console.log("Error:", error);
  }
  setCountryDiv(false);
  setCountryCode('Malaysia');
  setCountryFlag(`${MalasiaFlag}`);
  window.scrollTo({top:0, left:0 ,behavior: 'smooth'});
 }

 const MexicanFlagButton = async() =>{
  try{
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=mexican`)
    const data = await response.json();
    getCountry(data.meals);
  } catch (error){
    console.log("Error:", error);
  }
  setCountryDiv(false);
  setCountryCode('Mexico');
  setCountryFlag(`${MexicoFlag}`);
  window.scrollTo({top:0, left:0 ,behavior: 'smooth'});
 }
 
 const MoroccanFlagButton = async() =>{
  try{
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=moroccan`)
    const data = await response.json();
    getCountry(data.meals);
  } catch (error){
    console.log("Error:", error);
  }
  setCountryDiv(false);
  setCountryCode('Morocco');
  setCountryFlag(`${MoroocanFlag}`);
  window.scrollTo({top:0, left:0 ,behavior: 'smooth'});
 }

 const PolishFlagButton = async() =>{
  try{
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=polish`)
    const data = await response.json();
    getCountry(data.meals);
  } catch (error){
    console.log("Error:", error);
  }
  setCountryDiv(false);
  setCountryCode('Poland');
  setCountryFlag(`${PolishFlag}`);
  window.scrollTo({top:0, left:0 ,behavior: 'smooth'});
 }

 const PortugueseFlagButton = async() =>{
  try{
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=portuguese`)
    const data = await response.json();
    getCountry(data.meals);
  } catch (error){
    console.log("Error:", error);
  }
  setCountryDiv(false);
  setCountryCode('Portugal');
  setCountryFlag(`${PortugueseFlag}`);
  window.scrollTo({top:0, left:0 ,behavior: 'smooth'});
 }

 const RussianFlagButton = async() =>{
  try{
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=Russian`)
    const data = await response.json();
    getCountry(data.meals);
  } catch (error){
    console.log("Error:", error);
  }
  setCountryDiv(false);
  setCountryCode('Russia');
  setCountryFlag(`${RussianFlag}`);
  window.scrollTo({top:0, left:0 ,behavior: 'smooth'});
 }

 const SpanishFlagButton = async() =>{
  try{
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=spanish`)
    const data = await response.json();
    getCountry(data.meals);
  } catch (error){
    console.log("Error:", error);
  }
  setCountryDiv(false);
  setCountryCode('Spain');
  setCountryFlag(`${SpanishFlag}`);
  window.scrollTo({top:0, left:0 ,behavior: 'smooth'});
 }

 const ThaiFlagButton = async() =>{
  try{
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=Thai`)
    const data = await response.json();
    getCountry(data.meals);
  } catch (error){
    console.log("Error:", error);
  }
  setCountryDiv(false);
  setCountryCode('Thailand');
  setCountryFlag(`${ThaiFlag}`);
  window.scrollTo({top:0, left:0 ,behavior: 'smooth'});
 }

 const TunisianFlagButton = async() =>{
  try{
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=Tunisian`)
    const data = await response.json();
    getCountry(data.meals);
  } catch (error){
    console.log("Error:", error);
  }
  setCountryDiv(false);
  setCountryCode('Tunisia');
  setCountryFlag(`${Tunisian}`);
  window.scrollTo({top:0, left:0 ,behavior: 'smooth'});
 }

 const TurkishFlagButton = async() =>{
  try{
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=Turkish`)
    const data = await response.json();
    getCountry(data.meals);
  } catch (error){
    console.log("Error:", error);
  }
  setCountryDiv(false);
  setCountryCode('Turkey');
  setCountryFlag(`${TurkishFlag}`);
  window.scrollTo({top:0, left:0 ,behavior: 'smooth'});
 }

 const VietnamFlagButton = async() =>{
  try{
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=Vietnamese`)
    const data = await response.json();
    getCountry(data.meals);
  } catch (error){
    console.log("Error:", error);
  }
  setCountryDiv(false);
  setCountryCode('Vietnam');
  setCountryFlag(`${VietnamFlag}`);
  window.scrollTo({top:0, left:0 ,behavior: 'smooth'});
 }

  return (
    <div className='flex flex-col w-screen menuBg bg-orange-300'>
      <div className='flex justify-center'>
        <div className='flex flex-col mt-5 w-3/5 text-center '>
          <p className='text-4xl text-black align-self-center searchText'>
            Search Your Food Recipe
          </p>
      
          <form
            className=' mt-8 '
            onSubmit={handleSubmit}>
              <div className="flex justify-center">
            <input
              type='text'
              name='search'
              id='search'
              className='rounded-l-lg'
              onChange={HandleChangeFoodSearch}
              value={foodSearch}
              
            />
            <button className='text-black'><img src={SearchIcon} alt="Search logo" className="button bg-orange-600 w-7 h-7 hover:bg-orange-700 hover:text-white rounded-r-lg" /></button>
            </div>
          </form>
          

          <hr className='mt-5 w-30' />
        </div>
      </div>
      
      {countryDiv ?(
        <div className='flex w-screen mt-10 justify-center menuMainDiv '>
      
          {isHidden ? (
          <div className='flex flex-wrap gap-20 pl-24 p-20 w-4/5 border-8 justify-center bg-white/50 border-double border-black'>
            {/*---------------------------------------- 1st random */}

            <div className='h-80 '>
              {foodApi1.map((food) => (
                <div key={food.idMeal}>
                  <div className='w-52 h-80'>
                    <img
                      className='rounded-lg'
                      src={food.strMealThumb}
                      alt='Food_Picture_API7'
                    />
                    <div className='h-16 flex justify-center'>
                      <div className='font-bold text-sm mb-2 self-center text-center'>
                        {food.strMeal}
                      </div>
                    </div>
                    <div className="justify-center flex">
                      <button onClick={()=>{ setPopupInfoApi1(true)}} className="p-2 hover:bg-orange-600  hover:text-white hover: rounded-lg bg-orange-500 font-bold">Read More</button>
                    </div>
                  </div>
                  {popupInfoApi1 && (
                    <div className='fixed bg-slate-950/50 w-screen h-screen rounded drop-shadow-lg randomInfo'>
                      <div className='p-5 inline-block w-9/12 h-[42rem] bg-orange-300 foodInfo mb-1 pt-12 overflow-auto pb-28'>
                        <div className="flex">
                          <div className="w-8/12">
                            <h1 className="text-4xl">{food.strMeal}</h1>
                          </div>
                          <div className="self-end">
                            <button onClick={()=>{ handleAddToFirestore1(food)}} className=" ml-5 p-1 mt-1 px-3 rounded-full hover:bg-orange-600  hover:text-white bg-orange-500 font-bold mb-1">  Add to favorites</button>
                          </div>
                        </div>
                        <hr></hr>
                        <h3>
                          <strong>Ingredients</strong>
                        </h3>
                        <div className="grid grid-cols-2">
                        <div className="pl-5">
                          <p><span className="font-medium">{food.strIngredient1}</span> - {food.strMeasure1}</p>
                          <p><span className="font-medium">{food.strIngredient2}</span> - {food.strMeasure2}</p>
                          <p><span className="font-medium">{food.strIngredient3}</span> - {food.strMeasure3}</p>
                          <p><span className="font-medium">{food.strIngredient4}</span> - {food.strMeasure4}</p>
                          <p><span className="font-medium">{food.strIngredient5}</span> - {food.strMeasure5}</p>
                          <p><span className="font-medium">{food.strIngredient6}</span> - {food.strMeasure6}</p>
                          <p><span className="font-medium">{food.strIngredient7}</span> - {food.strMeasure7}</p>
                          <p><span className="font-medium">{food.strIngredient8}</span> - {food.strMeasure8}</p>
                          <p><span className="font-medium">{food.strIngredient9}</span> - {food.strMeasure9}</p>
                          <p><span className="font-medium">{food.strIngredient10}</span> - {food.strMeasure10}</p>
                        </div>
                        <div>
                          <p><span className="font-medium">{food.strIngredient11}</span> - {food.strMeasure11}</p>
                          <p><span className="font-medium">{food.strIngredient12}</span> - {food.strMeasure12}</p>
                          <p><span className="font-medium">{food.strIngredient13}</span> - {food.strMeasure13}</p>
                          <p><span className="font-medium">{food.strIngredient14}</span> - {food.strMeasure14}</p>
                          <p><span className="font-medium">{food.strIngredient15}</span> - {food.strMeasure15}</p>
                          <p><span className="font-medium">{food.strIngredient16}</span> - {food.strMeasure16}</p>
                          <p><span className="font-medium">{food.strIngredient17}</span> - {food.strMeasure17}</p>
                          <p><span className="font-medium">{food.strIngredient18}</span> - {food.strMeasure18}</p>
                          <p><span className="font-medium">{food.strIngredient19}</span> - {food.strMeasure19}</p>
                          <p><span className="font-medium">{food.strIngredient20}</span> - {food.strMeasure20}</p>
                        </div>
                      </div>
                        <div>
                        <h3 className="pt-5">
                          <strong>Instructions:</strong>
                        </h3>
                        <p className="indent-10 text-justify px-5">{food.strInstructions}</p>
                    
                        <h3 className="pt-5">
                          <strong>Youtube:</strong>
                        </h3>
                        <a href={food.strYoutube} target="_blank" rel="noreferrer" className="ml-5 hover:underline ">{food.strYoutube}</a>
                        
                        <h3 className="pt-5">
                          <strong>Source:</strong>
                        </h3>
                        <a href={food.strSource} target="_blank" rel="noreferrer" className="ml-5 hover:underline">{food.strSource}</a>

                        <h3 className="pt-5">
                          <strong>Image:</strong>
                        </h3>
                        <img
                          className='w-80 h-80 ml-5 mt-3 rounded'
                          src={food.strMealThumb}
                          alt='Food_Picture_Search'
                        />
                          <button
                            className=' absolute border border-black p-2 top-4    right-4 p-2 hover:bg-orange-600 hover:text-white hover:   rounded-lg bg-orange-500 font-bold'
                            onClick={() => {
                              setPopupInfoApi1(false);
                              }}>
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

            {/*---------------------------------------- 2nd random */}
            <div className='h-96'>
              {foodApi2.map((food) => (
                <div key={food.idMeal}>
                  <div className='w-52 h-80'>
                    <img
                      className='rounded-lg'
                      src={food.strMealThumb}
                      alt='Food_Picture_API7'
                    />
                    <div className='h-16 flex justify-center'>
                      <div className='font-bold text-sm mb-2 self-center text-center'>
                        {food.strMeal}
                      </div>
                    </div>
                    <div className="justify-center flex">
                      <button onClick={()=>{ setPopupInfoApi2(true)}} className="p-2 hover:bg-orange-600  hover:text-white hover: rounded-lg bg-orange-500 font-bold">Read More</button>
                    </div>
                  </div>

                  {popupInfoApi2 && (
                    <div className='fixed bg-slate-950/50 w-screen h-screen rounded drop-shadow-lg randomInfo'>
                      <div className='p-5 inline-block w-9/12 h-[42rem] bg-orange-300 foodInfo mb-1 pt-12 overflow-auto pb-28'>
                        <div className="flex">
                          <div className="w-8/12">
                            <h1 className="text-4xl">{food.strMeal}</h1>
                          </div>
                          <div className="self-end">
                            <button onClick={()=>{ handleAddToFirestore2(food)}} className=" ml-5 p-1 mt-1 px-3 rounded-full hover:bg-orange-600  hover:text-white bg-orange-500 font-bold mb-1">  Add to favorites</button>
                          </div>
                        </div>
                        <hr></hr>
                        <h3>
                          <strong>Ingredients</strong>
                        </h3>
                        <div className="grid grid-cols-2">
                        <div className="pl-5">
                          <p><span className="font-medium">{food.strIngredient1}</span> - {food.strMeasure1}</p>
                          <p><span className="font-medium">{food.strIngredient2}</span> - {food.strMeasure2}</p>
                          <p><span className="font-medium">{food.strIngredient3}</span> - {food.strMeasure3}</p>
                          <p><span className="font-medium">{food.strIngredient4}</span> - {food.strMeasure4}</p>
                          <p><span className="font-medium">{food.strIngredient5}</span> - {food.strMeasure5}</p>
                          <p><span className="font-medium">{food.strIngredient6}</span> - {food.strMeasure6}</p>
                          <p><span className="font-medium">{food.strIngredient7}</span> - {food.strMeasure7}</p>
                          <p><span className="font-medium">{food.strIngredient8}</span> - {food.strMeasure8}</p>
                          <p><span className="font-medium">{food.strIngredient9}</span> - {food.strMeasure9}</p>
                          <p><span className="font-medium">{food.strIngredient10}</span> - {food.strMeasure10}</p>
                        </div>
                        <div>
                          <p><span className="font-medium">{food.strIngredient11}</span> - {food.strMeasure11}</p>
                          <p><span className="font-medium">{food.strIngredient12}</span> - {food.strMeasure12}</p>
                          <p><span className="font-medium">{food.strIngredient13}</span> - {food.strMeasure13}</p>
                          <p><span className="font-medium">{food.strIngredient14}</span> - {food.strMeasure14}</p>
                          <p><span className="font-medium">{food.strIngredient15}</span> - {food.strMeasure15}</p>
                          <p><span className="font-medium">{food.strIngredient16}</span> - {food.strMeasure16}</p>
                          <p><span className="font-medium">{food.strIngredient17}</span> - {food.strMeasure17}</p>
                          <p><span className="font-medium">{food.strIngredient18}</span> - {food.strMeasure18}</p>
                          <p><span className="font-medium">{food.strIngredient19}</span> - {food.strMeasure19}</p>
                          <p><span className="font-medium">{food.strIngredient20}</span> - {food.strMeasure20}</p>
                        </div>
                      </div>
                        <div>
                        <h3 className="pt-5">
                          <strong>Instructions:</strong>
                        </h3>
                        <p className="indent-10 text-justify px-5">{food.strInstructions}</p>
                    
                        <h3 className="pt-5">
                          <strong>Youtube:</strong>
                        </h3>
                        <a href={food.strYoutube} target="_blank" rel="noreferrer" className="ml-5 hover:underline ">{food.strYoutube}</a>
                        
                        <h3 className="pt-5">
                          <strong>Source:</strong>
                        </h3>
                        <a href={food.strSource} target="_blank" rel="noreferrer" className="ml-5 hover:underline">{food.strSource}</a>

                        <h3 className="pt-5">
                          <strong>Image:</strong>
                        </h3>
                        <img
                          className='w-80 h-80 ml-5 mt-3 rounded'
                          src={food.strMealThumb}
                          alt='Food_Picture_Search'
                        />
                          <button
                            className=' absolute border border-black p-2 top-4    right-4 p-2 hover:bg-orange-600 hover:text-white hover:   rounded-lg bg-orange-500 font-bold'
                            onClick={() => {
                              setPopupInfoApi2(false);
                              }}>
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

            {/*---------------------------------------- 3rd random */}
            <div className='h-96'>
              {foodApi3.map((food) => (
                <div key={food.idMeal}>
                  <div className='w-52 h-80'>
                    <img
                      className='rounded-lg'
                      src={food.strMealThumb}
                      alt='Food_Picture_API7'
                    />
                    <div className='h-16 flex justify-center'>
                      <div className='font-bold text-sm mb-2 self-center text-center'>
                        {food.strMeal}
                      </div>
                    </div>
                    <div className="justify-center flex">
                      <button onClick={()=>{ setPopupInfoApi3(true)}} className="p-2 hover:bg-orange-600  hover:text-white hover: rounded-lg bg-orange-500 font-bold">Read More</button>
                    </div>
                  </div>

                  {popupInfoApi3 && (
                    <div className='fixed bg-slate-950/50 w-screen h-screen rounded drop-shadow-lg randomInfo'>
                      <div className='p-5 inline-block w-9/12 h-[42rem] bg-orange-300 foodInfo mb-1 pt-12 overflow-auto pb-28'>
                        <div className="flex">
                          <div className="w-8/12">
                            <h1 className="text-4xl">{food.strMeal}</h1>
                          </div>
                          <div className="self-end">
                            <button onClick={()=>{ handleAddToFirestore3(food)}} className=" ml-5 p-1 mt-1 px-3 rounded-full hover:bg-orange-600  hover:text-white bg-orange-500 font-bold mb-1">  Add to favorites</button>
                          </div>
                        </div>
                        <hr></hr>
                        <h3>
                          <strong>Ingredients</strong>
                        </h3>
                        <div className="grid grid-cols-2">
                        <div className="pl-5">
                          <p><span className="font-medium">{food.strIngredient1}</span> - {food.strMeasure1}</p>
                          <p><span className="font-medium">{food.strIngredient2}</span> - {food.strMeasure2}</p>
                          <p><span className="font-medium">{food.strIngredient3}</span> - {food.strMeasure3}</p>
                          <p><span className="font-medium">{food.strIngredient4}</span> - {food.strMeasure4}</p>
                          <p><span className="font-medium">{food.strIngredient5}</span> - {food.strMeasure5}</p>
                          <p><span className="font-medium">{food.strIngredient6}</span> - {food.strMeasure6}</p>
                          <p><span className="font-medium">{food.strIngredient7}</span> - {food.strMeasure7}</p>
                          <p><span className="font-medium">{food.strIngredient8}</span> - {food.strMeasure8}</p>
                          <p><span className="font-medium">{food.strIngredient9}</span> - {food.strMeasure9}</p>
                          <p><span className="font-medium">{food.strIngredient10}</span> - {food.strMeasure10}</p>
                        </div>
                        <div>
                          <p><span className="font-medium">{food.strIngredient11}</span> - {food.strMeasure11}</p>
                          <p><span className="font-medium">{food.strIngredient12}</span> - {food.strMeasure12}</p>
                          <p><span className="font-medium">{food.strIngredient13}</span> - {food.strMeasure13}</p>
                          <p><span className="font-medium">{food.strIngredient14}</span> - {food.strMeasure14}</p>
                          <p><span className="font-medium">{food.strIngredient15}</span> - {food.strMeasure15}</p>
                          <p><span className="font-medium">{food.strIngredient16}</span> - {food.strMeasure16}</p>
                          <p><span className="font-medium">{food.strIngredient17}</span> - {food.strMeasure17}</p>
                          <p><span className="font-medium">{food.strIngredient18}</span> - {food.strMeasure18}</p>
                          <p><span className="font-medium">{food.strIngredient19}</span> - {food.strMeasure19}</p>
                          <p><span className="font-medium">{food.strIngredient20}</span> - {food.strMeasure20}</p>
                        </div>
                      </div>
                        <div>
                        <h3 className="pt-5">
                          <strong>Instructions:</strong>
                        </h3>
                        <p className="indent-10 text-justify px-5">{food.strInstructions}</p>
                    
                        <h3 className="pt-5">
                          <strong>Youtube:</strong>
                        </h3>
                        <a href={food.strYoutube} target="_blank" rel="noreferrer" className="ml-5 hover:underline">{food.strYoutube}</a>
                        
                        <h3 className="pt-5">
                          <strong>Source:</strong>
                        </h3>
                        <a href={food.strSource} target="_blank" rel="noreferrer" className="ml-5 hover:underline">{food.strSource}</a>

                        <h3 className="pt-5">
                          <strong>Image:</strong>
                        </h3>
                        <img
                          className='w-80 h-80 ml-5 mt-3 rounded'
                          src={food.strMealThumb}
                          alt='Food_Picture_Search'
                        />
                          <button
                            className=' absolute border border-black p-2 top-4    right-4 p-2 hover:bg-orange-600 hover:text-white hover:   rounded-lg bg-orange-500 font-bold'
                            onClick={() => {
                              setPopupInfoApi3(false);
                              }}>
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

            {/*---------------------------------------- 4th random */}
            <div className='h-96'>
              {foodApi4.map((food) => (
                <div key={food.idMeal}>
                  <div className='w-52 h-80'>
                    <img
                      className='rounded-lg'
                      src={food.strMealThumb}
                      alt='Food_Picture_API7'
                    />
                    <div className='h-16 flex justify-center'>
                      <div className='font-bold text-sm mb-2 self-center text-center'>
                        {food.strMeal}
                      </div>
                    </div>
                    <div className="justify-center flex">
                      <button onClick={()=>{ setPopupInfoApi4(true)}} className="p-2 hover:bg-orange-600  hover:text-white hover: rounded-lg bg-orange-500 font-bold">Read More</button>
                    </div>
                  </div>

                  {popupInfoApi4 && (
                    <div className='fixed bg-slate-950/50 w-screen h-screen rounded drop-shadow-lg randomInfo'>
                      <div className='p-5 inline-block w-9/12 h-[42rem] bg-orange-300 foodInfo mb-1 pt-12 overflow-auto pb-28'>
                        <div div className="flex">
                          <div className="w-8/12">
                            <h1 className="text-4xl">{food.strMeal}</h1>
                          </div>
                          <div className="self-end">
                            <button onClick={()=>{ handleAddToFirestore4(food)}} className=" ml-5 p-1 mt-1 px-3 rounded-full hover:bg-orange-600  hover:text-white bg-orange-500 font-bold mb-1">  Add to favorites</button>
                          </div>
                        </div>
                        <hr></hr>
                        <h3>
                          <strong>Ingredients</strong>
                        </h3>
                        <div className="grid grid-cols-2">
                        <div className="pl-5">
                          <p><span className="font-medium">{food.strIngredient1}</span> - {food.strMeasure1}</p>
                          <p><span className="font-medium">{food.strIngredient2}</span> - {food.strMeasure2}</p>
                          <p><span className="font-medium">{food.strIngredient3}</span> - {food.strMeasure3}</p>
                          <p><span className="font-medium">{food.strIngredient4}</span> - {food.strMeasure4}</p>
                          <p><span className="font-medium">{food.strIngredient5}</span> - {food.strMeasure5}</p>
                          <p><span className="font-medium">{food.strIngredient6}</span> - {food.strMeasure6}</p>
                          <p><span className="font-medium">{food.strIngredient7}</span> - {food.strMeasure7}</p>
                          <p><span className="font-medium">{food.strIngredient8}</span> - {food.strMeasure8}</p>
                          <p><span className="font-medium">{food.strIngredient9}</span> - {food.strMeasure9}</p>
                          <p><span className="font-medium">{food.strIngredient10}</span> - {food.strMeasure10}</p>
                        </div>
                        <div>
                          <p><span className="font-medium">{food.strIngredient11}</span> - {food.strMeasure11}</p>
                          <p><span className="font-medium">{food.strIngredient12}</span> - {food.strMeasure12}</p>
                          <p><span className="font-medium">{food.strIngredient13}</span> - {food.strMeasure13}</p>
                          <p><span className="font-medium">{food.strIngredient14}</span> - {food.strMeasure14}</p>
                          <p><span className="font-medium">{food.strIngredient15}</span> - {food.strMeasure15}</p>
                          <p><span className="font-medium">{food.strIngredient16}</span> - {food.strMeasure16}</p>
                          <p><span className="font-medium">{food.strIngredient17}</span> - {food.strMeasure17}</p>
                          <p><span className="font-medium">{food.strIngredient18}</span> - {food.strMeasure18}</p>
                          <p><span className="font-medium">{food.strIngredient19}</span> - {food.strMeasure19}</p>
                          <p><span className="font-medium">{food.strIngredient20}</span> - {food.strMeasure20}</p>
                        </div>
                      </div>
                        <div>
                        <h3 className="pt-5">
                          <strong>Instructions:</strong>
                        </h3>
                        <p className="indent-10 text-justify px-5">{food.strInstructions}</p>
                    
                        <h3 className="pt-5">
                          <strong>Youtube:</strong>
                        </h3>
                        <a href={food.strYoutube} target="_blank" rel="noreferrer" className="ml-5 hover:underline ">{food.strYoutube}</a>
                        
                        <h3 className="pt-5">
                          <strong>Source:</strong>
                        </h3>
                        <a href={food.strSource} target="_blank" rel="noreferrer" className="ml-5 hover:underline">{food.strSource}</a>

                        <h3 className="pt-5">
                          <strong>Image:</strong>
                        </h3>
                        <img
                          className='w-80 h-80 ml-5 mt-3 rounded'
                          src={food.strMealThumb}
                          alt='Food_Picture_Search'
                        />
                          <button
                            className=' absolute border border-black p-2 top-4 right-4 p-2 hover:bg-orange-600 hover:text-white bg-orange-500 font-bold'
                            onClick={() => {
                              setPopupInfoApi4(false);
                              }}>
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

            {/*---------------------------------------- 5th random */}
            <div className='h-96'>
              {foodApi5.map((food) => (
                <div key={food.idMeal}>                  
                  <div className='w-52 h-80'>
                    <img
                      className='rounded-lg'
                      src={food.strMealThumb}
                      alt='Food_Picture_API7'
                    />
                    <div className='h-16 flex justify-center'>
                      <div className='font-bold text-sm mb-2 self-center text-center'>
                        {food.strMeal}
                      </div>
                    </div>
                    <div className="justify-center flex">
                      <button onClick={()=>{ setPopupInfoApi5(true)}} className="p-2 hover:bg-orange-600  hover:text-white hover: rounded-lg bg-orange-500 font-bold">Read More</button>
                    </div>
                  </div>

                  {popupInfoApi5 && (
                    <div className='fixed bg-slate-950/50 w-screen h-screen rounded drop-shadow-lg randomInfo'>
                      <div className='p-5 inline-block w-9/12 h-[42rem] bg-orange-300 foodInfo mb-1 pt-12 overflow-auto pb-28'>
                        <div className="flex">
                          <div className="w-8/12">
                            <h1 className="text-4xl">{food.strMeal}</h1>
                          </div>
                          <div className="self-end">
                            <button onClick={()=>{ handleAddToFirestore5(food)}} className=" ml-5 p-1 mt-1 px-3 rounded-full hover:bg-orange-600  hover:text-white bg-orange-500 font-bold mb-1">  Add to favorites</button>
                          </div>
                        </div>
                        <hr></hr>
                        <h3>
                          <strong>Ingredients</strong>
                        </h3>
                        <div className="grid grid-cols-2">
                        <div className="pl-5">
                          <p><span className="font-medium">{food.strIngredient1}</span> - {food.strMeasure1}</p>
                          <p><span className="font-medium">{food.strIngredient2}</span> - {food.strMeasure2}</p>
                          <p><span className="font-medium">{food.strIngredient3}</span> - {food.strMeasure3}</p>
                          <p><span className="font-medium">{food.strIngredient4}</span> - {food.strMeasure4}</p>
                          <p><span className="font-medium">{food.strIngredient5}</span> - {food.strMeasure5}</p>
                          <p><span className="font-medium">{food.strIngredient6}</span> - {food.strMeasure6}</p>
                          <p><span className="font-medium">{food.strIngredient7}</span> - {food.strMeasure7}</p>
                          <p><span className="font-medium">{food.strIngredient8}</span> - {food.strMeasure8}</p>
                          <p><span className="font-medium">{food.strIngredient9}</span> - {food.strMeasure9}</p>
                          <p><span className="font-medium">{food.strIngredient10}</span> - {food.strMeasure10}</p>
                        </div>
                        <div>
                          <p><span className="font-medium">{food.strIngredient11}</span> - {food.strMeasure11}</p>
                          <p><span className="font-medium">{food.strIngredient12}</span> - {food.strMeasure12}</p>
                          <p><span className="font-medium">{food.strIngredient13}</span> - {food.strMeasure13}</p>
                          <p><span className="font-medium">{food.strIngredient14}</span> - {food.strMeasure14}</p>
                          <p><span className="font-medium">{food.strIngredient15}</span> - {food.strMeasure15}</p>
                          <p><span className="font-medium">{food.strIngredient16}</span> - {food.strMeasure16}</p>
                          <p><span className="font-medium">{food.strIngredient17}</span> - {food.strMeasure17}</p>
                          <p><span className="font-medium">{food.strIngredient18}</span> - {food.strMeasure18}</p>
                          <p><span className="font-medium">{food.strIngredient19}</span> - {food.strMeasure19}</p>
                          <p><span className="font-medium">{food.strIngredient20}</span> - {food.strMeasure20}</p>
                        </div>
                      </div>
                        <div>
                        <h3 className="pt-5">
                          <strong>Instructions:</strong>
                        </h3>
                        <p className="indent-10 text-justify px-5">{food.strInstructions}</p>
                    
                        <h3 className="pt-5">
                          <strong>Youtube:</strong>
                        </h3>
                        <a href={food.strYoutube} target="_blank" rel="noreferrer" className="ml-5 hover:underline ">{food.strYoutube}</a>
                        
                        <h3 className="pt-5">
                          <strong>Source:</strong>
                        </h3>
                        <a href={food.strSource} target="_blank" rel="noreferrer" className="ml-5 hover:underline">{food.strSource}</a>

                        <h3 className="pt-5">
                          <strong>Image:</strong>
                        </h3>
                        <img
                          className='w-80 h-80 ml-5 mt-3 rounded'
                          src={food.strMealThumb}
                          alt='Food_Picture_Search'
                        />
                          <button
                            className=' absolute border border-black p-2 top-4    right-4 p-2 hover:bg-orange-600 hover:text-white hover:   rounded-lg bg-orange-500 font-bold'
                            onClick={() => {
                              setPopupInfoApi5(false);
                              }}>
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

            {/*---------------------------------------- 6th random */}
            <div className='h-96'>
              {foodApi6.map((food) => (
                <div key={food.idMeal}>               
                  <div className='w-52 h-80'>
                    <img
                      className='rounded-lg'
                      src={food.strMealThumb}
                      alt='Food_Picture_API7'
                    />
                    <div className='h-16 flex justify-center'>
                      <div className='font-bold text-sm mb-2 self-center text-center'>
                        {food.strMeal}
                      </div>
                    </div>
                    <div className="justify-center flex">
                      <button onClick={()=>{ setPopupInfoApi6(true)}} className="p-2 hover:bg-orange-600  hover:text-white hover: rounded-lg bg-orange-500 font-bold">Read More</button>
                    </div>
                  </div>

                  {popupInfoApi6 && (
                    <div className='fixed bg-slate-950/50 w-screen h-screen rounded drop-shadow-lg randomInfo'>
                      <div className='p-5 inline-block w-9/12 h-[42rem] bg-orange-300 foodInfo mb-1 pt-12 overflow-auto pb-28'>
                      <div className="flex">
                          <div className="w-8/12">
                            <h1 className="text-4xl">{food.strMeal}</h1>
                          </div>
                          <div className="self-end">
                            <button onClick={()=>{ handleAddToFirestore6(food)}} className=" ml-5 p-1 mt-1 px-3 rounded-full hover:bg-orange-600  hover:text-white bg-orange-500 font-bold mb-1">  Add to favorites</button>
                          </div>
                        </div>
                        <hr></hr>
                        <h3>
                          <strong>Ingredients</strong>
                        </h3>
                        <div className="grid grid-cols-2">
                        <div className="pl-5">
                          <p><span className="font-medium">{food.strIngredient1}</span> - {food.strMeasure1}</p>
                          <p><span className="font-medium">{food.strIngredient2}</span> - {food.strMeasure2}</p>
                          <p><span className="font-medium">{food.strIngredient3}</span> - {food.strMeasure3}</p>
                          <p><span className="font-medium">{food.strIngredient4}</span> - {food.strMeasure4}</p>
                          <p><span className="font-medium">{food.strIngredient5}</span> - {food.strMeasure5}</p>
                          <p><span className="font-medium">{food.strIngredient6}</span> - {food.strMeasure6}</p>
                          <p><span className="font-medium">{food.strIngredient7}</span> - {food.strMeasure7}</p>
                          <p><span className="font-medium">{food.strIngredient8}</span> - {food.strMeasure8}</p>
                          <p><span className="font-medium">{food.strIngredient9}</span> - {food.strMeasure9}</p>
                          <p><span className="font-medium">{food.strIngredient10}</span> - {food.strMeasure10}</p>
                        </div>
                        <div>
                          <p><span className="font-medium">{food.strIngredient11}</span> - {food.strMeasure11}</p>
                          <p><span className="font-medium">{food.strIngredient12}</span> - {food.strMeasure12}</p>
                          <p><span className="font-medium">{food.strIngredient13}</span> - {food.strMeasure13}</p>
                          <p><span className="font-medium">{food.strIngredient14}</span> - {food.strMeasure14}</p>
                          <p><span className="font-medium">{food.strIngredient15}</span> - {food.strMeasure15}</p>
                          <p><span className="font-medium">{food.strIngredient16}</span> - {food.strMeasure16}</p>
                          <p><span className="font-medium">{food.strIngredient17}</span> - {food.strMeasure17}</p>
                          <p><span className="font-medium">{food.strIngredient18}</span> - {food.strMeasure18}</p>
                          <p><span className="font-medium">{food.strIngredient19}</span> - {food.strMeasure19}</p>
                          <p><span className="font-medium">{food.strIngredient20}</span> - {food.strMeasure20}</p>
                        </div>
                      </div>
                        <div>
                        <h3 className="pt-5">
                          <strong>Instructions:</strong>
                        </h3>
                        <p className="indent-10 text-justify px-5">{food.strInstructions}</p>
                    
                        <h3 className="pt-5">
                          <strong>Youtube:</strong>
                        </h3>
                        <a href={food.strYoutube} target="_blank" rel="noreferrer" className="ml-5 hover:underline ">{food.strYoutube}</a>
                        
                        <h3 className="pt-5">
                          <strong>Source:</strong>
                        </h3>
                        <a href={food.strSource} target="_blank" rel="noreferrer" className="ml-5 hover:underline">{food.strSource}</a>

                        <h3 className="pt-5">
                          <strong>Image:</strong>
                        </h3>
                        <img
                          className='w-80 h-80 ml-5 mt-3 rounded'
                          src={food.strMealThumb}
                          alt='Food_Picture_Search'
                        />
                          <button
                            className=' absolute border border-black p-2 top-4    right-4 p-2 hover:bg-orange-600 hover:text-white hover:   rounded-lg bg-orange-500 font-bold'
                            onClick={() => {
                              setPopupInfoApi6(false);
                              }}>
                            Close
                        </button>
                        </div>
                      </div>
                      
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/*---------------------------------------- 7th random */}
            <div className='h-96'>
              {foodApi7.map((food) => (
                <div key={food.idMeal}>
                  <div className='w-52 h-80'>
                    <img
                      className='rounded-lg'
                      src={food.strMealThumb}
                      alt='Food_Picture_API7'
                    />
                    <div className='h-16 flex justify-center'>
                      <div className='font-bold text-sm mb-2 self-center text-center'>
                        {food.strMeal}
                      </div>
                    </div>
                    <div className="justify-center flex">
                      <button onClick={()=>{ setPopupInfoApi7(true)}} className="p-2 hover:bg-orange-600  hover:text-white hover: rounded-lg bg-orange-500 font-bold">Read More</button>
                    </div>
                  </div>

                  {popupInfoApi7 && (
                    <div className='fixed bg-slate-950/50 w-screen h-screen rounded drop-shadow-lg randomInfo'>
                      <div className='p-5 inline-block w-9/12 h-[42rem] bg-orange-300 foodInfo mb-1 pt-12 overflow-auto pb-28'>
                        <div className="flex">
                          <div className="w-8/12">
                            <h1 className="text-4xl">{food.strMeal}</h1>
                          </div>
                          <div className="self-end">
                            <button onClick={()=>{ handleAddToFirestore7(food)}} className=" ml-5 p-1 mt-1 px-3 rounded-full hover:bg-orange-600  hover:text-white bg-orange-500 font-bold mb-1">  Add to favorites</button>
                          </div>
                        </div>
                        <hr></hr>
                        <h3>
                          <strong>Ingredients</strong>
                        </h3>
                        <div className="grid grid-cols-2">
                        <div className="pl-5">
                          <p><span className="font-medium">{food.strIngredient1}</span> - {food.strMeasure1}</p>
                          <p><span className="font-medium">{food.strIngredient2}</span> - {food.strMeasure2}</p>
                          <p><span className="font-medium">{food.strIngredient3}</span> - {food.strMeasure3}</p>
                          <p><span className="font-medium">{food.strIngredient4}</span> - {food.strMeasure4}</p>
                          <p><span className="font-medium">{food.strIngredient5}</span> - {food.strMeasure5}</p>
                          <p><span className="font-medium">{food.strIngredient6}</span> - {food.strMeasure6}</p>
                          <p><span className="font-medium">{food.strIngredient7}</span> - {food.strMeasure7}</p>
                          <p><span className="font-medium">{food.strIngredient8}</span> - {food.strMeasure8}</p>
                          <p><span className="font-medium">{food.strIngredient9}</span> - {food.strMeasure9}</p>
                          <p><span className="font-medium">{food.strIngredient10}</span> - {food.strMeasure10}</p>
                        </div>
                        <div>
                          <p><span className="font-medium">{food.strIngredient11}</span> - {food.strMeasure11}</p>
                          <p><span className="font-medium">{food.strIngredient12}</span> - {food.strMeasure12}</p>
                          <p><span className="font-medium">{food.strIngredient13}</span> - {food.strMeasure13}</p>
                          <p><span className="font-medium">{food.strIngredient14}</span> - {food.strMeasure14}</p>
                          <p><span className="font-medium">{food.strIngredient15}</span> - {food.strMeasure15}</p>
                          <p><span className="font-medium">{food.strIngredient16}</span> - {food.strMeasure16}</p>
                          <p><span className="font-medium">{food.strIngredient17}</span> - {food.strMeasure17}</p>
                          <p><span className="font-medium">{food.strIngredient18}</span> - {food.strMeasure18}</p>
                          <p><span className="font-medium">{food.strIngredient19}</span> - {food.strMeasure19}</p>
                          <p><span className="font-medium">{food.strIngredient20}</span> - {food.strMeasure20}</p>
                        </div>
                      </div>
                        <div>
                        <h3 className="pt-5">
                          <strong>Instructions:</strong>
                        </h3>
                        <p className="indent-10 text-justify px-5">{food.strInstructions}</p>
                    
                        <h3 className="pt-5">
                          <strong>Youtube:</strong>
                        </h3>
                        <a href={food.strYoutube} target="_blank" rel="noreferrer" className="ml-5 hover:underline ">{food.strYoutube}</a>
                        
                        <h3 className="pt-5">
                          <strong>Source:</strong>
                        </h3>
                        <a href={food.strSource} target="_blank" rel="noreferrer" className="ml-5 hover:underline">{food.strSource}</a>

                        <h3 className="pt-5">
                          <strong>Image:</strong>
                        </h3>
                        <img
                          className='w-80 h-80 ml-5 mt-3 rounded'
                          src={food.strMealThumb}
                          alt='Food_Picture_Search'
                        />
                          <button
                            className=' absolute border border-black p-2 top-4 right-4 p-2 hover:bg-orange-600 hover:text-white hover:rounded-lg rounded-lg bg-orange-500 font-bold'
                            onClick={() => {
                              setPopupInfoApi7(false);
                              }}>
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

            {/*---------------------------------------- 8th random */}
            <div className='h-96 '>
              {foodApi8.map((food) => (
                <div key={food.idMeal}>
                  <div className='w-52 h-80'>
                    <img
                      className='rounded-lg'
                      src={food.strMealThumb}
                      alt='Food_Picture_API7'
                    />
                    <div className='h-16 flex justify-center'>
                      <div className='font-bold text-sm mb-2 self-center text-center'>
                        {food.strMeal}
                      </div>
                    </div>
                    <div className="justify-center flex">
                      <button onClick={()=>{ setPopupInfoApi8(true)}} className="p-2 hover:bg-orange-600  hover:text-white hover: rounded-lg bg-orange-500 font-bold">Read More</button>
                    </div>
                  </div>
                  
                  {popupInfoApi8 && (
                    <div className='fixed bg-slate-950/50 w-screen h-screen rounded drop-shadow-lg randomInfo'>
                      <div className='p-5 inline-block w-9/12 h-[42rem] bg-orange-300 foodInfo mb-1 pt-12 overflow-auto pb-28'>
                        <div className="flex">
                          <div className="w-8/12">
                            <h1 className="text-4xl">{food.strMeal}</h1>
                          </div>
                          <div className="self-end">
                            <button onClick={()=>{ handleAddToFirestore8(food)}} className=" ml-5 p-1 mt-1 px-3 rounded-full hover:bg-orange-600  hover:text-white bg-orange-500 font-bold mb-1">  Add to favorites</button>
                          </div>
                        </div>
                        <hr></hr>
                        <h3>
                          <strong>Ingredients</strong>
                        </h3>
                        <div className="grid grid-cols-2">
                        <div className="pl-5">
                          <p><span className="font-medium">{food.strIngredient1}</span> - {food.strMeasure1}</p>
                          <p><span className="font-medium">{food.strIngredient2}</span> - {food.strMeasure2}</p>
                          <p><span className="font-medium">{food.strIngredient3}</span> - {food.strMeasure3}</p>
                          <p><span className="font-medium">{food.strIngredient4}</span> - {food.strMeasure4}</p>
                          <p><span className="font-medium">{food.strIngredient5}</span> - {food.strMeasure5}</p>
                          <p><span className="font-medium">{food.strIngredient6}</span> - {food.strMeasure6}</p>
                          <p><span className="font-medium">{food.strIngredient7}</span> - {food.strMeasure7}</p>
                          <p><span className="font-medium">{food.strIngredient8}</span> - {food.strMeasure8}</p>
                          <p><span className="font-medium">{food.strIngredient9}</span> - {food.strMeasure9}</p>
                          <p><span className="font-medium">{food.strIngredient10}</span> - {food.strMeasure10}</p>
                        </div>
                        <div>
                          <p><span className="font-medium">{food.strIngredient11}</span> - {food.strMeasure11}</p>
                          <p><span className="font-medium">{food.strIngredient12}</span> - {food.strMeasure12}</p>
                          <p><span className="font-medium">{food.strIngredient13}</span> - {food.strMeasure13}</p>
                          <p><span className="font-medium">{food.strIngredient14}</span> - {food.strMeasure14}</p>
                          <p><span className="font-medium">{food.strIngredient15}</span> - {food.strMeasure15}</p>
                          <p><span className="font-medium">{food.strIngredient16}</span> - {food.strMeasure16}</p>
                          <p><span className="font-medium">{food.strIngredient17}</span> - {food.strMeasure17}</p>
                          <p><span className="font-medium">{food.strIngredient18}</span> - {food.strMeasure18}</p>
                          <p><span className="font-medium">{food.strIngredient19}</span> - {food.strMeasure19}</p>
                          <p><span className="font-medium">{food.strIngredient20}</span> - {food.strMeasure20}</p>
                        </div>
                      </div>
                        <div>
                        <h3 className="pt-5">
                          <strong>Instructions:</strong>
                        </h3>
                        <p className="indent-10 text-justify px-5">{food.strInstructions}</p>
                    
                        <h3 className="pt-5">
                          <strong>Youtube:</strong>
                        </h3>
                        <a href={food.strYoutube} target="_blank" rel="noreferrer" className="ml-5 hover:underline ">{food.strYoutube}</a>
                        
                        <h3 className="pt-5">
                          <strong>Source:</strong>
                        </h3>
                        <a href={food.strSource} target="_blank" rel="noreferrer" className="ml-5 hover:underline">{food.strSource}</a>

                        <h3 className="pt-5">
                          <strong>Image:</strong>
                        </h3>
                        <img
                          className='w-80 h-80 ml-5 mt-3 rounded'
                          src={food.strMealThumb}
                          alt='Food_Picture'
                        />
                          <button
                            className=' absolute border border-black p-2 top-4 right-4 p-2 hover:bg-orange-600 hover:text-white hover:rounded-lg rounded-lg bg-orange-500 font-bold'
                            onClick={() => {
                              setPopupInfoApi8(false);
                              }}>
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
          ) : (
            <div className='flex flex-wrap gap-20 rounded-md justify-center w-4/5 p-20 border-8 bg-white/50 border-double border-black'>
            {/* ========================SEARCH INFO DIV */}
            {getFoodApi?.map((food) => ( 
              <div key={food.idMeal}>
                <div className='w-52 h-80'>
                  <img
                    className='rounded-lg'
                    src={food.strMealThumb}
                    alt='This is for search pic'
                  />
                  <div className='h-16 flex justify-center'>
                    <div className='font-bold text-sm mb-2 self-center text-center'>{food.strMeal}</div>
                  </div>
                  <div className="justify-center flex">
                    <button onClick={() => toggleFood(food)} className="p-2 hover:bg-orange-600 hover:text-white hover: rounded-lg bg-orange-500 font-bold">Read More</button>
                  </div>
                </div>
                
                {showInfo && selectedFood === food && ( //==========MENU SEARCH SHOW INFO
                  <div className='fixed bg-slate-950/50 w-screen h-screen rounded drop-shadow-lg randomInfo'>
                    <div className='p-5 inline-block w-9/12 h-[42rem] bg-orange-300 foodInfo mb-1 pt-12 overflow-auto pb-28'>
                      <div className="flex">
                        <div className="w-8/12 ">
                          <h1 className="text-4xl">{food.strMeal}</h1>
                        </div>
                        <div className="self-end ">
                          <button onClick={()=>{ handleAddToFirestoreSearch(food)}} className=" ml-5 p-1 mt-1 px-3 rounded-full hover:bg-orange-600  hover:text-white bg-orange-500 font-bold mb-1"> Add to favorites</button>
                        </div>
                      </div>
                      <hr></hr>
                      <h3>
                        <strong>Ingredients:</strong>
                      </h3>

                      <div className="grid grid-cols-2">
                        <div className="pl-5">
                          <p><span className="font-medium">{food.strIngredient1}</span> - {food.strMeasure1}</p>
                          <p><span className="font-medium">{food.strIngredient2}</span> - {food.strMeasure2}</p>
                          <p><span className="font-medium">{food.strIngredient3}</span> - {food.strMeasure3}</p>
                          <p><span className="font-medium">{food.strIngredient4}</span> - {food.strMeasure4}</p>
                          <p><span className="font-medium">{food.strIngredient5}</span> - {food.strMeasure5}</p>
                          <p><span className="font-medium">{food.strIngredient6}</span> - {food.strMeasure6}</p>
                          <p><span className="font-medium">{food.strIngredient7}</span> - {food.strMeasure7}</p>
                          <p><span className="font-medium">{food.strIngredient8}</span> - {food.strMeasure8}</p>
                          <p><span className="font-medium">{food.strIngredient9}</span> - {food.strMeasure9}</p>
                          <p><span className="font-medium">{food.strIngredient10}</span> - {food.strMeasure10}</p>
                        </div>
                        <div>
                          <p><span className="font-medium">{food.strIngredient11}</span> - {food.strMeasure11}</p>
                          <p><span className="font-medium">{food.strIngredient12}</span> - {food.strMeasure12}</p>
                          <p><span className="font-medium">{food.strIngredient13}</span> - {food.strMeasure13}</p>
                          <p><span className="font-medium">{food.strIngredient14}</span> - {food.strMeasure14}</p>
                          <p><span className="font-medium">{food.strIngredient15}</span> - {food.strMeasure15}</p>
                          <p><span className="font-medium">{food.strIngredient16}</span> - {food.strMeasure16}</p>
                          <p><span className="font-medium">{food.strIngredient17}</span> - {food.strMeasure17}</p>
                          <p><span className="font-medium">{food.strIngredient18}</span> - {food.strMeasure18}</p>
                          <p><span className="font-medium">{food.strIngredient19}</span> - {food.strMeasure19}</p>
                          <p><span className="font-medium">{food.strIngredient20}</span> - {food.strMeasure20}</p>
                        </div>
                      </div>
                      <div>
                        <h3 className="pt-5">
                          <strong>Instructions:</strong>
                        </h3>
                        <p className="indent-10 text-justify px-5">{food.strInstructions}</p>

                        <h3 className="pt-5">
                          <strong>Youtube:</strong>
                        </h3>
                        <a href={food.strYoutube} target="_blank" rel="noreferrer"className="ml-5 hover:underline ">{food.strYoutube}</a>

                        <h3 className="pt-5">
                          <strong>Source:</strong>
                        </h3>
                        <a href={food.strSource} target="_blank" rel="noreferrer" className="ml-5 hover:underline">{food.strSource}</a>

                        <h3 className="pt-5">
                          <strong>Image:</strong>
                        </h3>
                        <img
                          className='w-80 h-80 ml-5 mt-3 rounded'
                          src={food.strMealThumb}
                          alt="Food_Picture_Search"
                        />
                        <button
                        onClick={closePopup}
                        className=' absolute border border-black p-2 top-4 right-4 p-2 hover:bg-orange-600 hover:text-white hover: rounded-lg bg-orange-500 font-bold'>
                       
                        Close
                        </button>
                      </div>
                  
                    </div>

                  </div>
                  )}
                   {/* =================================menu search showinfo */}
              </div>
            ))}
            {/* ========================search info div */}

            
            </div>
          )}
        
        </div>
        ):(
          //------------------------------------------ Country Division
          <div className=" w-screen border">

            <div className="flex flex-wrap border justify-center items-center mt-10 mb-10">
              <p className="text-3xl pr-5 countryName font-bold ">{countryCode}</p>
              <img src={countryFlag} alt="Country Flag" className="w-26 h-20"/>
            </div>

            <div className="flex justify-center">
              <div className="flex flex-wrap gap-20 pl-24 p-20 w-4/5 border-8 justify-center bg-white/50 border-double border-black">
              {country.map((food) => (
                <div key={food.idMeal} className=" h-80">
                  <div className="text-center flex flex-col justify-center w-52">
                    <img src={food.strMealThumb}
                    alt="Country Food" className="w-52 h-52 rounded-lg"/>
                    <div className="h-16 flex justify-center ">
                        <p className="font-bold text-sm mb-2 self-center text-center">{food.strMeal}</p>
                    </div>
                  </div>
                  <div className="justify-center flex">
                    <button onClick={() => toggleCountryFood(food)} className="p-2 hover:bg-orange-600 hover:text-white hover: rounded-lg bg-orange-500 font-bold">Read More</button>
                  </div>
                  {showInfo && selectedFood === food && (
                  <div className='fixed bg-slate-950/50 w-screen h-screen rounded drop-shadow-lg randomInfo'>
                    {countryFoodDiv.map((countryFood)=>
                    <div key={countryFood.idMeal} className='p-5 w-9/12 h-[42rem] bg-orange-300 foodInfo mb-1 pt-12 overflow-auto pb-28'>
                      <div className="flex">
                        <div className="w-8/12">
                        <h1 className="text-4xl">{countryFood.strMeal}</h1>
                        </div>
                        <div className="self-end ">
                          <button onClick={()=>{ handleAddToFirestoreSearch(countryFood)}} className=" ml-5 p-1 mt-1 px-3 rounded-full hover:bg-orange-600  hover:text-white bg-orange-500 font-bold mb-1"> Add to favorites</button>
                        </div>
                      </div>
                      <hr></hr>
                      <h3>
                        <strong>Ingredients:</strong>
                      </h3>

                      <div className="grid grid-cols-2">
                        <div className="pl-5">
                          <p><span className="font-medium">{countryFood.strIngredient1}</span> - {countryFood.strMeasure1}</p>
                          <p><span className="font-medium">{countryFood.strIngredient2}</span> - {countryFood.strMeasure2}</p>
                          <p><span className="font-medium">{countryFood.strIngredient3}</span> - {countryFood.strMeasure3}</p>
                          <p><span className="font-medium">{countryFood.strIngredient4}</span> - {countryFood.strMeasure4}</p>
                          <p><span className="font-medium">{countryFood.strIngredient5}</span> - {countryFood.strMeasure5}</p>
                          <p><span className="font-medium">{countryFood.strIngredient6}</span> - {countryFood.strMeasure6}</p>
                          <p><span className="font-medium">{countryFood.strIngredient7}</span> - {countryFood.strMeasure7}</p>
                          <p><span className="font-medium">{countryFood.strIngredient8}</span> - {countryFood.strMeasure8}</p>
                          <p><span className="font-medium">{countryFood.strIngredient9}</span> - {countryFood.strMeasure9}</p>
                          <p><span className="font-medium">{countryFood.strIngredient10}</span> - {countryFood.strMeasure10}</p>
                        </div>
                        <div>
                          <p><span className="font-medium">{countryFood.strIngredient11}</span> - {countryFood.strMeasure11}</p>
                          <p><span className="font-medium">{countryFood.strIngredient12}</span> - {countryFood.strMeasure12}</p>
                          <p><span className="font-medium">{countryFood.strIngredient13}</span> - {countryFood.strMeasure13}</p>
                          <p><span className="font-medium">{countryFood.strIngredient14}</span> - {countryFood.strMeasure14}</p>
                          <p><span className="font-medium">{countryFood.strIngredient15}</span> - {countryFood.strMeasure15}</p>
                          <p><span className="font-medium">{countryFood.strIngredient16}</span> - {countryFood.strMeasure16}</p>
                          <p><span className="font-medium">{countryFood.strIngredient17}</span> - {countryFood.strMeasure17}</p>
                          <p><span className="font-medium">{countryFood.strIngredient18}</span> - {countryFood.strMeasure18}</p>
                          <p><span className="font-medium">{countryFood.strIngredient19}</span> - {countryFood.strMeasure19}</p>
                          <p><span className="font-medium">{countryFood.strIngredient20}</span> - {countryFood.strMeasure20}</p>
                        </div>
                      </div>
                      <div>
                        <h3 className="pt-5">
                          <strong>Instructions:</strong>
                        </h3>
                        <p className="indent-10 text-justify px-5">{countryFood.strInstructions}</p>

                        <h3 className="pt-5">
                          <strong>Youtube:</strong>
                        </h3>
                        <a href={countryFood.strYoutube} target="_blank" rel="noreferrer"className="ml-5 hover:underline ">{countryFood.strYoutube}</a>

                        <h3 className="pt-5">
                          <strong>Source:</strong>
                        </h3>
                        <a href={countryFood.strSource} target="_blank" rel="noreferrer" className="ml-5 hover:underline">{countryFood.strSource}</a>

                        <h3 className="pt-5">
                          <strong>Image:</strong>
                        </h3>
                        <img
                          className='w-80 h-80 ml-5 mt-3 rounded'
                          src={countryFood.strMealThumb}
                          alt="Food_Picture_Search"
                        />
                        
                      </div>
                      <button
                        onClick={closePopup}
                        className=' absolute border border-black p-2 top-4 right-4 p-2 hover:bg-orange-600 hover:text-white hover: rounded-lg bg-orange-500 font-bold'>
                       
                        Close
                        </button>
                  
                    </div>
                    )}

                  </div>
                  )}
                </div>
              ))}
              </div>
            </div>
          </div>
          
        )
        
        
        } 

      {notFound && (
        <div className='w-screen h-screen border bg-white/60 text-white '>
            <div>Error 404 not Found</div>
        </div>
      )}  
      <div className="gap-4 flex justify-center w- my-10">
      
        <button onClick={()=> AmericanFlagButton()} ><img src={AmericaFlag} alt="America flag" className="w-10 h-10"/></button>

        <button onClick={()=> BritishFlagButton()}><img src={ BritishFlag }alt="British flag" className="w-10 h-10"/></button>

        <button onClick={()=> CanadaFlagButton()}><img src={ CanadianFlag } alt="Canadian flag" className="w-10 h-10"/></button>

        <button onClick={()=> ChineseFlagButton()}><img src={ ChineseFlag } alt="Chinese flag" className="w-10 h-10"/></button>

        <button onClick={()=> CroatianFlagButton()}><img src={ CroatianFlag } alt="Croatian flag" className="w-10 h-10"/></button>

        <button onClick={()=> DuctchFlagButton()}><img src={ DutchFlag } alt="Croatian flag" className="w-10 h-10"/></button>

        <button onClick={()=> EgyptianFlagButton()}><img src={ EgyptianFlag } alt="Croatian flag" className="w-10 h-10"/></button>

        <button onClick={()=> PhilippineFlagButton()}><img src={ PhilippineFlag } alt="Croatian flag" className="w-10 h-10"/></button>

        <button onClick={()=> FrenchFlagButton()}><img src={ FrenchFlag } alt="Croatian flag" className="w-10 h-10"/></button>

        <button onClick={()=> GreekFlagButton()}><img src={ GreekFlag } alt="Croatian flag" className="w-10 h-10"/></button>

        <button onClick={()=> IndianFlagButton()}><img src={ IndianFlag } alt="Croatian flag" className="w-10 h-10"/></button>

        <button onClick={()=> IrishFlagButton()}><img src={ IrishFlag } alt="Croatian flag" className="w-10 h-10"/></button>

        <button onClick={()=> ItalianFlagButton()}><img src={ ItalianFlag } alt="Croatian flag" className="w-10 h-10"/></button>

        <button onClick={()=> JamaicanFlagButton()}><img src={ JamaicanFlag } alt="Croatian flag" className="w-10 h-10"/></button>

        <button onClick={()=> JapaneseFlagButton()}><img src={ JapanFlag } alt="Croatian flag" className="w-10 h-10"/></button>

        <button onClick={()=> KenyanFlagButton()}><img src={ KenyaFlag } alt="Croatian flag" className="w-10 h-10"/></button>

        <button onClick={()=> MalasianFlagButton()}><img src={ MalasiaFlag } alt="Croatian flag" className="w-10 h-10"/></button>

        <button onClick={()=> MexicanFlagButton()}><img src={ MexicoFlag } alt="Croatian flag" className="w-10 h-10"/></button>

        <button onClick={()=> MoroccanFlagButton()}><img src={ MoroocanFlag } alt="Croatian flag" className="w-10 h-10"/></button>

        <button onClick={()=> PolishFlagButton()}><img src={ PolishFlag } alt="Croatian flag" className="w-10 h-10"/></button>

        <button onClick={()=> PortugueseFlagButton()}><img src={ PortugueseFlag } alt="Croatian flag" className="w-10 h-10"/></button>

        <button onClick={()=> RussianFlagButton()}><img src={ RussianFlag } alt="Croatian flag" className="w-10 h-10"/></button>

        <button onClick={()=> SpanishFlagButton()}><img src={ SpanishFlag } alt="Croatian flag" className="w-10 h-10"/></button>

        <button onClick={()=> ThaiFlagButton()}><img src={ ThaiFlag } alt="Croatian flag" className="w-10 h-10"/></button>

        <button onClick={()=> TunisianFlagButton()}><img src={ Tunisian } alt="Croatian flag" className="w-10 h-10"/></button>

        <button onClick={()=> TurkishFlagButton()}><img src={ TurkishFlag } alt="Croatian flag" className="w-10 h-10"/></button>

        <button onClick={()=> VietnamFlagButton()}><img src={ VietnamFlag } alt="Croatian flag" className="w-10 h-10"/></button>

      </div>
      {favoriteSend && (
        <div className='w-screen h-screen border bg-white/60 text-white modalHome'>
            <div className='w-96 h-68 bg-black/90 p-6 modalHomeEmail drop-shadow-2xl rounded text-center'>You successfully add {addFavorite}to your favorite.</div>
        </div>
      )}
      
    </div>
  )
}

export default Menu;
