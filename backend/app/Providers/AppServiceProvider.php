<?php

namespace App\Providers;

use App\QueryBuilders\CategoriesQueryBuilder;
use App\QueryBuilders\CommentQueryBuilder;
use App\QueryBuilders\CommunityCenterPhotosQueryBuilder;
use App\QueryBuilders\CommunityCenterQueryBuilder;
use App\QueryBuilders\PostQueryBuilder;
use App\QueryBuilders\QueryBuilder;
use Illuminate\Support\ServiceProvider;
use App\QueryBuilders\GalleryThemeQueryBuilder;
use App\QueryBuilders\GalleryQueryBuilder;
use App\QueryBuilders\ConferencesQueryBuilder;
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
        $this->app->bind(QueryBuilder::class, ConferencesQueryBuilder::class);
        $this->app->bind(QueryBuilder::class, RegistrationOrdersQueryBuilder::class);
        $this->app->bind(QueryBuilder::class, CategoriesQueryBuilder::class);
        $this->app->bind(QueryBuilder::class, CommunityCenterQueryBuilder::class);
        $this->app->bind(QueryBuilder::class, CommunityCenterPhotosQueryBuilder::class);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
