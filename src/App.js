import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AddNewContact } from "./actions/contactActions";
import { auth, db } from "./firebase/firebaseConfig";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import Routers from "./Routers";
import { dispatchUser } from "./actions/authAction";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const readData = async () => {
      const q = query(collection(db, "contacts"), orderBy("timestamp", "asc"));
      onSnapshot(q, (querySnapshot) => {
        const contactArr = [];
        querySnapshot.forEach((doc) => {
          contactArr.push(doc.data());
        });
        dispatch(AddNewContact(contactArr));
        console.log(contactArr);
      });
    };

    readData();
  }, [dispatch]);

  useEffect(() => {
    onAuthStateChanged(auth, (users) => {
      if (users) {
        dispatch(dispatchUser(users));
        console.log(users);
      } else {
        dispatch(dispatchUser(null));
      }
    });
  }, [dispatch]);

  return (
    <>
      <Routers />
    </>
  );
}

export default App;
