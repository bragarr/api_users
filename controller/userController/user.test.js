import { app } from "../../index";

test('Testando Usuários Cadastrados', async () => {
    const response = await app.get("/users");

});