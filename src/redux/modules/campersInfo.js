import axios from 'axios';

const IS_LOADING = "campers-leaderboard/campersInfo/IS_LOADING";
const HAS_ERRORED = "campers-leaderboard/campersInfo/HAS_ERRORED";
const FETCH_SUCCESS = "campers-leaderboard/campersInfo/FETCH_SUCCESS";
const SET_FETCH_TYPE = "campers-leaderboard/campersInfo/SET_FETCH_TYPE";

export const FETCH_TYPE_RECENT = "recent";
export const FETCH_TYPE_ALLTIME = "alltime";

// reducers
export function campersInfoIsLoading(state = false, action){
    switch(action.type){
        case IS_LOADING:
            return action.isLoading;
        default:
            return state;
    }
}
export function campersInfoHasErrored(state = false, action){
    switch(action.type){
        case HAS_ERRORED:
            return action.hasErrored;
        default:
            return state;
    }
}
export function campersInfoFetchType(state = FETCH_TYPE_RECENT, action){
    switch(action.type){
        case SET_FETCH_TYPE:
            return action.fetchType;
        default:
            return state;
    }
}
export function campersInfo(state = [], action){
    switch(action.type){
        case FETCH_SUCCESS:
            return action.campersInfo;
        default:
            return state;
    }
}

// actions
function setCampersInfoLoading(isLoading){
    return {
        type: IS_LOADING,
        isLoading
    }
} 
function setCampersInfoHasErrored(hasErrored){
    return {
        type: HAS_ERRORED,
        hasErrored 
    }
}
function setCampersInfo(campersInfo){
    return {
        type: FETCH_SUCCESS,
        campersInfo
    }
}
function setCampersInfoFetchType(fetchType){
    return {
        type: SET_FETCH_TYPE,
        fetchType
    }
}
export function fetchCampersInfo(type){
    return (dispatch) => {
        dispatch(setCampersInfoLoading(true));

        const url = 'https://fcctop100.herokuapp.com/api/fccusers/top/';
        
        axios.get(url+type)
             .then((response) => {
                return response;  
             })
             .then((response)=>{
                 dispatch(setCampersInfo(response.data));
                 dispatch(setCampersInfoFetchType(type));
                 dispatch(setCampersInfoLoading(false));
             })
             .catch(()=>{
                 dispatch(setCampersInfoHasErrored(true));
             });
    }
}
