//console.log('funguju!');

/*
V repozitáři najdete zdrojové soubory stránky se třemi posuvníky. 
Ty ukazují úroveň dovedností v různých oblastech.

Doplňte do stránky JavaScriptový program, který pomocí funkce prompt požádá uživatele,
 aby vyjářil svoji úroveň postupně ve všech zobrazených dovednostech jako číslo 0–100. 
 Program pak nastaví posuvníky na stránce na odpovídající délku a hodnoty u posuvníků na uživatelem zadaná čísla.
Na samém začátku vašeho programu vytvořte funkci updateSkill, která bere dva vstupy: textový řetězec
 představující id elementu a číslo mezi 0–100. Tato funkce při zavolání nastaví posuvník se zadaným id na správnou hodnotu. 
 Použijte tuto funkci ve vašem kódu, abyste nemuseli při nastavování posuvníků psát třikrát po sobě téměř stejný kód.
*/



const updateSkill = (id,number) => {

        const number1 = '"' + number + "%" + '"'
        const slider = document.querySelector('#'+id+' skill__bar skill__progress') //tohle je null at to ma uvozovky nebo ne
        console.log(number1) //print toho co to dela
        console.log(slider) //print toho co to dela
        slider.style.width = number1 //tohle je error at to ma uvozovky nebo ne
        
        const idConcat2 ="#" + id + " skill__value"
        const message = toString(number) + ' / 100'
        const sliderText = document.querySelector(idConcat2) //tohle je null at to ma uvozovky nebo ne 
        sliderText.innerHTML = message
        //document.querySelector("idConcat2").innerHTML = message 
        console.log(sliderText)
        return
    }  


let uHTML = undefined
let uCSS = undefined
let uJavaScript = undefined
do {
    uHTML = prompt("Zadej svou uroven dovednosti HTML cislem 1 - 100: ")
    }
    while ((uHTML > 100 || uHTML <0 )); 
 
do {
    uCSS = prompt("Zadej svou uroven dovednosti CSS cislem 1 - 100: ")
    }
    while ((uCSS > 100 || uCSS <0 ));  

do {
    uJavaScript = prompt("Zadej svou uroven dovednosti JavaScript cislem 1 - 100: ")
    }
    while ((uJavaScript > 100 || uJavaScript <0 )); 

updateSkill("skill1",uHTML) 
updateSkill("skill2",uCSS)
updateSkill("skill3",uJavaScript)




