import axios from "axios";

const baseApiUrl= import.meta.env.VITE_API_URL;

const getProducts=async()=>{
const response =await axios.get(`${baseApiUrl}/api/products`)

return response;


}


const getProductById=async(id)=>{
const response =await axios.get(`${baseApiUrl}/api/products/${id}`) 
return response;
}


export {getProducts,getProductById};