
/**
 * Datos obtenidos de
 * @returns 
 */

export async function getProductFake(){
  
      const response = await fetch('https://fakestoreapi.com/products')
      return response.json();
  
  
  }
  
  export async function getProductDummy(){
    
      const response = await fetch('https://dummyjson.com/products')
      return response.json();
  
  }
  