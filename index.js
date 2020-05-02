    // Changing showcase START 
    /* This code functions in isolation and is not integral to the website's other functions */
    const showcase_welcome = document.querySelector('#showcase_welcome')
    const showcase_research = document.querySelector('#showcase_research')
    const showcase_synthesis = document.querySelector('#showcase_synthesis')
    const showcase_answer = document.querySelector('#showcase_answer')
    const showcase_bibliography = document.querySelector('#showcase_bibliography')

    const change_pause = 7000

    showcase_research.style.display='none'
    showcase_synthesis.style.display='none'
    showcase_answer.style.display='none'
    showcase_bibliography.style.display='none'


    function bibliography_welcome(){
        setTimeout(function(){
            showcase_bibliography.style.display='none'
            showcase_welcome.style.display='flex'
            welcome_research()
        }, change_pause)
    }
    function answer_bibliography(){
        setTimeout(function(){
            showcase_answer.style.display='none'
            showcase_bibliography.style.display='flex'
            bibliography_welcome()
        }, change_pause)
    }
    function synthesis_answer(){
        setTimeout(function(){
            showcase_synthesis.style.display='none'
            showcase_answer.style.display='flex'
            answer_bibliography()
        }, change_pause)
    }
    function research_synthesis(){
        setTimeout(function(){
            showcase_research.style.display='none'
            showcase_synthesis.style.display='flex'
            synthesis_answer()
        }, change_pause)
    }
    function welcome_research(){
        setTimeout(function(){
            showcase_welcome.style.display='none'
            showcase_research.style.display='flex'
            research_synthesis()
        }, change_pause)
    }
    welcome_research()
    //Changing showcase END//

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

