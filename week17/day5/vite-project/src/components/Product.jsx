import { useParams } from "react-router-dom";
const Product=(props)=>{
    const params=useParams();

    return(
        <>
        <h2>Product name:{params.name}</h2>
        <h2>Product id:{params.id}</h2>
        </>
    )
}

export default Product;