import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getMeals } from "../redux/features/mealSlice";
import { useGetMealQuery } from "../apiSlice";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import BreakfastSection from "../components/BreakfastSection";
import Blogs from "../components/Blogs";
import MenuSection from "../components/MenuSection";


const Home = () => {
        const {isLoading, data, isError}=useGetMealQuery()
        console.log(data)
//  const state=useSelector(state=>state.meals)
//  const dispatch=useDispatch()
//  console.log(state);
//  useEffect(()=>{
// dispatch(getMeals())
//  },[])
        return (
                <div  style={{backgroundImage: "url('https://i.ibb.co/sbm06W6/cafe1-1.jpg')",  backgroundSize:'cover',  backgroundRepeat: 'repeat-y'}} className='h-screen  '>
                       <Navbar/>
                       <Banner/>
                      <BreakfastSection/>
                      <Blogs/>
                      <MenuSection/>
                </div>
        );
};

export default Home;
