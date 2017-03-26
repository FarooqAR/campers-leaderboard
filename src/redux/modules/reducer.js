import {combineReducers} from 'redux';
import {campersInfo, campersInfoHasErrored, campersInfoIsLoading, campersInfoFetchType} from './campersInfo';

export default combineReducers({
    campersInfo, 
    campersInfoHasErrored,
    campersInfoIsLoading,
    campersInfoFetchType
});