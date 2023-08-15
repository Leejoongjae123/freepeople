'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios';


export default function page() {
    const [productName,setProductName]=useState("")
    const [color,setColor]=useState("")
    const [category,setCategory]=useState("")
    const [price,setPrice]=useState("")
    
    const [items,setItems] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://f36dcjopejicrmfh3tq2bavmbe0ljydb.lambda-url.ap-northeast-2.on.aws/getProducts', {
                params: {
                  'platform': '',
                  'page': '1',
                  'keyword': '꼬치',
                  'sortby': '',
                  'sortorder': ''
                },
              });
            setItems(response.data.slice(0,10))
        } catch (error) {
          console.error('Error fetching data:', error);
          
        }
      };

    useEffect(()=>{
        fetchData();
    },[])

    const onChange = (event) => {
        const {
          target: { name, value }
        } = event
        if (name === 'productName') {
          setProductName(value)
        } else if (name === 'color') {
          setColor(value)
        } else if(name==='category'){
          setCategory(value)
        } else if(name==='price'){
          setPrice(value)
        }

      }  
    console.log(productName,color,category,price)

    let onClick=()=>{
        let newItem = {
            productName: productName,
            color: color,
            category: category,
            price: price,
          };
    let newItems = [...items, newItem];
    setItems(newItems)
    }
    const deleteItem = (index) => {
        // 해당 인덱스의 요소를 제외한 새 배열을 생성
        const newItems = items.filter((_, i) => i !== index);
        // 새 상태를 설정하여 컴포넌트의 상태를 업데이트
        setItems(newItems);
      };


      const increaseLike = (index) => {
        const updatedItems = [...items];
        updatedItems[index].demandCount++;
        setItems(updatedItems);
        
      };
      console.log(items)

  return (
    <div>
        <div className="lg:relative overflow-x-auto mx-10 my-10 sm:relative overflow-x-auto mx-10 my-10">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Product name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Color
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Category
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                            LikeCount
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map((item,index)=>(
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"key={index}>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {item.title}
                                </th>
                                <td className="px-6 py-4">
                                {item.platform}
                                </td>
                                <td className="px-6 py-4">
                                {item.applyCount}
                                </td>
                                <td className="px-6 py-4">
                                {item.myImage}
                                </td>
                                <td className="px-6 py-4">
                                {item.demandCount}
                                <button type="button" onClick={()=>{increaseLike(index)}} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">+</button>
                                </td>
                                <td>
                                <button type="button" onClick={()=>{deleteItem(index)}} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">삭제</button>
                                </td>
                            </tr>
                        )
                        )
                    }

                    
                </tbody>
            </table>
        </div>    
        <form className='mx-10' >
            <div className="grid gap-6 mb-6 md:grid-cols-4">
                <div>
                    <label htmlFor="productName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">PRODUCT NAME</label>
                    <input name="productName"value={productName} onChange={onChange} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="MacBook" />
                </div>
                <div>
                    <label htmlFor="color" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">COLOR</label>
                    <input name="color" value={color} onChange={onChange} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="WHITE" />
                </div>
                <div>
                    <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">CATEGORY</label>
                    <input name="category" value={category} onChange={onChange} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Laptop" />
                </div>  
                <div>
                    <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">PRICE</label>
                    <input name="price" value={price} onChange={onChange} type="tel" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="$1000" />
                </div>
                
            </div>
            <button type='button' onClick={onClick} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">추가</button>
        </form>
    </div>
  )
}

