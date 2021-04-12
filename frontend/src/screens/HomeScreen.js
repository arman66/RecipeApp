import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Route} from 'react-router-dom'
import RecipeCard from '../components/RecipeCard'
import Loader from '../components/Loader'
import SearchBox from '../components/SearchBox'
import Carousel from 'react-bootstrap/Carousel'
import honey from '../honey.jpeg'
import weird from '../weird.jpeg'
import pancakes from '../pancakes.jpeg'
import { Container } from 'react-bootstrap'
import { recipeApiRandom, recipeApiSearch } from '../actions/recipeActions'


const HomeScreen = ({ match}) => {

  const keyword = match.params.keyword

  const dispatch = useDispatch()

  const recipeList = useSelector((state) => state.recipeList)
  const recipeSearch = useSelector((state) => state.recipeSearch)

  // const {searched}= recipeSearch

  const { loading, error, recipes=[] } = recipeList

  useEffect(() => {

    dispatch(recipeApiRandom())

    dispatch(recipeApiSearch(keyword))

    console.log("this is the keyword "+ keyword)
   

  }, [dispatch, keyword])
  
  
  return (
    <Container>
      <Container className='mb-4'>
       <Route render={({history})=> <SearchBox history= {history} />}/>
      </Container>
      <Carousel fade>
        <Carousel.Item>
          <img src={honey} alt='First slide' />
          <Carousel.Caption className='carousel-caption'></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={weird} alt='Second slide' />

          <Carousel.Caption className='carousel-caption'></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={pancakes} alt='Third slide' />

          <Carousel.Caption className='carousel-caption'></Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {loading  || recipes.recipes=== undefined ? (
 <Loader/>
):error?(
  <h3> {error}</h3>
):(
  <Container className='card'>

        
        {recipes.recipes.map((recipe) => (
          <>
            <h1>Random Recipe</h1>
            <RecipeCard recipe={recipe} />
          </>
        ))}
      </Container>
)}
             
   
  
     
     
    </Container>
  )
}

export default HomeScreen
