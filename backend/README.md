<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## Настройка backend проекта

 Бэк проекта на Laravel sail, разворачивается через Docker. Данное описание идёт для Windows ^10. Настройка на других ОС или версиях может отличаться.

  Для работы с backend необходим [php^8.1](https://www.php.net/downloads.php), [Composer](https://getcomposer.org/Composer-Setup.exe), [Docker Desktop](https://www.docker.com/products/docker-desktop/)

 Возможна быстрая установка с автонастройкой необходимых компонентов системы для работы с вирт. машиной, но иногда может быть сбой, и нужно будет удалять wsl, отменять настройки и делать всё заново. Установка WSL через powershell, командой:

                                  	  wsl - - install

 Можно проделать все тоже самое вручную:
Перед  установкой проверить, что включена поддержка подсистемы  Linux.
Включить её можно выполнением команды в powershell, после перезагрузить машину, для итоговой надстройки:

    `dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart`

Далее включить поддержку виртуальной машины для windows:

    `dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart`

[Качаем отсюда](https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi) и устанавливаем пакет обновлений для ядра Linux:


Перезагружаем машину, для дальнейшей надстройки и обновления WSL до 2 версии, также необходимо задать  поддержку новых дистрибутивов Linux WSL 2 версии

    `wsl --set-default-version 2`

Качаем нужный дистрибутив в Microsoft store на данный момент мы используем Ubuntu 22.04.2, Перезагружаем машину

Заходим в терминал Ubuntu устанавливаем username и password, Далее подключаем нужный диск нашей системы, сделать это можно из директории mnt, То-есть подключение диска С, будет выглядеть так:

      cd  /mnt/c

Переходим в нужную нам директорию, где заранее был спулен бэк

**#необходимо сначала установить зависимости в проекте и сгенерировать папку vendor, при возникновении проблем - рекомендуется удалять файл composer.lock и генерировать его через:**
    
    `composer install
     composer dump-autoload`

Необходимо в корне проекта скопировать файл **.env.example** с новым названием - **.env**

Перед запуском sail необходимо проверить наличие, и настройки в файле **.env** корневой папки **back**, т.к. Файл конфигурации докера **docker-compose.yml** подставляет необходимые значения оттуда.

Запускаем sail для дальнейшей настройки контейнеров в docker  и запуском локалки командой:


    `./vendor/bin/sail up`

	
**#простая настройка контейнера:**

	`docker compose up`

**#если требуется после сборки запуск контейнеров в фоновом режиме:**

    `docker compose up –detach`
