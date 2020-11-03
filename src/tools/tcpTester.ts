import * as net from 'net';

interface tcpTesterResult {
    target: string
    port: number
    result: boolean
}

export const tcpTester = (target: string, port: string | number): Promise<tcpTesterResult> => {
    const client = new net.Socket();
    const formattedPort = (typeof port === "number") ? port : parseInt(port, 10);
    return new Promise((resolve, reject) => {
        client.connect(formattedPort, target, () => {
            client.destroy()
            resolve({ target, port: formattedPort, result: true })
        });
        client.on('error', function (ex) {
            client.destroy()
            reject({ target, port: formattedPort, result: false })
        });
    })
}