export const fetchCategories = async () => {
    try {
        const response = await fetch(`https://fakestoreapi.com/products/categories`)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch(error) {
        console.warn("Error: ", error)
        throw error;
    }
}
export const fetchProducts = async () => {
    try {
        const response = await fetch(`https://fakestoreapi.com/products`)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json()
    } catch(error) {
        console.warn("Error: ", error)
        throw error;
    }
}