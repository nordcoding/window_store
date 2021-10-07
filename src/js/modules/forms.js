import checkNumInputs from "./checkNumInputs";


const forms = ()=>{

    // 1. vibiraem elementi, kotorie nam ponadobyatsya // 
    const form = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input');

    // proveryyaem phone inputi na chisla, vse chto ne chisla, validaciyu ne prohodit // 
    
    checkNumInputs('input[name="user_phone"]'); 
    
    // 2. zadaem v object soobsheniya, kotorie mi budem ispolzovat // 
    const message = {
        loading: 'loading',
        success: 'thank you',
        failure: 'smth went wrong'
    }; 

    // 3. pishem function, kotoraya budet otvechat za otpravku, zaprosa // 
    const postData = async (url, data)=>{ // ukazivaem, chto funkciya asinhronnaya // 
        document.querySelector('.status').textContent = message.loading; 

        let res = await fetch(url, { // s pomoshiyu wait, govorim, chtobi js dozhdalsya vipolneniya fetch // 
            method: "POST",
            body: data
        }); 

        return await res.text(); // takzhe, ukazivaem chtobi return dozhdalsya // oborachivaem res v text // 
    };

    // function po ochisheniyu inputov, posle otpravki zaprosa // 
    const clearInputs = ()=>{
        inputs.forEach(item=>{
            item.value = ''; 
        });
    };
    // 4. Perebiraem vse formi i naveshivaem na nih obrabotchik sobiti // 
    form.forEach(item=>{
        item.addEventListener('submit', (e)=>{
            e.preventDefault(); // ne daem perezagruzhatsya stranice // 

            //sozdaem block, gde pokazivaem polzovatelu, status zaprosa // 
            let statusMessage = document.createElement('div'); 
            statusMessage.classList.add('status'); 
            item.appendChild(statusMessage); 

            //sobiraem vse dannie vvedennie v formu  s pomoshiu FormData// 
            const formData = new FormData(item);
            
            // 5. Otpravlyaem dannie na server po addresu 'assets/server.php' ,s dannimi, kotorie poluchil FormData// 
            postData('assets/server.php', formData)
                .then(res=>{
                    console.log(res); 
                    statusMessage.textContent = message.success; 
                })
                .catch(()=> statusMessage.textContent = message.failure)  
                .finally(()=>{
                    clearInputs(); 
                    setTimeout(()=>{
                        statusMessage.remove(); 
                    }, 5000); 
                }); 
        });
    });
}; 

export default forms; 