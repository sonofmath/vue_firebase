# vue_firebase - Practice repository
### Built with Vue CLI 3 and Firebase/Firestore

## Steps
Install Vue
```
npm install -g @vue/cli
```
Vue First Steps
```
vue init webpack projectname
cd projectname
npm run dev
```
Check http://localhost:8080

#### Firebase
```
Open free Firebase account and start a new project  
Click "Add Firebase to your Web App"  
Copy the 'databaseURL' and the 'projectId'  
```
Run this inside your project
```
npm install vuefire@next firebase --save
```
Open main.js and add this code to initialize Firebase  
In here you will need that 'projectId' and 'databaseURL'
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
Now open up the Firebase console  
Navigate to Database -> Cloud Firestore ->Try Firestore Beta  
Select "test mode"  
Create a new collection and add a few fields of your choosing, then save  
I will reference these as <collection name> and <field>

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
      locations: db.collection('<collection name>').orderBy('<field>')
    }
  }
}
```
Next jump up to the <template> tag and add
```
<div>
  <article v-for="(location, idx) in <collection name>" :key="idx">
    <img :src="location.<field>">
    <h1>{{ location.<field> }}</h1>
  </article>
</div>
```
It should now display whatever you put in your database  
Try adding something to the database and watch it render automatically - pretty cool
  
##### - Create and Delete steps coming soon -
######  - fyi - they already exist in this repo if you are feeling motivated - in HelloWorld.vue -
