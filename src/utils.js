

export function getDayNum() {
    const d = new Date()
    let dayNum = d.getDay()
    const hour = d.getHours()
  
    // if it's before 2am, show the day before because
    // people are still at bars
    if (hour < 2) {
      if (dayNum === 0) {
        dayNum = 6
      } else {
        dayNum = dayNum - 1
      }
    }

    return dayNum;
}


export function getCurrentDay() {
    const dayNum = getDayNum();
    
    let dayStr
    let dayLabel
    switch (dayNum) {
      case 0:
        dayStr = "Sun"
        dayLabel = "Sunday"
        break
      case 1:
        dayStr = "Mon"
        dayLabel = "Monday"
        break
      case 2:
        dayStr = "Tue"
        dayLabel = "Tuesday"
        break
      case 3:
        dayStr = "Wed"
        dayLabel = "Wednesday"
        break
      case 4:
        dayStr = "Thu"
        dayLabel = "Thursday"
        break
      case 5:
        dayStr = "Fri"
        dayLabel = "Friday"
        break
      case 6:
        dayStr = "Sat"
        dayLabel = "Saturday"
        break
      default:
        dayStr = "Mon"
        dayLabel = "Monday"
    }
    return { value: dayStr, label: dayLabel }
  }
