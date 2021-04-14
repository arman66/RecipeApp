import{RECIPE_RANDOM_FAIL, RECIPE_RANDOM_SUCCESS,RECIPE_RANDOM_REQUEST, RECIPE_SEARCH_SUCCESS,RECIPE_SEARCH_FAIL,RECIPE_SEARCH_REQUEST,RECIPE_SEARCH_RESET} from '../constants/recipeConstants'

export const recipeRandomReducer=(state={recipes:[]}, action)=>{


    switch (action.type) {
        case RECIPE_RANDOM_REQUEST:
                return {loading:true, recipes:[]}
            
        case RECIPE_RANDOM_SUCCESS:
                return {loading: false, recipes: action.payload}
        case RECIPE_RANDOM_FAIL:

            return {loading:false , error: action.payload}
        default:
            return state;
    }
}


export const recipeSearchReducer=(state={searched:[]}, action)=>{
    switch(action.type){
    case RECIPE_SEARCH_RESET:
        return {
            
            searched:[]
        }

    case RECIPE_SEARCH_REQUEST:
        return {loaded:true, searched:[]}
        
    case RECIPE_SEARCH_SUCCESS:
        return {loaded: false, searched: action.payload}
    case RECIPE_SEARCH_FAIL:

        return {loaded:false , errors: action.payload}
    default:
        return state;
    }
}