import axios from "axios";

export const UsersList = (props) => {

    const usersList = props.todoList

    const clearTodoList = () => {
        props.setTodoList([])
    }

    const displayInfoArrHeading = () => {
        return(
            Object.keys(usersList).map((elem, index)=>
                {
                    return(
                        <tr scope="col" key={index}>
                            {
                                index > 0
                                    ?
                                        null
                                    :
                                        Object.keys(usersList[elem]).map((colElem, index)=>
                                            {
                                                if (usersList[elem][colElem] != null){
                                                    return(
                                                        <th scope="col" key={index}>{colElem}</th>
                                                    )
                                                }
                                            }
                                        )
                            }
                        </tr>
                    )
                }
            )
        )
    }
    const displayInfoArrContent = () => {
        return(
            Object.keys(usersList).map((elem, index)=>
                {
                    return(
                        <tr key={index}>
                            {
                                Object.keys(usersList[elem]).map((colElem, index)=>
                                    {
                                        if (usersList[elem][colElem] != null){
                                            // console.log(data)
                                            return(
                                                <td scope="row" key={index}>{usersList[elem][colElem]}</td>
                                            )
                                        }
                                    }
                                )
                            }
                        </tr>
                    )
                }
            )
        )
    }

    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        <table className="table table-striped table-dark">
                            <thead>
                            {displayInfoArrHeading()}
                            </thead>
                            <tbody>
                            {displayInfoArrContent()}
                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-3">
                        <aside className="filters-wrapper">
                            <form action="" className="filters_list">
                                <div className="row">
                                    <div className="col-md-12">
                                        <input className="form-control" type="text"/>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="btn btn-secondary btn-sm" onClick={clearTodoList}>Clear list</div>
                                    </div>
                                </div>
                            </form>
                        </aside>
                    </div>
                </div>
            </div>
        </>
    )
}