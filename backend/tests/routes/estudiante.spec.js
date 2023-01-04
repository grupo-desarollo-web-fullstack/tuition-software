import { test, expect } from '@playwright/test';
import config from '../../src/config/index.js';

test.describe("Testeo de la ruta estudiante", async function(){
    test("GET /", async ({ request }) => { 
        const res = await request.get("/estudiante", {
            headers: {
                Authorization: `Bearer ${config.tokenUserTest}`
            }
        })
        expect(res.ok()).toBeTruthy();
    })
    test("POST /", async ({ request }) => { 
        const res = await request.post("/estudiante", {
            data: {
                "nombre": "Maurino Matias",
                "carrera": "Electricidad",
                "ciclo": 5,
                "password": "1223df",
                "email": `pgnsynr${Math.random()}@gmail.com`,
            }
        })
        expect(res.ok()).toBeTruthy();
        
    })
})