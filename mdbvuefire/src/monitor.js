import {db} from './config/db'

class Info {
    constructor(temp, humid, t) {
        this.temperature = temp
        this.humidity = humid
        this.time = t
    }
}

var ref = db.ref().child('currenttemp')
ref.on('value', function(snap) {
    Info.temperature = snap.child('temp').val()
    Info.humidity = snap.child('humid').val()
    Info.time = snap.child('timestamp').val()
})

export default Info