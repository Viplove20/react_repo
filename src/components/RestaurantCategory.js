const RestaurantCategory = ({resData}) => {
    console.log('res data...' , resData)
    return (
        <div>
            <div className="w-6/12 bg-orange-200 p-4 mx-auto my-2 shadow-lg hover:bg-orange-300 flex justify-between text-lg font-bold">
                <span>{resData.category} {(resData.keys)}</span>
                <span>🔽</span>
            </div> 
            
            <div className="items-center flex flex-col">
            {
                resData.filterData.map((item) => (
                    <div key= {item.card.info.id} className="flex justify-between w-6/12">
                        <div className="bg-orange-100 m-2 w-9/12 content-start">
                            <h1 className="font-bold text-lg p-1">{item.card.info.name}</h1>
                            <h2 className="text-left p-1"> {item.card.info.description} </h2>
                            <h2 className="font-light text-left p-1">Price: {item.card.info.price/100}</h2>
                            <h3 className="font-extralight text-left p-1">Rating: {item.card.info.ratings.aggregatedRating.rating} ⭐</h3>
                        </div>
                        <div className="m-2">
                            <img className="w-40 h-40 content-center rounded-md" 
                            src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" + item.card.info.imageId}></img>
                        </div>
                        </div>
                ))
            }
            </div>
            
            
        </div>
           
    )
}

export default RestaurantCategory;