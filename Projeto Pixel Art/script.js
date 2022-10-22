const tabela = document.createElement('div');
tabela.id = 'pixel-board'
const body = document.querySelector('body');

function quadroPixel(){
    body.appendChild(tabela)

    for(let i = 1; i <= 5; i += 1){
        const linha = document.createElement('tr')
        for(let i2 = 1; i2 <=5; i2 += 1){
            const coluna = document.createElement('td')
            coluna.classList = 'pixel'
            coluna.addEventListener('click', color);
            linha.appendChild(coluna)
        }
        tabela.appendChild(linha)
    }
}
quadroPixel();


function trocaClasse(){
    const selecao = document.querySelectorAll('.color')
   
    for(let i = 0; i < selecao.length; i += 1){
       selecao[i].addEventListener('click', (event) =>{
           
           const classe = document.querySelector('.selected');
            classe.classList.remove('selected');
            event.target.classList.add('selected');
       })
       
    }
    }
   
    trocaClasse();

function color(event){
    let pixel = document.querySelector('#pixel-board');
    pixel.addEventListener('click', function (event) {

        let alteraCor = document.querySelector('.selected').style.backgroundColor;
        event.target.style.backgroundColor = alteraCor;
})
}

color();

function botaoLimpar() {
    const pixel = document.querySelectorAll('.pixel')
    for(let i = 0 ; i < pixel.length; i += 1){

        pixel[i].style.backgroundColor = 'white';
    }
}
const buttonLimpar = document.querySelector('#clear-board');
buttonLimpar.addEventListener('click', botaoLimpar);