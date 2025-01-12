import React, { useState } from 'react'

const FormInput = (props) => {

    const { id, label, onChange, name, placeholder, value, errorMessage, pattern, type } = props;

    const [focused, setFocused] = useState(false);


    return (
        <div>
            <label
                htmlFor={name}
                className='text-base font-medium text-gray-200 '
            >
                {label}
            </label>

            <div className='mt-2.5 flex flex-col'>
                <input
                    type={`${type}` || 'text'}
                    id={id}
                    value={value}
                    name={name}
                    placeholder={placeholder}
                    onChange={onChange}
                    required
                    pattern={pattern}
                    onBlur={() => setFocused(true)}
                    focused={focused.toString()}
                    
                    className={`text-gray-200 flex h-10 w-full rounded-md bg-transparent border border-gray-600 px-3 py-2 text-sm
                    placeholder:text-gray-400 focus:outline-none ${focused ? '' : 'focus:ring-1'} focus:ring-gray-400 focus:ring-offset-1`}
                />

                <span className='text-sm text-red-500 pt-1 hidden show '>{errorMessage}</span>
            </div>
        </div>
    )
}

export default FormInput