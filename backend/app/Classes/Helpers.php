<?php

namespace App\Classes;

class Helpers
{
    /**
     * Получить url сайта (http://bosomed.ru)
     * при isAdmin = true  будет возвращаться (http://bosomed.ru/middleware)
     *
     * @param bool $isAdmin
     * @return string
     */
    public static function getHost(bool $isAdmin = false): string
    {
        if ($isAdmin) {
            if ($_ENV['APP_ENV'] === 'local') {
                return $_ENV['API_SITE_PROTOCOL'] . '://' . $_ENV['API_SITE_URL'];
            }

            return $_ENV['API_SITE_PROTOCOL'] . '://' . $_ENV['API_SITE_URL'] . '/middleware';
        }

        return $_ENV['API_SITE_PROTOCOL'] . '://' . $_ENV['API_SITE_URL'];
    }


}
