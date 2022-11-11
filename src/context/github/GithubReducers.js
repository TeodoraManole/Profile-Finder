const githubReducer = (state, action) => {
  switch(action.type) {
      case'GET_USERS':
         return{
            ...state,
            homeUsers: action.payload,
            loading: false,
         }

      case'GET_USER_AND_REPOS':
      return{
        ...state,
        user: action.payload.user,
        repos: action.payload.repos,
        loading: false
      }

      case 'SET_LOADING':
      return {
        ...state,
        loading:true
      }

      case 'CLEAR_BTN':
        return{
          ...state,
          loading: false,
          homeUsers: []
        }

      default: 
          return state
  }
}

export default githubReducer