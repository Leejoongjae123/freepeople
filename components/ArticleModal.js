import React from 'react'

export default function ArticleModal({closeModal}) {


  return (
    <>
    <div id="staticModal" data-modal-backdrop="static" tabindex="-1" aria-hidden="true" className="inset-0 fixed flex items-center justify-center z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div className="relative w-full max-w-2xl max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

                <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        빅카인즈 8월 1주차
                    </h3>
                    <button onClick={closeModal} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="staticModal">
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                    </button>
                </div>

                <div className="flex p-6 space-y-6 justify-center">
                  <img src="https://shop-phinf.pstatic.net/20221220_60/1671512155404m34vw_JPEG/72647989066429637_1719202779.jpg?type=m510" alt="" />
                    
                </div>

                <div className="flex p-6 space-y-6 ">
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    빅카인즈 워드 클라우드 너무 좋아요 최고에요 멋져요 잘했어요 칭찬해요 확인해요
                  </p>
                    
                </div>

                <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                    <button onClick={closeModal} data-modal-hide="staticModal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">확인</button>
                </div>
            </div>
        </div>
    </div>      
  </>

  )
}
