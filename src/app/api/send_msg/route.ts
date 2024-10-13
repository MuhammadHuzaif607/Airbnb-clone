export async function POST(req: Request) {
  try {
    const { username } = await req.json();
    return Response.json(
      {
        username,
        message: 'All set',
      },
      {
        status: 200,
      }
    );
  } catch (err) {
    console.error(err);
  }
}
