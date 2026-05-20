//role : questionner l'api
//parametre : 
//return : 

fetch("script.json")
  .then(rep => {
    return rep.json()
  })
  // 
  .then(data => {
    //a ce niveau on devrait avoir dans la console le données renvoyé par l'api.
    console.log(data)
    // affichePatisserie(data)
    AffichePatisserie(data.produits)
    AfficheServices(data.services)
    AfficheVosRetours(data.temoignages)
    AfficheCommercial(data)
    AfficheNom(data)

  })

// role recuperer les patisseries une par une
// parametre tableau
// return rien car elle affiche

function AffichePatisserie(tableauProduits) {
  tableauProduits.forEach(produit => {
    let patisseriesProduits = `
        <div class="large-30 mb-64 bg-brown">
            <img src="${produit.imageurl}"
                alt="eclair-chocolat" class="w-100">

            <div class="pt-32 ">
              
                <h3 class="black">${produit.nom}</h3>
                <p class="para-pjt">${produit.description}</p>
            </div>

        </div>`
    document.querySelector("#produits-patisserie").innerHTML += patisseriesProduits
  });


}

// role recuperer les patisseries une par une
// parametre tableau
// return rien car elle affiche

function AfficheServices(tableauServices) {
  tableauServices.forEach(service => {
    let patisseriesServices = `
        

            
            <div class="card large-30">
                
                <h4 class="pb-16 couleur-texte bold">${service.nom}</h4>
                
                <p class="pb-16 text-center">${service.description}</p>

            
                <div class="text-center">
                    <a href="https://lapatisseriecyrillignac.com/fr/" target="_blank" class="btn">Voir nos réalisations</a>
                </div>

            </div>`
    document.querySelector("#services-patisserie").innerHTML += patisseriesServices
  });


}

// role recuperer les patisseries une par une
// parametre tableau
// return rien car elle affiche

function AfficheVosRetours(tableauVosRetours) {
  tableauVosRetours.forEach(retour => {
    const star = "★".repeat (retour.note)+"☆".repeat(5-retour.note)
    let patisseriesRetours = `

          
            <div class="card mb-32 mar">

              
                <div class="space-between">
                    
                    <div class="flex bg-black radius">
                        <div>
                            <img src="asset/logo-patissier-3.png" alt="Olivier" class="profil img-profil">
                        </div>


                        
                        <div class="pl-15">
                            
                            <p>${retour.prenom} ${star}</p>
                           
                            <p>${retour.typeExperience}</p>
                        </div>

                    </div>
                </div>
                
                <p class="pt-16 text-center">${retour.commentaire}</p>
            </div>`
    document.querySelector("#vos-retours-patisserie").innerHTML += patisseriesRetours
  });


}


// role recuperer les donnees du data
// parametre 
// return rien car elle affiche

function AfficheCommercial(Commercial) {
  let patisseriesCommerciales = `
            
                
                <h1 class="text-center white pt-32">${Commercial.phraseAccroche}</h1>
                
                <p class=" noto-sans-serif white mt-64 decoration-none text-center">${Commercial.avantagesClients}</p>
                
                <a href="https://lapatisseriecyrillignac.com/fr/" target="_blank" class="btn mt-64 mb-64 btn-hero">${Commercial.texteAppelAction}</a>
            </div>
        </div>
        </div>`
  document.querySelector("#commercial-patisserie").innerHTML += patisseriesCommerciales



}

// role afficher le nom
// parametre
// return rien car elle affiche

function AfficheNom(nom) {
  let patisseriesNom = `<img src="asset/logo-patissier-3.png" alt="" width="60">
        <p>${nom.nomCommercial}</p>

        <nav class="pr-30 space-between">

            <a href="#produits" class="decoration-none black shadow-btn hover">Nos produits</a>
            <a href="#services" class="decoration-none black ml-45">Nos Services</a>
            <a href="#temoignages" class="decoration-none black ml-45">Vos témoignages</a>

        </nav>


        <a href="#contact" class="btn mr-16">Contactez-nous</a>`
  document.querySelector("#nom-patisserie").innerHTML += patisseriesNom



};

 var swiper = new Swiper(".mySwiper", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });



