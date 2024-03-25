import Image from "next/image";
import Link from "next/link";
import oferta1 from "@/assets/oferta-1.png"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">

      <section className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 px-6">
          <div className="col-span-2">
            <Image
            src={oferta1}
            alt="Oferta de Edredones"
            className="w-full h-auto rounded-md"/>
          </div>
          <div className="space-y-4">
            <img
              alt="Laundry advertisement"
              className="w-full h-auto rounded-md"
              height="140"
              src="/placeholder.svg"
              style={{
                aspectRatio: "200/140",
                objectFit: "cover",
              }}
              width="200"
            />
            <img
              alt="Delivery service advertisement"
              className="w-full h-auto rounded-md"
              height="140"
              src="/placeholder.svg"
              style={{
                aspectRatio: "200/140",
                objectFit: "cover",
              }}
              width="200"
            />
          </div>
        </section>

    </main>
  );
}
