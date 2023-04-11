<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategoriesSeeder extends Seeder
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
                'created_at' => \now(),
                'updated_at' => \now(),
            ];
        }
        \DB::table('categories')->insert($data);
    }
}
