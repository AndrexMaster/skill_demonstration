import React from "react";


export const SidebarFilters = (props) => {
    const [checked, setChecked] = React.useState(true);

    const setUserLogin = (data) => {
        props.setUserLogin('q=' + data)
    }

    const setSortBy = (data) => {
        props.setSortBy('s=' + data)
    }

    const setSortDirection = (data) => {
        props.setSortDirection('o=' + data)
    }

    return(
        <div className="col-md-3">
            <aside className="filters-wrapper">
                <form action="" className="filters_list d-grid gap-3">
                    {/* Search input */}
                    <input className="form-control"
                           type="text"
                           placeholder="User Login (NickName)"
                           onKeyUp={(e) => {
                               if (e.key.length == 1){
                                   setUserLogin(e.target.value)
                               }
                           }}
                    />

                    {/* Sort Type */}
                    <fieldset className="form-group">
                        <legend className="col-form-label col-md-12 pt-0"><b>Sorting order</b></legend>
                        <div className="d-grid gap-1">
                            <label>
                                <input
                                    className=""
                                    type="radio"
                                    name="sortType"
                                    value="desc"
                                    defaultChecked={checked}
                                    onChange={(e) => {
                                        setSortDirection(e.target.value)
                                    }}
                                />
                                <span className="ms-1">Largest to smallest</span>
                            </label>
                            <label>
                                <input
                                    className=""
                                    type="radio"
                                    name="sortType"
                                    value="asc"
                                    onChange={(e) => {
                                        setSortDirection(e.target.value)
                                    }}
                                />
                                <span className="ms-1">Smallest to largest</span>
                            </label>
                        </div>
                    </fieldset>

                    {/* Sort by */}
                    <fieldset className="form-group">
                        <legend className="col-form-label col-md-12 pt-0"><b>Sorting order</b></legend>
                        <div className="d-grid gap-1">
                            <label>
                                <input
                                    className=""
                                    type="radio"
                                    name="sortBy"
                                    value="login"
                                    defaultChecked={checked}
                                    onChange={(e) => {
                                        setSortBy(e.target.value)
                                    }}
                                />
                                <span className="ms-1">Sort by login</span>
                            </label>
                            <label>
                                <input
                                    className=""
                                    type="radio"
                                    name="sortBy"
                                    value="id"
                                    onChange={(e) => {
                                        setSortBy(e.target.value)
                                    }}
                                />
                                <span className="ms-1">sort by id</span>
                            </label>
                        </div>
                    </fieldset>
                </form>
            </aside>
        </div>
    )
}