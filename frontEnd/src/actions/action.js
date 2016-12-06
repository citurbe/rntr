import $ from 'jquery'
import { browserHistory } from 'react-router'

const signUp = function(email, password){
  //dispatch({type: CREATING_USER})
  return function(dispatch){
    $.ajax({
      url: 'http://localhost:3000/users',
      type: 'POST',
      data: JSON.stringify({user: {email: email, password: password}}),
      contentType:"application/json; charset=utf-8",
      dataType:"json"
      //headers: {authorization: localStorage.getItem('jwt')}

    }).done(function(data){
      if(!!data.error){
        alert(data.error)
      } else {
        browserHistory.push('/show-test') //sets url
        localStorage.setItem('token', data.jwt)
        dispatch({type: 'LOG_IN', payload: data})
      }
    })
  }
}




// const getAmenities = function(categories){
//   return function(dispatch){
//     $.ajax({
//       url: `http://localhost:3000/categories/`,
//       type: 'GET',
//       data: JSON.stringify({address: address}),
//     })
//   }

// }


  // let urlAddress = Object.keys(address).map((key) => {return address[key]}).join(' ')

const aptSearch = function(address, userID){
  let urlAddress = Object.keys(address).map((key) => {return address[key]}).join(' ') + `&${userID}`
  return function(dispatch){
    $.ajax({
      url: `http://localhost:3000/apts/${urlAddress}`,
      type: 'GET',
      contentType: "application/json; charset=utf-8",
      dataType:"json"
    }).done(function(data){
      dispatch({type: 'SHOW_APT', payload: data})
    })
  }
}

const logIn = function(email, password){
  return function(dispatch){
    $.ajax({
      url: 'http://localhost:3000/sessions',
      type: 'POST',
      data: JSON.stringify({user: {email: email, password: password}}),
      contentType:"application/json; charset=utf-8",
      dataType:"json"
    }).done(function(data){
      if(!!data.error){
      alert(data.error)
    } else {
      browserHistory.push('/show-test')
      localStorage.setItem('token', data.jwt)
      dispatch({type: 'LOG_IN', payload: data})
    }
    })
  }
}

const savePreferences = function(userState, prefState){
  return function(dispatch){
    $.ajax({
      url: `http://localhost:3000/users/${userState.userID}`,
      type: 'PATCH',
      data: JSON.stringify({prefState: prefState, token: localStorage.token}),
      contentType:"application/json; charset=utf-8",
      dataType:"json"
    }).done(function(data){
      console.log(data)
      dispatch({type: 'UPDATE_PREFERENCES', payload: data})
    })
  }
}


export { signUp, logIn, aptSearch, savePreferences }
