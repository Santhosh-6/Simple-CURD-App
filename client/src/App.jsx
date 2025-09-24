import axios from "axios";
import { useEffect,useState } from "react";
import './App.css';

function App() {

  const [users,setUsers]=useState([]);
  const [filterusers,setFilterusers]=useState([]);
  const [isModelOpen,setIsModelOpen]=useState(false);
  const [userData,setUserData]=useState({
    name:"",age:"",city:""
  });

  const getAllUsers=async()=>{
    await axios.get("http://localhost:7000/users")
    .then((res)=>{
        setUsers(res.data);
        setFilterusers(res.data);
      });
  };
  useEffect(()=>{
     getAllUsers();
  },[]);
 
  //search function
  const handleSearchChange=(e)=>{ 
       const searchText=e.target.value.toLowerCase();
       const filteredUsers=users.filter((user)=>
       user.name.toLowerCase().includes(searchText)||user.city.toLowerCase().includes(searchText));
       setFilterusers(filteredUsers);
  } 

  //delete user function
  const handleDelete = async(id)=>{
    const isConfrimed=window.confirm("Are You Sure You Want To Delete This User?");
     if (isConfrimed){await axios.delete(`http://localhost:7000/users/${id}`).then(
        (res)=>{
          setUsers(res.data);
          setFilterusers(res.data);
        }
      )}
  }

  //Add user details
  const handleAddRecord=()=>{
    setUserData({name:"",age:"",city:""});
    setIsModelOpen(true);
  };
  const handleData=(e)=>{
  setUserData({...userData,[e.target.name]:e.target.value})
  };
  //close model
  const closeModel=()=>{
    setIsModelOpen(false);
    getAllUsers();
  }

 //submit func
 const handleSubmit=async(e)=>{
    e.preventDefault();  
    if(userData.id){
    await axios.patch(`http://localhost:7000/users/${userData.id}`,userData).then((res)=>{console.log(res);});   
    }else{
    await axios.post("http://localhost:7000/users",userData).then((res)=>{console.log(res);});
   }
closeModel();
setUserData({name:"",age:"",city:""});
};

 //update user function
const handleUpdateRecord=(user)=>{
  setUserData(user);
  setIsModelOpen(true);
}

  return (
    <>
      <div className='container'>
         <h3>CURD Application</h3>
         <div className="input-search">
          <input type="search" placeholder="Enter Text here" onChange={handleSearchChange}/>
          <button className='btn green' onClick={handleAddRecord}>Add Record</button>
         </div>
         <table className='table'>
          <thead>
            <tr>
              <td>Id</td>
              <td>Name</td>
              <td>Age</td>
              <td>City</td>
              <td>Edit</td>
              <td>Delete</td>
            </tr>
          </thead>
          <tbody>
            {filterusers && filterusers.map((user,index)=>{
              return (
              <tr key={user.id}>
              <td>{index+1}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.city}</td>
              <td><button className='btn green' onClick={()=>handleUpdateRecord(user)}>Edit</button></td>
              <td><button className='btn red' onClick={()=>handleDelete(user.id)}>Delete</button></td>
            </tr>
              );
            })}
          </tbody>
         </table>
         {isModelOpen && (
          <div className="model">
            <div className="model-container">
              <span className="close" onClick={closeModel}>&times;</span>              
              <h2>{userData.id? "Update Record":"Add Record"}</h2>
              <div className="input-group">
                <label htmlFor="name">Name</label>
                <input type="text" value={userData.name} onChange={handleData} name="name" id="name" />
              </div>
              <div className="input-group">
                <label htmlFor="age">Age</label>
                <input type="number" value={userData.age} onChange={handleData} name="age" id="age" />
              </div>
              <div className="input-group">
                <label htmlFor="city">City</label>
                <input type="city" value={userData.city} onChange={handleData} name="city" id="city" />
              </div>           
              <button className="btn green" onClick={handleSubmit}>{userData.id? "Update User":"Add User"}</button>                 
            </div>
          </div>
         )}
      </div>
    </>
  )
}

export default App
