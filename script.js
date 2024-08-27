
        const apiKey;
        const apiurl;
        const searchBox=document.querySelector(".search input");
        const searchBtn=document.querySelector(".search button");
        const weatherIcon=document.querySelector(".Weather-icon");

        async function checkweather(city){
            const response=await fetch(apiUrl + city + `&appid=${apikey}`);
            if(response.status==404){
                document.querySelector(".error").style.display="block";
                document.querySelector(".Weathor").style.display="none";
            }
            else{


        var data=await response.json(); 
        console.log(data)

            document.querySelector(".city").innerHTML=data.name;
            document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°c";
            document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
            document.querySelector(".Wind").innerHTML=data.wind.speed + "km/h";
            
            if(data.weather[0].main== "Clouds"){
                weatherIcon.src="images/th (1).jpeg";
            }
            else if(data.weather[0].main== "Clear"){
                weatherIcon.src="images/th2.jpeg";
            }
           else if(data.weather[0].main== "Rain"){
               weatherIcon.src="images/th.jpeg";
            }
           document.querySelector(".weather").style.display="block";
           document.querySelector(".error").style.display="none";

           }
        }


           searchBtn.addEventListener("click", ()=>{
        checkweather(searchBox.value);
           })
