import { useEffect, useState } from 'react'


function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("response is not ok")
        }
        response.json()
      })
      .then((data) => {
        setUsers(data)
      })
      .catch((error) => {
        console.error("error fectchin:", error);

      })
  }, [])

  return (
    <div>
    <h1>user list</h1>
      <ul>
        {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
      </ul>
    </div>
  )
}

export default App



// import React, { useEffect, useState } from 'react';

// const App = () => {
//   const [users, setUsers] = useState([]); 

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Response is not ok");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setUsers(data);
//       })
//       .catch((error) => {
//         console.error("Error fetching users:", error);
//       });
//   }, []); 

//   return (
//     <div>
//       <h1>Users List</h1>
//       <ul>
//         {users.map((user) => (
//           <li key={user.id}>
//             {user.name} 
//             {user.username}
//             {user.email}
//             </li>


//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;


//Create a form with two input fields (name and email) and a submit button. When the form is submitted, log the form data to the console.

// import { useState } from 'react'

// const App = () => {

//   const [name, Setname] = useState('')
//   const [email, SetEmail] = useState('')

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     console.log({ name, email })

//   }


//   return (

//     <div>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="name">Name</label>
//           <input
//             type="text"
//             id='name'
//             value={name}
//             onChange={(e) => Setname(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             id='email'
//             value={email}
//             onChange={(e) => SetEmail(e.target.value)}
//           />
//         </div>
//         <button type='submit'>Submit</button>
//       </form>

//     </div>
//   )
// }

// export default App




// What are keys in React? Why are they important when rendering lists?
// Keys are special attributes used to uniquely identify elements in a list.
//  They help React efficiently update the UI by tracking which items have changed, been added, or been removed.
//  Keys should be unique and stable to avoid bugs and ensure optimal performance.

// const items = [
//   { id: 1, name: "apple" },
//   { id: 1, name: "banana" },
//   { id: 1, name: "graps" },
// ]

// const List = () => {
//   return (
//     <ul> 
//       {items.map((item)=>(
//         <li key={item.id}>{item.name}</li>

//       ))}
//     </ul>
//   )
// }




// Implement a todo list where users can add and delete tasks. Use the useState hook to manage the list of tasks.
// import { useState } from 'react'


// const App = () => {

//   const [task, setTask] = useState([])
//   const [taskInput, setTaskInputask] = useState("")


//   // Function to handle adding a new task
//   const addtask = () => {
//     if (taskInput.trim() !== ""){ 
//       const newTask = {id: Date.now(),Text:taskInput }
//       setTask([...task, newTask])
//     setTaskInputask("") } // Clear input field after adding
//   }

//   // Function to handle deleting a task
//   const deletetask = (id) => {
//     setTask(task.filter((task) => task.id !== id))


//   }

//   return (
//     <div>

//       <form onSubmit={(e)=>{e.preventDefault();addtask() }}>
//         <label htmlFor="taskInput">Task1</label>
//         <input
//          id='taskInput'
//           value={taskInput}
//           onChange={(e) => setTaskInputask(e.target.value)}
//           placeholder='add task'
//         />
//       </form>
//       <button onClick={addtask}>Submit</button>
//       <ul>
//         {task.map((task)=>(
//           <li key={task.id}>{task.Text}
//           <button onClick={()=>deletetask(task.id)}>delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default App


// import React, { useState } from 'react'

// const App = () => {
//   const [task, setTask] = useState([])
//   const [taskinput, setTaskinput] = useState("")

//   const addtask = () => {
//     if (taskinput.trim() !== "") {
//       const newtask = { id: Date.now(), Text: taskinput }
//       setTask([...task, newtask])
//       setTaskinput("")
//     }
//   }

//     const deletetask = (id) => {
//       setTask(task.filter((task) => task.id !== id))

//     }


//     return (
//       <div>
//         <form onSubmit={(e) => { e.preventDefault(); addtask() }}>
//           <label htmlFor="taskinput">task</label>
//           <input
//             id='taskinput'
//             value={taskinput}
//             onChange={(e) => setTaskinput(e.target.value)}
//           />
//         </form>
//         <button onClick={addtask}>add task</button>
//         <ul>{task.map((task) => (
//           <li key={task.id}>{task.Text}
//             <button onClick={() => deletetask(task.id)}>Delete</button>
//           </li>
//         ))}</ul>
//       </div>
//     )
//   }


// export default App



// What is the difference between a functional component and a class component in React?
// functional components: are simpler and more concise.they are pure function it take props as
//  input and return jsx to discribe what component the render and it is perfect choice for presentatonal components
// const App = (props) => {
//  const [count,setCount] = useState(0)
//   return (
//     <div>
//       <p>count :{count}</p>
//       <button onClick={()=>setCount(count+1)}>increase</button>
//     </div>


//   )
// }

// class component: are the blue print to define how component renders and bhaves it use class keywords and allows
//  the functionalty like state managenent and lifecycle method (boiler plates)

// import React, { useState } from 'react'


// const App = (props) => {
//   // const [count,setCount] = useState(0)
//   return (
//     <div>
//       <p>count :{count}</p>
//       <button onClick={()=>setCount(count+1)}>increase</button>
//     </div>


//   )
// }

// export default App

// import React from 'react'
// import { useEffect } from 'react';
// import { useState } from 'react'
// import "./app.css";


