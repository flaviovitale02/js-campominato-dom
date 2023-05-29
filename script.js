const gridContainer = document.querySelector('div.grid-container');
const button = document.querySelector('button')
const scoreOutput = document.getElementById('score')

button.addEventListener('click', function(){
    newGame()
})

function newGame(){
    gridContainer.innerHTML = ``;
    scoreOutput.innerHTML = ``

    
    const level = parseInt(document.getElementById('select-level').value) 
    let gridElementNumber = 0
    if(level === 0){
        gridElementNumber = 100
    }else if(level === 1){
        gridElementNumber = 81
    }else{
        gridElementNumber = 49
    }

    let isGameOver = false
    let gridElementPerRow = Math.sqrt(gridElementNumber)
    let userScore = 0
    const bombs = randomNumber(1, gridElementNumber, 16)
    console.log(bombs)

    for(let i = 0; i < gridElementNumber; i++){
        
        const newGridElement = createGridElement('div', 'grid-element', `<h2 class="fs-5">${i + 1}</h2>`)

        let gridElementSize = 'calc(100% / ' + gridElementPerRow + ')'
        newGridElement.style.width = gridElementSize
        newGridElement.style.height = gridElementSize
        gridContainer.appendChild(newGridElement)

        
        newGridElement.addEventListener('click', function(){
            if(! isGameOver){
                if(bombs.includes(i + 1)){
                    alert('Boooooooomba! ! ! Your score is : ' + userScore)
                    this.classList.add('bomb')
                    isGameOver = true
                }else{
                    if(this.classList.contains('selected')){
                        console.log(i + 1, userScore, "l'utente ha già cliccato su questa casella")
                    }else{
                        userScore ++
                        this.classList.add('selected')
                        console.log('Hai cliccato sulla casella numero: ',i + 1, ".Il tuo punteggio è: " ,userScore, )
                        scoreOutput.innerHTML = userScore
                    }
                }
            }else{
                alert('abbuscaisti')
            }
            
            
        })
    
    }
}



function createGridElement (tag , className, h2Element){
    const gridElement = document.createElement(tag)
    gridElement.className = className
    gridElement.innerHTML = h2Element
    return gridElement
}

function randomNumber (minNumber , maxNumber, numElements){
    const generatedNUmbers = []
    if((maxNumber - minNumber) < numElements){
        return false
    }
    while (generatedNUmbers.length < numElements){
        const randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber)
        if(!generatedNUmbers.includes(randomNumber)){
            generatedNUmbers.push(randomNumber)
        }
    }
    return generatedNUmbers
}