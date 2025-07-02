const ItemList = (resData) => {
    return (
        <div className="items-center flex flex-col">
            {
                resData.data.filterData.map((item) => (
                    <div key= {item.card.info.id} className="border-b-1 border-orange-700 flex"> 
                        <div className="w-100" > 
                            <h1 className="font-bold text-lg text-left p-1">{item.card.info.name}</h1>
                            <h2 className="font-medium text-left px-1">Price: ₹ {item.card.info.price/100}</h2>
                            <h2 className="font-normal text-left px-1">Rating: {item.card.info.ratings.aggregatedRating.rating} ⭐</h2>
                            <p className="text-left font-extralight p-1"> {item.card.info.description} </p>
                        </div>
                        <div className="m-2">
                            <img className="w-40 h-40 content-center rounded-md" 
                            src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" + item.card.info.imageId}></img>
                            <div className="mx-12 my-1 p-1 w-16 bg-amber-950 text-amber-50 rounded-sm hover:bg-amber-900">
                                Add +
                            </div>
                        </div>
                        </div>
                ))
            }
            </div>
    )
}

export default ItemList;