import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
const RecipeCard = ({ recipe }) => {
  console.log('this is the props ' + recipe.recipes[0].title)

  const ingredients = recipe.recipes[0].extendedIngredients

  console.log(
    'this is the link: ' +
      JSON.stringify(recipe.recipes[0].sourceUrl).replace(/\"/g, '')
  )
  return (
    <>
      <Card style={{ width: '25rem' }} className='my-3 p-3 rounded '>
        <Card.Title as='div'>
          <strong>
            {JSON.stringify(recipe.recipes[0].title).replace(/\"/g, '')}
          </strong>
        </Card.Title>
        <Card.Img
          src={JSON.stringify(recipe.recipes[0].image).replace(/\"/g, '')}
          variant='top'
        />
        <Card.Body>
          <Card.Text as='div'>
            <p>These are the ingredients</p>
            {ingredients.map((ingredient) => (
              <ul>
                <li key={ingredient.id}>{ingredient.name}</li>
              </ul>
            ))}
          </Card.Text>

          <a
            href={JSON.stringify(recipe.recipes[0].sourceUrl).replace(
              /\"/g,
              ''
            )}
          >
            <Button variant='primary'>Get Recipe</Button>
          </a>
        </Card.Body>
      </Card>
    </>
  )
}

export default RecipeCard
