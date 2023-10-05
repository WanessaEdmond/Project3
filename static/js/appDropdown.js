let url = 'http://127.0.0.1:5000/nba'
d3.json(url).then((data) => {
    console.log(data)
})


// // function to populate the dropdown menu on the webpage using the names object from samples.json
// function dropdown_menu(){

//     d3.json(url).then((data) => {
//         console.log(data)
// let names = data.Player[i].Player
// let dropdown_selector = d3.select("#selDataset")
// names.forEach((sample) => {
//     dropdown_selector 
//         .append("option")
//         .text(sample)
//         .property("value", sample);
// })})};
// demographic_table(names[0])


    
//     })


// }

