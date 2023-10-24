import {CronJob} from "cron";

//cuando tipando datos, cando son mas de 3 datos hacer un objeto
type CrontTime = string | Date;
type OnTick = () => void;

export class CronServie {

    static createJob(crontTime: CrontTime, onTick: OnTick): CronJob {
        const job = new CronJob(crontTime, onTick);
        job.start()
        return job
    }
}