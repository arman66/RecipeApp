import React from 'react'

import { Card, Button, Container } from 'react-bootstrap'
const RecipeCard = ({ recipe }) => {
  console.log('this is the props ' + recipe.title)

  const ingredients = recipe.extendedIngredients

  console.log(
    'this is the link: ' +
      JSON.stringify(recipe.sourceUrl).replace(/\"/g, '')
  )
  return (
    <>
      <Card style={{ width: '25rem' }} className='my-3 p-3 rounded '>
        <Card.Title as='div'>
          <strong>
            {JSON.stringify(recipe.title).replace(/\"/g, '')}
          </strong>
        </Card.Title>
        <Card.Img
          src={JSON.stringify(recipe.image).replace(/\"/g, '')}
          variant='top'
        />

        <Container>
          <Card.Body>
          <p>These are the ingredients</p>
            <Card.Text as='div' className="list">
             
              {ingredients.map((ingredient) => (
                <ul>
                  <li key={ingredient.id}>{ingredient.name}</li>
                </ul>
              ))}
            </Card.Text>

            <a
              href={JSON.stringify(recipe.sourceUrl).replace(
                /\"/g,
                ''
              )}
            >
              <Button variant='danger'>Get Recipe</Button>
            </a>
          </Card.Body>
        </Container>
      </Card>
    </>
  )
}

export default RecipeCard
