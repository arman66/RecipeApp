import React, { useEffect, useState, Link } from 'react'
import { Form, FormControl, Button, Image } from 'react-bootstrap'
import RecipeCard from '../components/RecipeCard'
import Carousel from 'react-bootstrap/Carousel'
import honey from '../honey.jpeg'
import weird from '../weird.jpeg'
import pancakes from '../pancakes.jpeg'
import { Container } from 'react-bootstrap'
import axios from 'axios'

const HomeScreen = () => {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    const fetchRecipe = async () => {
      const { data } = await axios.get('/recipe')
      setRecipes([data])
    }

    fetchRecipe()
  }, [])

  return (
    <Container>
      <Container className='mb-4'>
        <Form inline>
          <FormControl
            type='text'
            placeholder='Search Recipe'
            className='mr-sm-2'
          />
          <Button variant='outline-success'>Search</Button>
        </Form>
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
      <Container className=''>
        {recipes.map((recipe) => (
          <>
            <h1>Random Recipe</h1>
            <RecipeCard recipe={recipe} />
          </>
        ))}
      </Container>
    </Container>
  )
}

export default HomeScreen
