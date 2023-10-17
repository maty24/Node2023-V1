import {Server} from './presentation/server'

//esto es una funcion anonima
(async () => {
    await main()
})();


async function main() {
    Server.start()
}