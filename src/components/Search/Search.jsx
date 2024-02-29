import './Search.css'

export default function Search({ query, onChangeQuery }) {
    return (
        <>
            <div className="search">
                
                <input type="search" placeholder='Поиск...' name="search" value={query} onChange={(event) => onChangeQuery(event)} />
            </div>

        </>
    )
}