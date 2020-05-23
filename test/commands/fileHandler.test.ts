import {app_dir, app_temp_dir, create_path, doesTempDirExist, createTempDir} from './../../src/tools/fileHandler'
import { equal } from 'assert'
import { expect } from '@oclif/test'

describe ("fileHandler", () => {
    it(`app_temp_dir should return "vestigo"`, () => {
        expect(app_temp_dir).to.contain("vestigo")
    })
    it(`app_dir should return "vestigo"`, () => {
        equal("vestigo", app_dir)
    })
    it(`create_path should have "vestigo/test"`, () => {
        const myResult = create_path(["test"]);
        expect(myResult).to.contain("vestigo/test")
    })
    it(`create_path should have "test"`, () => {
        const myResult = create_path(["test"], false);
        expect(myResult).to.contain("test")
    })
    it(`create_path should have src/templates`, () => {
        const myResult = create_path(["test"], false, true);
        console.log(myResult)
    })
    it(`doesTempDirExist should return boolean`, () => {
        expect(doesTempDirExist()).to.be.a('boolean')
    })
    it(`createTempDir should return boolean`, () => {
        expect(createTempDir()).to.be.a('boolean')
    })
})
