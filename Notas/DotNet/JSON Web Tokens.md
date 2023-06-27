São strings divididas em 3 partes, separadas por um ponto:
- Header: Indica o algoritmo e o tipo usado para encriptar a assinatura
- Payload: A info. que vamos mandar com esse token. **Não se pode colocar informação confidencial dentro de um token**
	- contém informação sobre datas, quando foi criado, até quando vale
	- **nbf:** A data a partir de qual o token pode ser usado - o mais cedo
	- **exp:** A data que o token expira
	- **iat:** Data que foi criado
- Signature: quando o token é gerado e saí de quem envia, é assinado antes de sair. É usado uma chave privada para encriptar a signatura. É usado a mesma chave para encriptar e desencriptar

- **Decodificar JWTs:** https://jwt.ms/

## Processo de autenticação
1. O user faz um POST para o endereço de login na API
2. O server verifica o username e senha
3. Se OK, retorna um JWT, senão responde com 401 (Unauthorized)
4. O server responde, se tiver sucesso o JWT com resposta 200
5. O cliente, no browser, guarda o JWT para acesso ao conteúdo do site

Agora o usuário tem um token que vai ser usado para continuar logado na API

1. Sempre que o cliente fizer um request que precisa de autenticação ele **envia o token como header** - Faz uma requisição GET
2. O server valida o token recebido pelo user e compara com a chave do token que foi gerada anteriormente e guardada
3. Se a validação for OK, então o server responde com 200 e a informação pedida, senão responde com 401

## No .NET:
Package: **System.IdentityModel.Tokens.Jwt**