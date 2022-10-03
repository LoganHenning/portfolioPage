//about nav

const aboutColor = document.getElementById("aboutNav");

aboutColor.addEventListener("mouseover", aboutChange);
aboutColor.addEventListener("mouseout", aboutBack);

aboutColor.style.color = "#f2e9e1";

function aboutChange() {
        aboutColor.style.color = "#cbe86B";
}
function aboutBack() {
    aboutColor.style.color = "#f2e9e1";
}

//project nav

const projColor = document.getElementById("projNav");

projColor.addEventListener("mouseover", projChange);
projColor.addEventListener("mouseout", projBack);

projColor.style.color = "#f2e9e1";

function projChange() {
        projColor.style.color = "#cbe86B";
}
function projBack() {
    projColor.style.color = "#f2e9e1";
}

//skills nav

const skillsColor = document.getElementById("skillsNav");

skillsColor.addEventListener("mouseover", skillsChange);
skillsColor.addEventListener("mouseout", skillsBack);

skillsColor.style.color = "#f2e9e1";

function skillsChange() {
        skillsColor.style.color = "#cbe86B";
}
function skillsBack() {
    skillsColor.style.color = "#f2e9e1";
}


//contact nav

const contColor = document.getElementById("contNav");

contColor.addEventListener("mouseover", contChange);
contColor.addEventListener("mouseout", contBack);

contColor.style.color = "#f2e9e1";

function contChange() {
        contColor.style.color = "#cbe86B";
}
function contBack() {
    contColor.style.color = "#f2e9e1";
}