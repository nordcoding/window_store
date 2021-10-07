const tabs = (headerSelector, tabSelector, contentSelector, activeClass, display = 'block') => {
    const header = document.querySelector(headerSelector),
        tab = document.querySelectorAll(tabSelector),
        content = document.querySelectorAll(contentSelector); 


    /* SNACHALO SKRIVAEM VSE TABI, PISHEM FUNCTION */
    function hideTabContent (){
        content.forEach(item =>{
            item.style.display = 'none'; 
        }); 

        tab.forEach(item=>{
            item.classList.remove(activeClass); 
        }); 
    }

    /* ZATEM POKAZIVAEM TABI PO INDEXU, PISHEM FUNCTION  */
    function showTabContent(i = 0){ // ukazivaem index, ili mozhno ukazat srazu index po defaultu = 0, pervi tab // 
        content[i].style.display = display;
        tab[i].classList.add(activeClass);
    }

    hideTabContent(); // vnachale skrivaem vse tabi // 
    showTabContent(); // zatem pokazivaem tolko pervi tab, soglasno indexu, gde i=0 // 


    header.addEventListener('click', (e)=>{ // 1. veshaem obrabotchik sobitiya clika na obshuu oblast, v kotoroi nahodyatsya tabi // 
        const target = e.target; 

        if(target&& //2. proveryaem, esli est li target // 
            (target.classList.contains(tabSelector.replace(/\./, "")) // 2.1 proveryaem, deistvitelno li mi kliknuli v odin iz tabov //  pri pomoshi regulyarnogo virazheniya, mi prosto ubrali tochku : .class => class, t.k v classList mozhno pomestit tolko class, a ne selector // 
        || (target.parentNode.classList.contains(tabSelector.replace(/\./, ""))))){
            tab.forEach((item, i )=>{ //3. perebiraem vse tabi, i zapominaem nomer kazhdogo taba po poryadku, ukazivaya ego index //  
                if(target == item || target.parentNode == item){ // 4. kak tolko vipolnilos uslovie v perebore // 
                    hideTabContent(); // 5. vizivaem function skritiya vseh tabov // 
                    showTabContent(i); // 6. pokazivaem tab, soglasno ego nomeru indexa, index peredaem v vizov function // 
                }
            }); 
        } 

    }); 


    /* header.addEventListener('click', (e)=>{ // 1. veshaem obrabotchik sobitiya clika na obshuu oblast, v kotoroi nahodyatsya tabi // 
        const target = e.target; 

        if(target&& //2. proveryaem, esli est li target // 
            (target.classList.contains(tabSelector) // 2.1 proveryaem, deistvitelno li mi kliknuli v odin iz tabov //  pri pomoshi regulyarnogo virazheniya, mi prosto ubrali tochku : .class => class, t.k v classList mozhno pomestit tolko class, a ne selector // 
        || (target.parentNode.classList.contains(tabSelector)))){
            tab.forEach((item, i )=>{ //3. perebiraem vse tabi, i zapominaem nomer kazhdogo taba po poryadku, ukazivaya ego index //  
                if(target == item || target.parentNode == item){ // 4. kak tolko vipolnilos uslovie v perebore // 
                    hideTabContent(); // 5. vizivaem function skritiya vseh tabov // 
                    showTabContent(i); // 6. pokazivaem tab, soglasno ego nomeru indexa, index peredaem v vizov function // 
                }
            }); 
        } 
    }); */

}; 

export default tabs; 