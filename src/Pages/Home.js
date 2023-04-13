import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const userName = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () =>{
    localStorage.removeItem("loggedin");
    // localStorage.clear("user");
    navigate("/login");
  }

  return (
    <>

      <div className="container py-5">
        <div className="row mt-5">
          <div className="col-lg-5 m-auto shadow-lg p-5">
            <h2 className='text-center pb-3'>HomePage</h2>
            <p className='text-center'>Welcome - {userName.name}</p>
            <button onClick={handleLogout} type="button" class="btn btn-success">LogOut</button>
          </div>
        </div>
      </div>

    </>
  )
}

export default Home;