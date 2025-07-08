import Image from "next/image";

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function Logo({ width = 50, height = 50, className = "" }: LogoProps) {
  return (
    <Image
      src="/logo.svg"
      alt="MediLink"
      width={width}
      height={height}
      className={`object-contain cursor-pointer ${className}`}
      priority
    />
  );
}
