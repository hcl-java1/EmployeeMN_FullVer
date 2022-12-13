import React, { useEffect, useState } from 'react'
import axios from 'axios';



const EditEmployee = ({ defaultValues = {}, onSubmit }) => {
    const [values, setValues] = useState(defaultValues)
    


    useEffect(() => {
        setValues(defaultValues)
    }, [defaultValues])

    const onChange = (event) => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value })
        console.log(values)

    }
    const submitEmployee = (e) => {
        e.preventDefault();
        axios.post("http://host.docker.internal:8094/updateEmployee", {
            eno: values.eno,
            ename: values.ename,
            email: values.email,
            address: values.address,
            phone: values.phone,
            dept: values.dept

        })
            .then((res) => {
                if (res.status === 200) {
                    axios
                        .get('http://host.docker.internal:8094/')
                        .then((res) => {
                            setValues(res.data)
                            window.location.reload();
                        })
                        .catch((err) => console.error('err', err));
                }
            })
    }
    return (
        <div id="editEmployeeModal" className="modal fade">
            <div className="modal-dialog">
                <div className="modal-content">
                    <form onSubmit={submitEmployee} method="post">
                        <div className="modal-header">
                            <h4 className="modal-title">Edit Employee</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        </div>

                        <div className="modal-body">
                            <div className="form-group">
                                <label>Id</label>
                                <input type="text" className="form-control" name="eno" value={values.eno} disabled="disabled" />
                            </div>

                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" className="form-control" name="ename" value={values.ename} onChange={onChange} required
                                />
                            </div>

                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" className="form-control" name="email" required value={values.email} onChange={onChange} />
                            </div>

                            <div className="form-group">
                                <label>Address</label>
                                <textarea className="form-control" name="address" required value={values.address} onChange={onChange}></textarea>
                            </div>

                            <div className="form-group">
                                <label>Phone</label>
                                <input type="text" className="form-control" name="phone" required value={values.phone} onChange={onChange} />
                            </div>

                            <div className="form-group">
                                <label>Department</label>
                                <input type="text" className="form-control" name="dept" required value={values.dept} onChange={onChange} />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <input type="button" id='cancelButton' className="btn btn-default" data-dismiss="modal" value="Cancel" />
                            <input type="submit" id='saveButton' className="btn btn-info" value="Save" />
                            {/* <input type="submit" id='saveButton' className="btn btn-info" onClick={(event) => {
                                event.preventDefault();
                                onSubmit(values)
                            }} value="Save" /> */}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditEmployee