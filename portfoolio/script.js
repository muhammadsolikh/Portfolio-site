window.addEventListener('DOMContentLoaded', function(){
    window.addEventListener('scroll',function(){
        const header = this.document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY>0)
    })

    const menuBtn = document.querySelector('menu-btn')
    const navigation = document.querySelector('.navigation')
    menuBtn.addEventListener('click', () =>{
        navigation.classList.toggle('active')
    })
})