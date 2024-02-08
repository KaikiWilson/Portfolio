const explorer = () => {
    const box_h1_princ = window.document.getElementById("box-h1-princ-id");
    const box_first_h1 = window.document.getElementById("box-first-h1-id");
    const box_who_i_am = window.document.getElementById("box-who-i-am-id");
    const box_bottom_content = window.document.getElementById("box-bottom-content-id");
    const btn = window.document.getElementById("btn-explorer");
    const title_cards = window.document.getElementById("title-cards-id");

    const title = window.document.getElementById("about-me-title-id");
    const subtitle = window.document.getElementById("about-me-subtitle-id");
    const box_about_me_content = window.document.getElementById("box-about-me-content-id");
    const container = window.document.getElementById("container-id");

    const container2 = window.document.getElementById("container-2-id");

    const show_content = () => {
        if (btn.style.display === "none") {
            title.style.display = 'block'
            subtitle.style.display = 'block'
            box_about_me_content.style.display = 'flex'
            container.style.display = 'flex'
            container2.style.display = 'flex'
            title_cards.style.display = 'flex'

            title.style.animation = '1.25s top-slide-in'
            subtitle.style.animation = '1.25s fade-in'
            box_about_me_content.style.animation = '1.25s bottom-slide-in'
            container.style.animation = '2.25s bottom-slide-in'
            container2.style.animation = '6s bottom-slide-in'
            title_cards.style.animation = '2s bottom-slide-in'
        }

    }

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

        setTimeout(set_display, 1740)
    }

    animations();

    setTimeout(show_content, 1750)
};