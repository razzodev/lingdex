import { useEffect, useState } from 'react'
import mockData from '../mockData/category.json'
import Category from '../components/Category'
import {Link} from 'react-router-dom'
function CategoryList() {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        loadData()
    }, [])

    const loadData = async () => {
        // categoryData = (await fetch('../mockData/category.json'))
        setCategories(mockData)
    };

    // const handleClick = (id)=> <Link to={`/category/:${id}`}/>
    return (
        <>
            {categories && categories.map((i) => <Category key={i.id} data={i} />)}
        </>
    )
}

export default CategoryList