// const App = () => {
//     const [items, setItems] = useState([])
//     const [loading, setLoading] = useState(true)
//     const [displayedItems, setDisplayedItems] = useState([]);
//     const [searchTerm, setSearchTerm] = useState('');
//     const [error, setError] = useState(null)


//     // Pagination state
//     const [currentpage, setCurrentPage] = useState(1)
//     const [itemsperpage, setItemsPerPage] = useState(10) // Number of items per page


//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/posts')
//             .then((response) => {
//                 if (!response.ok) {
//                     throw new Error('fail to fetech')
//                 }
//                 return response.json()
//             })
//             .then((data) => {
//                 setItems(data) // Update the state with fetched data
//                 setLoading(false) // Set loading to false
//             })
//             .catch((error) => {
//                 setError(error) // Handle errors
//                 setLoading(false)// Set loading to false
//             })


//     }, []) // Add empty dependency array to run only once

//     // handle search functionality
//     useEffect(() => {
//     if(searchTerm.trim()==""){
//         setDisplayedItems(items)
//         setCurrentPage(1);  // reset to first page
//         return

//     }
//     const filtered = items.filter(item=>
//         item.title.toLowerCase().includes(searchTerm.toLowerCase())||
//         item.body.toLowerCase().includes(searchTerm.toLowerCase())
//     )

//     setDisplayedItems(filtered)
//     setCurrentPage(1) //reset to firest page
//     },[searchTerm,items]) // Add dependencies here




//     // Calculate paginated data
//     const indexOfLastItem = currentpage * itemsperpage;
//     const indexOfFirstItem = indexOfLastItem - itemsperpage;
//     const currentItems = displayedItems.slice(indexOfFirstItem, indexOfLastItem)
//     const totalPages = Math.ceil(displayedItems.length / itemsperpage)

//     // Change page
//     const paginate = (pageNumber) => {
//         if (pageNumber < 1 || pageNumber > totalPages) return;
//         setCurrentPage(pageNumber)
//     }


//     if (loading) 
//         return <div>Loading ......</div>
    
//     if (error) 
//         return <div>Error : {error}</div>
    

//     return (
//         <div>
//             <div style={{ padding: "20px", maxWidth: "800px", margin: '0,auto' }}>
//                 <h1>List of post</h1>

//                 {/* Search Input */}
//                 <div style={{marginBottom:"20px"}}>
//                     <input type="text"
//                     placeholder='search post ...'
//                     value={searchTerm}
//                     onChange={(e)=>setSearchTerm(e.target.value)}
//                     style={{
//                         padding: '10px',
//                         width: '100%',
//                         maxWidth: '400px',
//                         borderRadius: '5px',
//                         border: '1px solid #ddd'
//                       }}

//                     />
//                     <small style={{ display: 'block', marginTop: '5px', color: '#666' }}>{displayedItems.length} post found</small>
//                 </div>

//                 {/* Items per page dropdown */}
//                 <div>
//                     <label htmlFor="">Item per page:
//                         <select
//                             value={itemsperpage}
//                             onChange={(e) => {
//                                 setItemsPerPage(Number(e.target.value))
//                                 setCurrentPage(1); //RESET THE FIRST PAGE
//                             }}
//                             style={{ marginLeft: "10px", padding: "5px" }}
//                         >
//                             <option value="5">5</option>
//                             <option value="10">10</option>
//                             <option value="20">20</option>
//                             <option value="50">50</option>
//                         </select>
//                     </label>
//                 </div>

//                 {/* Items list */}

//                 <ul style={{ listStyle: "none", padding: "0" }} >
//                     {currentItems.map((item) => (
//                         <li key={item.id} style={{
//                             padding: '15px',
//                             marginBottom: '10px',
//                             border: '1px solid #ddd',
//                             borderRadius: '5px'
//                         }}>

//                             <h3>{item.title}</h3>
//                             <p> {item.body}</p>
//                             <small>Post id :{item.id}</small>
//                         </li>
//                     ))}
//                 </ul>
//                 {/* Pagination Buttons */}
//                 <button onClick={() => paginate(currentpage - 1)}
//                     disabled={currentpage === 1}
//                     style={{
//                         padding: '8px 15px',
//                         margin: '0 5px',
//                         cursor: currentpage === 1 ? 'not-allowed' : 'pointer'
//                     }}
//                 > previous</button>

//                 {/* Page numbers */}
//                 {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
//                     <button key={number}
//                         onClick={() => paginate(number)}
//                         style={{
//                             padding: '8px 12px',
//                             margin: '0 3px',
//                             backgroundColor: currentpage === number ? '#007bff' : '#f8f9fa',
//                             color: currentpage === number ? 'white' : 'black',
//                             border: '1px solid #ddd',
//                             cursor: 'pointer'
//                         }}
//                     >{number}</button>

//                 ))}

//                 <button onClick={() => paginate(currentpage + 1)}
//                     disabled={currentpage === totalPages}
//                     style={{
//                         padding: '8px 15px',
//                         margin: '0 5px',
//                         cursor: currentpage === totalPages ? 'not-allowed' : 'pointer'
//                     }}
//                 >
//                     Next

//                 </button>
//                 <form />
//             </div>
//         </div>
//     )
// }

// export default App;
 