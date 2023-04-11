<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            UserSeeder::class,
            AccessGroupSeeder::class,
            VideosSeeder::class,
            ArticlesSeeder::class,
            PostsSeeder::class,
            CommentsSeeder::class,
            NewsSeeder::class,
            ThemeSeeder::class,
        ]);
    }
}
