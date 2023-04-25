export async function GET(request: Request) {
  const imgSource = [
    'https://images.pexels.com/photos/13265923/pexels-photo-13265923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/15639414/pexels-photo-15639414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/14623812/pexels-photo-14623812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/15954332/pexels-photo-15954332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/16292477/pexels-photo-16292477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/15860716/pexels-photo-15860716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  ];
  const img = imgSource[Math.floor(Math.random() * imgSource.length)];
  return new Response(`${img}`, { status: 200 });
}
