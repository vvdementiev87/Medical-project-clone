<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class NewsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [];
        for ($i = 0; $i < 10; $i++) {
            $data[] = [
                'title' => \fake()->word(),
                'short_description' => \fake()->sentence(10),
                'description' => \fake()->sentence(10),
                'image_url' => \fake()->imageUrl(360, 360, 'animals'),
                'created_at' => \now(),
                'updated_at' => \now(),
            ];
        }
        \DB::table('news')->insert($data);
    }
}
