import Link from "next/link"
export default function Footer() {
    return (
        <footer className="py-4 bg-gray-800 text-white">
            <div className="container mx-auto flex justify-center space-x-4 px-4">
                <Link className="block" href="/">
                    Inicio
                </Link>
                <Link className="block" href="/servicios">
                    Servicios
                </Link>
                <Link className="block" href="/nosotros">
                    Nosotros
                </Link>
                <Link className="block" href="/contacto">
                    Contactos
                </Link>
            </div>
        </footer>
    )

}