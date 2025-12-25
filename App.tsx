/**
 * Main App Component
 */

import React from 'react';
import AITools from './src/components/AITools';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Divine Fatherhood
          </h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <AITools className="max-w-3xl mx-auto" />
        </div>
      </main>
    </div>
  );
}

export default App;
