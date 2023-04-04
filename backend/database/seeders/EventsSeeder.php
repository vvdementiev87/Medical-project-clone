<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class EventsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [];
        for($i = 0; $i < 10; $i++) {
            $data[] = [
                'name' => \fake()->word(),
                'description' => \fake()->sentence(10),
                'short_text' => \fake()->sentence(10),
                'image' => \fake()->imageUrl(360, 360, 'animals'),
                'place' => \fake()->word(),
                'date_start' => now()->addDays(10),
                'date_end' => now()->addDays(11),
                'created_at' => \now(),
                'updated_at' => \now(),
            ];
        }
        \DB::table('events')->insert($data);
    }
}
