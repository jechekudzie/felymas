<?php

namespace Database\Seeders;

use App\Models\Mission;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MissionSeeder extends Seeder
{
    public function run(): void
    {
        $rows = [
  0 => 
  [
    'id' => 1,
    'description' => '<p>We are committed to providing effective and quality building construction related services to all the Clients regardless of the magnitude of the projects at a favourable cost.&nbsp;</p>',
    'path' => 'missions/1561915960ourmission.jpg',
    'created_at' => '2019-07-01 00:32:40',
    'updated_at' => '2019-07-01 00:32:40',
  ],
];

        DB::table('missions')->delete();

        foreach ($rows as $row) {
            DB::table('missions')->insert($row);
        }
    }
}