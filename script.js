//role : questionner l'api
//parametre : 
//return : 

fetch("users.json")
  .then(rep => {
    return rep.json()
  })
  // Afficher le temps du jour
  .then(data => {
    //a ce niveau on devrait avoir dans la console le données renvoyé par l'api.
    console.log(data)
    afficheUtilisateurs(data.users)

  })