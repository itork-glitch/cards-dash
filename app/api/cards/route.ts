import cloudinary from 'cloudinary';

const cloudinaryConfig = {
  cloudName: process.env.CLOUD_NAME,
  apiKey: process.env.CLOUD_KEY,
  apiSecret: process.env.CLOUD_SECRET,
};

cloudinary.v2.config(cloudinaryConfig);

export async function POST(request: Request, response: Response) {
  const { name, email } = await request.json();

  const card = await createProfileCard(name, email);

  // Wysyłanie karty profilowej na Cloudinary
  const { secure_url } = await cloudinary.v2.uploader.upload(card, {
    format: 'png',
  });

  return new Response(JSON.stringify({ image_url: secure_url }), {
    status: 201,
    headers: { 'Content-Type': 'application/json' },
  });
}

async function createProfileCard(name: string, email: string) {
  const { createCanvas, loadImage } = require('canvas');
  const canvas = createCanvas(500, 500);
  const ctx = canvas.getContext('2d');

  // Wstawianie tła karty profilowej
  const backgroundImageUrl =
    'https://images.rawpixel.com/image_500/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjEwMTYtYy0wOF8xLWtzaDZtemEzLmpwZw.jpg';
  const background = await loadImage(backgroundImageUrl);
  ctx.drawImage(background, 0, 0, 500, 500);

  // Dodawanie informacji o profilu
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(50, 200, 400, 200);

  ctx.font = 'bold 50px Arial';
  ctx.fillStyle = '#000000';
  ctx.fillText(name, 100, 280);

  ctx.font = 'bold 30px Arial';
  ctx.fillStyle = '#000000';
  ctx.fillText(email, 100, 340);

  // Zwracanie karty profilowej jako base64 encoded PNG
  return canvas.toDataURL();
}

export async function GET(request: Request, response: Response) {
  return new Response('Nie prawidłowa metoda przesyłania danych', {
    status: 405,
  });
}
