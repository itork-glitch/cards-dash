/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useState, useRef, useEffect } from 'react';
import imgInsta from '@/public/insta.png';

interface CanvasData {
  name: string;
  email: string;
  imageUrl: string;
}

interface ImageData {
  id: number;
  url: string;
}

const images: ImageData[] = [
  {
    id: 1,
    url: 'https://images.pexels.com/photos/13265923/pexels-photo-13265923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 2,
    url: 'https://images.pexels.com/photos/15639414/pexels-photo-15639414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 3,
    url: 'https://images.pexels.com/photos/14623812/pexels-photo-14623812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

const CreateCardPage = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [canvasVisible, setCanvasVisible] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState('');
  const [imgElement, setImgElement] = useState<HTMLImageElement>();
  const [canvasData, setCanvasData] = useState<CanvasData>({
    name: '',
    email: '',
    imageUrl: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCanvasData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageSelect = (imageUrl: string) => {
    setSelectedImageUrl(imageUrl);
    setCanvasData((prevData) => ({ ...prevData, imageUrl }));
    const imageElements = document.querySelectorAll(
      '.image img'
    ) as NodeListOf<HTMLImageElement>;
    imageElements.forEach((imageElement) => {
      if (imageElement.src !== imageUrl) {
        imageElement.classList.add('effect-blur');
      }
    });
  };

  const handleCanvas = ({ name, email, imageUrl }: CanvasData) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const img2 = new Image();
    img2.src =
      'https://www.logo.wine/a/logo/Instagram/Instagram-Glyph-Color-Logo.wine.svg';
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => {
      img2.onload = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        const rectY = canvas.height - 100;
        ctx.roundRect(20, rectY, 200, 75, 15);
        ctx.fill();
        ctx.font = '48px Arial';
        ctx.fillStyle = 'black';
        ctx.textAlign = 'center';
        ctx.fillText(name, canvas.width / 2, canvas.height * 0.07);
        ctx.fillText(email, canvas.width / 2, canvas.height * 0.14);
        ctx.drawImage(img2, 5, canvas.height - 90, 80, 55);
        ctx.textAlign = 'left';
        var gradient = ctx.createLinearGradient(0, 0, canvas.width / 4, 0);
        gradient.addColorStop(0, ' magenta');
        gradient.addColorStop(0.5, 'blue');
        gradient.addColorStop(1.0, 'red');
        // Fill with gradient
        ctx.fillStyle = gradient;
        ctx.fillText(name, canvas.width / 2 - 180, canvas.height - 46);
      };
    };
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleCanvas(canvasData);
    setCanvasVisible(true);
    const imageElements = document.querySelectorAll(
      '.image img'
    ) as NodeListOf<HTMLImageElement>;
    imageElements.forEach((imageElement) => {
      imageElement.classList.remove('effect-blur');
    });
  };

  useEffect(() => {
    if (selectedImageUrl !== '') {
      const imgElement = new Image();
      imgElement.src = selectedImageUrl;
      imgElement.onload = () => {
        setImgElement(imgElement);
        setCanvasVisible(true);
      };
    }
  }, [selectedImageUrl]);

  return (
    <div>
      <h1>Create a new card</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name:</label>
        <input
          name='name'
          onChange={handleChange}
          value={canvasData.name}
          required
        />

        <label htmlFor='email'>Email:</label>
        <input
          name='email'
          onChange={handleChange}
          value={canvasData.email}
          required
        />

        <div className='image grid grid-rows-1 grid-cols-3 w-[calc(100vw-20px)]] p-5 gap-5'>
          {images.map((image) => (
            <img
              key={image.id}
              src={image.url}
              alt={`Background ${image.id}`}
              onClick={() => handleImageSelect(image.url)}
            />
          ))}
        </div>

        <div>
          <button type='submit'>Create Card</button>
        </div>
      </form>
      {canvasVisible && (
        <canvas
          ref={canvasRef}
          width={imgElement?.width}
          height={imgElement?.height}
        />
      )}
    </div>
  );
};

export default CreateCardPage;
