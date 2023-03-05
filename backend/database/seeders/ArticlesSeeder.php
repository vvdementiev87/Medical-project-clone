<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ArticlesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [];
        for($i = 0; $i < 10; $i++) {
            $data[] = [
                'author' => \fake()->firstName(),
                'title' => \fake()->word(),
                'description' => \fake()->sentence(10),
                'image_url' => \fake()->imageUrl(360, 360, 'animals'),
                'short_text' => \fake()->sentence(3),
                'text_html' => \fake()->sentence(10),
                'created_at' => \now(),
                'updated_at' => \now(),
            ];
        }
        \DB::table('articles')->insert($data);
    }
}