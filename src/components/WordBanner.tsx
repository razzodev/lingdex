import './WordBanner.css'

function WordBanner({ data }) {
    const { translation } = data;
    let currLang = "Thai";
    const index = data.instances.findIndex((j) => j.lang === currLang);
    const variations = data.instances[index].variations

    return (
        <div className='word-banner-wrapper'>
            <h3 className='translation'>{translation}</h3>
            <p className='phonetic'>{variations[0].phonetic}</p>
            <p className='original-language'>{variations[0].original}</p>
            <p className='desc'>{variations[0].desc}</p>
        </div >
    )
}

export default WordBanner