import React, { useEffect, useState } from "react";
import axios from "axios";

// Components
import { UsersList } from "../components/UsersList";
// import { generatePath } from "react-router-dom";
import { APIS_CONFIG } from "config/APIConfig";


export const GitUsersList = () => {
    const [ usersList, setUsersList ] = useState([]);
    const [ userLogin, setUserLogin ] = useState('q=a');
    const [ perPage, setPerPage ] = useState('per_page=15');
    const [ pageOfList, setPageOfList ] = useState('page=1');
    const [ sortBy, setSortBy ] = useState('s=login');
    const [ sortDirection, setSortDirection ] = useState('o=desc');

    const formingApiParams = () => {
        let apiParams;
        if (userLogin != null || perPage != null || sortBy != null || sortDirection != null){
            apiParams = '?'

            if (userLogin != null){
                apiParams = apiParams + userLogin
            }

            if (perPage != null){
                if (apiParams.length > 1){
                    apiParams = apiParams + '&'
                }
                apiParams = apiParams + perPage
            }

            if (pageOfList != null){
                if (apiParams.length > 1){
                    apiParams = apiParams + '&'
                }
                apiParams = apiParams + pageOfList
            }

            if (sortBy != null){
                if (apiParams.length > 1){
                    apiParams = apiParams + '&'
                }
                apiParams = apiParams + sortBy
            }

            if (sortDirection != null){
                if (apiParams.length > 1){
                    apiParams = apiParams + '&'
                }
                apiParams = apiParams + sortDirection
            }

            return apiParams

        }
    }

    useEffect(() => {
        axios
            .get(APIS_CONFIG.git.usersSearch + formingApiParams())
            .then((e) => {
                setUsersList(e.data)
            });
    }, [userLogin, perPage, sortBy, sortDirection]);

    useEffect(() => {
        axios
            .get(APIS_CONFIG.git.usersSearch + formingApiParams())
            .then((e) => {
                setUsersList(e.data)
            });
    }, []);

    return (
        <>
            {
                usersList.items != null && usersList.items.length > 0
                    ?
                        (
                            <UsersList
                                usersListItems={usersList.items}
                                setUserLogin={setUserLogin}
                                setSortBy={setSortBy}
                                setSortDirection={setSortDirection}
                                setPerPage={setPerPage}
                                setPageOfList={setPageOfList}
                            ></UsersList>
                        )
                    :
                    "#"
            }
        </>
    );
}