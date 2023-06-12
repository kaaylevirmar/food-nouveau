
import React,{useEffect, useState} from "react";
import logoImg from "../logo-spoon.png";
import RandomRecipe from "./homeRandomRecipe";
import Category from "./category";
import Modal from "./homeModal";
import FeaturedRecipes from "./FeaturedRecipes";

import FacebookIcon from '../images/icons8-fb-50.png';
import TwitterIcon from '../images/icons8-twitter-50.png';
import InstagramIcon from '../images/icons8-instagram-50.png';
import GithubIcon from '../images/icons8-github-50.png';


const Home = () => {
  const [openModal, setOpenModal] = useState(true);
  const [categories, getFoodCategory] = useState([]);
  


 
  useEffect(() => {

    fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
      .then((response) => response.json())
      .then((data) => getFoodCategory(data.categories));
  }, []);
  
  return (

  <div className="grid flex w-screen bg-orange-300 pb-10" >
      <div className="justify-self-center w-screen ">
        
        <div className="text-center w-screen h-64">

          <div className=" flex mt-10 justify-center w-screen">
              <img src={logoImg} alt='This is a logo' className="logoImg"/>
              <div className=" p-4">
                <p className="welcomeFN">Welcome to <span className="logoFontFam">Food Nouveau</span></p>
                <p className="text-base font-semibold pt-10">We serve you a lot of recipe here at our website.</p>
                <p className="text-base font-semibold">We preferred also a lot of recipes around the world.</p>
                <div className='flex justify-center gap-4 pt-3 '>
                  <img src={FacebookIcon} alt='Facebook Icon' className="w-8 h-8 mt-2 mr-2 p-1 bg-orange-600 rounded-full"/>
                  <img src={TwitterIcon} alt='Facebook Icon' className="w-8 h-8 mt-2 mr-2 p-1 bg-orange-600 rounded-full"/>
                  <img src={InstagramIcon} alt='Facebook Icon' className="w-8 h-8 mt-2 mr-2 p-1 bg-orange-600 rounded-full"/>
                  <img src={GithubIcon} alt='Facebook Icon' className="w-8 h-8 mt-2 mr-2 p-1 bg-orange-600 rounded-full"/>
                </div>
              </div>
              <img src={logoImg} alt='This is a logo' className="logoImg"/>
          </div>  
          {openModal && <Modal openModal={openModal} setOpenModal={setOpenModal}/>}
        </div>
        <div className="w-screen flex justify-center">
          <hr className=" w-[1200px]"/>
        </div>
        <div className="flex justify-center">
          <div className="border-8 w-4/5 mt-10 bg-white/50 border-double border-black">
            <RandomRecipe/>
        
            <FeaturedRecipes/>

        
        
            <div className=" flex justify-center">
              <hr className="mt-4 w-[1200px]"/>
            </div>

            <h1 className="text-center text-3xl font-black sampleMenu mt-5">Categories</h1>
            <div className="flex justify-center flex-wrap gap-5 mt-10 pb-10">
              {categories.map(category => (
              <Category key={category.idCategory} category={category} />
             ))}
            </div>

        </div>
        </div>
      </div>
          
     
  </div>
)};

export default Home;
