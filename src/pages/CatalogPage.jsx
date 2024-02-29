import Filter from "../components/Filter/Filter";
import Item from "../components/Item/Item";
import Sorting from "../components/Sorting/Sorting";
import { useState } from "react";
import { Products } from "../data";
import Search from "../components/Search/Search";

export default function CatalogPage() {

    const [query, setQuery] = useState("")
    const [sorting, setSorting] = useState('default')

    const onSortingChange = (event) => {
        setSorting(event.target.value)
    }

    const onChacngeQuery = (event) => {
        setQuery(event.target.value)
    }

    const filterProducts = Products.filter((item) =>

        item.name.toLowerCase().includes(query.toLocaleLowerCase())

    )

    const sortProducts = (sorting, products) => {
        switch (sorting) {
            case 'priceAscending':
                return [...products].sort((a, b) => a.price - b.price)
            case 'priceDescending':
                return [...products].sort((a, b) => b.price - a.price)
            case 'nameA':
                return [...products].sort((a, b) => a.name.localeCompare(b.name))
            case 'nameZ':
                return [...products].sort((a, b) => b.name.localeCompare(a.name))
            default:
                return products
        }
    }

    const fullSorting = sortProducts(sorting, filterProducts)
    return (
        <>
            <div className="container">
                <div className="flex">


                    <Filter />
                    <div className="catalog-column">
                        <div className="forSearch">
                            <Search query={query} onChangeQuery={onChacngeQuery} />
                            <Sorting sorting={sorting} onSortingChange={onSortingChange} />
                        </div>

                        <div className="catalogPage">
                            {
                                fullSorting.length ? (
                                    fullSorting.map((product, index) => (
                                        <Item key={index} {...product} />
                                    ))
                                ) : (
                                    <h2>По запросу `{query}` ничего не найдено :( </h2>
                                )
                            }
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}