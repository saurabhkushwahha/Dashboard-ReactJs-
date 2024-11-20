import React from 'react'

function ToggleSwitch({ label, isOn, onToggle }) {
  return (
    <div className='flex items-center justify-between py-2 '>
      <span className='text-gray-300'>{label}</span>
      <button
        className={`relative inline-flex rounded-full items-center  h-6 w-11 transition-colors focus:outline-none
          ${isOn ? 'bg-indigo-700' : 'bg-gray-700'}
        `}
        onClick={onToggle}
      >
        <span
          className={`inline-block size-4 transform transition-transform bg-white rounded-full
           ${isOn ? "translate-x-6" : "translate-x-1"}
           `}
        />
      </button>
    </div>
  )
}

export default ToggleSwitch