import React, { useState, useEffect } from 'react';
import { Product } from '@/data/products';

const shadeColors = ['Ice White', 'Walnut', 'Natural', 'Dark Brown'];
const uvColors = ['Grey UV', 'White UV', 'Beige UV'];
const parts = ['Door', 'Body', 'Shelves', 'Frame'];

const shadeColorMapping: { [key: string]: string } = {
  'Ice White': 'bg-gray-100',
  'Walnut': 'bg-yellow-800',
  'Natural': 'bg-yellow-600',
  'Dark Brown': 'bg-yellow-950'
};

const uvColorMapping: { [key: string]: string } = {
  'Grey UV': 'bg-gray-500',
  'White UV': 'bg-gray-200',
  'Beige UV': 'bg-amber-200'
};

interface PartConfig {
  finish: 'Shade' | 'UV';
  color: string;
}

interface PartConfigs {
  [key: string]: PartConfig;
}

interface ProductCustomizationUIProps {
  product: Product;
  onConfigurationChange: (summary: string) => void;
  onFinishModeChange: (mode: string) => void;
}

const ProductCustomizationUI: React.FC<ProductCustomizationUIProps> = ({ product, onConfigurationChange, onFinishModeChange }) => {
  const [selectedSize, setSelectedSize] = useState(product.sizeOptions?.[0] || '');
  const [finishMode, setFinishMode] = useState('Full Shade');
  const [selectedShade, setSelectedShade] = useState(shadeColors[0]);
  const [selectedUv, setSelectedUv] = useState(uvColors[0]);

  const initialPartConfig = parts.reduce<PartConfigs>((acc, part) => {
    acc[part] = { finish: 'Shade', color: shadeColors[0] };
    return acc;
  }, {});

  const [partConfig, setPartConfig] = useState<PartConfigs>(initialPartConfig);

  useEffect(() => {
    let summary = `Size: ${selectedSize}, Finish Mode: ${finishMode}`;
    if (finishMode === 'Full Shade') {
      summary += `, Color: ${selectedShade}`;
    } else if (finishMode === 'Full UV') {
      summary += `, Color: ${selectedUv}`;
    } else {
      summary += ', Parts: ' + Object.entries(partConfig).map(([part, config]) => `${part}: ${config.finish} - ${config.color}`).join(', ');
    }
    onConfigurationChange(summary);
    onFinishModeChange(finishMode);
  }, [selectedSize, finishMode, selectedShade, selectedUv, partConfig, onConfigurationChange, onFinishModeChange]);

  const handlePartChange = (part: string, key: 'finish' | 'color', value: string) => {
    const newConfig = { ...partConfig };
    const updatedPart = { ...newConfig[part] };

    if (key === 'finish') {
        updatedPart.finish = value as 'Shade' | 'UV';
        updatedPart.color = value === 'Shade' ? shadeColors[0] : uvColors[0];
    } else {
        updatedPart.color = value;
    }
    
    newConfig[part] = updatedPart;
    setPartConfig(newConfig);
  };

  return (
    <div className="p-4 sm:p-8 max-w-4xl mx-auto bg-white font-sans">
      {product.sizeOptions && product.sizeOptions.length > 0 && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Size</h3>
          <div className="flex flex-wrap gap-3">
            {product.sizeOptions.map(size => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  selectedSize === size
                    ? 'bg-teal-700 text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Finish Mode</h3>
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-2 sm:space-y-0">
          {['Full Shade', 'Full UV', 'Custom Mix'].map(mode => (
            <label key={mode} className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="finishMode"
                value={mode}
                checked={finishMode === mode}
                onChange={() => setFinishMode(mode)}
                className="h-4 w-4 text-teal-700 border-gray-300 focus:ring-teal-700"
              />
              <span className="ml-2 text-gray-700">{mode}</span>
            </label>
          ))}
        </div>
      </div>

      {finishMode === 'Full Shade' && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Shade Color</h3>
          <div className="flex flex-wrap gap-4">
            {shadeColors.map(color => (
              <div 
                key={color}
                onClick={() => setSelectedShade(color)}
                className={`w-12 h-12 rounded-full cursor-pointer border-2 flex items-center justify-center transition-all duration-200 ${
                  selectedShade === color ? 'border-teal-700 scale-110' : 'border-gray-200'
                }`}
              >
                <div className={`w-10 h-10 rounded-full ${shadeColorMapping[color] || 'bg-gray-400'} border border-gray-300`}></div>
              </div>
            ))}
          </div>
        </div>
      )}

      {finishMode === 'Full UV' && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">UV Color</h3>
          <div className="flex flex-wrap gap-4">
            {uvColors.map(color => (
              <div 
                key={color}
                onClick={() => setSelectedUv(color)}
                className={`w-12 h-12 rounded-full cursor-pointer border-2 flex items-center justify-center transition-all duration-200 ${
                  selectedUv === color ? 'border-teal-700 scale-110' : 'border-gray-200'
                }`}
              >
                <div className={`w-10 h-10 rounded-full ${uvColorMapping[color] || 'bg-gray-400'} border border-gray-300`}></div>
              </div>
            ))}
          </div>
        </div>
      )}

      {finishMode === 'Custom Mix' && (
        <div className="mb-8 p-6 bg-white border border-gray-200 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Customize Parts</h3>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-semibold text-gray-600 px-4">
              <div>Part Name</div>
              <div className="hidden md:block">Finish</div>
              <div className="hidden md:block">Color</div>
            </div>
            {parts.map(part => (
              <div key={part} className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center border-t border-gray-200 pt-4 px-4">
                <div className="font-medium text-gray-800">{part}</div>
                <div>
                  <select
                    value={partConfig[part].finish}
                    onChange={(e) => handlePartChange(part, 'finish', e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md bg-white text-gray-700 focus:ring-teal-700 focus:border-teal-700"
                  >
                    <option value="Shade">Shade</option>
                    <option value="UV">UV</option>
                  </select>
                </div>
                <div>
                  <select
                     value={partConfig[part].color}
                     onChange={(e) => handlePartChange(part, 'color', e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md bg-white text-gray-700 focus:ring-teal-700 focus:border-teal-700"
                  >
                    {(partConfig[part].finish === 'Shade' ? shadeColors : uvColors).map(color => (
                      <option key={color} value={color}>{color}</option>
                    ))}
                  </select>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="p-6 bg-teal-50 rounded-xl border border-teal-200">
        <h3 className="text-lg font-semibold text-teal-800 mb-4">Configuration Summary</h3>
        <ul className="list-disc list-inside space-y-2 text-teal-700">
          <li>Size: {selectedSize}</li>
          <li>Finish Mode: {finishMode}</li>
          {finishMode === 'Full Shade' && (
             <li>Color: {selectedShade}</li>
          )}
          {finishMode === 'Full UV' && (
             <li>Color: {selectedUv}</li>
          )}
          {finishMode === 'Custom Mix' && (
             Object.entries(partConfig).map(([part, config]) => (
              <li key={part} className="ml-4">{part}: {config.finish} - {config.color}</li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default ProductCustomizationUI;
