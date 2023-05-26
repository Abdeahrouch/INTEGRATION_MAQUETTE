
// Obtention d formulaire
let formulaire = document.getElementById('formulaire');

// ajout d event listener pour l ecout de formulaire
formulaire.addEventListener('submit', function(event) {
    
     // Empeche l envoi d formulaire
    event.preventDefault();
    //Creation des variables correspondantes a leur id
    let nom = document.getElementById('name').value;
    let email = document.getElementById('mail').value;
    let message = document.getElementById('msg').value;

    //Creation des variables correspondantes a leur id pour le message d error
    let nameError = document.getElementById('nameError');
    let mailError = document.getElementById('mailError');
    let msgError = document.getElementById('msgError');


    //Retablir les message d erreurs
    nameError.textContent = ''; 
    mailError.textContent = ''; 
    msgError.textContent = ''; 


    if (!/^[A-Za-z\-]+$/.test(nom)) {
        nameError.textContent = 'Les lettres anonymes, c\'est mal';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        mailError.textContent = 'Et comment on fait pour vous spammer ?';
    }
    if (message.trim() === '') {
        msgError.textContent = 'Non mais allo quoi, tu nous écris et tu nous écris rien?';
    }
   
    //--Verification bonne: popup avec message--//


    
});




// Menu ouvrant
let boutonMenu = document.getElementById('menubtn');

let menuDeroule = document.getElementById('menuderoule');

boutonMenu.addEventListener('click', function(){

    menuDeroule.classList.toggle('deroule');
});