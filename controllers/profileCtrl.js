var profiles = [
  {
    name: 'Preston McNeil',
    pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/ashleyford/128.jpg',
    status: 'Everything is bigger in Texas'
  },
  {
    name: 'Ryan Rasmussen',
    pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/jadlimcaco/128.jpg',
    status: 'RR Rules'
  },
  {
    name: 'Terri Ruff',
    pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg',
    status: 'Wow, I typed out hunter2 and all you saw was ******?!?!??'
  },
  {
    name: 'Lindsey Mayer',
    pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/nzcode/128.jpg',
    status: 'OMG MITTENS DID THE CUTEST THING TODAY'
  }
];

module.exports = {
  getFriends: function(req, res, next){
    const friendsArr = req.session.currentUser.friends;
    console.log(req.session.currentUser.friends);
    const friendObjs = [];
    // profiles.filter((profile) => {
    //   friendObjs.push(friendsArr.find((friend) => {
    //     return profile.name === friend.name
    //   }))
    // })
        // profiles.forEach(profile) => {
        //   friendsArr.forEach((friend) => {
        //     if(profile.name === friend.name){
        //       friendObjs.push(profile)
        //     }
        //   })
        // })
    for (var i = 0;i < friendsArr.length; i++){
      for(var g = 0; g < profiles.length; g++){
        if(profiles[g].name === friendsArr[i]){
          friendObjs.push(profiles[i]);
        }
      }
    }
    res.status(200).send({
      currentUser: req.session.currentUser,
      friends: friendObjs
    })
  }
}
