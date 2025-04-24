import Image from "next/image";
import SignIn from "./components/sign-in";
import UserAvatar from "./components/UserAavatar";

export default function Home() {
  return (<div>
    <SignIn/>
    <UserAvatar/>

    </div>
  );
}
