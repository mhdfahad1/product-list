import React from 'react'

function ProductDetails() {
  return (
    <>
    <div className='flex justify-center'>
        <div className='mt-10'>
            <h1 className='text-3xl'>Details</h1>
            <div className='mt-7'>
                <img width={'400px'} height={'400px'} src="https://www.bing.com/th?id=OIP.8REXGT1HGlUTXd1N_u5ZGAHaIO&w=146&h=162&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" alt="" />
                <div className='flex justify-between'>
                    <div className='p-3'>
                        <h2>Paruppu vada</h2>
                        <p>15$</p>
                    </div>
                    <div className='flex p-4 ml-10'>
                        <button className='p-2 btn'>-</button>
                        <button className='btn border p-3'>1</button>
                        <button className='p-2 btn'>+</button>
                    </div>
                </div>
            </div>
            <p className='text-center items-center w-[400px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint repellat  inventore laudantium at provident?</p>
        </div>

    </div>

</>  )
}

export default ProductDetails