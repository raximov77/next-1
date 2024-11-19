import Image from "next/image";
import Next from "../public/next.svg"

export default function Home() {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
        Welcome to MyApp!
      </h1>
      <p className="text-lg text-gray-600 text-center">
        This is the homepage of our website. Explore our features, learn more about us, or get in touch using the links above.
      </p>
      <div className="mt-8 flex justify-center">
        <Image
          src={Next}
          alt="Sample Image"
          className="rounded-lg shadow-lg p-[20px] m-[100px] cursor-pointer"
        />
      </div>
      <div className="mt-6 text-center">
        <a
          href="/"
          className="text-blue-500 hover:underline"
        >
          Learn More About Us
        </a>
      </div>
    </div>
  );
}
