import React,{useEffect} from 'react'
import EmployeeImg from './../assets/Employee img.jpeg'
import { useNavigate } from 'react-router-dom'

import { TbArrowBackUp } from 'react-icons/tb'
import EmployeeForm from './../components/EmployeeForm';
import { toast } from 'react-hot-toast';


const CreateEmployeePage = () => {

  const navigate = useNavigate();

  // if user click on go back button then there will be confirmation toast
  const showConfirmationToast = () => {
    toast((t) => (
      <p>
        <span className='font-medium'>Don't want to Entry ?</span>
        <button onClick={() => { navigate('/'); toast.dismiss(); }}
          className='bg-red-600 hover:bg-red-500 p-2 rounded-lg mx-2 font-medium text-white'
        >
          Yes
        </button>
        <button onClick={() => toast.dismiss(t.id)}
          className='bg-green-600 hover:bg-green-500 p-2 rounded-lg font-medium text-white'
        >
          No
        </button>
      </p>
    ));
  }




  return (
    <section className='min-h-screen bg-black'>
      <div className="grid grid-cols-1 lg:grid-cols-2">

        <div className="relative flex items-end px-4 pb-10 pt-60 sm:px-6 sm:pb-16 md:justify-center lg:px-8 lg:pb-24">
          <div className="absolute inset-0 h-full w-full">
            <img
              className="h-full w-full object-cover object-center"
              src={EmployeeImg}
              alt='Employee'
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

          <div className="relative">
            <div className="w-full max-w-xl xl:mx-auto xl:w-full xl:max-w-xl xl:pr-24">
              <h3 className="text-4xl font-bold text-white">
                Empower your business with our employee creation!
              </h3>
            </div>
          </div>
        </div>



        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
              Create a Employee
            </h2>

            <p className="mt-2 text-base text-gray-300">
              <button
                onClick={showConfirmationToast}
                className="font-medium text-indigo-600 transition-all duration-200 hover:text-indigo-700 hover:underline focus:text-indigo-700 flex items-center gap-3"
              >
                <TbArrowBackUp size='25' />
                Back to all Employee List
              </button>
            </p>

            <EmployeeForm />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CreateEmployeePage