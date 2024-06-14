import LoginForm from "@/components/LoginForm";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid place-content-center mt-10 gap-8">
      <h1 className="text-4xl">Landing Page</h1>
      <Link className="text-3xl underline text-sky-400 pb-4 text-center" href="/products">
                    All Products
      </Link>
    </div>
  );
}
