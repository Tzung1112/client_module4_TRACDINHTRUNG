import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import {ref, uploadBytes, getDownloadURL } from "firebase/storage";
/* ggauthen */
import { getAuth, signInWithPopup,GoogleAuthProvider } from "firebase/auth";
import { log } from "console";



// thay config thành config của bạn
const firebaseConfig = {
  apiKey: "AIzaSyDerS0Kx2pFJtqTXXUGXjyPZDcq02lNb7k",
  authDomain: "skateboard-20748.firebaseapp.com",
  projectId: "skateboard-20748",
  storageBucket: "skateboard-20748.appspot.com",
  messagingSenderId: "66549124237",
  appId: "1:66549124237:web:b3714a9fd6c60cd731a6c4",
  measurementId: "G-4SSN26X4G1"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export async function uploadFileToStorage(file: File, folderName: string) { 

  if (!file) { 
    return false
  }
  const fileRef = ref(storage, `${folderName}/` + file.name);

  const url = await uploadBytes(fileRef, file).then( async res => {
    return await getDownloadURL(res.ref)
    .then(url => url)
    .catch(er => false)
  })

  return url
}
const googleProvider=new GoogleAuthProvider();
export async function googleLogin(){
  const auth = getAuth(app);
  return await signInWithPopup(auth, googleProvider)
  
}