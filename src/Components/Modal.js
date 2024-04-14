import React from 'react';
import { ALL_IMAGE } from '../utils/constants/imageConstants';

function Modal() {
  return (
    <div class="fixed top-0 left-0 w-full h-full bg-opacity-80 bg-gray-900 flex justify-center items-center z-50">
        <div class="bg-white rounded-lg shadow-md p-8 text-center w-full max-w-md overflow-auto">
            <img alt='error-modal-image' src={ALL_IMAGE.WARNING} className='h-12 w-12 mx-auto mb-4'/>
            <h2 class="text-xl font-medium mb-2">Uh oh! Something went wrong.</h2>
            <p class="text-gray-600 mb-4">An unexpected error has occurred. Please try again later.</p>
            <button class="button w-full bg-red-500 hover:bg-red-700 text-white font-medium py-2 rounded-lg shadow transition duration-300 ease-in-out">Close</button>
        </div>
    </div>
  )
}

export default Modal;