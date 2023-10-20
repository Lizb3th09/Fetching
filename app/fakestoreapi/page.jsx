import { getProductFake } from '@/libs/obtenerProductos';
import TarjetaProductoFake from '../src/components/TarjetaProductoFake';

const DummyPageApi = async () => {

    const data = await getProductFake();
    console.log(data);
    
    return (
      <div className='items-center justify-center'>

            <div className='p-5 mx-auto text-center max-w-3xl bg-zinc-900   '>
              {data.map((item) => (
                <TarjetaProductoFake item={item} />

                ))}
              <div></div>
            </div>
      </div>
  )
}
export default DummyPageApi