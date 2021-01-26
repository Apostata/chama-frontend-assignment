import {types} from '../actionTypes';
import {History} from '../../interfacesNTypes/interfaces'

export const setHistory = (history:History) =>{
    return { type: types.SET_HISTORY, payload:history };
};

export const getHistories = () =>{
    return { type: types.GET_HISTORIES };
};
