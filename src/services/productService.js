export async function getProductList(searchTerm){
    // const response = await fetch(`${process.env.REACT_APP_HOST}/444/products?name_like=${searchTerm ? searchTerm : ""}`);
    const response = await fetch(`${process.env.REACT_APP_HOST}/api/products?name_like=${searchTerm ? searchTerm : ""}`); //netlify
    if(!response.ok){
        throw { message: response.statusText, status: response.status }; //eslint-disable-line
    }
    const data = await response.json()
    return data;
}

export async function getProduct(id){
    // const response = await fetch(`${process.env.REACT_APP_HOST}/444/products/${id}`);
        const response = await fetch(`${process.env.REACT_APP_HOST}/api/products/${id}`); //netlify
    if(!response.ok){
        throw { message: response.statusText, status: response.status }; //eslint-disable-line
    }
    const data = await response.json()
    return data;
}

export async function getFeaturedList(){
    // const response = await fetch(`${process.env.REACT_APP_HOST}/444/featured_products`);
    const response = await fetch(`${process.env.REACT_APP_HOST}/api/featured_products`); //netlify
    if(!response.ok){
        throw { message: response.statusText, status: response.status }; //eslint-disable-line
    }
    const data = await response.json()
    return data;
}