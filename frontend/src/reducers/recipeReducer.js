import{RECIPE_RANDOM_FAIL, RECIPE_RANDOM_SUCCESS,RECIPE_RANDOM_REQUEST, RECIPE_SEARCH_SUCCESS,RECIPE_SEARCH_FAIL,RECIPE_SEARCH_REQUEST} from '../constants/recipeConstants'

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

    case RECIPE_SEARCH_REQUEST:
        return {loading:true, searched:[]}
        
    case RECIPE_SEARCH_SUCCESS:
        return {loading: false, searched: action.payload}
    case RECIPE_SEARCH_FAIL:

        return {loading:false , error: action.payload}
    default:
        return state;
    }
}