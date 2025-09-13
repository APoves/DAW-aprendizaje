export const Navbar = ( { login, handlerLogout } ) => {

    return(
        <nav className="navbar navbar-expand bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">UsersApp</a>
                <div className="navbar-nav ms-auto">
                    <span className="nav-item nav-link text-primary mx-3">
                        { login.user?.username }
                    </span>
                    <button 
                        className="btn btn-outline-success"
                        onClick={ handlerLogout }
                    >
                        Logout
                    </button>
                </div>
            </div>
        </nav>
    )
}
