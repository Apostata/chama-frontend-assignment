import {types} from '../actionTypes';

import{History} from '../../interfacesNTypes/interfaces'
const localStorageHistories: string | null = localStorage.getItem('histories') || null
const localStorageHistoriesArr:[] | History[] = localStorageHistories? JSON.parse(localStorageHistories):[]
const initialState: History[] =[...localStorageHistoriesArr];
export default (state=initialState, action:{type:string, payload:History}) =>{
    switch(action.type){
        case types.SET_HISTORY :
            const newState = [...state, action.payload]
            localStorage.setItem('histories', JSON.stringify(newState))
            return newState;
        default :
            return state;
    }
};