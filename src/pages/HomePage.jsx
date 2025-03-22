import Hero from "../components/Hero";

export default function HomePage() {
  return (
    <div className="relative h-screen ">
      {/*<div*/}
      {/*    className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f44_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f44_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_70%_at_50%_0%,#000_70%,transparent_100%)]">*/}
      {/*</div>*/}
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#3332C8_100%)]"></div>
      <Hero />
    </div>
  );
}
