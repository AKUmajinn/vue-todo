import Firebase from 'firebase'
const config = {
  apiKey: "AIzaSyDKcVwx2sswEWAgmhSgCIoIWb10iKU0Yjw",
  authDomain: "akuma-vue-todo.firebaseapp.com",
  databaseURL: "https://akuma-vue-todo.firebaseio.com",
  projectId: "akuma-vue-todo",
  storageBucket: "akuma-vue-todo.appspot.com",
  messagingSenderId: "941808023597"
};

export const firebaseApp = Firebase.initializeApp(config)
export const database = firebaseApp.database()
