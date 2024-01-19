
const dipendenti = [
{
    nome:"Wayne Barnett",
    ruolo:	"Founder & CEO",	
    foto: "wayne-barnett-founder-ceo.jpg"
},
 {
   nome: "Angela Caroll",
   ruolo:	"Chief Editor",
   foto:	"angela-caroll-chief-editor.jpg"
 } ,
  {
   nome: "Walter Gordon",
   ruolo:	"Office Manager",
   foto:	"walter-gordon-office-manager.jpg"
  },  
  {
   nome: "Angela Lopez"	, 
   ruolo:"Social Media Manager",
   foto:	"angela-lopez-social-media-manager.jpg"
  }, 
  {
   nome: "Scott Estrada", 
   ruolo:	"Developer"	,
   foto:"scott-estrada-developer.jpg"
  } ,
  {
    nome:"Barbara Ramos"	, 
    ruolo:"Graphic Designer",
    foto:	"barbara-ramos-graphic-designer.jpg"
  }  
]

for (let i=0; i<dipendenti.length; i++){
    const contenitore = document.getElementById("containerBox")
    let elemento = dipendenti[i];
    console.log(elemento.nome);
    console.log(elemento.ruolo);
    console.log(elemento.foto);
    contenitore.innerHTML +=`
    <div class="card">
    <img src="./assets/img/${elemento.foto}" alt="employee" id="picture">
    <h3>${elemento.nome}</h3>
    <p>${elemento.ruolo}</p>
    </div>`
}
