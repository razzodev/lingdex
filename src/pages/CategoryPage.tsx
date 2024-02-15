import WordBanner from '../components/WordBanner';
import { useEffect, useState } from 'react'
import mockCategories from '../mockData/category.json'
import mockWords from '../mockData/words.json'
import { useParams } from 'react-router-dom'

function CategoryPage() {
    const { id } = useParams();
    const [words, setWords] = useState([])
    const [isReady, setIsReady] = useState(false);
    const [category, setCategory] = useState(null)

    useEffect(() => {
        async function fetchData() {
            let allWords = []
            let idArray = []
            try {
                const categories = mockCategories; 
                const ind = categories.findIndex((item) => item.id == id)
                idArray = categories[ind].items;
                setCategory(categories[ind].label)
                idArray.map(i => allWords.push(mockWords[i]))
                setWords(allWords);
            }
            catch (err) {}
        }
        fetchData().then(() => setIsReady(true))
    }, [])

    return (
        <>
        <h3>{category ? category : 'loading...'}</h3>
            {!isReady ? <p>loading...</p> : (words.map(w => <WordBanner key={w.id} data={w} />))}
        </>
    )
}

export default CategoryPage



