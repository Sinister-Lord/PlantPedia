import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { ContactForm } from '../components/ContactForm';
import AnimatedLeaf from '../components/AnimatedLeaf';

export function Contact() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-green-50 to-white">
      <AnimatedLeaf />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-800 mb-4">Get in Touch</h1>
          <p className="text-lg text-green-600">Have questions about plants? We're here to help!</p>
        </header>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-green-800 mb-6">Contact Information</h2>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-green-700">
                <Mail className="h-5 w-5" />
                <span>1mahdihassan@008@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-green-700">
                <Phone className="h-5 w-5" />
                <span>+880 01971782781</span>
              </div>
              <div className="flex items-center space-x-3 text-green-700">
                <MapPin className="h-5 w-5" />
                <span>123 Botanical Garden Street<br />Green City, GC Road-104</span>
              </div>
            </div>



            <div className="mt-8">
              <h3 className="text-xl font-semibold text-green-800 mb-4">Hours of Operation</h3>
              <ul className="space-y-2 text-green-700">
                <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
                <li>Saturday: 10:00 AM - 4:00 PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-green-800 mb-6">Send us a Message</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}