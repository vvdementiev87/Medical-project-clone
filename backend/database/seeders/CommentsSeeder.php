<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CommentsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [];
        for($i = 0; $i < 10; $i++) {
            $data[] = [
                'author_id' => \fake()->numberBetween(1, 1),
                'post_id' => \fake()->numberBetween(1, 10),
                'description' => \fake()->sentence(10),
                'created_at' => \now(),
                'updated_at' => \now(),
            ];
        }
        \DB::table('comments')->insert($data);
    }
}
