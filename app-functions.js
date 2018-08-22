
//SAVE THE PLAYERS DATA IN THE LOCAL STORAGE
const saveDataLS =() => {
    localStorage.setItem('players', JSON.stringify(players));
} 

//GET THE PLAYERS DATA FROM THE LOCAL STORAGE
const getDataFromLS =() =>{
    return JSON.parse(localStorage.getItem('players'));
}

//SETTING THE USER INPUT TO FILTER VALUE FOR THE SEARCH
const settingTheFilter =(e) =>{
    filters.searchText = e.target.value;
}

//CLEAR THE DIV(CONTAINER) TO AVOID DUPLICATE RESULT PRINTING
const clearTheContainer =() =>{
    holder.innerHTML = '';
}


//RENDER THE DATA ACCORDING THE NEEDS
const renderData = (data, filter) =>{
    const filteredData = filterData(data, filter)
    generateDomSummary(filteredData)
   
}

//FILTER THE DATA ACCORDING TO THE FILTER
const filterData = (data, filter) =>{
    return data.filter(function (player) {
        return searchValue = player.name.toLowerCase().includes(filter.searchText.toLowerCase());
    });
}


//GENERATE THE DOM SUMMARY (MEANS THE ELEMENTS SHOWING IN DOM)
const generateDomSummary = (filteredData) =>{
    return filteredData.forEach(function (player) {
        generateDOMElements(player); 
    });
}

//GENERATE THE DOM ELEMENTS 
const generateDOMElements = (player) =>{
    const holderItems = document.createElement('div'), button = document.createElement('button');
    button.textContent = 'Details';
    button.addEventListener('click', () =>{
        //ADD THE BUTTON FUNCTIONALITY
    });
    //THE HTML STRUCTURE
    holderItems.innerHTML =
        `
   <div> ${player.name}</div>
    ${player.role}
  
    <hr>
    `;
    holder.appendChild(button);
    holder.appendChild(holderItems);
}

