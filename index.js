const {createStore,combineReducers}=require('redux')    //to pass multiple reducer we use combineReducers

const initialState={
    number:0,
    anotherNumber:0
}
function numberReducer(incomingObject=initialState,action){ // {number:0}=> incomingObj

    if(action.type === 'ADD'){  // action.type means which type of action you want to execute;
const numberToAdd = action.payload;       // inorder to implement this action if we need some input,then those input values are present in the payload;
    return{
        ...incomingObject,
        number:incomingObject.number+numberToAdd
    }
}
    else if(action.type === 'SUBTRACT'){
const numberToSubtract=action.payload;

return{
    ...incomingObject,
    number: incomingObject.number -numberToSubtract
}

    }else if(action.type ==='INCREMENT'){        
// we don't need payload for increment;  : action :{type:'increment' , payload: null }

return {
    ...incomingObject,
    number:incomingObject.number+1
}
    }else if(action.type ==='DECREMENT'){
        //we don't need payload for decrement
return {
    ...incomingObject,
    number:incomingObject.number-1
}
    }else{
return incomingObject;
    } 
}

//action.type-> which algo to use ;
//action.payload -> any input required for the algo to work;


// const init = {number:1};
// console.log(numberReducer(init,{type:'ADD',payload: 40})) ;

// function anotherNumberReducer(incomingObject=initialState,action){

//     if(action.type ==='INCREMENT'){
//         return {
//             ...incomingObject,
//             anotherNumber:incomingObject.anotherNumber+1
//         }
//     }
//     else if(action.type==='DECREMENT'){
//         return{
//             ...incomingObject,
//             anotherNumber:incomingObject.anotherNumber-1
//         }
//     }else{
//         return incomingObject
//     }
// }

// const rootReducer=combineReducers({   // By default value we pass initial state as both reducer function ,incase if we dont pass initial state in store it will get from default value {combinerReducer}
//     number:numberReducer,
//     anotherNumber:anotherNumberReducer
// })

// console.log(rootReducer)



// const store = createStore(numberReducer,initialState);
const store = createStore(numberReducer);   // if we already pass the initial state as default value then we don't need to pass as argument (only one place we should pass the initial state otherwise it will give you NaN)
console.log(store);

store.subscribe(()=>{
    console.log('store has been updated',store.getState())
})


console.log(store.getState());

store.dispatch({type:'ADD',payload:16}); // dispatch takes an action
// store.dispatch({type:'INCREMENT',payload:null});
console.log(store.getState())