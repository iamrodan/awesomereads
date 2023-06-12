import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <Image
              src="/images/book.jpg"
              height={500}
              width={500}
              alt="picture of a opened book"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">
                {" "}
                <span className="font-light">awesome</span>reads
              </h1>
              <p className="py-6">
                Discover Awesomereads, the ultimate web app designed to help you
                effortlessly track your reading journey. With Awesomereads, you
                can easily keep a record of the books you have read and monitor
                your progress. Add books to your collection, update your reading
                status, rate and review titles, and enjoy personalized
                recommendations. Join a thriving community of book enthusiasts
                and elevate your reading experience with Awesomereads.
              </p>
              <Link href="/login">
                <button className="btn btn-outline mx-2">Login</button>
              </Link>
              <button className="btn btn-outline mx-2">Signup</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
