import { useContext } from "react";
import { UserContext, UserContextProvider } from "../context/userContext";

const Contexts = () => {
  return (
    <main>
      <UserContextProvider>
        <AppInternal />
      </UserContextProvider>
    </main>
  );
};

const AppInternal = () => {
  const { toggleUser } = useContext(UserContext);
  return (
    <>
      <Profile />
      <button onClick={toggleUser}>Toggle User</button>
    </>
  );
};

const Profile = () => {
  return (
    <>
      <WelcomeBanner />
      <Course />
    </>
  );
};

const WelcomeBanner = () => {
  const { user } = useContext(UserContext);
  return <h1>Hello {user.name}</h1>;
};

const Course = () => {
  const { user } = useContext(UserContext);

  return <h1>Your course is {user.course}</h1>;
};

export default Contexts;
