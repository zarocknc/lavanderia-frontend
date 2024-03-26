import Image from "next/image";
import Link from "next/link";
import oferta1 from "@/assets/oferta-1.png"
import landing2 from '@/assets/landing2.jpg'
import landing3 from '@/assets/landing3.jpg'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-8">

      <section className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 px-6">
        <div className="col-span-2">
          <Image
            src={oferta1}
            alt="Oferta de Edredones"
            className="w-full h-auto rounded-md" />
        </div>
        <div className="space-y-4">
          <Image
            alt="Oferta de Edredone"
            className="w-full h-auto rounded-md"
            height={140}
            src={landing2}
            width={200}
          />
          <Image
            alt="Delivery service advertisement"
            className="w-full h-auto rounded-md"
            height={140}
            src={landing3}
            width={200}
          />

        </div>
      </section>

    </main>
  );
}
