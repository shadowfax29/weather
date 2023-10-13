 const api="643c698791b150032ea1824a3ba555c5"
 const url="https://api.openweathermap.org/data/2.5/weather?units=metric&q="
 const search=document.querySelector("#srctext")
 const btn=document.querySelector('.btn')
 const pic=document.querySelector(".emoji img")
async function weather(city){
    const res=await fetch(url+city+`&appid=${api}`)
    var data=await res.json()
    document.querySelector('.city').textContent=data.name
    document.querySelector('.temp').textContent=data.main.temp + '°C'
    document.querySelector('.humidity').textContent=data.main.humidity
    document.querySelector('.wind').textContent=data.wind.speed + " km/h"
    console.log(data)
    console.log(data.weather[0].main)
    let con=data.weather[0].main;
    if(con=="Clouds"){
        pic.src="cloudy.png"
       
    }
    else if(con=="Clear"){
        pic.src="sun.png"
    }
    else if(con=="Rain"){
        pic.src="cloudy (1).png"
    }
    else if(con=="Drizzle"){
        pic.src="drizzle.png"
    }
    else if(con=="Mist"){
        pic.src="mist.png"
    }
}
btn.addEventListener('click',()=>{

    weather(search.value)
})

