import React, { useState } from 'react'
import axios from 'axios'
const DeleteEmployee = (id) => {
    const deleteEmployee = (e) => {
        e.preventDefault()
        axios.delete("http://host.docker.internal:8094/delete",{
            params:{
                id:id.id
            }
        })
        .then((res)=>{
            if(res.status === 200){
                window.location.reload()
            }
        })
    }

    return (
        <div id="deleteEmployeeModal" className="modal fade">
            <div className="modal-dialog">
                <div className="modal-content">
                    <form >
                        <div className="modal-header">
                            <h4 className="modal-title">Delete Employee</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        </div>
                        <div className="modal-body">
                            <p>Are you sure you want to delete?</p>
                            <p className="text-danger "><b>This action cannot be undone.</b></p>
                        </div>
                        <div className="modal-footer">
                            <input type="submit" id='deleteButton' className="btn btn-danger" onClick={deleteEmployee} value="Delete" />
                            <input type="button" id='cancelButton' className="btn btn-default" data-dismiss="modal" value="Cancel" />

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default DeleteEmployee