import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyATKqw6ScIX_BIT6Ko-NNlZ_3J_eRg1_dM",
  authDomain: "home-food-catering-3f8c9.firebaseapp.com",
  projectId: "home-food-catering-3f8c9",
  storageBucket: "home-food-catering-3f8c9.appspot.com",
  messagingSenderId: "15150609543",
  appId: "1:15150609543:web:76878dd8481b84a8ee3422"
};

const app = initializeApp(firebaseConfig);

const auth= getAuth(app)

export default auth;