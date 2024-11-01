import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Leaf, TreePine, Mail } from 'lucide-react';

export function Navbar() {
  const location = useLocation();
  
  return (
    <nav className="bg-gradient-to-r from-green-800 to-green-600 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-2 group">
              <Leaf className="h-6 w-6 transform group-hover:rotate-12 transition-transform" />
              <span className="font-bold text-xl">PlantLife</span>
            </Link>
            <div className="flex space-x-4">
              <Link 
                to="/" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === '/' 
                    ? 'bg-green-700 text-white' 
                    : 'text-green-100 hover:bg-green-700'
                }`}
              >
                Plants
              </Link>
              <Link 
                to="/trees" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === '/trees' 
                    ? 'bg-green-700 text-white' 
                    : 'text-green-100 hover:bg-green-700'
                }`}
              >
                <div className="flex items-center space-x-1">
                  <TreePine className="h-4 w-4" />
                  <span>Wild Trees</span>
                </div>
              </Link>
              <Link 
                to="/contact" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === '/contact' 
                    ? 'bg-green-700 text-white' 
                    : 'text-green-100 hover:bg-green-700'
                }`}
              >
                <div className="flex items-center space-x-1">
                  <Mail className="h-4 w-4" />
                  <span>Contact</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}