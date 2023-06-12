import Image from "next/image";

export default function AwesomereadsLogo() {
  return (
    <div className="flex justify-center m-1 w-max h-max p-1">
      <Image
        src="/images/app-logo.png"
        alt="logo of awesomereads"
        width={16}
        height={16}
      />
      <span className="font-light ml-1">awesome</span>reads
    </div>
  );
}
