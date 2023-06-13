import AwesomereadsLogo from "@/components/AwesomereadsLogo";
import FieldInput from "@/components/FieldInput";
import Image from "next/image";
export default function LoginPage() {
  return (
    <div className="flex h-full justify-center overflow-hidden">
      <div className="w-1/2 h-screen">
        <Image
          src="/images/opened-book.jpg"
          alt="picture of a opened book"
          width={2400}
          height={1600}
        />
      </div>
      <div className="w-1/2 m-2">
        <AwesomereadsLogo />

        <div className="form-control justify-center items-center h-full">
          <FieldInput type="email" placeholder="Enter your email" />
          <FieldInput type="password" placeholder="Enter your password" />
          <button className="btn btn-sm btn-neutral rounded-sm input-sm w-50 m-2">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}
