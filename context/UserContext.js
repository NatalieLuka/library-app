import { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const UserContext = createContext();

const wait = (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function loadFromAsyncStorage() {
      const userJSON = await AsyncStorage.getItem("user");
      if (userJSON) {
        setUser(JSON.parse(userJSON));
      } else {
        setUser(null);
      }
      setIsReady(true);
    }
    loadFromAsyncStorage();
  }, []);

  useEffect(() => {
    async function writeToAsynStorage() {
      await AsyncStorage.setItem("user", JSON.stringify(user));
    }
    if (isReady) {
      writeToAsynStorage();
    }
  }, [user, isReady]);

  async function login(userName) {
    await wait(1000);
    setUser({
      name: userName,
      id: "12345",
    });
  }

  async function logout() {
    await wait(1000);
    setUser(null);
  }

  if (!isReady) {
    return null;
  }

  return (
    <UserContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
