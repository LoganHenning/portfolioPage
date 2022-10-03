// displays and hides project body on click of projTitle

const creditProj = document.getElementById("creditCardChecker");
const creditBody = document.getElementById("creditLink");
creditProj.addEventListener("click", toggleCredit);

creditBody.style.display = 'none';

function toggleCredit() {
  if (creditBody.style.display === 'none'){
    creditBody.style.display = 'block';
} else creditBody.style.display = 'none';

// if (shopProj.style.listStyleType === "\u25B6"){
//     shopProj.style.listStyleType = "\u25B6";
// } else shopProj.style.listStyleType = "\u25BC";

//scrapped idea: arrow points down on expand, and reverts on collapse
}

const numProj = document.getElementById("numberGuesser");
const numBody = document.getElementById("numberLink")
numProj.addEventListener("click", toggleNum);

numBody.style.display = 'none';

function toggleNum() {
  if (numBody.style.display === 'none'){
    numBody.style.display = 'block';
} else numBody.style.display = 'none';
}

const siteProj = document.getElementById("site");
const siteBody = document.getElementById("siteLink")
siteProj.addEventListener("click", toggleSite);

siteBody.style.display = 'none';

function toggleSite() {
  if (siteBody.style.display === 'none'){
    siteBody.style.display = 'block';
} else siteBody.style.display = 'none';
}