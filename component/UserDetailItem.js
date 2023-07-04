import { useRouter } from 'next/router';
import React from 'react'

function UserDetailItem({ userDetail }) {
    const router = useRouter()
    function editVisaApplication(e) {
        e.preventDefault();
        const id = e.currentTarget.getAttribute('data-id');
        router.push({
            pathname: '/apply/visaform',
            query: { loggedIn: true, isEdit: true, _id: id }
        }, '/apply/visaform');
    }
    return (
        <div className='col-md-4'>
            <div className="card" style={{ "width": "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title">Tourist Visa</h5>
                    <p className="card-text"></p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{userDetail.firstName}</li>
                    <li className="list-group-item">{userDetail.lastName}</li>
                    <li className="list-group-item">{userDetail.email}</li>
                </ul>
                <div className="card-body">
                    <a data-id={userDetail._id} href="#" className="card-link" onClick={editVisaApplication}>
                        Edit
                    </a>
                    <a data-id={userDetail._id} href="#" className="card-link">Delete</a>
                </div>
            </div>
        </div>
    )
}

export default UserDetailItem