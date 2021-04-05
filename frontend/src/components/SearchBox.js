import React, {useState} from 'react'
import {Form,FormControl, Button} from 'react-bootstrap'

const SearchBox = ({history}) => {

    const[keyword, setKeyword]=useState('')
    const submitHandler=(e)=>{
        e.preventDefault()
        if(keyword.trim()){
            history.push(`/search/${keyword}`)
        }
    }
    return (
        <Form onSubmit={submitHandler} inline>
          <FormControl
            type='text'
            placeholder='Search Recipe'
            className='mr-sm-2'
            onChange={(e)=> setKeyword(e.target.value)}
          />
          <Button type= 'submit' variant='outline-success'>Search</Button>
        </Form>
    )
}

export default SearchBox
