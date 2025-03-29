import React from 'react'
import {BrowserRouter as Router,
  Routes,
  Route,
}from "react-router-dom"
import PrivateRoute from './routes/PrivateRoute'
import Dashboard from './pages/User/Dashboard'

const App = () => {
  return (
    <div>
    <Router>
  <Routes>
    <Route path="/login" element={<Login />}/>
    <Route path='/signUp' element ={<SignnUp/>}/>
    {/*Admin Routes */}


    <Route element = {<PrivateRoute allowedRoles={["admin"]}/>}>
    <Route path='/admin/dashboard' element = {<Dashboard />} />
    <Route path="admin/tasks" element={<ManageTasks/>}/>
    <Route path='/admin/crreate-tasks' element={<CreateTask/>} />
    <Route path='/admin/users' element={<ManageUsers/>} />
    </Route>
    </Routes>
  </Router>
    </div>
  )
}

export default App
