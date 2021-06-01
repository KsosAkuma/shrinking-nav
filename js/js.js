const navBar = document.querySelector('nav');
const Hbody = document.body.clientHeight;
let opacity = 100 ;
scrollYStep = (scrollY / Hbody) * 100;

window.addEventListener('scroll' ,function () {
    //pourcentage du scroll sur le body
    let test = (scrollY / Hbody) * 100;
    // la condition principal
    if (test > scrollYStep) {
        opacity -= 2 ;
    }else {
        opacity += 2;
    }
    //sécurité 1
    if (test == 0) {
        opacity = 100;
    } else if (test >= 80) {
        opacity = 0;
    }
    // MAJ de l'étape
    scrollYStep = (scrollY / Hbody) * 100;
    //sécurité 2
    if (opacity >= 100) {
        opacity = 100;
    }else if (opacity <= 0) {
        opacity = 0;
    }
    //affectation dans le CSS
    navBar.style.opacity = (`${opacity}%`)
    navBar.style.height = (`${opacity}px`)
},false)