import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import GetAllEmployeesComponent from './components/GetAllEmployeesComponent/GetAllEmployeesComponent';
import AddNewEmployeeComponent from './components/AddNewEmployeeComponent/AddNewEmployeeComponent';
import EditEmployeeComponent from './components/EditEmployeeComponent/EditEmployeeComponent';
import DeleteEmployeeComponent from './components/DeleteEmployeeComponent/DeleteEmployeeComponent';



function App() {
  return (
    <Router>
            <div className="container">
              <h1>Employee Management App</h1>
              
            <nav className="nav-menu">
                <Link to="/">Home</Link>
                <Link to="/admin/add" >Add Employee</Link>
                <Link to="/admin/edit" >Edit Employees</Link>
                <Link to="/admin/delete" >Delete Employees</Link>
            </nav>
           <Routes>
                 <Route exact path='/' element={<GetAllEmployeesComponent/>}></Route>
                 <Route path='/admin/add' element={<AddNewEmployeeComponent/>}></Route>
                 <Route path='/admin/edit' element={<EditEmployeeComponent/>}></Route>
                 <Route path='/admin/delete' element={<DeleteEmployeeComponent/>}></Route>
          </Routes>
          </div>
       </Router>
  );
}

export default App;
