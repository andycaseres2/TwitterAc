import { createContext, useContext, useEffect, useState } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";

import { db } from "../firebase/client";

export const AppContext = createContext();

export function AppContextProvider({ children, session }) {
  const [user, setUser] = useState(null);
  const [twits, setTwits] = useState([]);

  const addTwit = async ({ avatar, content, userId, userName }) => {
    try {
      const docRef = await addDoc(collection(db, "twits"), {
        avatar,
        content,
        userId,
        userName,
        likedsCount: 0,
        createdAt: new Date(),
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const getTwits = async () => {
    const querySnapshot = await getDocs(collection(db, "twits"));
    let data = [];
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, data: doc.data() });
    });
    return data;
  };

  return (
    <AppContext.Provider
      value={{
        user,
        getTwits,
        addTwit,
        setUser,
        twits,
        setTwits,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const UserApp = () => {
  return useContext(AppContext);
};
