//Create the players data
const players = [{
    name:'Katarina',
    role:'Assassin'
    
},{
    name:'Fiddlesticks',
    role:'Support'
},{
    name:'Zelain',
    role:'Mid'
},{
    name:'Zyra',
    role:'Sp'
}]

players.forEach(function(player){
    const id = uuidv4()
    player.id = id
})
console.log(players)

//Create an Filter Object
const filters = {
    searchText : ''
}

//UI variable
  const holder = document.querySelector('.container-holder')
  
// store players data in to the storage data 
 const saveDataToLS = saveDataLS();

//get the players from the storage
const data = getDataFromLS()


// Event handler for input 
const searchField = document.querySelector('#search-text')
searchField.addEventListener('input', (e)=>{ 
    settingTheFilter(e); //SETTING THE USER INPUT TO FILTER VALUE FOR THE SEARCH
    clearTheContainer(); //CLEAR THE DIV(CONTAINER) TO AVOID DUPLICATE RESULT PRINTING
    renderData(data, filters)
})








