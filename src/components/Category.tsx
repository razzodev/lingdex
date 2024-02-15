import React from 'react'
import "./Catgeory.css"
import { Link } from 'react-router-dom'



function Category({ data }) {
    const { id, icon, label } = data;
    return (
        <Link to={`/category/${id}`}>
            <div className='category-wrapper'>
                <div className='category-content'>

                    <i className={`bi ${icon}`}></i>
                    <span className='category-label'>{label}</span>
                </div>
                <i className={`bi bi-chevron-right action-icon`}></i>
            </div>
        </Link>
    )
}

export default Category