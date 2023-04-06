import { Link } from "react-router-dom";
import { UserListTable } from '../organisms/UserListTable'
import { SidebarFilters } from '../organisms/SidebarFilters'

export const UsersList = (props) => {

    return(
        <>
            <div className="container">
                <div className="row user_list_block">
                    <UserListTable usersListItems={props.usersListItems}/>
                    <SidebarFilters
                        setUserLogin={props.setUserLogin}
                        setSortBy={props.setSortBy}
                        setSortDirection={props.setSortDirection}
                    />
                </div>
            </div>
        </>
    )
}