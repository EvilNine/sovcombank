const mobileMenu = () => {
    const burger = document.getElementById('btnMenu');
    const body = document.body;
    const links = document.querySelectorAll('.navigation__item-sublink');
    const overlay = document.getElementById('backdrop')
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    const closeModal = () => {
        body.classList.remove('is-show');
    }
    
    overlay.addEventListener('click', closeModal);

    burger.addEventListener('click', () => {
        body.classList.toggle('is-show');    
    })

    links.forEach((btn) => {

        btn.addEventListener('click', function (e) {
            e.preventDefault();
            const container = btn.parentElement;
            container.classList.toggle('sub__open');
        });
        // btn.addEventListener('mouseenter', (e)=>{    
        //     e.target.parentElement.classList.add('_hover')
        // })

        // btn.addEventListener('mouseleave', (e)=>{
        //     e.target.parentElement.classList.remove('_hover')
        // })

    });



}

export default mobileMenu;