const btn = document.querySelector('.search-btn')
const btnIcon = document.querySelector('.fa-solid')

btn.addEventListener('keypress', (e) =>{
    if(e.which == 13){
        alert('teste')
    }
})



btnIcon.addEventListener('click', () =>{
    alert('teste')

})


/* VER A PASTA GERAR 
    CRIAR UM COMANDO QUE FILTRE O RESULTADO E VA PARA OUTRA PAGE
*/



function init(){
    btn
    btnIcon
}

init()

export default{
    init
}