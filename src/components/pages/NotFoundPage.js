import React from 'react'
import { Link } from 'react-router-dom'

function NotFoundPage() {
    return (
        <div className="container text-center" style={{height: '75vh'}}>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="row">
                <div className="col-md-12">
                    <div className="error-template">
                        <h1>Ops!</h1>
                        <h2>Error 404 Page Not Found</h2>
                        <div className="error-details">
                            Sorry, the request pages is not exist!
                        </div>
                        <div className="error-actions">
                            <Link to="/" className="btn btn-outline-primary btn-large">
                                <i className="fa fa-home" /> &nbsp; Back to homepage
                            </Link>

                            <Link className="btn btn-outline-secondery btn-large">
                                <i className="fa fa-envelope" /> &nbsp; Support
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFoundPage;