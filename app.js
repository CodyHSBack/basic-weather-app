window.addEventListener('load', ()=> {
    let long;
    let lat;

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;


            const proxy = 'https://cors-anywhere.herokuapp.com/';
            const api = `${proxy}https://api.darksky.net/forecast/8d2b3e95660b8797208f43a0348f8f50/${lat},${long}`;
            
            fetch(api)
            .then(response => {
                return response.json();
            })
            .then(data =>{
                console.log(data);
            })
        });
    }else{
        h1.textContent = "We are unable to determine your location."
    }
});