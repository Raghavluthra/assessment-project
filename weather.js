function weather(){
    console.log("Hello");
    var city = document.getElementById("value").value;
    //var city = $("#value").val();
    console.log(city);
    var xmlhttp= new XMLHttpRequest();
 
    var url="http://api.openweathermap.org/data/2.5/weather?q="+city + "&APPID=9545df317eb0bd1d46f8cac3a9c8a368";
    xmlhttp.open("GET", url, true);

    xmlhttp.send();
    xmlhttp.onreadystatechange=function()
    {
        if(this.readyState === 4 && this.status === 200)
        {
            var result=this.responseText;
            console.log(result);

          var x = JSON.parse(result);
         console.log(x.main.temp);
          document.getElementById("xyz").innerHTML = "<h3><u>Temperature:</u><h3> " + x.main.temp +" F";
          console.log(x.weather.description);
          document.getElementById("abc").innerHTML = "<h3><u>Wind Speed: </u><h3>" + x.wind.speed+" m/s";
          console.log(x.main.humidity);
          document.getElementById("def").innerHTML = "<h3><u>Humidity:</u><h3> " + x.main.humidity;
        }
    };


}

