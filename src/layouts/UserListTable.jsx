import {Link} from "react-router-dom";

export const UserListTable = (props) => {
    const tableData = props.usersListItems
    console.log(tableData)

    const displayInfoArrContent = () => {
        return(
            Object.keys(tableData).map((elem, index)=>
                {
                    return(
                        <div className="col-md-4 p-2" key={index}>
                            <div className="card">
                                <img className="card-img-top" src={tableData[elem]['avatar_url']} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">{tableData[elem]['login']}</h5>
                                </div>
                                <div className="card-bottom d-grid gap-2">
                                    <Link to={"/gitUsers/" + tableData[elem]['login']} className="username btn btn-primary">User profile</Link>
                                    <Link to={tableData[elem]['html_url']} target="_blank" rel="noopener noreferrer" className="username btn btn-secondary">User Profile on GitHub</Link>
                                </div>
                            </div>
                        </div>
                    )
                }
            )
        )
    }

    return(
        <div className="col-md-9">
            <div className="cards-wrapper row">
                {displayInfoArrContent()}
            </div>
        </div>
    )
}