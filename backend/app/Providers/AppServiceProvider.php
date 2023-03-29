<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\QueryBuilders\GalleryThemeQueryBuilder;
use App\QueryBuilders\GalleryQueryBuilder;


class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->bind(QueryBuilder::class, GalleryThemeQueryBuilder::class);
        $this->app->bind(QueryBuilder::class, GalleryQueryBuilder::class);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
