
export const LoginPage = () => {


    return (
        <div className="modal" style={ { display: 'block' } }tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Login</h5>
                </div>
                <form>
                    <div className="modal-body">
                        <input 
                        className="form-control my-3 w-75"
                        placeholder="Nombre de usuario"
                        name="username"
                        />
                        <input 
                        className="form-control my-3 w-75"
                        placeholder="Password"
                        type="password"
                        name="password"
                        />
                    </div>
                    <div className="modal-footer">
                        <button 
                        type="submit"
                        className="btn btn-primary">
                            Login
                        </button>
                    </div>
                </form>
                </div>
            </div>
        </div>
    );
}