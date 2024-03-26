import Image from "next/image";
import Link from "next/link";
import nosotros1 from "@/assets/nosotros.jpg"
import nosotros2 from "@/assets/nosotros2.jpeg"

export default function Nosotros() {
  return (
    <main className="flex flex-col items-center justify-between p-24">


      <section className="bg-white dark:bg-gray-900">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Lavamos tu ropa con amor para que tu la luzcas con orgullo
            </h2>
            <p className="mb-4">
              Somos una empresa dedicada a ofrecer servicios de lavandería con un toque especial.
              Nos enorgullece cuidar de tus prendas como si fueran nuestras, lavándolas con amor y
              atención para que puedas lucirlas con orgullo. En el corazón de nuestro negocio está
              el compromiso con la excelencia y la satisfacción del cliente. Nuestro equipo está formado
              por profesionales apasionados por la moda y dedicados a garantizar que cada prenda que nos
              confíes reciba un tratamiento especializado y meticuloso.
            </p>
            <p>
              Confía en nosotros para devolverte tu ropa en condiciones impecables
              y renovar tu confianza al lucirla.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <Image
              className="w-full rounded-lg"
              src={nosotros1}
              alt="Quienes somos"
            />
            <Image
              className="mt-4 w-full lg:mt-10 rounded-lg"
              src={nosotros2}
              alt="Somo un equipo"
            />
          </div>
        </div>
      </section>

    </main>
  );
}

