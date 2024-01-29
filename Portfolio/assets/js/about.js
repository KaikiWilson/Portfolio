const btn = window.document.getElementById("btn-explorer");

const box_h1_princ = window.document.getElementById("box-h1-princ-id");
const box_first_h1 = window.document.getElementById("box-first-h1-id");
const box_who_i_am = window.document.getElementById("box-who-i-am-id");
const box_bottom_content = window.document.getElementById("box-bottom-content-id");


const explorer = () => {

    const set_display = () => {
        box_h1_princ.style.display = 'none'
        box_first_h1.style.display = 'none'
        box_who_i_am.style.display = 'none'
        box_bottom_content.style.display = 'none'
        btn.style.display = 'none'
    }
    
    const animations = () => {
        box_h1_princ.style.animation = '1.75s top-slide-out'
        box_first_h1.style.animation = '1.5s left-slide-out'
        box_who_i_am.style.animation = '1.5s right-slide-out'
        box_bottom_content.style.animation = '1.75s top-slide-out'
        btn.style.animation = '1.25s fade-out'

        setTimeout(set_display, 1750)
    }

    animations();



}