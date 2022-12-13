import axios from 'axios';
import React, { useState, useEffect } from 'react'
import AddEmployeeModal from '../views/AddEmployee';
import EditEmployeeModal from '../views/EditEmployee';
import DeleteEmployeeModal from './DeleteEmployee';

const Home = () => {
    const [employees, setEmployee] = useState([]);
    const [deleteId, setDeleteId] = useState();
    const [search, setSearch] = useState();



    const getData = async () => {
        try {
            const response = await axios
                .get('http://host.docker.internal:8094/')
                .then((res) => {
                    return res.data
                });
            setEmployee(response)
        } catch (error) {
            console.log(error);
        }


    }

    useEffect(() => {
        getData()
    }, []);
    const [editEmployee, setEditEmployee] = useState([])

    const handleEdit = async (values) => {
        console.log('values', values)
        // try {
        //     const resp = await axios.post()
        //      await getData()
        // } catch (error) {

        // }
    }

    const searchKey = (event) => {
        const { name, value } = event.target;
        setSearch({ [name]: value })
    }
    const find = () => {
        console.log(search)
        if (search.search === '') {
            window.location.reload();
        }
        axios.get("http://host.docker.internal:8094/search", {
            params: {
                keyword: search.search
            }
        }).then((res) => {
            setEmployee(res.data)
        })
    }
    const enterSearch=(event)=>{
        if(event.keyCode === 13){
            find()
        }
    }

    return (
        //---------------------------------

        <div className="wrapper">
            <div className="body-overlay"></div>
            {/* <!-------------------------sidebar------------> */}
            {/* <!-- Sidebar  --> */}
            <nav id="sidebar">
                <div className="sidebar-header">
                    <h3><img
                        src="https://cdn.shopify.com/s/files/1/0508/3001/6705/products/uzumaki_clan-10x10_1024x1024.png?v=1604308185"
                        className="img-fluid" alt='' /><span>TEAM 1</span></h3>
                </div>
                <ul className="list-unstyled components">
                    <li className="active">
                        <a href='#' className='dashboard'><i className="material-icons">dashboard</i>
                            <span>Dashboard</span></a>
                    </li>
                </ul>
            </nav>
            {/* <--------page-content----------------> */}

            <div id="content">

                {/* <!--top--navbar----design---------> */}

                <div className="top-navbar">
                    <div className="xp-topbar">

                        {/* <!-- Start XP Row --> */}
                        <div className="row">
                            {/* <!-- Start XP Col --> */}
                            <div className="col-2 col-md-1 col-lg-4 order-2 order-md-1 align-self-center">
                                <div className="xp-menubar">
                                    <span className="material-icons text-white">signal_cellular_alt
                                    </span>
                                </div>
                            </div>
                            {/* <!-- End XP Col --> */}

                            {/* <!-- Start XP Col --> */}
                            <div className="col-md-5 col-lg-4 order-3 order-md-3">
                                <div className="xp-searchbar">

                                    <div className="input-group">
                                        <input type="search" className="form-control" id="keyword" name="search" onKeyDown={enterSearch} onChange={searchKey} placeholder="Search" />
                                        <div className="input-group-append">
                                            <button type='button' className="btn" onClick={find} id="button-addon2">GO</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End XP Col --> */}

                            {/* <!-- Start XP Col --> */}
                            <div className="col-10 col-md-6 col-lg-3 order-1 order-md-3">
                                <div className="xp-profilebar text-right">
                                    <nav className="navbar p-0">
                                        <ul className="nav navbar-nav flex-row ml-auto">
                                            <li className="dropdown nav-item active">
                                                <a href="/" className="nav-link" data-toggle="dropdown">
                                                    <span className="page-title"></span>
                                                    <span className="material-icons">notifications</span>
                                                    <span className="notification">1</span>
                                                </a>
                                                <ul className="dropdown-menu">
                                                    <li>
                                                        <a href="/">Welcome to T1Emp !!!</a>
                                                    </li>

                                                </ul>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="/">
                                                    <span className="material-icons">question_answer</span>

                                                </a>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <a className="nav-link" href="/" data-toggle="dropdown">
                                                    <img src="https://memehay.com/meme/20210817/avatar-vit-vang-naruto.jpg"
                                                        style={{ width: "40px", borderRadius: "50%" }} alt='' />
                                                    <span className="xp-user-live"></span>
                                                </a>
                                                <ul className="dropdown-menu small-menu">
                                                    <li>
                                                        <a href="/">
                                                            <span className="material-icons">person_outline</span>Profile
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/"><span className="material-icons">settings</span>Settings</a>
                                                    </li>
                                                    <li>
                                                        <a href="/"><span className="material-icons">logout</span>Logout</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>


                                    </nav>

                                </div>
                            </div>
                            {/* <!-- End XP Col --> */}

                        </div>
                        {/* <!-- End XP Row --> */}

                    </div>
                    <div className="xp-breadcrumbbar text-center">
                        <h4 className="page-title">Dashboard</h4>
                    </div>

                </div>



                {/* <!--------main-content-------------> */}

                <div className="main-content">
                    <div className="row">

                        <div className="col-md-12">
                            <div className="table-wrapper">
                                <div className="table-title">
                                    <div className="row">
                                        <div className="col-sm-6 p-0 d-flex justify-content-lg-start justify-content-center">
                                            <h2 className="ml-lg-2">Manage Employees</h2>
                                        </div>
                                        <div className="col-sm-6 p-0 d-flex justify-content-lg-end justify-content-center">
                                            <a href="#addEmployeeModal" className="btn btn-success" data-toggle="modal">
                                                <i className="material-icons">&#xE147;</i> <span>Add New Employee</span></a>
                                        </div>
                                    </div>
                                </div>
                                <table className="table table-striped table-hover">
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Address</th>
                                            <th>Phone</th>
                                            <th>Department</th>
                                            <th>Actions</th>

                                        </tr>
                                    </thead>
                                    <tbody id="listcontent">
                                        {employees && employees
                                            //.sort((a, b) => a > b ? 1 : -1)
                                            .map((employee) => {
                                                return (
                                                    <tr >
                                                        <td>{employee.eno}</td>
                                                        <td>{employee.ename}</td>
                                                        <td>{employee.email}</td>
                                                        <td>{employee.address}</td>
                                                        <td>{employee.phone}</td>
                                                        <td>{employee.dept}</td>
                                                        <td>
                                                            <a href="#editEmployeeModal" id='editButton' onClick={() => { setEditEmployee(employee) }} className="edit" data-toggle="modal">
                                                                <i className="material-icons" title="Edit">&#xE254;</i>
                                                            </a>
                                                            <a href="#deleteEmployeeModal" id='deleteButton' onClick={() => { setDeleteId(employee.eno) }} className="delete" data-toggle="modal">
                                                                <i className="material-icons" title="Delete">&#xE872;</i></a>
                                                        </td>
                                                    </tr>
                                                )
                                            })}

                                    </tbody>
                                </table>
                                <div className="clearfix">
                                    <div className="hint-text">Showing <b>4</b> out of <b>20</b> entries</div>
                                    <ul className="pagination">
                                        <li className="page-item disabled"><a href="#">Previous</a></li>
                                        <li className="page-item active"><a href="#" className="page-link">1</a></li>
                                        <li className="page-item"><a href="#" className="page-link">2</a></li>
                                        <li className="page-item"><a href="#" className="page-link">3</a></li>
                                        <li className="page-item"><a href="#" className="page-link">4</a></li>
                                        <li className="page-item"><a href="#" className="page-link">5</a></li>
                                        <li className="page-item"><a href="#" className="page-link">Next</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Add Modal HTML --> */}
                        <AddEmployeeModal />
                        {/* <!-- Edit Modal HTML --> */}
                        <EditEmployeeModal defaultValues={editEmployee} onSubmit={value => {
                            handleEdit(value)
                        }} />
                        {/* <!-- Delete Modal HTML --> */}
                        <DeleteEmployeeModal id={deleteId} />


                    </div>


                    {/* <!---footer----> */}


                </div>

                <footer className="footer">
                    <div className="container-fluid">
                        <div className="footer-in">
                            <p className="mb-0">Team 1</p>
                        </div>
                    </div>
                </footer>


            </div>
        </div>
    )
}

export default Home