const submitbtn = document.getElementById('submitbtn');
const cityname = document.getElementById('cityname')
const city_name = document.getElementById('city_name')
const temp = document.getElementById('temp');
const searchcity = document.getElementById('searchcity');

const getinfo = async (event) => {
    event.preventDefault();
    let cityvalue = cityname.value;
    if (cityvalue === "") {
        city_name.innerHTML = `<p style="color:red;">Please Enter City</p>`;
    } else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityvalue}&units=metric&appid=7549360e829744e22a7cf643f252c542`;
            const response = await fetch(url)
            const data = await response.json();
            const arraydata = [data]
            console.log(arraydata)
            temp.innerHTML = arraydata[0].main.temp;
            city_name.innerHTML = arraydata[0].weather[0].main;
            searchcity.innerHTML = arraydata[0].name;
        }
        catch {
            city_name.innerHTML = `<p style="color:red;">Please Enter Valid City</p>`;
            // temp.innerHTML = arraydata[0].main.temp;
        }

    }
}

submitbtn.addEventListener('click', getinfo);