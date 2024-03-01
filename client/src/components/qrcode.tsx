import React from 'react';
import QRCode from 'qrcode.react';

interface QRProps {
  qrString: string;
}

export function QR({ qrString }: QRProps) {
  return (
    <div className="flex justify-center my-10">
      <QRCode value={qrString} className={`border-white border-8 border-spacing-6 bg-black rounded-xl `}/>
    </div>
  );
}