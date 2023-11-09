import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addtoCart } from '../redux/cartSlice'


function Product() {
    const [product, setProduct] = useState([])
    const dispatch=useDispatch()
    console.log(product);
    const products = async () => {
        const data = await fetch("http://localhost:4000/products")
        const response = data.json().then((res) => {
            setProduct(res)


            // console.log(productArray);
        }).catch((err) => {
            console.log(err);
        })
        // console.log(response);
    }

    const addOne=()=>{

    }
    useEffect(() => {
        products()
    })
    return (
        <>
            <div className='w-[100%] h-[60px] fixed bg-lime-600 flex justify-between p-2'>
                <p className='text-3xl text-zinc-100'>Total $45</p>
                <button className='btn btn-light mr-5 w-[100px]'>Cart</button>

            </div>
            <div className='flex justify-center'>
                <div className=''>
                    <h1 className='text-4xl mt-16'>Canteen</h1>

                    {
                        product.map(item => (
                            <div className='flex shadow mt-3 p-6'>
                                <img width={'100px'} src={item.image} alt="" />
                                <div className='p-3'>
                                    <h2>{item.productName}</h2>
                                    <p>{item.price}$</p>
                                </div>
                                <div className='flex p-4'>
                                    <button className='p-2 btn'>-</button>
                                    <button className='btn border p-3'>1</button>
                                    <button onClick={()=>dispatch(addtoCart(item))} className='p-2 btn'>+</button>
                                </div>
                            </div>
                        ))

                    }


                </div>

            </div>

        </>)
}

export default Product