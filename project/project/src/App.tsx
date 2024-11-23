import React from 'react';
import SpinningLogo from './components/SpinningLogo';
import BuyButton from './components/TokenPrice';
import { SendIcon, TwitterIcon, WalletIcon, ArrowRightIcon, CoinsIcon } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen relative text-white overflow-hidden bg-black">
      {/* Background wrapper with gradient overlay */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div 
          className="w-full h-full bg-center bg-no-repeat"
          style={{
            backgroundImage: `
              linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.3) 30%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0.8)),
              linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0.3) 20%, rgba(0,0,0,0.3) 80%, rgba(0,0,0,1)),
              url("https://i.imgur.com/jvF0bhq.png")
            `,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundColor: '#000'
          }}
        />
      </div>

      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/50 border-b border-[#E7B355]/20">
        <div className="container mx-auto px-4">
          <nav className="flex justify-between items-center h-20">
            <div className="flex items-center gap-4">
              <SpinningLogo />
              <span className="text-2xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#E7B355] to-purple-500">
                $ARCANE
              </span>
            </div>
            <div className="flex items-center gap-6">
              <a 
                href="#" 
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#E7B355]/30 hover:border-[#E7B355] transition-all hover:bg-[#E7B355]/10"
              >
                <TwitterIcon className="w-5 h-5" />
                <span className="hidden sm:inline">Twitter</span>
              </a>
              <a 
                href="#" 
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#E7B355]/30 hover:border-[#E7B355] transition-all hover:bg-[#E7B355]/10"
              >
                <SendIcon className="w-5 h-5" />
                <span className="hidden sm:inline">Telegram</span>
              </a>
            </div>
          </nav>
        </div>
      </header>
      
      <div className="relative container mx-auto px-4 py-12 pt-32">
        <main className="flex flex-col items-center text-center gap-8 mt-24">
          <h1 className="mb-4">
            <img 
              src="https://i.imgur.com/BwBpeaA.png"
              alt="Arcane Token Logo"
              className="w-full h-auto max-w-xs mx-auto"
            />
          </h1>
          
          <p className="text-2xl text-gray-200 max-w-2xl backdrop-blur-sm bg-black/20 p-4 rounded-lg tracking-wider">
            Enter the world of Piltover and Zaun with the first memecoin inspired by the hit series Arcane
          </p>

          <p className="text-xl text-gray-200 max-w-2xl backdrop-blur-sm bg-black/20 p-4 rounded-lg font-bold tracking-widest">
            CA : 
          </p>

          <BuyButton />

          <div className="mt-16 w-full max-w-4xl">
            <h2 className="text-3xl font-black mb-8 text-[#E7B355] tracking-wider text-glow">How to Buy</h2>
            <div className="grid gap-6">
              <div className="how-to-buy-card bg-black/40 backdrop-blur-md p-6 rounded-xl border border-[#E7B355]/30">
                <div className="flex items-center gap-4 mb-4">
                  <WalletIcon className="w-8 h-8 text-[#E7B355]" />
                  <h3 className="text-xl font-bold tracking-wide">1. Create a Solana Wallet</h3>
                </div>
                <p className="text-gray-300 tracking-wide">Download Phantom or any Solana-compatible wallet. Create a new wallet and securely store your recovery phrase.</p>
              </div>

              <div className="how-to-buy-card bg-black/40 backdrop-blur-md p-6 rounded-xl border border-[#E7B355]/30">
                <div className="flex items-center gap-4 mb-4">
                  <CoinsIcon className="w-8 h-8 text-[#E7B355]" />
                  <h3 className="text-xl font-bold tracking-wide">2. Get SOL</h3>
                </div>
                <p className="text-gray-300 tracking-wide">Purchase SOL from an exchange and transfer it to your wallet address.</p>
              </div>

              <div className="how-to-buy-card bg-black/40 backdrop-blur-md p-6 rounded-xl border border-[#E7B355]/30">
                <div className="flex items-center gap-4 mb-4">
                  <ArrowRightIcon className="w-8 h-8 text-[#E7B355]" />
                  <h3 className="text-xl font-bold tracking-wide">3. Swap on Raydium</h3>
                </div>
                <p className="text-gray-300 tracking-wide">Connect your wallet to Raydium, paste the token address, and swap your SOL for $ARCANE.</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;