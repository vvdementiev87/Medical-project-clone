# Требования по предустановленному nodejs и npm

Проверить установлен ли nodejs командой:

node -v

и установлен ли npm:

npm -v

в случае отсутствия производим установку:

https://nodejs.org/en/download/

## Запуск проекта

Для запуска проекта необходимо скопировать файл .env.example и сохранить его под имененем .env в корне папки /front.

Находясь в корне папки /front, произвести установку node_modules командой:

npm install

Далее произвести запуск проекта командой:

npm run start

## Сборка проекта

Для сборки проекта выполнить команду:

npm run build

## Прочие возможные ошибки

В случае ошибки в файлах библиотеки "react-redux-toastr" произвести следйющие действия:

открыть файл /node_modules/react-redux-toastr/src/styles/index.scss

В строке 41 заменить $marginleft: math.div($toastr-width,2) на $marginleft: calc($toastr-width /2);

В строке 52 заменить $marginleft: math.div($width,2) на $marginleft: calc($width/2);;
