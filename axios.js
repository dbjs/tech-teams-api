//FILL IN DATA OBJECTS PLEASE

//USE THIS TO GET PROFILE INFO OF USERS
axios({
  method: 'get',
  url: '/profile',
  data: {
    email:
  }
}).then(function(res) {
  //SENDING BACK
    //FULL PROFILE INFO
    //ALL PROJECTS
    //ALL NOTIFICATIONS
}

//USE THIS TO UPDATE PROFILE
axios({
  method: 'post',
  url: '/updateprofile',
  data: {
    email:
    name:
    position:
    description:
    availability:
    location:
    imageurl:
    title:
  }
}).then(function(res) {
  //NOT SENDING STUFF BACK TO CLIENT
  //USE REDUX TO RENDER UPDATED INFO
}

//USE THIS TO STORE USER INFO FROM SIGNUP
axios({
  method: 'post',
  url: '/signup',
  data: {
    name:
    email:
    position:
    availability:
    description:
    location:
    imageurl:
    title:
  }
}).then(function(res) {
  //NOT GONNA SEND STUFF BACK
}

//USE THIS TO SEARCH PROJECTS
axios({
  method: 'post',
  url: '/projectsearch',
  data: {
    query:
  }
}).then(function(res) {
  //RESPONSE IS AN ARRAY OF ALL MATCHING PROJECTS ;)
}

//USE THIS TO SEARCH USERS
axios({
  method: 'post',
  url: '/usersearch',
  data: {
    query:
  }
}).then(function(res) {
  //RESPONSE IS AN ARRAY OF ALL MATCHING USERS ;)
}

//USE THIS TO ADD NOTIFICATIONS
axios({
  method: 'post',
  url: '/notification',
  data: {
    email:
    type:
  }
}).then(function(res) {
  //NO RESPONSE BACK >:)
}

//USE THIS TO CREATE A PROJECT XD
axios({
  method: 'post',
  url: '/createproject',
  data: {
    email: //USERS email
    name:
    headquarters:
    description:
    imageurl:
    techstack:
    websites:
  }
}).then(function(res) {
  //RESPONSE IS AN ARRAY OF ALL MATCHING PROJECTS ;)
}

//USE THIS TO UPDATE A PROJECT
axios({
  method: 'post',
  url: '/updateproject',
  data: {
    name:
    headquarters:
    description:
    imageurl:
    techstack:
    websites:
  }
}).then(function(res) {
  //NO RESPONSE USE REDUX TO RENDER ;D
}
