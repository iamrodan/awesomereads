import AwesomereadsLogo from "@/components/AwesomereadsLogo";
import Image from "next/image";
export default function LoginPage() {
  return (
    <div className="flex h-full justify-center">
      <div className="w-1/2 h-screen overflow-hidden">
        <Image
          src="/images/opened-book.jpg"
          alt="picture of a opened book"
          width={2400}
          height={1600}
        />
      </div>
      <div className="w-1/2">
        <AwesomereadsLogo />
      </div>
    </div>
  );
}
