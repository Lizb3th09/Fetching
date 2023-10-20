import { getProductDummy } from '@/libs/obtenerProductos';
import TarjetaProductoDummy from '../src/components/TarjetaProductoDummy';


const DummyPageApi = async () => {

    const response = await getProductDummy();
    const products = response.products; // Accede a la propiedad "products"

    console.log(products);

        return (
        <div>

            <div className='p-5 mx-auto text-center max-w-3xl  bg-zinc-900'>
                {products.map((item) => (
                    <TarjetaProductoDummy item={item} />

                    ))} 
                
            </div>
        </div>
    )
}
export default DummyPageApi