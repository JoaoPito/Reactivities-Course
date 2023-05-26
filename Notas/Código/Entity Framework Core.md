- **Models/Entities:** Coisas que vamos salvar na nossa database

### Utilitário de Command Line

**dotnet ef**

**Instalação**: dotnet tool install --global dotnet-ef --version 7.0.5

>[!INFO]
>O **dotnet tool** é o gerenciador de ferramentas do dotnet. Usando **dotnet tool list** [-g] é possível ver todas as ferramentas instaladas.

**dotnet ef database:** Mostra as operações relacionadas com DB disponíveis com o EF Core

### Convenções

**Primary Key**
O Entity Framework usa por padrão qualquer variável com o nome **Id** como Primary Key. 
Porém, ao usar `[Key]` antes da declaração da variável é possível mudar isso.