<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $userCollection = [];
        for ($i = 0; $i <= 5; $i++) {
            $userCollection[] = [
                'last_name' => \fake()->lastName(),
                'first_name' => \fake()->firstName(),
                'surname' => \fake()->firstNameFemale(),
                'birth_date' => \now(),
                'sign_for_news' => false,
                'position' => \fake()->jobTitle(),
                'password' => Hash::make('123'),
            ];
        }
        \DB::table('users')->insert($userCollection);
    
    }
}