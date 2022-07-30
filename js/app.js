let box = document.getElementById(`box`);
let box_crypto = document.getElementById(`box_crypto`);
function success_get(response) {
    box[`innerHTML`] = `<div>
                                    Name: ${response[`data`][0][`name`]}<br>
                                    Sreet:${response[`data`][0][`street`]}<br>
                                    City: ${response[`data`][0][`city`]} (${response[`data`][0][`state`]})<br>
                                    Postal Code : ${response[`data`][0][`postal_code`]}<br>
                                    Country: ${response[`data`][0][`country`]}

                          </div>`;
}
function failure_get(error) {
    box[`innerHTML`] = `<h2>error!!</h2>`;
}
function get(details) {

    axios.request({
        url: `https://api.openbrewerydb.org/breweries/random`

    }).then(success_get).catch(failure_get);
}
let button = document.getElementById(`first_button`);
button.addEventListener(`click`, get);

function success_crypto(response){
for(let i = 0; i < response[`data`].length; i++){
    box_crypto[`innerHTML`] = `${response[`data`][i][`symbol`]}<br>${response[`data`][i][`lastPrice`]}`;
}
}
function failure_crypto(error){
box_crypto[`innerHTML`] = `<h2>Error getting crypto info</h2>`;
 }
function get_crypto(details){
    
    axios.request({
        url: `https://api2.binance.com/api/v3/ticker/24hr `
    }).then(success_crypto).catch(failure_crypto);
        
}
let button_crypto = document.getElementById(`second_button`);
button_crypto.addEventListener(`click`,get_crypto);