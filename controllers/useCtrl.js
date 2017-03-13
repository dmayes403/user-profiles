var users = [
  {
    name: 'Preston McNeil',
    password: 'password1',
    friends: ['Lindsey Mayer', 'Terri Ruff']
  },
  {
    name: 'Ryan Rasmussen',
    password: '$akgfl#',
    friends: ['Lindsey Mayer']
  },
  {
    name: 'Terri Ruff',
    password: 'hunter2',
    friends: ['Lindsey Mayer', 'Preston McNeil']
  },
  {
    name: 'Lindsey Mayer',
    password: '777mittens777',
    friends: ['Preston McNeil', 'Ryan Rasmussen', 'Terri Ruff']
  }
];


module.exports = {
  login: function(req, res, next){
    const match = users.find((user) => {
      return req.body.name === user.name && req.body.password === user.password;
    });
    req.session.currentUser = match;
    if(req.session.currentUser){
      res.status(200).send({userFound: true});
    } else {
      res.status(404).send({userFound: false});
    }
  }
}
