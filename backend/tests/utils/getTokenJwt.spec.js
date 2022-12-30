// @ts-check
import { test, expect } from '@playwright/test';
import getTokenJwt from '../../src/utils/getTokenJwt.js';
import config from '../../src/config/index.js';

test("Testeando la obtencion del token", function () { 
    const token = getTokenJwt({
        id: 17,
    }, { secretOrKey: config.secretOrKey })
    expect(typeof token).toBe("string");
} )