const redux = require('redux')
const createStore =  redux.createStore;

const data = {
    'name':'syamsul',
    'alamat' : 'rensing'
}

const rootReducer = (state = data,action) => {
   if (action.type === 'ADD_AL') {
       return {
           ...state,
           alamat : action.alamat
       }
   }
    return state
}

const store = createStore(rootReducer);
console.log(store.getState())

store.dispatch({type : 'ADD_AL', alamat : 'pringgasela'})
console.log(store.getState())


