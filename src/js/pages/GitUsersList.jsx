import React, { useEffect, useState } from "react";
import axios from "axios";

// Components
import { UsersList } from "../components/UsersList";
// import { generatePath } from "react-router-dom";
import { APIS_CONFIG } from "../config/APIConfig";


export const GitUsersList = () => {
    const [ usersList, setUsersList ] = useState([]);
    const [ userLogin, setUserLogin ] = useState('a');
    const [ perPage, setPerPage ] = useState('15');
    const [ pageOfList, setPageOfList ] = useState('1');
    const [ sortBy, setSortBy ] = useState('login');
    const [ sortDirection, setSortDirection ] = useState('desc');

    const formingApiParams = () => {
        return '?' + new URLSearchParams({
            'q': userLogin,
            'per_page': perPage,
            'page': pageOfList,
            's': sortBy,
            'o': sortDirection
        }).toString();
    };

    useEffect(() => {
        axios
            .get(APIS_CONFIG.git.usersSearch + formingApiParams())
            .then((e) => {
                setUsersList(e.data)
            });
    }, [userLogin, perPage, sortBy, sortDirection]);

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