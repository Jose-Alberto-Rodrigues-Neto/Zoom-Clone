import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
    return (
    <section className="flex h-screen w-full items-center justify-center">
      <SignIn>

      </SignIn>
    </section>
    );
  }
  