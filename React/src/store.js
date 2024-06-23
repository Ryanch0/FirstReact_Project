import { configureStore, createSlice } from '@reduxjs/toolkit'

let loggedIn = createSlice({
  name : 'loggedIn',
  initialState : false,
  reducers : {
    loginStatus() {
      return true
    },
    loginStatus2(){
      return false
    }
  }
})

let userData = createSlice({
  name : 'userData',
  initialState : null,
  reducers : {
    setUserData() {
      
    }
  }
})

export let {loginStatus,loginStatus2} = loggedIn.actions
export let {setUserData} = userData.actions 



export default configureStore({
  reducer: {
    loggedIn : loggedIn.reducer,
    userData : userData.reducer
   }
}) 