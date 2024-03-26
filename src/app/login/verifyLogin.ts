'use server'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function verifyLogin(formData: FormData) {
    const cookieStore = cookies()
    const correo = formData.get('correo')
    const contra = formData.get('contra')
    if (correo == "paquito@masnaik.com" && contra == "alcachofa") {
        console.log('login successful')
        cookies().set('isLogged', 'true')
        redirect('/')
    }
    console.log('login failed')
    redirect('/login')
}