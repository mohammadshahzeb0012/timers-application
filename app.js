const form = document.getElementById("form");
const timersList = document.getElementById("current-timers-list");

let uniqueId = 0;

function updateTime(hh, mm, ss) {
    let totalTime = hh * 3600 + mm * 60 + ss;
    if (totalTime > 0) {
        create_element(hh, mm, ss,totalTime);
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    uniqueId++;
    let hh = parseInt(document.getElementById("hour").value);
    let mm = parseInt(document.getElementById("minute").value);
    let ss = parseInt(document.getElementById("second").value);
    form.reset()
    updateTime(hh, mm, ss);
});

function create_element(hh, mm, ss , totalTime) {
    const timersItem = document.createElement("div");
    timersItem.id = `timers-item-${uniqueId}`;
    timersItem.innerHTML = `
        <div class="running-timer">
            <p>Time Left:</p>
            <div class="input-Wrraper">
                <input type="number" id="h" min="0" max="23" placeholder="hh" value="${hh}" readonly>
                <p>:</p>
                <input type="number" id="m" min="0" max="59" placeholder="mm" value="${mm}" readonly>
                <p>:</p>
                <input type="number" id="s" min="0" max="59" placeholder="ss" value="${ss}" readonly>
            </div>
            <button class="Delete">Delete</button>
        </div>
    `;
    timersList.appendChild(timersItem);

//    console.log(h.parentNode.parentNode)

    const deleteButton = timersItem.querySelector(".Delete");
    deleteButton.addEventListener("click", (e) => {
        e.target.closest(".running-timer").remove();
    });

    


   function  runTimer(totalTime){
    let hours = document.querySelector("#h");
    let minutes = document.querySelector("#m")
    let seconds = document.querySelector("#s");

     let intervel = setInterval(()=>{
        if(totalTime >0){
         --totalTime;

         hours.value = Math.floor(totalTime/3600)
         minutes.value = Math.floor(totalTime%3600)/60
         seconds.value = Math.floor(totalTime%66)
        }
        else{
            timersItem.id= "completed-timer"
            timersItem.innerHTML = `
         
            <p>Timer Is Up !</p>
            <button class="Delete stop">Stop</button>
    
            `
        }
     },1000)
   }
   runTimer(totalTime)

}
