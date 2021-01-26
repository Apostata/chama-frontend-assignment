import {History} from '../interfacesNTypes/interfaces'
export const sortByTimeStamp = (items:History[])=>{
    return items.sort((a, b) =>{
        return  b.timestamp - a.timestamp;
    });
}