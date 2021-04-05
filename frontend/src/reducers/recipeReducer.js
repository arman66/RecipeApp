import{RECIPE_RANDOM_FAIL, RECIPE_RANDOM_SUCCESS,RECIPE_RANDOM_REQUEST} from '../constants/recipeConstants'

export const recipeRandomReducer=(state={recipes:[]}, action)=>{


    switch (action.type) {
        case RECIPE_RANDOM_REQUEST:
                return {loading:true}
            
        case RECIPE_RANDOM_SUCCESS:
                return {loading: false, recipes: action.payload}
        case RECIPE_RANDOM_FAIL:

            return {loading:false , error: action.payload}
        default:
            return state;
    }
}