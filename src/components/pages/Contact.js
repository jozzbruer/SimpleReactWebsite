import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Contact extends Component {
    render() {
        return (
            <section className="my-5 py-5" style={{height: '66vh'}}>
                 <div className="container">
                    <div className="well well-sm">
                        <h3><strong>Our Location</strong></h3>
                    </div>
                
                 <div className="row">
                     <div className="col-md-7">
                     <iframe src="https://www.google.com/maps/d/embed?mid=1vJbujxdHKxEUS5CtW01FM5UHZErsPKoe"  
                     style ={{width: "100%", height:"315px", broder: '0', frameborder: '0'}} allowFullScreen></iframe>
                     </div>
                 
                    <div className='col-md-5'>
                        <h4><strong>Contact us</strong></h4>
                        <form>
                            <div className="form-group">
                                <input className="form-control" type="text" placeholder="Name" />
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="email" placeholder="exemple@exemple.com" />
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="tel" placeholder="Phone" />
                            </div>

                         <textarea className="form-control" cols="30" rows="3"  placeholder="Message"/>
                         <Link className="btn btn-outline-success text-uppercase mt-1">
                             <i className="fa fa-paper-plane" />
                             <i className="fa fa-telegram-plane" />
                             &nbsp; Send
                         </Link>
                        </form>
                    </div>
                    </div>
                 </div>
            </section>
        )
    }
}

export default Contact;
