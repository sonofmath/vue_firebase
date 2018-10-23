# vue_firebase - Practice repository
### Built with Vue CLI 3 and Firebase/Firestore

## Steps
First
```
vue init webpack fire-app
cd fire-app
npm run dev

Check http://localhost:8080
```
```
Open free Firebase account and start a new project
Click "Add Firebase to your Web App"
Copy the 'databaseURL' and the 'projectId'
```
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
