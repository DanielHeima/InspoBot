import { Redirect } from 'expo-router';

export default function Page() {
  const isLoggedIn = false;
  if (!isLoggedIn) {
    return <Redirect href={"/login"} />;
  }
  return <Redirect href={"/(drawer)/home"} />;
}
