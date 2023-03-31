<?php

namespace App\Providers;

use App\QueryBuilders\CommentQueryBuilder;
use App\QueryBuilders\PostQueryBuilder;
use App\QueryBuilders\QueryBuilder;
use Illuminate\Support\ServiceProvider;
use App\QueryBuilders\GalleryThemeQueryBuilder;
use App\QueryBuilders\GalleryQueryBuilder;
use App\QueryBuilders\EventsQueryBuilder;
use App\QueryBuilders\EventsRegistrationQueryBuilder;
use App\QueryBuilders\RegistrationOrdersQueryBuilder;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->bind(QueryBuilder::class, PostQueryBuilder::class);
        $this->app->bind(QueryBuilder::class, CommentQueryBuilder::class);
        $this->app->bind(QueryBuilder::class, GalleryThemeQueryBuilder::class);
        $this->app->bind(QueryBuilder::class, GalleryQueryBuilder::class);
        $this->app->bind(QueryBuilder::class, EventsQueryBuilder::class);
        $this->app->bind(QueryBuilder::class, EventsRegistrationQueryBuilder::class);
        $this->app->bind(QueryBuilder::class, RegistrationOrdersQueryBuilder::class);

    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
