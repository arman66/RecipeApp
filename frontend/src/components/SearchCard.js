import React from 'react'

import { Card, Button, Container } from 'react-bootstrap'
const SearchCard = ({ result }) => {
  console.log('this is the props ' + result.title)

  

  
  return (
    <>
      <Card style={{ width: '25rem' }} className='my-3 p-3 rounded '>
        <Card.Title as='div'>
          <strong>
            {JSON.stringify(result.title).replace(/\"/g, '')}
          </strong>
        </Card.Title>
        <Card.Img
          src={JSON.stringify(result.image).replace(/\"/g, '')}
          variant='top'
        />

<Container>
          <Card.Body>

            <a
              href={JSON.stringify(result.sourceUrl).replace(
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

export default SearchCard
