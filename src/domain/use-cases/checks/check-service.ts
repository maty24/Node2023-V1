interface CheckServiceUseCase {
    execute(url: string): Promise<boolean>
}

//le pongo implements para indicar que integro una interfaz
export class CheckSerive implements CheckServiceUseCase {
    public async execute(url: string): Promise<boolean> {


        try {
            const req = await fetch(url);

            //si es diferente de ok
            if (!req.ok) {
                throw new Error('paso algo master :/')
            }
            console.log('service ok!')
            return true;
        } catch (e) {
            console.log(e)
            return true;
        }

    }
}