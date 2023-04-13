import React, { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email:"",
    password:"",
  });

  const handelLogin = (e) =>{
    e.preventDefault();
    const loggeduser = JSON.parse(localStorage.getItem("user"));
    if(input.email === loggeduser.email && input.password === loggeduser.password){
      localStorage.setItem("loggedin",true);
      navigate('/');
    }else{
      alert("Wrong Email Or Password");
    }
    
     
    
  }
  return (
    <>
       <div className="container">
                <div className="row">
                    <div className="col-lg-5 p-5 mt-5 m-auto bg-warning circle ">
                        <div>
                            
                            <h2 className='text-center pb-3'>Login Page</h2>
                        </div>
                        <form onSubmit={handelLogin}>
                            
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

                            <button type="submit" class="btn btn-success mb-4">Login</button>
                            <Link to="/register ">
                              <ul>Don't have an account?<strong>Register here</strong></ul>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Login;