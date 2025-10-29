import { Bot } from 'lucide-react';
import React from 'react'

function Header() {
  return (
    <header>
      <div className="flex items-center justify-between max-w-5xl mx-auto">
        {/* left side content */}
        <div className='flex items-center space-x-3'>
          <div className='p-2 bg-linear-to-r from bg-purple-500 to-indigo-600 rounded-full'>
            <Bot className='h-6 w-6 text-white' />
          </div>
          <h1 className='text-xl font-bold'>Smart Chat</h1>
        </div>
      </div>
    </header>
  );
}

export default Header