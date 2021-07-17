const MenuContainer = document.querySelector(".main-container");
const ClientContainer = document.querySelector('.client-container');
const prodContainer = document.querySelector('.prod-container');
const editionContainer = document.querySelector('.edition-container');

const btn = document.createElement('button');
const ProdBtn = document.createElement("button");

let current;

const Mmenu = document.querySelector(".M-menu");
const Menuclient = document.querySelector(".menu-client");
const Menuproduit = document.querySelector(".menu-produit");
const Edition = document.querySelector(".edition");

//Client datat :
const NomClien = [], TelClient = [], DateEnreg = [];
let comp = 1;

//Prod data :
const NomP = [], Typeprod = [], TypeTask = [], DateP = [];
let Ncomp = 0;


//Functions :
function load() {

    ClientContainer.style.display = 'none';
    prodContainer.style.display = 'none';
    editionContainer.style.display = 'none';

    //Creation de client-----------------------------------------------------------

    const Nom = document.createElement('input');
    const Tel = document.createElement('input');
    const Date = document.createElement('input');
    const ClientDiv = document.createElement('div');
    const buttonClientDiv = document.createElement('div');
   
    Nom.placeholder = "Nom de client";
    Tel.placeholder = "Num de Téléphone";
    Date.placeholder = "Date d'enregistrement";
    btn.innerText = "submit";
    btn.classList = "lool";
    ClientDiv.classList = "ClientDiv";
    buttonClientDiv.classList = "buttdiv";

    buttonClientDiv.appendChild(btn);
    ClientDiv.appendChild(Nom);
    ClientDiv.appendChild(Tel);
    ClientDiv.appendChild(Date);
    
    ClientContainer.appendChild(ClientDiv);
    ClientContainer.appendChild(buttonClientDiv);

    //creation de Poduit-----------------------------------------------------------
    const ProdDiv =document.createElement('div');
    const buttonProdtDiv = document.createElement('div');
    prodContainer.appendChild(ProdDiv);
    buttonProdtDiv.classList = "buttdiv";
    ProdDiv.classList = "ProdDiv";

    //nom :
    const NomProd = document.createElement('input');
    NomProd.placeholder = "Nom de produit";
    const NomProdDiv = document.createElement("div");
    NomProdDiv.appendChild(NomProd);
    ProdDiv.appendChild(NomProdDiv);

    //Type de produit :
    const Type = ["PC Portable", "PC Bureau", "Imprimant", "Camera"];
    const listDrop = document.createElement('select');
    const TypeText =document.createElement("label");
    const TypeProdDiv = document.createElement("div");

    TypeText.innerText = "Choisir le Type de Produit : ";

    TypeProdDiv.appendChild(TypeText);
    TypeProdDiv.appendChild(listDrop);
    ProdDiv.appendChild(TypeProdDiv);
    for (let i = 0; i < Type.length ; i++) {
        const option = document.createElement("option");
        option.innerText = Type[i];
        listDrop.appendChild(option);
    }

    //Client :
    const clientProduit = document.createElement('select');
    const labelclient = document.createElement('label');
    const clientproduitdiv = document.createElement('div');
    clientproduitdiv.appendChild(labelclient);
    clientproduitdiv.appendChild(clientProduit);

    labelclient.innerText = "Choisi le client : ";

    clientproduitdiv.appendChild(clientProduit);
    ProdDiv.appendChild(clientproduitdiv);

    addEventListener('click', (e) => {
        const target = e.target;
        if ( target === Menuproduit) { 
            var length = clientProduit.options.length;
            for (i = length-1; i >= 0; i--) {
                clientProduit.options[i] = null;
            } 
            for (let newcomp = 1; newcomp < comp; newcomp++) {
                const opt = document.createElement('option');
                opt.innerText = NomClien[newcomp];
                clientProduit.appendChild(opt);
                console.log(opt.value);
            }    
        }
    })
        
    //Type de Traitement :
    const Type1 = ["Diagnostique", "Formatage", "Change", "test4", "test5"];
    const TypeTrait = document.createElement("select");
    const TypeText1 =document.createElement("label");
    const TraitProdDiv = document.createElement("div");

    TraitProdDiv.classList = "traitdiv";

    TypeText1.innerText = "Choisir le Type de Traitement : ";

    TraitProdDiv.appendChild(TypeText1);
    TraitProdDiv.appendChild(TypeTrait);
    ProdDiv.appendChild(TraitProdDiv)
    for (let x = 0; x < Type1.length; x++) {
        const option1 = document.createElement("option");
        option1.innerText = Type1[x];
        TypeTrait.appendChild(option1);
    }

    //Date :
    const DateProd = document.createElement("input");
    DateProd.placeholder = "Date d'enregitrement";
    ProdDiv.appendChild(DateProd);

    //button :
    ProdBtn.innerText = "submit";
    ProdBtn.classList = "lool";
    buttonProdtDiv.appendChild(ProdBtn);
    prodContainer.appendChild(buttonProdtDiv);

    addEventListener('click', (e) => {
        const target = e.target;
        if (target === btn) {
            NomClien[comp] = Nom.value;
            TelClient[comp] = Tel.value;
            DateEnreg[comp] = Date.value;
            console.log("Nom : " + NomClien[comp]);
            console.log("Tel : " + TelClient[comp]);
            console.log("Date : " + DateEnreg[comp]);

            Nom.value = "";
            Tel.value = "";
            Date.value = "";
            comp = comp + 1;

        }
        if (target === ProdBtn) {
            NomP[comp] = NomProd.value;
            Typeprod[comp] = Tel.value;
            TypeTask[comp] = Date.value;
            console.log("Nom : " + NomP[comp]);
            console.log("Type prod : " + Type[comp]);
            console.log("type task : " + Type1[comp])
            console.log("Date : " + DateProd.value);
        }
    })
}

function verify() {
    if (current == 1) {
        MenuContainer.style.display = 'block'
        ClientContainer.style.display = 'none';
        prodContainer.style.display = 'none';
        editionContainer.style.display = 'none';
    } else if (current == 2) {
        ClientContainer.style.display = 'block';
        MenuContainer.style.display = 'none';
        prodContainer.style.display = 'none';
        editionContainer.style.display = 'none';
    } else if (current == 3) {
        prodContainer.style.display = 'block'
        MenuContainer.style.display = 'none';
        ClientContainer.style.display = 'none';
        editionContainer.style.display = 'none';
    } else if (current == 4) {
        editionContainer.style.display = 'block';
        MenuContainer.style.display = 'none';
        prodContainer.style.display = 'none';
        ClientContainer.style.display = 'none';
    }
}

//event Listeners :
addEventListener('click', (e) => {
    let target = e.target;
    if (target === Mmenu) {
        current = 1;
        verify();
        console.log("menu");


    } else if (target === Menuclient) {
        current = 2;
        console.log("client");
        verify();
 
    } else if (target === Menuproduit) {
        current = 3;
        verify();
        console.log("produit");
        
    } else if (target === Edition) {
        current = 4;
        verify();
        console.log("edition");
        
    }
})

load();