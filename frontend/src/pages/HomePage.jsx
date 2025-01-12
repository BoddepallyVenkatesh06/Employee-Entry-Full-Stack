import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { BsPersonWorkspace } from 'react-icons/bs'
import { MdPersonAddAlt1 } from 'react-icons/md'


const LoadingSkeleton = () => {
  return (
    <div className="border border-gray-800 shadow rounded-md p-4 w-full mx-auto ">
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-full bg-slate-700 h-10 w-10"></div>
        <div className="flex-1 space-y-6 py-1">
          <div className="h-2 bg-slate-700 rounded"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-700 rounded col-span-2"></div>
              <div className="h-2 bg-slate-700 rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-slate-700 rounded"></div>
          </div>
        </div>
      </div>
    </div>)
}

const TableRow = ({ person }) => {
  return (
    <tr className='hover:bg-gray-800 duration-200 cursor-pointer '>
      <td className='p-4 whitespace-nowrap '>
        <div className='flex items-center'>
          {/* Profile image */}
          <div className='h-10 w-10 flex flex-shrink'>
            <img src={person?.image} className=' h-10 w-10 rounded-full object-cover' alt='profile' />
          </div>

          <div className='ml-4'>
            <p className='text-sm font-medium capitalize'>{person?.username}</p>
            <p className='text-sm font-medium '>{person?.email}</p>
          </div>
        </div>
      </td>

      <td className='p-4 whitespace-nowrap capitalize'>
        <p className='text-sm '>{person?.title}</p>
        <p className='text-sm text-gray-300'>{person?.department}</p>
      </td>

      <td className='px-4 py-4 whitespace-nowrap text-sm text-gray-300 capitalize'>
        <p>{person?.role}</p>
      </td>
    </tr>)
}


const HomePage = () => {

  const [empData, setEmpData] = useState();
  const [loading, setLoading] = useState(false);


  // fetching data from api
  const getAllUsersData = async () => {
    setLoading(true);
    try {
      const getPeople = await fetch(
        `${import.meta.env.VITE_APP_BASE_URL}/getallUsers`,
        // "http://localhost:4000/api/v1/getallUsers",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // const getPeople  = await fetch('http://localhost:4000/api/v1/getallUsers')

      const res = await getPeople.json();
      setEmpData(res?.data);
      setLoading(false);
    }

    catch (error) {
      console.log("Error while fetching data from frontend - ", error);
      setLoading(false);
    }
  }

  // effect hook 
  useEffect(() => {
    getAllUsersData();
  }, [])

  console.log('empData --> ', empData);


  return (
    <section className='p-4 mx-auto container text-white '>
      <div className='flex flex-col sm:flex-row sm:items-center  justify-between '>
        <div>
          <h2 className='text-lg font-medium flex items-center gap-2'>Employees<BsPersonWorkspace /> </h2>
          <p className='text-sm mt-1 text-gray-300'>This is a list of all employees. You can add new employees, edit or delete existing ones.</p>
        </div>

        {/* form filling button */}
        <Link to='/addemployee'>
          <button className='flex items-center gap-2 mt-4 sm:mt-0 bg-indigo-700 hover:bg-indigo-600 px-3.5 py-1.5 rounded-lg text-sm font-semibold leading-7 duration-200 '>
            Add Employee <MdPersonAddAlt1 className='w-5 h-5' />
          </button>
        </Link>
      </div>


      <div className="flex flex-col mt-6 px-4 sm:px-0">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">

            {/* data in table */}
            <div className='overflow-hidden border border-gray-700 rounded-xl  '>
              <table className='min-w-full divide-y divide-gray-700 '>
                {/* heading of table */}
                <thead className='bg-gray-800'>
                  <tr className=''>
                    <th scope="col" className='py-3.5 px-4 text-lg font-normal text-left rtl:text-right text-gray-400'>
                      <span>Employee</span>
                    </th>
                    <th scope="col" className='py-3.5 px-4 text-lg font-normal text-left rtl:text-right text-gray-400'>
                      <span>Title</span>
                    </th>
                    <th scope="col" className='py-3.5 px-4 text-lg font-normal text-left rtl:text-right text-gray-400'>
                      <span>Role</span>
                    </th>
                  </tr>
                </thead>


                {/* table body */}
                <tbody className='divide-y divide-gray-700 bg-gray-900'>
                  {
                    !loading &&
                    empData?.map((person) => (
                      <TableRow key={person.id} person={person} />
                    ))
                  }
                </tbody>
              </table>

              {loading && (
                <>
                  <LoadingSkeleton />
                  <LoadingSkeleton />
                  <LoadingSkeleton />
                  <LoadingSkeleton />
                </>
              )}

            </div>
          </div>
        </div>
      </div>
    </section>




  )
}

export default HomePage;