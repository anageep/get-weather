
let tempBox = document.getElementById('tempBox');
let whatherBtn = document.getElementById('whatherBtn');
let cityInput = document.getElementById('cityInput');
let countryInput = document.getElementById('countryInput');


async function getWeather(city , country){

    let httpReq = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=e36ed364400282e43250b6c4c0274d44`);

    let httpReqBody = await httpReq.json();

    let weatherTemp = httpReqBody;
    displayWeather(weatherTemp)
    cleareInput()

}




function displayWeather(weatherTemp){
  
 
  let  box=`  <div class="container p-3 text-white  font-italic border rounded">
    <p>city :  ${cityInput.value} </p>
    <p>country : ${countryInput.value}</p>
    <p>temperature : ${weatherTemp.main.humidity}   </p>
    <p>humidity : ${weatherTemp.main.temp}   </p>
    <p>description : ${weatherTemp.weather[0].description}   </p>
   </div>`
  

 tempBox.innerHTML= box
}

whatherBtn.addEventListener('click',function(){
    getWeather(`${cityInput.value}` ,`${countryInput.value}`)
})

function cleareInput(){
    cityInput.value ='';
    countryInput.value=''
}





