import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import {Spacer} from "@nextui-org/spacer";
import { verifyLogin } from "./verifyLogin";
export default function Login() {
    return (
        <div className="min-h-[80dvh] flex justify-center pt-10">
            <Card
                isFooterBlurred
                radius="lg"
                shadow="lg"
                className=" w-full max-w-xl h-full max-h-xl "
            >
                <form action={verifyLogin} className="space-y-8 p-12">
                    <Input type="email" label="correo" name="correo" id="correo" />

                    <Input type="password" label="Contra" name="contra" id="contra" />
                    <Button type="submit" color="primary">
                        Button
                    </Button>
                </form>

                <CardFooter className="bg-gray-400 border-1 py-1 absolute rounded-lg bottom-4 w-[calc(100%_-_8px)] ml-1 z-10">
                    <p className="text-tiny text-black/80">usuario: paquito@masnaik.com, Contra: alcachofa</p>
                </CardFooter>
            </Card>
            <br />
        </div>
    )
}