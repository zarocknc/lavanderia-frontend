import Image from "next/image";
import Link from "next/link";
import CheckIcon from "./CheckIcon";

export default function Servicios() {
  return (
    <main className="flex flex-col items-center justify-between p-4">
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Precios hechos a tu medida
            </h2>
            <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
              En lavanderias El Pepe nos enfocamos en mejorar la calidad de vida de nuestros clientes
              a traves de un servicio de calidad y a un precio accesible.
            </p>
          </div>
          <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
            {/* Pricing Card */}
            <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <h3 className="mb-4 text-2xl font-semibold">Solterones</h3>
              <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                La mejor opcion para personas soltera que buscan un servicio de calidad y a un precio accesible.
              </p>
              <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-5xl font-extrabold">S/40</span>
                <span className="text-gray-500 dark:text-gray-400">/mes</span>
              </div>
              {/* List */}
              <ul role="list" className="mb-8 space-y-4 text-left">
                <li className="flex items-center space-x-3">
                  <CheckIcon />
                  <span>1 Edredon al mes</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon />
                  <span>Sin Precios extra</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon />
                  <span>
                    Cantidad de personas: <span className="font-semibold">1 solteron/a</span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon />
                  <span>
                    Ropa perfumada: <span className="font-semibold">2 al mes</span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon />
                  <span>
                    Detergentes disponibles: <span className="font-semibold">1: Patito</span>
                  </span>
                </li>
              </ul>
              <a
                href="#"
                className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
              >
                Afiliarse
              </a>
            </div>
            {/* Pricing Card */}
            <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <h3 className="mb-4 text-2xl font-semibold">Familiar</h3>
              <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                La mejor opcion para familias que buscan un servicio de calidad y a un precio accesible.
              </p>
              <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-5xl font-extrabold">S/160</span>
                <span className="text-gray-500 dark:text-gray-400">/mes</span>
              </div>
              {/* List */}
              <ul role="list" className="mb-8 space-y-4 text-left">
                <li className="flex items-center space-x-3">
                  <CheckIcon />
                  <span>6 Edredones al mes</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon />
                  <span>Sin precios extra</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon />
                  <span>
                    Kilos de ropa al mes: <span className="font-semibold">12Kg</span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon />
                  <span>
                    Ropa perfumada: <span className="font-semibold">4Kg</span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon />
                  <span>
                    Planchado de camisas
                  </span>
                </li>
              </ul>
              <a
                href="#"
                className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
              >
                Afiliarse
              </a>
            </div>
            {/* Pricing Card */}
            <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <h3 className="mb-4 text-2xl font-semibold">Empresarial</h3>
              <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                Mantenemos la ropa de tus empleados limpia y perfumada para que puedan trabajar comodamente.
              </p>
              <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-5xl font-extrabold">S/35</span>
                <span className="text-gray-500 dark:text-gray-400">/empleado</span>
              </div>
              {/* List */}
              <ul role="list" className="mb-8 space-y-4 text-left">
                <li className="flex items-center space-x-3">
                  <CheckIcon />
                  <span>Lavado de uniforme express</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon />
                  <span>Limpieza de trajes prioritarios</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon />
                  <span>
                    Relleno: <span className="font-semibold">+10 empleados</span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon />
                  <span>
                    soporte 24/6 sin ninguna razon.
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon />
                  <span>
                    Costura de prendas
                  </span>
                </li>
              </ul>
              <a
                href="#"
                className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
              >
                Afiliarse
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

