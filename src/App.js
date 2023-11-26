import React, { useEffect, useState } from 'react';
import './App.css';
import Loading from './Github/Loading';


function App() {

  const [users, setUsers] = useState([]);
  const [loading ,setLoading] = useState(true);

  const getUsers = async () =>{
    setLoading(false);
    const response =  await fetch('https://api.github.com/users');
    setUsers(await response.json());
  }
  useEffect(() => {
    getUsers();
  });
if (loading) {
  return <Loading />
}
  return (
   <>
   <h2>List of GitHub Users</h2>
   <div className='container-fluid mt-5'>
    <div className='row text-center'>
      {
        users.map((curElem) => {
          const { avatar_url, id, login, type } = curElem;
          return (
            <div className='col-10 col-md-4 mt-5' key={id}>
        <div className='card p-2'>
          <div className='d-flex align-items-center'>
            <div className='image'> <img src={ avatar_url }  className="rounded" width="155" /></div>
            <div className='ml-3 w-100'>
              <h4 className='mb-0 mt-0 textLeft'>{login}</h4> <sapn className="textLeft">Mern Stack Developer</sapn>
              <div className='p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats'>
                <div className='d-flex flex-column'> <span className='articles'>Articles</span> <span className='number'>38</span> </div>
                <div className='d-flex flex-column'> <span className='articles'>Followers</span> <span className='number'>980</span> </div>
                <div className='d-flex flex-column'> <span className='articles'>Rating</span> <span className='number'>8.9</span> </div>

              </div>
            </div>
          </div>
        </div>
      </div>
          )
        })
      }
      </div>
   </div>
   </>
  );
}

export default App;
