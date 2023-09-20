import React from 'react';

const VideoBenefitsScreen = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-400">
      <div className="bg-white rounded-lg p-8 shadow-md w-full md:w-2/3 lg:w-1/2 xl:w-1/3">
        <h2 className="text-2xl font-semibold mb-4">Beneficios del Producto</h2>
        <div className="aspect-w-16 aspect-h-9 mb-4">
          <iframe
            title="Video de beneficios del producto"
            width="560"
            height="315"
            src="https://www.youtube.com/watch?v=j65L6eB34m0" // Cambiada la URL a la URL de embebido
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <p>En este video podrás ver los increíbles beneficios de nuestro producto.</p>
      </div>
    </div>
  );
};

export default VideoBenefitsScreen;





