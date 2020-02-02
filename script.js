let currentTime = new Date();
let currentHour = currentTime.getHours();
let currentDay = currentTime.getDay();

let daysName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
$("#currentDay").text(daysName[currentDay]);

 for (let i = 9; i < 18; i++) {
 $(".container").append(`<div class="input-group input-group-lg row">
 <p class="input-group-prepend">
   <span class="input-group-text hour">${i<12? `${i}:00AM`: i > 12 ? `${i-12}:00PM`: `12:00PM`}</span></p>
 <textarea type="text" id='hour${i}' class="form-control ${(i<currentHour)? 'past': (i===currentHour)? 'present': 'future'}" 
 aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg">${localStorage.getItem(`hour${i}`)||''}</textarea>
<button class='saveBtn'>save</button>
 </div>`)}

 $(".saveBtn").on("click", function(){
     let todo = $(this).siblings('textarea').val().trim()
     let hour = $(this).siblings("textarea").attr('id')
     localStorage.setItem(hour, todo)
 })