import SignupForm from "../features/authentication/SignupForm";
import Heading from "../ui/Heading";

function NewUsers() {
  return (
    <>
      <Heading $h="h1">Create a new user</Heading>
      <SignupForm />
    </>
  );
}

export default NewUsers;
