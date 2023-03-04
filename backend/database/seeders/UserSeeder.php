<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [];
        for($i = 0; $i < 10; $i++) {
            $data[] = [
                'last_name' => \fake()->lastName(),
                'first_name' => \fake()->firstName(),
                'surname' => \fake()->lastName(),
                'birth_date' => \fake()->date('Y_m_d'),
                'email' => \fake()->email(),
                'position' => \fake()->randomDigit(),
                'password' => \fake()->numberBetween(),
                'created_at' => \now(),
                'updated_at' => \now(),
            ];
        }
        \DB::table('users')->insert($data);
    }
}
