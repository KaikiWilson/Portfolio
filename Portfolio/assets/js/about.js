const btn = window.document.getElementById("btn-explorer");
const container = window.document.getElementById("container-id");
const hard_skills_text = window.document.getElementById("hard-skills");

const box_h1_princ = window.document.getElementById("box-h1-princ-id");
const box_first_h1 = window.document.getElementById("box-first-h1-id");
const box_who_i_am = window.document.getElementById("box-who-i-am-id");
const box_bottom_content = window.document.getElementById("box-bottom-content-id");


const explorer = () => {
    
    const animations = () => {
        box_h1_princ.style.animation = ' 3s top-slide-out'
        box_first_h1.style.animation = '3s left-slide-out'
        box_who_i_am.style.animation = '3s right-slide-out'
        box_bottom_content.style.animation = '3s top-slide-out'
        btn.style.animation = '3s fade-out'
    }

    const set_display_none = () => {
        hard_skills_text.style.display = 'block'
        container.style.display = 'grid'
       
        box_h1_princ.style.display = 'none'
        box_first_h1.style.display = 'none'
        box_who_i_am.style.display = 'none'
        box_bottom_content.style.display = 'none'
        btn.style.display = '3s fade-out'
    }

    animations();




}