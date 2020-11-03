import { port, ports } from '../resources/ports';

export const getPort = (port: number | string): port | null => {
    const portFormatted = (typeof port === "number") ? port.toString() : port
    const value = ports[portFormatted]
    if (Array.isArray(value) && value[0]) {
        return value[0]
    } else if (typeof value === "object") {
        return value as port
    } else {
        return null
    }

}