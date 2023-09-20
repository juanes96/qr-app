import React from 'react';
import QRCode from 'qrcode.react';
import Typical from 'react-typical';

const QRScreen = () => {
  const qrData = 'https://qrneon.netlify.app/data-capture';

  const titleSteps = [
    'NEON', 
    1000,   
    'Descubre',  
    1000,   
    'El Futuro ', 
    1000,
    'Tecnologico',
    1000   
  ];

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-purple-600">
      <div className="bg-white rounded-lg p-8 shadow-md text-center">
        <h1 className="text-4xl text-purple-600 font-semibold mb-6">
          <Typical steps={titleSteps} loop={Infinity} wrapper="span" />
        </h1>
        <QRCode value={qrData} size={200} className="mx-auto mb-6" />
        <p className="text-gray-600 text-lg">
          Escanee el código QR para acceder a la URL.
        </p>
      </div>
    </div>
  );
};

export default QRScreen;




