import "./slider";
import modals from './modules/modals';
import tabs from './modules/tabs'; 
import forms from './modules/forms'; 
import changeModalState from './modules/changeModalState'; 

window.addEventListener('DOMContentLoaded', () => {

    "use strict"; 

    let modalState = {};
    
    changeModalState(modalState); 

    modals(); // zdes mi peredali vse classi selectorov v samom faile modals.js // 
    tabs( '.glazing_slider', '.glazing_block', '.glazing_content', 'active'); // peredaem classi, soglasno selectoram v tabs.js // 
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div','after_click'); // inicializiruem ostalnie tabi, chto nizhe na stranice // 
    tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block');
    forms(); 


});