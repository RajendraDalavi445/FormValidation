import React, { useState } from 'react'
import { useNavigate ,Link } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const [input, setInput] = useState({
        name:"",
        email:"",
        password:"",
    });

    
    
    const handelSubmit = (e) =>{
        e.preventDefault();
        localStorage.setItem("user",JSON.stringify(input));
        navigate('/login');
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 p-5 mt-5 m-auto bg-warning circle ">
                        <div>
                            
                            <h2 className='text-center pb-3'>CREATE AN ACCOUNT</h2>
                        </div>
                        <form onSubmit={handelSubmit}>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Your Name</label>
                                <input
                                 type="text"
                                 class="form-control" 
                                 name="name"
                                 value={input.name} 
                                 onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})} 
                                 />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Your Email</label>
                                <input
                                 type="email"
                                 class="form-control"
                                 name="email"
                                 value={input.email} 
                                 onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})} 
                                  />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Your Password</label>
                                <input
                                 type="text"
                                 class="form-control"
                                 name="password"
                                 value={input.password} 
                                 onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})} 
                                  />
                            </div>

                            <button type="submit" class="btn btn-success mb-4">Register</button>
                            <Link to="/login ">
                              <ul>Don't have an account?<strong>Login here</strong></ul>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register;