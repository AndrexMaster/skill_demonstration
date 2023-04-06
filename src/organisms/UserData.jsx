import React, { useEffect, useState } from "react";
import axios from "axios";

export const UserData = (props) => {
    const currUserData = props.currUserData

    console.log(currUserData)

    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="user_data_block-wrapper row">
                            <div className="col-md-3">
                                <img src={currUserData.avatar_url} alt=""/>
                            </div>
                            <div className="col-md-5">
                                <div className="main_user_data">
                                    <div className="user_name">
                                        <h3>{currUserData.name ? currUserData.name : currUserData.login}</h3>
                                    </div>
                                    {
                                        currUserData.bio != null
                                            ?
                                                (
                                                    <div className="user_bio"></div>
                                                )
                                            :
                                                null
                                    }
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="additional_user_data">
                                    {
                                        currUserData.followers != null
                                            ?
                                                (
                                                    <div className="user_followers">
                                                        <span>User followers: {currUserData.followers}</span>
                                                    </div>
                                                )
                                            :
                                                null
                                    }
                                    {
                                        currUserData.followers != null
                                            ?
                                                (
                                                    <div className="user_following">
                                                        <span>User following: {currUserData.following}</span>
                                                    </div>
                                                )
                                            :
                                                null
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}