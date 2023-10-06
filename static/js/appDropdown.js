let url = 'http://127.0.0.1:5000/nba'
var _data
d3.json(url).then((data) => {
    // console.log(data)
    _data=data
})


// function to populate the dropdown menu on the webpage using the names object from appDropdown.json
function dropdown_menu(names){

    d3.json(url).then((data) => {
        // console.log(data)
let Playername = data.map(x => x.Player);
        // console.log(names)
let dropdown_selector = d3.select("#selDataset")
Playername.forEach((names) => {
    dropdown_selector 
        .append("option")
        .text(names)
        .property("value", names);

        
 
    
})
player_table(names)  
})};
 
    
//     })


// }
// Calling this function to populate the dropdown menu
dropdown_menu()

//this function will get call whenever we choose a different value in the dropdown menu 
function optionChanged(names){
    player_table(names)   
}

function player_table(names){
    _data
    // let y = d3.json(url).then((data)) 

   let filterdata= _data.filter(_data => _data.Player == names)
console.log(filterdata)
let nba_dropdown = d3.select("#Player_Name")
nba_dropdown.html("")
Object.entries(filterdata).forEach(entry => {
    const [key, value] = entry;
    // console.log(key, value);
    nba_dropdown
    .append("h5")
    .text(`${key}: ${value}`)

});
}

// player_table()
