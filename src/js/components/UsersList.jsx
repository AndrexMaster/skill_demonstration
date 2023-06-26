import { UserListTable } from '../layouts/UserListTable'
import { SidebarFilters } from '../layouts/SidebarFilters'
import { Grid } from '@chakra-ui/react'

export const UsersList = (props) => {


    return (
        <div className="row user_list_block">
            <Grid templateColumns='3fr 1fr' gap={6}>
                <UserListTable usersListItems={props.usersListItems}/>
                <SidebarFilters
                    setUserLogin={props.setUserLogin}
                    setSortBy={props.setSortBy}
                    setSortDirection={props.setSortDirection}
                    />
            </Grid>
        </div>
    );
}