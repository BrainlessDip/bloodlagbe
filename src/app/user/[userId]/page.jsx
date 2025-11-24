export default async function userId({ params }) {
  const { userId } = await params;
  console.log(userId);

  return <h1>this is a profile page {userId}</h1>;
}
