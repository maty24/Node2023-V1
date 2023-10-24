import {CronJob} from 'cron';
import {CronServie} from "./cron/cron-service";
import {CheckSerive} from "../domain/use-cases/checks/check-service";

export class Server {
    public static start() {
        console.log('Server started...')

        CronServie.createJob(
            //le digo que ejecuta la funcion cada 3 segundos
            '*/5 * * * * *',
            () => {
           new CheckSerive().execute('http://google.com')
            }
        );

    }
}