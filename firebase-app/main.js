// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js'
import {
  getFirestore,
  collection,
  getDocs
} from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js'

const firebaseConfig = {
  apiKey: 'AIzaSyDrN6FYbUOfTFfljfte64k2VWJTo_UxzHo',
  authDomain: 'testing-firebase-39d56.firebaseapp.com',
  projectId: 'testing-firebase-39d56',
  storageBucket: 'testing-firebase-39d56.appspot.com',
  messagingSenderId: '697067493516',
  appId: '1:697067493516:web:7aa8dd70410e0da4a483a9',
  measurementId: 'G-07DYRJKDHZ'
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

//TRAZ INFORMACOES DO BANCO DE DADOS
getDocs(collection(db, 'games'))
  .then(querySnapshot => {
    const gamesLis = querySnapshot.docs.reduce((acc, doc) => {
      const { title, createAt, developedBy } = doc.data()
      acc += `
      <li class="my-4">
      <h5>${title}</h5>
      
      <ul>
        <li>Desenvolvido por ${developedBy}</li>
        <li>Adicionado no banco em ${createAt.toDate()}</li>
      </ul>
      </li>
      `
      return acc
    }, '')
    const GamesList = document.querySelector('[data-js="games-list"]')
    GamesList.innerHTML = gamesLis
  })
  .catch(console.log)
