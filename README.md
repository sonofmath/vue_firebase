# vue_firebase - Practice repository
### Built with Vue CLI 3 and Firebase/Firestore

## Steps
Vue First Steps
```
vue init webpack projectname
cd projectname
npm run dev

Check http://localhost:8080
```
### Firebase
Open free Firebase account and start a new project
Click "Add Firebase to your Web App"
Copy the 'databaseURL' and the 'projectId'

### Vue
Then run this inside your project
```
npm install vuefire@next firebase --save
```
Finally we initialize Firestore. Open main.js and add this code
```
import VueFire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'
Vue.use(VueFire)
firebase.initializeApp({
  projectId: 'YOUR_PROJECT_ID',
  databaseURL: 'YOUR_DB_URL'
})
export const db = firebase.firestore()
```
## Firebase
Then go into the Firebase console
Navigate to Database -> Cloud Firestore ->Try Firestore Beta
Select "test mode"
Create a new collection and add a few fields then save

## Vue
In directory src/components open HelloWorld.vue
Update the <script> tag with this code
```
import { db } from '../main'
export default {
  name: 'HelloWorld',
  data () {
    return {
      <collection name>: []
    }
  },
  firestore () {
    return {
      locations: db.collection('<field from collection').orderBy('<field 
from collection>')
    }
  }
}
```
