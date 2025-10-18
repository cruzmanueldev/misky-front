export async function POST(req) {
  const body = await req.json();

  const response = await fetch(`${process.env.NEST_API_URL}/sales`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.MY_SECRET_KEY,
    },
    body: JSON.stringify(body),
  });

  const data = await response.json();
  return Response.json(data, { status: response.status });
}
