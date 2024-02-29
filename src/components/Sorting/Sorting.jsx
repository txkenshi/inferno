import './Sorting.css'
export default function Sorting({ sorting, onSortingChange }) {
    return (
        <>
            <div className="sorting">
                <p>Сортировать</p>
                <select id="filter" value={sorting} onChange={onSortingChange}>
                    <option value="default">По умолчанию</option>
                    <option value="priceAscending">По возростанию цены</option>
                    <option value="priceDescending">По убыванию цены</option>
                    <option value="nameA">По названию (A-Z)</option>
                    <option value="nameZ">По названию (Z-A)</option>
                </select>
            </div>
        </>
    )
}