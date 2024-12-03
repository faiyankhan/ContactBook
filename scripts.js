const contacts = {
    faiyankhan: "9763838554",
    junedansari: "9764153858",
    neelshrivastav: "7888178845",
    harshtotawar: "8788143040",
    pranaypawar: "8999106707",
    vedantideharkar: "9356617272",
    adarshjoshi: "9625364676",
    priyashrivastav: "9960953995",
}

function search() {
    const searchInput = document.getElementById("search");
    const query = searchInput.value.toLowerCase();

    const mobile = contacts[query]

    const result = document.getElementById("result");

    if (mobile) {
        result.innerText = `Contact Number of ${query} is ${mobile}🎉.`;
    }else{
        result.innerText = `Contact Number Not Found 🙏.`
    }
}

function  showCurrentTime(){
    const timeElement = document.getElementById('time');
    const currentTime = new Date();

    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    timeElement.innerHTML = `${hours}:${minutes}:${seconds}`;
}

setInterval(showCurrentTime, 1000);

function notify(){
    alert("Always Enter Name in lowerCase to get Appropriate Output");
}

setTimeout(notify, 1000);