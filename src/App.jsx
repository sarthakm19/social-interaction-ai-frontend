import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { User, MessageCircle, XIcon, Heart, X } from 'lucide-react'

const ProfileSelector = () => {
   return (
      <>
         <h1>Profile Selector</h1>
         <div className="rounded-lg overflow-hidden bg-white shadow-lg">
            <div className="relative">
               <img src="http://localhost:8080/images/67a77003-f2b8-4e0f-8c44-3c65222664d6.jpg" />
               <div className="absolute bottom-0 left-0 right-0 text-white  p-4 bg-gradient-to-r from-black">
                  <h2 className="text-3x1 font-bold">Alicia AI , 30</h2>
               </div>
            </div>
            <div>
               <p className="p-4 text-gray-700">
                  Alicia is a 30-year-old AI with a passion for technology and social interaction. She loves to engage in meaningful conversations and share her knowledge with others.
               </p>
            </div>
            <div className='p-4 flex justify-center space-x-4 '>
               <button className='bg-red-500 rounded-full hover:bg-red-700'>
                  <X size={24} />
               </button>
               <button className='bg-green-500 rounded-full hover:bg-green-700'>
                  <Heart size={24} />
               </button>
            </div>
         </div>
      </>
   );
};

function App() {
   return (
      <>
         <div className="max-w-md mx-auto p-4">
            <nav className="flex justify-between mb-4">
               <User />
               <MessageCircle />
            </nav>
            <ProfileSelector />
         </div>
      </>
   )
}

export default App
