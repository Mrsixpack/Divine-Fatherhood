/**
 * AI Tools Component
 * Component for AI-powered tools and integrations
 */

'use client';

import React, { useState } from 'react';
import { geminiService } from '@/services/geminiService';
import Icons from './Icons';

interface AIToolsProps {
  className?: string;
}

export const AITools: React.FC<AIToolsProps> = ({ className = '' }) => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);
    try {
      const result = await geminiService.generateContent(input);
      setResponse(result);
    } catch (error) {
      console.error('AI Tools Error:', error);
      setResponse('Error generating response. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`ai-tools ${className}`}>
      <div className="flex items-center gap-2 mb-4">
        <Icons.ai className="w-6 h-6" />
        <h2 className="text-xl font-semibold">AI Tools</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter your prompt..."
            className="w-full p-3 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
            disabled={loading}
          />
        </div>

        <button
          type="submit"
          disabled={loading || !input.trim()}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Generating...' : 'Generate'}
        </button>
      </form>

      {response && (
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold mb-2">Response:</h3>
          <p className="whitespace-pre-wrap">{response}</p>
        </div>
      )}
    </div>
  );
};

export default AITools;
