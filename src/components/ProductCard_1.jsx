
const ProductCard=(props)=>{

    const{name,price,image}=props;

    return(
        <div className=" rounded-lg p-6 shadow-xl bg-white w-[350px]">
            <img src={image} alt={name} className="w-[400px] h-auto  rounded-lg shadow-xl"/>
            <h2 className="text-lg font-bold mt-2">{name}</h2>
            <p className="text-md text-gray-600">Rs.{price}</p>


        </div>
    )
}

export default ProductCard;