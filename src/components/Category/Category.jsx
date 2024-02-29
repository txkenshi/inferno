import './Category.css'
export default function Category({image, name}) {
    return (
        <>
            <div className="category">
                <img src={image} alt="" />
                <p>{name}</p>
            </div>
        </>
    )
}