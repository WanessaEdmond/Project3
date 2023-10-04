// d3.json('http://127.0.0.1:5000').then(function(jsonData)) {
   console.log("Showing data");
//     data = jsonData;
//     console.log("Keys: + " Object.keys(data));
//     players = data.Player;
//     Player.forEach(element => { inputSelector.append("option").text(element).property("value", element); });

// }
let url = " http://127.0.0.1:5000"

// function to populate the dropdown menu on the webpage using the names object from samples.json
function dropdown_menu(){

    d3.json(url).then((data) => {
        console.log(data)
let names = data.Player
let dropdown_selector = d3.select("#selDataset")
names.forEach((sample) => {
    dropdown_selector 
        .append("option")
        .text(sample)
        .property("value", sample);
});
demographic_table(names[0])


    
    })


}

