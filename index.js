/* V repozitáři najdete zdrojové soubory stránky se třemi posuvníky. 
Ty ukazují úroveň dovedností v různých oblastech.

Doplňte do stránky JavaScriptový program, který pomocí funkce prompt požádá uživatele,
 aby vyjářil svoji úroveň postupně ve všech zobrazených dovednostech jako číslo 0–100. 
 Program pak nastaví posuvníky na stránce na odpovídající délku a hodnoty u posuvníků na uživatelem zadaná čísla.
Na samém začátku vašeho programu vytvořte funkci xy, která bere dva vstupy: textový řetězec
 představující id elementu a číslo mezi 0–100. Tato funkce při zavolání nastaví posuvník se zadaným id na správnou hodnotu. 
 Použijte tuto funkci ve vašem kódu, abyste nemuseli při nastavování posuvníků psát třikrát po sobě téměř stejný kód.
*/


const updateSkill = (id, number) => {
    let sliderBar = document.querySelector(`#${id} .skill__progress`);
    sliderBar.style.width = `${number}%`;
    
    let sliderText = document.querySelector(`#${id} .skill__value`);
    sliderText.innerHTML = `${number} / 100`;
}
  

let numHTML = prompt("Zadej svou uroven dovednosti HTML cislem 1 - 100: ")
if (numHTML <= 100 && numHTML >=0 ) {
    updateSkill("skill1",numHTML)  
} else { 
if ((numHTML > 100 || numHTML <0 )) {
    numHTML = prompt("Spatne zadana hodnota. Zadej svou uroven dovednosti HTML cislem 1 - 100: ") 
    if (numHTML <= 100 && numHTML >=0 ) { 
        updateSkill("skill1",numHTML) } else { 
            alert("HTML se neupdatuje, obnov stránku a piš lepší čísla")
        }
    }
}


let numCSS = prompt("Zadej svou uroven dovednosti CSS cislem 1 - 100: ")
if (numCSS <= 100 && numCSS >=0 ) {
    updateSkill("skill1",numCSS)  
} else { 
if ((numCSS > 100 || numCSS <0 )) {
    numCSS = prompt("Spatne zadana hodnota. Zadej svou uroven dovednosti CSS cislem 1 - 100: ") 
    if (numCSS <= 100 && numCSS >=0 ) { 
        updateSkill("skill2",numCSS) } else { 
            alert("CSS se neupdatuje, obnov stránku a piš lepší čísla")
        }
    }
}

 
let numJS = prompt("Zadej svou uroven dovednosti JavaScriptu cislem 1 - 100: ")
if (numJS <= 100 && numJS >=0 ) {
    updateSkill("skill1",numJS)  
} else { 
if ((numJS > 100 || numJS <0 )) {
    numJS = prompt("Spatne zadana hodnota. Zadej svou uroven dovednosti JavaScriptu cislem 1 - 100: ") 
    if (numJS <= 100 && numJS >=0 ) { 
        updateSkill("skill2",numJS) } else { 
            alert("JavaScript se neupdatuje, obnov stránku a piš lepší čísla")
        }
    }
}
  


/* dalsi reseni by bylo dat to do event listeneru..
document.addEventListener('DOMContentLoaded', () => {
    cela funkce
    cely kod
}); */
