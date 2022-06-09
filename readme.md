# Super App WK

## Requisitos:

-   Nodejs
-   Python3

## Setup:

### Frontend:

    - cd frontend && npm install

### Backend:

    - cd backend
    - pip install virtualenv
    - python3 -m venv venv

## Executando o projeto:

### Frontend:

    cd frontend && npm run dev

### Backend:

Para rodar o backend é necessário ativar o venv

Caso você esteja no Windows talvez seja necessário rodar esse comando antes de tentar seguir os próximos passos:

    Set-ExecutionPolicy Unrestricted -Scope Process

Vale notar que esse comando deve ser rodado toda vez após um novo processo de terminal for executado.

Caso deseje deixar habilitado a execução de scripts direto utilize

    Set-ExecutionPolicy Unrestricted -Force

Para mais informações sobre os comandos: [leia aqui.](https://stackoverflow.com/questions/18713086/virtualenv-wont-activate-on-windows/18713789)

E no Windows então execute:

    ./venv/Script/activate

Caso esteja no linux execute:

    source ./venv/bin/activate;

Se ao executar esse comando aparecer "venv" nas linhas do seu terminal, tudo ocorreu corretamente!

E podemos serguir para instalação de dependencias e ligar o servidor

    pip install -r ./requirements.txt
    pip install django-cors-headers
    cd superapp;
    python ./manage.py migrate;
    python ./manage.py runserver;

E pronto, agora é só acessar [http://localhost:3000](http://localhost:3000) e utilizar o sistema
