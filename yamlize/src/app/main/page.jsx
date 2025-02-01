import React from 'react';
import { Menu, User } from 'lucide-react';

const Header = () => (
  <header className="border-b border-gray-200">
    <div className="flex items-center justify-between px-6 py-3">
      <div className="flex items-center space-x-3">
        <Menu className="h-6 w-6" />
        <div className="flex items-center">
          <img src="/api/placeholder/24/24" alt="Console Logo" className="h-6" />
          <span className="ml-2 font-semibold">Console</span>
        </div>
      </div>
      
      <nav className="flex items-center space-x-8">
        <a href="#" className="text-gray-600 hover:text-gray-900 flex items-center space-x-2">
          <span className="text-gray-400">⬚</span>
          <span>Dashboard</span>
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900 flex items-center space-x-2">
          <span className="text-gray-400">🛍</span>
          <span>Marketplace</span>
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900 flex items-center space-x-2">
          <span className="text-gray-400">🤖</span>
          <span>Models</span>
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900 flex items-center space-x-2">
          <span className="text-gray-400">▣</span>
          <span>Playground</span>
        </a>
      </nav>

      <div className="flex items-center space-x-4">
        <span className="text-gray-900">$ 0.00</span>
        <button className="bg-black text-white px-4 py-1.5 rounded text-sm font-medium">
          Deposit
        </button>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          Documentation
        </a>
        <User className="h-6 w-6" />
      </div>
    </div>

    <div className="bg-black text-white py-1 px-4 overflow-x-auto whitespace-nowrap">
      <div className="flex space-x-4 animate-scroll">
        {[...Array(6)].map((_, i) => (
          <React.Fragment key={i}>
            <div className="flex items-center space-x-1">
              <span className="text-green-400 text-xs">▶</span>
              <span>rtx6000-ada</span>
              <span className="bg-gray-700 px-1 rounded text-xs">a16</span>
              <span>$0.85/hr</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-green-400 text-xs">▶</span>
              <span>t1000</span>
              <span className="bg-gray-700 px-1 rounded text-xs">a1</span>
              <span>$0.06/hr</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-green-400 text-xs">▶</span>
              <span>rtx4090</span>
              <span className="bg-gray-700 px-1 rounded text-xs">450</span>
              <span>$0.27/hr</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-green-400 text-xs">▶</span>
              <span>h100</span>
              <span className="bg-gray-700 px-1 rounded text-xs">a8</span>
              <span>$2.46/hr</span>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  </header>
);

const YamlEditor = () => (
  <div className="bg-white rounded-lg shadow-sm border border-gray-200">
    <pre className="p-6 text-sm font-mono">
      <span className="text-blue-600">- community</span>
      <br />
      <span className="text-blue-600">compute:</span>
      <br />
      <span className="text-blue-600">{'  '}gpu-test:</span>
      <br />
      <span className="text-blue-600">{'    '}resources:</span>
      <br />
      <span className="text-blue-600">{'      '}cpu:</span>
      <br />
      <span className="text-blue-600">{'        '}units:</span>
      <span className="text-green-600"> 1</span>
      <br />
      <span className="text-blue-600">{'      '}memory:</span>
      <br />
      <span className="text-blue-600">{'        '}size:</span>
      <span className="text-green-600"> 20Gi</span>
      <br />
      <span className="text-blue-600">{'      '}storage:</span>
      <br />
      <span className="text-blue-600">{'        '}- size:</span>
      <span className="text-green-600"> 100Gi</span>
      <br />
      <span className="text-blue-600">{'      '}gpu:</span>
      <br />
      <span className="text-blue-600">{'        '}units:</span>
      <span className="text-green-600"> 1</span>
      <br />
      <span className="text-blue-600">{'        '}attributes:</span>
      <br />
      <span className="text-blue-600">{'          '}vendor:</span>
      <br />
      <span className="text-blue-600">{'            '}nvidia:</span>
      <br />
      <span className="text-blue-600">{'              '}- model:</span>
      <span className="text-green-600"> rtx4090</span>
      <br />
      <span className="text-blue-600">{'    '}placement:</span>
      <br />
      <span className="text-blue-600">{'      '}westcoast:</span>
      <br />
      <span className="text-blue-600">{'        '}attributes:</span>
      <br />
      <span className="text-blue-600">{'          '}region:</span>
      <span className="text-green-600"> us-central</span>
      <br />
      <span className="text-blue-600">{'    '}pricing:</span>
      <br />
      <span className="text-blue-600">{'      '}gpu-test:</span>
      <br />
      <span className="text-blue-600">{'        '}token:</span>
      <span className="text-green-600"> CST</span>
      <br />
      <span className="text-blue-600">{'        '}amount:</span>
      <span className="text-green-600"> 5</span>
      <br />
      <span className="text-blue-600">deployment:</span>
      <br />
      <span className="text-blue-600">{'  '}gpu-test:</span>
      <br />
      <span className="text-blue-600">{'    '}westcoast:</span>
      <br />
      <span className="text-blue-600">{'      '}profile:</span>
      <span className="text-green-600"> gpu-test</span>
      <br />
      <span className="text-blue-600">{'      '}count:</span>
      <span className="text-green-600"> 1</span>
    </pre>
  </div>
);

const Instructions = () => (
  <div className="space-y-6">
    <h2 className="text-lg font-semibold flex items-center justify-between">
      Playground Instructions:
      <a href="#" className="text-blue-600 text-sm hover:underline">Learn about ICL →</a>
    </h2>
    <ol className="space-y-4 list-decimal pl-4 text-gray-600">
      <li>Enter your deployment configuration in the required <span className="font-medium text-gray-900">YAML</span> format.</li>
      <li>
        Make sure you have enough test ETH in your wallet to cover the testing and deployment.{' '}
        <a href="#" className="text-blue-600 hover:underline">Get ETH from Faucet</a>{' '}
        or use Arbitrum Sepolia ETH and{' '}
        <a href="#" className="text-blue-600 hover:underline">bridge</a>{' '}
        it to the Spheron Chain to complete your registration.
      </li>
      <li>
        Check out{' '}
        <a href="#" className="text-blue-600 hover:underline">provider.spheron.network</a>{' '}
        or{' '}
        <a href="#" className="text-blue-600 hover:underline">fizz.spheron.network</a>{' '}
        to see the available GPUs and deployment regions.
      </li>
      <li>
        Click "Start Deployment" to start your deployment and see the output in real-time.
      </li>
    </ol>

    <div className="mt-8">
      <div className="bg-gray-100 rounded-lg aspect-video flex items-center justify-center">
        <img src="/api/placeholder/640/360" alt="Video Thumbnail" className="rounded-lg" />
      </div>
      <p className="mt-2 text-gray-600">
        Checkout this guide to know how to use playground to deploy on GPU.
      </p>
    </div>
  </div>
);

const SpheronInterface = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-6 py-8">
        <div className="flex justify-between items-start space-x-8">
          <div className="w-2/3">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Test Your Application in Real-Time</h1>
                <p className="text-gray-600 mt-1">Configure your deployment using the YAML CLI</p>
              </div>
              <button className="text-sm text-gray-500 hover:text-gray-700 px-3 py-1 rounded border border-gray-300">
                Clear
              </button>
            </div>
            <YamlEditor />
          </div>
          
          <div className="w-1/3">
            <button className="w-full bg-black text-white px-6 py-2.5 rounded font-medium mb-4">
              Start Deployment
            </button>
            <button className="w-full border border-gray-300 px-6 py-2.5 rounded font-medium mb-8">
              Get Sample YAML
            </button>
            <Instructions />
          </div>
        </div>
      </main>
    </div>
  );
};

export default SpheronInterface;