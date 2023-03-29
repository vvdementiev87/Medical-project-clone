<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ThemeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [];
        for($i = 0; $i < 10; $i++) {
            $data[] = [
                'title' => \fake()->word(),
                'description' => \fake()->sentence(10),
                'url_preview' => \fake()->imageUrl(360, 360, 'animals'),
                'created_at' => \now(),
                'updated_at' => \now(),
            ];
        }
        \DB::table('gallery_theme')->insert($data);
    }
}
