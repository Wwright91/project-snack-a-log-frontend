import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.css"

const Home = () => {
  return (
    <div className='Home'>
      <h1> Keep track of your most favorite snacks! </h1>
      <Link to={"/snacks/new"}>
        <h2>  Log a snack now</h2> 
        <img src='https://www.eatthis.com/wp-content/uploads/sites/4/2017/07/fruit-nut-almond-strawberry-orange-snack-bowl.jpg' alt='health-snack' width="500px"/>
        </Link>
      
      
    </div>
  )
}

export default Home
