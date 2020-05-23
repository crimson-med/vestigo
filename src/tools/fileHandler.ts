import * as fs from "fs"
import * as os from "os"
import * as path from "path"
export const app_dir = "vestigo"

export const app_temp_dir = path.join(os.tmpdir(), app_dir)

export const create_path = (paths: string[], fromAppTempDir: boolean = true, fromRunningDir: boolean = false):string => {
    if (fromAppTempDir === true) {
        return path.join(app_temp_dir, ...paths)
    } else if (fromRunningDir) {
        return path.join(__dirname, ...paths)
    } else {
        return path.join(...paths)
    }
}

export const doesTempDirExist = ():boolean => {
    const pathed = path.join(app_temp_dir);
    if (fs.existsSync(pathed)) {
        return true
    }
    return false
}

export const createTempDir = (): boolean => {
    if (doesTempDirExist() === false) {
        fs.mkdirSync(app_temp_dir)
        if (doesTempDirExist() === false) {
            return false
        }
        return true
    }
    return true
}