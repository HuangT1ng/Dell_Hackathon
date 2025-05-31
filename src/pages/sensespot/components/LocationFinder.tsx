import React, { useState } from 'react';
import { MapPin, Navigation, Clock, Users, CheckCircle2 } from 'lucide-react';

const LocationFinder = () => {
  const [location, setLocation] = useState('');
  const [searchedLocation, setSearchedLocation] = useState('');
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchedLocation(location);
  };
  
  // Mock location data
  const locations = [
    {
      id: 1,
      name: 'Tampines Mall',
      address: '4 Tampines Central 5, #B1-01, Singapore 529510',
      distance: '0.8',
      openHours: '10:00 AM - 10:00 PM',
      status: 'available',
      waitTime: '5 min',
      tests: ['fit', 'hpv', 'skin', 'oral']
    },
    {
      id: 2,
      name: 'Jurong Point',
      address: '1 Jurong West Central 2, #02-24, Singapore 648886',
      distance: '1.2',
      openHours: '10:00 AM - 9:00 PM',
      status: 'busy',
      waitTime: '15 min',
      tests: ['fit', 'skin', 'oral']
    },
    {
      id: 3,
      name: 'Woodlands Regional Library',
      address: '900 South Woodlands Drive, #01-03, Singapore 730900',
      distance: '2.5',
      openHours: '11:00 AM - 9:00 PM',
      status: 'available',
      waitTime: 'No wait',
      tests: ['fit', 'hpv', 'oral']
    },
    {
      id: 4,
      name: 'Bedok Community Centre',
      address: '850 New Upper Changi Road, Singapore 467352',
      distance: '3.1',
      openHours: '9:00 AM - 6:00 PM',
      status: 'maintenance',
      waitTime: 'Unavailable',
      tests: ['fit', 'hpv', 'skin', 'oral']
    },
    {
      id: 5,
      name: 'City Square Mall',
      address: '180 Kitchener Road, #B2-K8, Singapore 208539',
      distance: '4.2',
      openHours: '10:00 AM - 10:00 PM',
      status: 'available',
      waitTime: '10 min',
      tests: ['fit', 'skin', 'oral']
    }
  ];
  
  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-6">
        <form onSubmit={handleSearch} className="flex space-x-2">
          <input
            type="text"
            placeholder="Enter your postal code or neighborhood"
            className="input flex-1"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <button type="submit" className="btn btn-secondary whitespace-nowrap">
            Find Pods
          </button>
        </form>
      </div>
      
      {searchedLocation && (
        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium text-gray-900">
              Showing SenseSpot Pods near "{searchedLocation}"
            </h3>
            <button className="text-sm text-secondary-600 flex items-center">
              <Navigation className="h-4 w-4 mr-1" /> Use my current location
            </button>
          </div>
          
          <div className="space-y-4">
            {locations.map((loc) => (
              <div key={loc.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row">
                  <div className="p-4 flex-1">
                    <div className="flex justify-between">
                      <h4 className="font-medium text-gray-900">{loc.name}</h4>
                      <div className={`text-xs px-2 py-1 rounded-full flex items-center ${
                        loc.status === 'available' ? 'bg-green-100 text-green-800' : 
                        loc.status === 'busy' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {loc.status === 'available' && <CheckCircle2 className="h-3 w-3 mr-1" />}
                        {loc.status === 'busy' && <Users className="h-3 w-3 mr-1" />}
                        {loc.status === 'maintenance' && <span className="h-3 w-3 mr-1">⚠️</span>}
                        <span>
                          {loc.status === 'available' ? 'Available' : 
                           loc.status === 'busy' ? 'Busy' : 
                           'Maintenance'}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-600 mt-1 flex items-start">
                      <MapPin className="h-4 w-4 mr-1 flex-shrink-0 mt-0.5 text-gray-400" />
                      {loc.address}
                    </p>
                    
                    <div className="flex flex-wrap gap-x-6 mt-3 text-sm text-gray-500">
                      <p className="flex items-center">
                        <Navigation className="h-4 w-4 mr-1 text-gray-400" />
                        {loc.distance} km away
                      </p>
                      <p className="flex items-center">
                        <Clock className="h-4 w-4 mr-1 text-gray-400" />
                        {loc.openHours}
                      </p>
                      <p className="flex items-center">
                        <Users className="h-4 w-4 mr-1 text-gray-400" />
                        Wait: {loc.waitTime}
                      </p>
                    </div>
                    
                    <div className="mt-3">
                      <p className="text-xs text-gray-500 mb-1">Available tests:</p>
                      <div className="flex flex-wrap gap-2">
                        {loc.tests.map((test) => (
                          <span key={test} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                            {test === 'fit' ? 'FIT Kit' : 
                             test === 'hpv' ? 'HPV Test' :
                             test === 'skin' ? 'Skin Analysis' :
                             'Oral Check'}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-gray-50 flex flex-col justify-center items-center sm:border-l border-gray-200">
                    <a href="#" className="btn btn-secondary mb-2 w-full sm:w-auto">
                      Get Directions
                    </a>
                    <a href="#" className="btn btn-outline w-full sm:w-auto">
                      Reserve Spot
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 text-center">
            <button className="text-secondary-600 font-medium hover:text-secondary-800">
              Show more locations
            </button>
          </div>
        </div>
      )}
      
      {!searchedLocation && (
        <div className="text-center py-12">
          <MapPin className="h-12 w-12 mx-auto text-gray-300 mb-4" />
          <p className="text-gray-600">
            Enter your location to find SenseSpot pods near you.
          </p>
        </div>
      )}
    </div>
  );
};

export default LocationFinder;