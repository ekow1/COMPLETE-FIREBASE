import React from "react";
import AddContactsForm from "../components/AddContactsForm";
import Contacts from "../components/Contacts";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

function Home() {
  return (
    <div className="container">
      <div className="sign-out p-5">
        <button onClick={() => signOut(auth)} className="signOut " >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
            />
          </svg>
          Sign Out
        </button>
      </div>
      <div className="row mt-5">
       
        <div className="col-md-12 px-5 w-75 mx-auto">
          <Contacts />
        </div>
      </div>
    </div>
  );
}

export default Home;
