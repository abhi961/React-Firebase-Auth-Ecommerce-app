
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth"
 
const firebaseConfig = {
  apiKey: "AIzaSyCguyhnjSO5IxpuQadXpGEfaKHD2iq3ew0",
  authDomain: "react-authentication-6328e.firebaseapp.com",
  projectId: "react-authentication-6328e",
  storageBucket: "react-authentication-6328e.appspot.com",
  messagingSenderId: "86554662058",
  appId: "1:86554662058:web:9630492417ba29b7942cd3",
  measurementId: "G-YHGQ7ZHCRF"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
