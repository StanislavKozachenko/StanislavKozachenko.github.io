function ready() {
    function preloader(){
        setTimeout(() => {
            const p = document.querySelector('.preloader');
            p.style.opacity = '0';
            setInterval(
                () => p.remove(),
                p.style.animationDuration * 1,
            );
        }, 1);
        setTimeout(() => {
            document.querySelector('.spinnerWrapper').style.display = "none";
            document.querySelector('.loader').style.display = "none";
        }, 1);
    }
    preloader();
    function checkClass(element, className){
        if(element.classList.contains(className))
            element.classList.remove(className)
        else
            element.classList.add(className)
    }
    const contactButton = document.querySelector('.contactButton')
    const contactsList = document.querySelector('.contactsList')
    contactButton.addEventListener('click', ()=>checkClass(contactsList, "contactsList-active"))

    const clientWidth = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth
    console.log(clientWidth)
    if(clientWidth <= 767){
        document.querySelector('.desktopHeader').style.display = "none";
        document.querySelector('.mobileHeader').style.display = "flex";
        const contactButtonMobile = document.querySelector('.contactButtonMobile')
        const contactsListMobile = document.querySelector('.contactsListMobile')
        contactButtonMobile.addEventListener('click', ()=>{checkClass(contactsListMobile, "contactsList-active"); checkClass(contactsListMobile, "contactsList-active-mobile")})
    }
    else {
        document.querySelector('.desktopHeader').style.display = "flex";
        document.querySelector('.mobileHeader').style.display = "none";
    }
}
document.addEventListener("DOMContentLoaded", ready);

