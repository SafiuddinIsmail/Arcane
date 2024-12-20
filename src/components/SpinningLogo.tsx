import React from 'react';

const SpinningLogo = () => {
  return (
    <div className="animate-[float_4s_ease-in-out_infinite] relative w-12 h-12">
      <div 
        className="w-full h-full overflow-hidden"
        style={{
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
          boxShadow: '0 0 20px rgba(231, 179, 85, 0.5)',
          border: '2px solid #E7B355'
        }}
      >
        <img 
          src="https://www.whatrecords.co.uk/media/s_products/s_products108346a.jpg"
          alt="Logo"
          className="w-full h-full object-cover absolute top-0 left-0"
        />
      </div>
    </div>
  );
};

export default SpinningLogo;