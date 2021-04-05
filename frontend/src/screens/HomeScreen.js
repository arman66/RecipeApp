import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import RecipeCard from '../components/RecipeCard'
import {Route} from 'react-router-dom'
import SearchBox from '../components/SearchBox'
import Carousel from 'react-bootstrap/Carousel'
import honey from '../honey.jpeg'
import weird from '../weird.jpeg'
import pancakes from '../pancakes.jpeg'
import { Container } from 'react-bootstrap'
import { recipeApiRandom } from '../actions/recipeActions'


const HomeScreen = ({  }) => {


  const dispatch = useDispatch()

  const recipeList = useSelector((state) => state.recipeList)

  const { loading, error, recipes } = recipeList

  useEffect(() => {

    dispatch(recipeApiRandom())
    console.log("it go to the useeffect")
   

  }, [dispatch])
  

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

      {loading ? (
  <h2>Loading</h2>
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
