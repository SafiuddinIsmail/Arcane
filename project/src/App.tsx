import React from 'react';
import SpinningLogo from './components/SpinningLogo';
import BuyButton from './components/TokenPrice';
import { SendIcon, TwitterIcon } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen relative text-white overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://i.imgur.com/pv7mwFq.jpeg")',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundColor: '#000'
          
        }}
      >
      </div>
      
      <div className="relative container mx-auto px-4 py-12">
        <nav className="flex justify-between items-center mb-16">
          <SpinningLogo />
          <div className="flex gap-6">
            <a href="#" className="hover:text-cyan-400 transition-colors">
              <TwitterIcon className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors">
              <SendIcon className="w-6 h-6" />
            </a>
          </div>
        </nav>

        <main className="flex flex-col items-center text-center gap-8 mt-24">
          <h1 className="mb-4">
            <img 
            src="https://i.imgur.com/BwBpeaA.png" // Replace this with the image URL
            alt="Arcane Token Logo"
            className="w-full h-auto max-w-xs mx-auto" // Adjust the size as needed
            />
          </h1>

          
          <p className="text-xl text-gray-200 max-w-2xl backdrop-blur-sm bg-black/20 p-4 rounded-lg">
            Enter the world of Piltover and Zaun with the first memecoin inspired by the hit series Arcane
          </p>

          <BuyButton />

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              {
                title: "Powered by Solana",
                description: "Lightning-fast transactions with minimal fees"
              },
              {
                title: "Community Driven",
                description: "100% community owned and governed"
              },
              {
                title: "No mint",
                description: "Fixed amount of Arcane in the wild"
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="bg-black/40 backdrop-blur-md p-6 rounded-xl border border-[#E7B355]/30 hover:border-[#E7B355] transition-all"
              >
                <h3 className="text-xl font-bold mb-2 text-[#E7B355]">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;