import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <section className="flex h-screen w-full items-center justify-center">
      <SignUp></SignUp>
    </section>
  );
}
