import { Link } from "react-router-dom";
import { UserListTable } from '../layouts/UserListTable'
import { SidebarFilters } from '../layouts/SidebarFilters'

export const UsersList = (props) => {

    return(
        <>
            <div className="row user_list_block">
                <UserListTable usersListItems={props.usersListItems}/>
                <SidebarFilters
                    setUserLogin={props.setUserLogin}
                    setSortBy={props.setSortBy}
                    setSortDirection={props.setSortDirection}
                />
            </div>
        </>
    )
}