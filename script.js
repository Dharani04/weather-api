function loadDoc()
{
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function ()
    {
        if (xmlhttp.readyState == XMLHttpRequest.DONE)
        {
            if (xmlhttp.status == 200)
            {
                var data = JSON.parse(xmlhttp.responseText);
                var pic = document.getElementById("picture");
                if (pic)
                pic.parentNode.removeChild(pic);
                var image = new Image();
                var weather = data.weather[0].description;
                switch (weather)
                {
                    case "scattered clouds": image.src = "images/scatter.jpg"; break;
                    case "clear sky": image.src = "images/clear sky.jpg"; break;
                    case "haze": image.src = "images/haze.png"; break;
                    case "broken clouds": image.src = "images/broken.jpg"; break;
                    case "smoke": image.src = "images/smoke.jpg"; break;
                }
               
                img.appendChild(image);
                image.id = "picture";
                
                result.innerText = "Weather : " + data.weather[0].description;
                pressure.innerText = "Pressure : " + data.main.pressure;
                temp.innerText = "Temperatue : " + data.main.temp;           
            }
            else if (xmlhttp.status == 400)
            {
                alert('There was an error 400');
            }
            
        }
    }
};
    var x = document.getElementById("city").value;
    xmlhttp.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=" + x + "&APPID=f95bb1c4315440b1c7e1d2555fb82972", true);
    xmlhttp.send();
