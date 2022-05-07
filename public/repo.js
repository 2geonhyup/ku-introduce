const firebaseConfig = {
    apiKey: "AIzaSyBe4dyKNgUDySzx8IoqK9htjJXo9OeD_xM",
    authDomain: "introduce-ku-1a16c.firebaseapp.com",
    projectId: "introduce-ku-1a16c",
    storageBucket: "introduce-ku-1a16c.appspot.com",
    messagingSenderId: "552795752076",
    appId: "1:552795752076:web:ba1b184a3be690c6b89da9"
};
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

async function getUsers () {
    const usersRef = db.collection('users');
    const docs = await usersRef.get();

    const usersList = []

    docs.forEach((doc)=>{
        const pwd = doc.data().password;
        usersList.push(pwd);
    });

    return usersList;
}


export default getUsers;