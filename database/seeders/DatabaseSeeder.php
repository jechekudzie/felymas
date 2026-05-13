<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     *
     * Production usage:
     *   php artisan migrate --force
     *   php artisan db:seed --force
     *
     * Each content seeder truncates its own table before inserting, so re-running
     * is idempotent for content. UserSeeder skips users whose email already exists,
     * so re-running won't overwrite admin passwords changed after deploy.
     */
    public function run(): void
    {
        $this->call([
            UserSeeder::class,
            AboutSeeder::class,
            VisionSeeder::class,
            MissionSeeder::class,
            SliderSeeder::class,
            ServiceSeeder::class,
            ProjectSeeder::class,
            TeamSeeder::class,
            PartnerSeeder::class,
            BlogSeeder::class,
        ]);
    }
}
