import React from 'react';
import { Flame, Rocket, Lock } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen relative text-white overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://i.imgur.com/2qQTWt7_d.webp?maxwidth=760&fidelity=grand)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(8px)',
        }}
      />
      
      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen bg-black bg-opacity-50">
        <div className="container mx-auto px-4 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold mb-4 shake">
              KANYERUG
            </h1>
            <p className="text-2xl shake-slow">
              🔥 Dev Tokens Getting Burned 🔥
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: <Flame className="shake-fast" size={40} />, label: 'Dev tokens burned', value: '1,000,000' },
              { icon: <Rocket className="shake" size={40} />, label: 'Supporters', value: '87' },
              { icon: <Lock className="shake-slow" size={40} />, label: 'Dex Paid', value: 'at 10k mc' },
            ].map((stat, index) => (
              <div key={index} className="bg-white bg-opacity-10 rounded-lg p-6 text-center transform hover:scale-105 transition-transform duration-300">
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{stat.label}</h3>
                <p className="text-3xl font-bold">{stat.value}</p>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="inline-block shake">
              <button 
                onClick={() => window.open('https://dexscreener.com/search?q=kanyerug', '_blank', 'noopener,noreferrer')}
                className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-yellow-500 hover:to-orange-500 text-white font-bold py-4 px-8 rounded-full text-xl group relative transform hover:scale-110 transition-all duration-300"
              >
                <span className="block group-hover:hidden">Buy $KANYERUG</span>
                <span className="hidden group-hover:block">First token on Dexscreener</span>
              </button>
            </div>
            
            <div className="mt-8 grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              <a href="https://x.com/KanyeRug" className="block p-4 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-all duration-300 shake-slow">
                <h3 className="font-bold mb-2">Join Our Community</h3>
                <p>Connect with fellow holders and stay updated</p>
              </a>
              <a href="https://x.com/KanyeRug" className="block p-4 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-all duration-300 shake-slow">
                <h3 className="font-bold mb-2">View Chart</h3>
                <p>Track $KANYERUG's moon mission</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
