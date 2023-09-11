import React from 'react'

export default function SearchCard1() {
  return (
    <div>
      <div className="container w-full px-4 mx-auto sm:px-8">
        <div className="py-8">
            <div className="flex flex-row justify-between w-full mb-1 sm:mb-0">
                <h2 className="text-2xl leading-tight font-bold">
                    정당정책정보
                </h2>
                <div className="flex gap-x-2 text-end">
                  <select defaultValue="BIG" id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option >선거종류</option>
                    <option value="BIG">대선</option>
                    <option value="ALL">총선</option>
                    <option value="REST">지선</option>
                  </select>
                  <select defaultValue="BIG" id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option >지역구1</option>
                    <option value="BIG">대선</option>
                    <option value="ALL">총선</option>
                    <option value="REST">지선</option>
                  </select>
                  <select defaultValue="BIG" id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option >지역구2</option>
                    <option value="BIG">대선</option>
                    <option value="ALL">총선</option>
                    <option value="REST">지선</option>
                  </select>
                </div>
                </div>
                <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
                    <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
                        <table className="min-w-full leading-normal">
                            <thead>
                                <tr>
                                    <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                        User
                                    </th>
                                    <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                        Role
                                    </th>
                                    <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                        Created at
                                    </th>
                                    <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                        status
                                    </th>
                                    <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0">
                                                <a href="#" className="relative block">
                                                    <img alt="profil" src="/images/person/8.jpg" className="mx-auto object-cover rounded-full h-10 w-10 "/>
                                                </a>
                                            </div>
                                            <div className="ml-3">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    Jean marc
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                        <p className="text-gray-900 whitespace-no-wrap">
                                            Admin
                                        </p>
                                    </td>
                                    <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                        <p className="text-gray-900 whitespace-no-wrap">
                                            12/09/2020
                                        </p>
                                    </td>
                                    <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                        <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                                            <span aria-hidden="true" className="absolute inset-0 bg-green-200 rounded-full opacity-50">
                                            </span>
                                            <span className="relative">
                                                active
                                            </span>
                                        </span>
                                    </td>
                                    <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                            Edit
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0">
                                                <a href="#" className="relative block">
                                                    <img alt="profil" src="/images/person/9.jpg" className="mx-auto object-cover rounded-full h-10 w-10 "/>
                                                </a>
                                            </div>
                                            <div className="ml-3">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    Marcus coco
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                        <p className="text-gray-900 whitespace-no-wrap">
                                            Designer
                                        </p>
                                    </td>
                                    <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                        <p className="text-gray-900 whitespace-no-wrap">
                                            01/10/2012
                                        </p>
                                    </td>
                                    <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                        <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                                            <span aria-hidden="true" className="absolute inset-0 bg-green-200 rounded-full opacity-50">
                                            </span>
                                            <span className="relative">
                                                active
                                            </span>
                                        </span>
                                    </td>
                                    <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                            Edit
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0">
                                                <a href="#" className="relative block">
                                                    <img alt="profil" src="/images/person/10.jpg" className="mx-auto object-cover rounded-full h-10 w-10 "/>
                                                </a>
                                            </div>
                                            <div className="ml-3">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    Ecric marc
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                        <p className="text-gray-900 whitespace-no-wrap">
                                            Developer
                                        </p>
                                    </td>
                                    <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                        <p className="text-gray-900 whitespace-no-wrap">
                                            02/10/2018
                                        </p>
                                    </td>
                                    <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                        <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                                            <span aria-hidden="true" className="absolute inset-0 bg-green-200 rounded-full opacity-50">
                                            </span>
                                            <span className="relative">
                                                active
                                            </span>
                                        </span>
                                    </td>
                                    <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                            Edit
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0">
                                                <a href="#" className="relative block">
                                                    <img alt="profil" src="/images/person/6.jpg" className="mx-auto object-cover rounded-full h-10 w-10 "/>
                                                </a>
                                            </div>
                                            <div className="ml-3">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    Julien Huger
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                        <p className="text-gray-900 whitespace-no-wrap">
                                            User
                                        </p>
                                    </td>
                                    <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                        <p className="text-gray-900 whitespace-no-wrap">
                                            23/09/2010
                                        </p>
                                    </td>
                                    <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                        <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                                            <span aria-hidden="true" className="absolute inset-0 bg-green-200 rounded-full opacity-50">
                                            </span>
                                            <span className="relative">
                                                active
                                            </span>
                                        </span>
                                    </td>
                                    <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                            Edit
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>


        </div>
      )
}
