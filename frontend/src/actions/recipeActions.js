import axios from 'axios'
import {RECIPE_RANDOM_FAIL, RECIPE_RANDOM_SUCCESS,RECIPE_RANDOM_REQUEST} from '../constants/recipeConstants'

const APIKEY= '37fab99e028f4939966406cf0b08ff4d'

export const recipeApiRandom = () => async (dispatch) =>{
    //thunk allow to make asyncronous request fucntion after a function

    try {
        dispatch({type: RECIPE_RANDOM_REQUEST})

        const {data} = await axios.get(`https://api.spoonacular.com/recipes/random?number=1&apiKey=${APIKEY}`)

        

        dispatch({
            type: RECIPE_RANDOM_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({type: RECIPE_RANDOM_FAIL,
        paylod: error.response})
    }
}