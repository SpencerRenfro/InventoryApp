import React, { useState, useRef, useEffect } from 'react';
import bwipjs from 'bwip-js';

const BarcodeGenerator = (props) => {
  const [barcodeData, setBarcodeData] = useState('');
  const [barcodeImage, setBarcodeImage] = useState(null);
  const canvasRef = useRef(null);


  const generateBarcode = (props) => {
    try {
        bwipjs.toCanvas('mycanvas', {
          bcid: 'code128', // Barcode type
          text: props.barcode, // Text to encode
          scale: 3, // 3x scaling factor
          height: 10, // Bar height, in millimeters
          includetext: true, // Show human-readable text
          textxalign: 'center', // Text alignment
        });
        const dataUrl = canvasRef.current.toDataURL();
        console.log('dataUrl fromBARCIO', dataUrl);
      } catch (e) {
        console.error(e);
      }
  };

  return (
    <div>
      {/* <h2>Barcode Generator</h2>
      <input
        type="text"
        value={barcodeData}
        onChange={(e) => setBarcodeData(e.target.value)}
        placeholder="Enter data for barcode"
      /> */}
      {/* <button onClick={generateBarcode}>Generate Barcode</button> */}


      <canvas id="mycanvas"></canvas>
    </div>
  );
};

export default BarcodeGenerator;
