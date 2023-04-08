<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CommunityCenterSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [];
        for ($i = 0; $i < 10; $i++) {
            $data[] = [
                'name' => \fake()->word(),
                'description' => \fake()->sentence(10),
                'category_id' => $i + 1,
                'preview_photo' => \fake()->imageUrl(360, 360, 'animals'),
                'phone' => \fake()->randomNumber(5, true),
                'email' => \fake()->email(),
                'program_courses' => \fake()->word(),
                'link' => \fake()->word(),
                'created_at' => \now(),
                'updated_at' => \now(),
            ];
        }
        \DB::table('community_center')->insert($data);
    }
}
