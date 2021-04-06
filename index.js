/* Your Code Here */
const createEmployeeRecord = (arr) => {
    return {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: []
    }
} 

const createEmployeeRecords = (array) => {
   // console.log(array)
   return array.map(ele => createEmployeeRecord(ele) )
}

function createTimeInEvent(time) {
  //  console.log(time)
   // console.log(this.timeInEvents)
    let hour = parseInt(time.split(' ')[1])
    let date = time.split(' ')[0]
    let timeIn = {
        type: "TimeIn",
        hour: hour,
        date: date
    }
    
    this.timeInEvents.push(timeIn)//pushing obj into the arr
   // console.log(this.timeInEvents[0].hour)//looking at data
    return this
} 

function createTimeOutEvent(time) {
  //  console.log(time)
   // console.log(this.timeInEvents)
    let hour = parseInt(time.split(' ')[1])
    let date = time.split(' ')[0]
    let timeOut = {
        type: "TimeOut",
        hour: hour,
        date: date
    }
    
    this.timeOutEvents.push(timeOut)//push obj into the arr
    return this
} 

function hoursWorkedOnDate(date){
  //  console.log(date)
  //  console.log(this)

    let timeIn = this.timeInEvents.find(ele => ele.date === date)
    let timeOut = this.timeOutEvents.find(ele => ele.date === date)

    let numHours = (timeOut.hour - timeIn.hour ) / 100
  //  console.log( timeOut.hour, timeIn.hour, numHours)

    return numHours
}

function wagesEarnedOnDate(date){
    console.log(date, this, this.timeInEvents[0]['hour'])
    console.log(this.payPerHour)
    console.log(hoursWorkedOnDate.call(this, date) * this.payPerHour)

    // let timeIn = this.timeInEvents[0]['hour']
    // let timeOut = this.timeOutEvents[0]['hour']
    // let check = (timeOut- timeIn) / 100 * this.payPerHour
    // return check
    return hoursWorkedOnDate.call(this, date) * this.payPerHour
   
}

function findEmployeeByFirstName (array , string) {
    console.log(array, string)

    let name = array.find(ele => ele.firstName)

    return name

}


function calculatePayroll (array){
    console.log(array)
    console.log(array[0][0])

    let payable = array.reduce(function (accumulator, day) {
        return allWagesFor.call(day) + accumulator
    }.bind(this), 0)
    return payable
}


/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */



let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
        
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

