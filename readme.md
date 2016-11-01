#PokeCard


##Info
<ul>
    <li>PHP</li>
    <li>Framework Laravel 5.3</li>
    <li>Angular 1.5</li>
    <li>Sass</li>
</ul>

##Requisitos
1. [Composer](https://getcomposer.org/)
2. [NPM](https://www.npmjs.com/)

##Instalação

```text 
    $cd path/to/pokecard
        
    $composer install
    
    $npm install
 ```



##Banco
Configure o arquivo <code> .env </code> na raiz do projeto com os dados do banco que deseja usar
</br>
Ex:
</br>
```text
    DB_CONNECTION=pgsql // <-- pgsql | mysql | sqlite 
    DB_HOST=127.0.0.1 
    DB_DATABASE=dbname
    DB_USERNAME=username
    DB_PASSWORD=secret
```
Depois que estiver configurado e banco criado execute os comandos
```text
    $cd /path/to/pokecard
    
    $php artisan migrate
    
    $php artisan db:seed
    
    $php artisan check:set
    
    $php artisan check:cards // <-- esse precesso pode demorar um pouco
```
Depois de terminado o sistema esta pronto para uso com o banco de dados populado e atulizado com as ultimas cartas lançadas

##Start

```text
    $gulp // <-- compila os arquivos e monta os bundle js
    
    $php artisan serve // <-- roda o servidor local
```

Após isso acesse
```text
    http://localhost:8000
```

##Licença
[MIT license](http://opensource.org/licenses/MIT)