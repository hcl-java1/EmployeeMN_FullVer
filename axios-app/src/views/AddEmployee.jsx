import React, {useState} from 'react'
import axios from 'axios'

const AddEmployee = () => {
    const [newEmployee,setNewEmployee] = useState();

    const addEmployeeValue = (event) => {
        const {name,value} = event.target;
        setNewEmployee({...newEmployee,[name]:value})

    }

    const addEmployee = (e)=>{
        e.preventDefault();
        axios.post("http://host.docker.internal:8094/addEmployee", {
            ename: newEmployee.ename,
            email: newEmployee.email,
            address: newEmployee.address,
            phone: newEmployee.phone,
            dept: newEmployee.dept

        })
        .then((res)=>{
            if (res.status===200){
                window.location.reload()
            }
        })
    }

    return (
        <div id="addEmployeeModal" className="modal fade">
            <div className="modal-dialog">
                <div className="modal-content">
                    <form onSubmit={addEmployee} method="post">
                        <div className="modal-header">
                            <h4 className="modal-title">Add Employee</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" className="form-control" name="ename" onChange={addEmployeeValue}
                                required
                                />
                                
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" className="form-control" name="email" onChange={addEmployeeValue} required />
                            </div>
                            <div className="form-group">
                                <label>Address</label>
                                <textarea className="form-control" name="address" required onChange={addEmployeeValue}></textarea>
                            </div>
                            <div className="form-group">
                                <label>Phone</label>
                                <input type="text" className="form-control" name="phone" required onChange={addEmployeeValue}/>
                            </div>

                            <div className="form-group">
                                <label>Department</label>
                                <input type="text" className="form-control" name="dept" required onChange={addEmployeeValue}/>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <input type="button" id='cancelButton' className="btn btn-default" data-dismiss="modal" value="Cancel" />
                            <input type="submit" id='addButton' className="btn btn-success" value="Add" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddEmployee