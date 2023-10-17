import {CronJob} from 'cron';

export class Server {
    public static start() {
        console.log('Server started...')


        const job = new CronJob(
            //le digo que ejecuta la funcion cada 3 segundos
            '*/3 * * * * *',
            function () {
                console.log('You will see this message every second');
            },
            null,
            true,
            //zona horaria que va a tomar la hora
            'America/Los_Angeles'
        );
        job.start()
    }
}