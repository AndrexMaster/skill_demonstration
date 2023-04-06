import { Outlet } from "react-router-dom";
import { useHistory, useParams } from "react-router";
import {useEffect, useState} from "react";
import axios from "axios";

// Components
import { UserData } from '../organisms/UserData'

export const CurrGitUser = () => {
    const currUserLogin = useParams().login

    const [ currUserData, SetCurrUserData ] = useState([]);

    useEffect(() => {
        axios
            .get('https://api.github.com/users/'+ currUserLogin)
            .then((e) => {
                SetCurrUserData(e.data)
            });
    }, []);

  return(
      <>
        <UserData currUserData={currUserData} currUserLogin={currUserLogin}/>
        <Outlet />
      </>
  )
}