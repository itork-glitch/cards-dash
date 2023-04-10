import { createWriteStream } from 'fs';
import { promisify } from 'util';
import { Readable, pipeline } from 'stream';
import nodeHtmlToImage from 'node-html-to-image';

const pipelineAsync = promisify(pipeline);

export async function POST(request: Request, response: Response) {
  const { name, email } = await request.json();

  try {
    const image = await nodeHtmlToImage({
      html: `<div>Name: ${name}</div><div>Email: ${email}</div>`,
      quality: 100,
      type: 'jpeg',
      encoding: 'binary',
    });

    await pipelineAsync(
      Readable.from(image),
      createWriteStream('./image.jpeg')
    );

    return new Response(JSON.stringify({ succes: true, url: '/image.jpeg' }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Błąd' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
