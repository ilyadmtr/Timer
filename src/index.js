import css from "./css/style.css";
import timerRefs from './refs/timerRefs.js'

let myDate = "Jan 1 2021";

function getTimeBetween(date){
  let newYearTime = new Date(date)
  let timeBetween = +newYearTime - Date.now()
  //       ms = ms          /  s    / min / hours /
  let daysBefore = Math.floor(timeBetween / 1000 / 60 / 60 / 24)
  let hoursBefore = Math.floor(timeBetween % (1000 * 60 * 60 * 24) / (1000 * 60 * 60 ))
  let minutesBefore = Math.floor(timeBetween % (1000 * 60 * 60) / (1000 * 60  ))
  let secondsBefore = Math.floor(timeBetween % (1000 * 60) / 1000  )

  timerRefs.daysContent.textContent = daysBefore
  timerRefs.hoursContent.textContent = hoursBefore
  timerRefs.minutesContent.textContent = minutesBefore
  timerRefs.secondsContent.textContent = secondsBefore
}

let interval = setInterval(()=>{
  getTimeBetween(myDate)
}, 1000)