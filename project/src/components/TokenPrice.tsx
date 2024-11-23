import React from 'react';
import { ExternalLink } from 'lucide-react';

const BuyButton = () => {
  return (
    <a
      href="https://raydium.io/swap" // Replace with actual DEX link when available
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
    >
      <span className="text-xl font-bold text-white">Buy Now</span>
      <ExternalLink className="w-5 h-5" />
    </a>
  );
};

export default BuyButton;