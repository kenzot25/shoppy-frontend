import getMe from './get-me';

export default async function Home() {
  const me = await getMe();
  return <div>{me.userId}</div>;
}
