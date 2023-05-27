### ./
- **package.json:** Especifica todas as dependências do app. As dependências são baixadas automaticamente (com npm install) e colocadas em *./node_modules*.

### ./public
- **index.html**: Como o nosso app é *single-page* é a única página que o usuário interage. Esse nome é comum para esse tipo de aplicação
	- **Dentro do index.html** são especificados os JavaScript apps que vão ser injetados no HTML. 
	- Por exemplo: `<div id="root"></div>` busca o elemento "root" que fica no **index.tsx**

### ./src
- **index.tsx:** Define os elementos que serão injetados em alguma página HTML.
	- Exemplo: 
	``` typescript
	root.render(
	  <React.StrictMode>
	    <App />
	  </React.StrictMode>
	);
```
Aqui, o elemento *root* renderiza o que está definido em **App** (do arquivo App.tsx)

- **App.tsx:** Um script de TypeScript. Na página de exemplo padrão do React, contém o que realmente vai ser mostrado para o usuário. Define coisas como texto, imagens, etc. Usa arquivos de CSS importado.