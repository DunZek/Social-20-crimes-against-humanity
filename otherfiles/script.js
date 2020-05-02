// Hamburger button shenanigans START //
const header = document.querySelector('header')
const small_res = document.querySelector('#small_res')
const wrapper = document.querySelector('#wrapper')
const footer = document.querySelector('footer')

var isOpen=false
function toggleSidebar(){
    if(isOpen==true){
        document.querySelector('#hamburger_icon').classList.remove('hamburgerOpen')
        header.classList.remove('dark')
        small_res.style.display='none'
        header.style.height='80px'

        console.log('Closed the nav bar')
        return isOpen=false
    }else{
        document.querySelector('#hamburger_icon').classList.add('hamburgerOpen')
        header.classList.add('dark')
        header.style.height='100px'
        wrapper.style.top="-80px"
        small_res.style.display='block'

        console.log('Opened the nav bar')
        return isOpen=true
    }
}
// Hamburger button shenanigans END //

// Media //

const x = window.matchMedia('(min-width:690px')
function mediaQuery(x){
    if(x.matches){
        document.querySelector('#hamburger_icon').classList.remove('hamburgerOpen')
        header.classList.remove('dark')
        small_res.style.display='none'
        header.style.height='80px'

        console.log('Closed the nav bar')
        return isOpen=false
    }
}
x.addListener(mediaQuery)
// Media ENDS //

