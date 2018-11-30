import {db} from './config/db'

class Result {
    constructor(dismissed, t) {
        this.dismissed = dismissed
        this.time = t
    }
}

function refresh(Result) {
    let sensor = db.ref().child('wateralerts')
    sensor.orderByChild('dismissed').equalTo(0).on('child_added', function (snapshot) {
        Result.dismissed = snapshot.child('dismissed').val()
        Result.time = snapshot.child('timestamp').val()
    })
    return Result
}


export default refresh(Result)