import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';






  const DataCaptureScreen = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [formErrors, setFormErrors] = useState({ name: false, phone: false, email: false });
 

    
  const navigate = useNavigate();
   

  const handleContinue = async () => {
  // Realizar validaciones
  const errors = {};
  if (!name.trim()) {
    errors.name = true;
  }
  if (!phone.trim()) {
    errors.phone = true;
  } else if (!/^\d{10}$/.test(phone)) {
    errors.phone = 'invalid';
  }
  if (!email.trim()) {
    errors.email = true;
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.email = 'invalid';
  }

  // Si hay errores, establecerlos en el estado
  if (Object.keys(errors).length > 0) {
    setFormErrors(errors);
  } else {
    // Si no hay errores, continuar
    setFormErrors({});
    try {
      const response = await fetch('http://localhost:3001/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, phone, email })
      });

      const data = await response.json();
      if (data.success) {
        

           navigate('/video-benefits');
       
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error('Error al enviar el correo', error);
    }
  }
};



  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-400">
      <div className="bg-white rounded-lg p-8 shadow-md w-full md:w-2/3 lg:w-1/2 xl:w-1/3">
        <h2 className="text-2xl font-semibold mb-4">Bienvenido</h2>
        <input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={`w-full p-3 mb-4 border rounded-lg ${formErrors.name ? 'border-red-500' : ''}`}
        />
        {formErrors.name && <p className="text-red-500 mb-2">El nombre es obligatorio</p>}
        <input
          type="tel"
          placeholder="Teléfono"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className={`w-full p-3 mb-4 border rounded-lg ${formErrors.phone ? 'border-red-500' : ''}`}
        />
        {formErrors.phone && <p className="text-red-500 mb-2">El teléfono es obligatorio</p>}
        <input
          type="email"
          placeholder="Correo Electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`w-full p-3 mb-4 border rounded-lg ${formErrors.email ? 'border-red-500' : ''}`}
        />
        {formErrors.email && <p className="text-red-500 mb-2">El correo es obligatorio</p>}
        <button
          onClick={handleContinue}
          className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold py-3 rounded-lg animate-neon hover:from-pink-600 hover:to-red-600"
        >
          Continuar
        </button>
        <Link to="/qr" className="block mt-4 text-center text-blue-500 hover:underline">
          Volver a escanear QR
        </Link>
      </div>
    </div>
  );
};

export default DataCaptureScreen; 





