import { app } from "../../index";


test('Testando Usuários Cadastrados', async () => {
    const response = app.get("/users");
});