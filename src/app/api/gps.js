export async function GET(req) {
    // Server-side logic to fetch GPS data or store it
    return new Response(JSON.stringify({ message: 'GPS data received' }));
  }
  