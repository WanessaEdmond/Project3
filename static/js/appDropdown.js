let url = 'http://127.0.0.1:5000/nba'
let regions_url ='http://127.0.0.1:5000/regions'
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
player_table(Playername[0])  
})
};
 
    
// Calling this function to populate the dropdown menu
dropdown_menu()


//this function will get call whenever we choose a different value in the dropdown menu 
function optionChanged(names){
    player_table(names)   
}

function player_table(names){

    d3.json(url).then((data) => {
       console.log(data)

let filterdata= data.filter(_data => _data.Player == names)[0]
console.log(filterdata)
let nba_dropdown = d3.select("#Player_Name")
nba_dropdown.html("")
Object.entries(filterdata).forEach(entry => {
    const [key, value] = entry;
    nba_dropdown
    .append("h5")
    .text(`${key}: ${value}`)

});
})

 
}

//Region  dropdown 
// function to populate the dropdown menu on the webpage using the names object from appDropdown.json
var _data2
d3.json(regions_url).then((data2) => {
    // console.log(data2)
    _data2=data2
})
function dropdown_menu2(region_name){

    d3.json(regions_url).then((data2) => {
        // console.log(data)
let regionname=[...new Set(data2.map(obj=>obj.Region))];
// let regionname = data2.map(x => x.Region);
        // console.log(names)
let dropdown_selector2 = d3.select("#selDataset2")
regionname.forEach((names) => {
    dropdown_selector2 
        .append("option")
        .text(names)
        .property("value", names);

        
 
    
})
region_table(regionname[0])  
})
};
// Calling this function to populate the dropdown menu
dropdown_menu2()


//this function will get call whenever we choose a different value in the dropdown menu 
function optionChanged2(names){
    region_table(names)   
}

function region_table(names){

    d3.json(regions_url).then((data2) => {
       console.log(data2)

let filterdata2= data2.filter(_data2 => _data2.Region == names)
console.log(filterdata2)

let region_dropdown = d3.select("#Region_Name")
region_dropdown.html("")
Object.entries(filterdata2).forEach(entry => {
    const [key, value] = entry;
    region_dropdown
    .append("h5")
    .text(`${key}: ${value}`)

});
let City2 = []
let Avg_Points2 = []
filterdata2.forEach((names) => {
    City2.push(names.City)
    Avg_Points2.push(names.Avg_Points)
        
 
    
})





var bardata = [{
    x: City2,
    y: Avg_Points2,
    text:City2,
    marker: {
      colorscale: 'Earth',
    },
    type: 'bar'
  }];
  
  


  var barlayout = {
    title: 'Average points per City',

  };
  
  Plotly.newPlot('bar', bardata, barlayout);
  
  
    
});

}
function bubblemap(){




    
}
 


// //bar chart
// d3.json(regions_url).then((data2) => {

// let City2 = data2.City
// let Avg_Points2 =data2.Avg_Points

// var bardata = [{
//     x: City2,
//     y: Avg_Points2,
//     text:City2,
//     orientation: 'h',
//     marker: {
//       colorscale: 'Earth',
//     },
//     type: 'bar'
//   }];
  
  


//   var barlayout = {
//     title: 'Bar Chart',

//   };
  
//   Plotly.newPlot('bar', bardata, barlayout);
  
  
    
// });