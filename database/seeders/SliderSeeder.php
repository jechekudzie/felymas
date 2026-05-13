<?php

namespace Database\Seeders;

use App\Models\Slider;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SliderSeeder extends Seeder
{
    public function run(): void
    {
        $rows = [
  0 => 
  [
    'id' => 1,
    'caption' => 'Felymas Consultants International',
    'path' => 'sliders/1561912515other slides of team-04.jpg',
    'status' => '1',
    'created_at' => '2019-06-30 23:35:15',
    'updated_at' => '2019-07-18 18:33:45',
  ],
];

        DB::table('sliders')->delete();

        foreach ($rows as $row) {
            DB::table('sliders')->insert($row);
        }
    }
}