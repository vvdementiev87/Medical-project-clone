<?php

namespace App\Providers;

use App\QueryBuilders\CommentQueryBuilder;
use App\QueryBuilders\PostQueryBuilder;
use App\QueryBuilders\QueryBuilder;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->bind(QueryBuilder::class, PostQueryBuilder::class);
        $this->app->bind(QueryBuilder::class, CommentQueryBuilder::class);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
