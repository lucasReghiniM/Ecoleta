import express from 'express'; 
import cors from 'cors'; 
import path from 'path'; 
import routes from './routes';


const app = express();

app.use(cors());
app.use(express.json()); //ativando o JSON no express
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))

app.listen(3333);





//ANOTAÇOES

//rota: Endereço completo
//recurso: entidade acessada

/*      -funcoes-
    get: Buscar uma ou mais info do back-end
    post: Criar uma nova info no back-end
    put: Atz uma info existente no back-end
    delete: Remove uma info do back-end
*/

/*      -parametros-
    Request Param: Parametros que vem na propria rota que identificam um resurso
    Query Parm: Param que vem na propria rota ,geralmente opcionais, para filtros
    Request body: Param para criçao e atz de info
*/
//return sempre qnd for enviar uma resposta