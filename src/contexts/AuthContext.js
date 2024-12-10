import { createContext, useState } from "react";

import { myAxios } from "./MyAxios";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext("");

export const AuthProvider = ({ children }) => {
  const [user, setUser]=useState(null);
  const navigacio=useNavigate();
  const csrf = () => myAxios.get("/sanctum/csrf-cookie");

  const regisztracio_fv = async (adat) => {

    await csrf();

    try {

      const response = await myAxios.post("/register");

      console.log("siker");

    } catch (err) {

      console.log("Hiba történt az adat elküldésekor.", err);

    } finally {

    }

  };
  const getUser = async () => {

    await csrf();

    try {

      const response = await myAxios.get("/api/user");
      console.log(response.data);
      setUser(response.data)
    } catch (err) {

      console.log("Hiba történt az adat lekérésekor.", err);

    } finally {

    }
  };
  const kijelentkezes_fv = async () => {
    await csrf();

    try {

      const response = await myAxios.post("/logout");

      console.log("siker");
      navigacio("/regisztracio");
    } catch (err) {

      console.log("Hiba történt kijelentkezéskor.", err);

    } finally {

    }
  };

  return (

    <AuthContext.Provider value={{ regisztracio_fv, kijelentkezes_fv, user }}>

      {children}

    </AuthContext.Provider>

  );

};