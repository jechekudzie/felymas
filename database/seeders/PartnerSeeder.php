<?php

namespace Database\Seeders;

use App\Models\Partner;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PartnerSeeder extends Seeder
{
    public function run(): void
    {
        $rows = [
  0 => 
  [
    'id' => 1,
    'name' => 'TM Pick & Pay',
    'url' => NULL,
    'path' => 'partners/1562417644patners-01.jpg',
    'created_at' => '2019-07-06 19:42:39',
    'updated_at' => '2019-07-06 19:54:31',
  ],
  1 => 
  [
    'id' => 2,
    'name' => 'Zimbabwe Institution Of Engineering',
    'url' => NULL,
    'path' => 'partners/1562417755patners-02.jpg',
    'created_at' => '2019-07-06 19:55:55',
    'updated_at' => '2019-07-06 19:55:55',
  ],
  2 => 
  [
    'id' => 3,
    'name' => 'PPC Zimbabwe',
    'url' => NULL,
    'path' => 'partners/1562417771patners-03.jpg',
    'created_at' => '2019-07-06 19:56:11',
    'updated_at' => '2019-07-06 19:56:11',
  ],
  3 => 
  [
    'id' => 4,
    'name' => 'Essar Tubes and Towers',
    'url' => NULL,
    'path' => 'partners/1562417795patners-04.jpg',
    'created_at' => '2019-07-06 19:56:35',
    'updated_at' => '2019-07-06 19:56:35',
  ],
  4 => 
  [
    'id' => 5,
    'name' => 'Swazzy Granites',
    'url' => NULL,
    'path' => 'partners/1562417816patners-05.jpg',
    'created_at' => '2019-07-06 19:56:56',
    'updated_at' => '2019-07-06 19:56:56',
  ],
  5 => 
  [
    'id' => 6,
    'name' => 'Allied Timbers',
    'url' => NULL,
    'path' => 'partners/1562417835patners-06.jpg',
    'created_at' => '2019-07-06 19:57:15',
    'updated_at' => '2019-07-06 19:57:15',
  ],
  6 => 
  [
    'id' => 7,
    'name' => 'PUMA',
    'url' => NULL,
    'path' => 'partners/1562417856patners-07.jpg',
    'created_at' => '2019-07-06 19:57:36',
    'updated_at' => '2019-07-06 19:57:36',
  ],
  7 => 
  [
    'id' => 8,
    'name' => 'Halsted Brothers',
    'url' => NULL,
    'path' => 'partners/1562417889patners-08.jpg',
    'created_at' => '2019-07-06 19:58:09',
    'updated_at' => '2019-07-06 19:58:09',
  ],
  8 => 
  [
    'id' => 9,
    'name' => 'Electro sales',
    'url' => NULL,
    'path' => 'partners/1562417910patners-09.jpg',
    'created_at' => '2019-07-06 19:58:30',
    'updated_at' => '2019-07-06 19:58:30',
  ],
  9 => 
  [
    'id' => 10,
    'name' => 'OK Zimbabwe',
    'url' => NULL,
    'path' => 'partners/1562417923patners-10.jpg',
    'created_at' => '2019-07-06 19:58:43',
    'updated_at' => '2019-07-06 19:58:43',
  ],
  10 => 
  [
    'id' => 11,
    'name' => 'Beta Bricks',
    'url' => NULL,
    'path' => 'partners/1562417951patners-11.jpg',
    'created_at' => '2019-07-06 19:59:11',
    'updated_at' => '2019-07-06 19:59:11',
  ],
];

        DB::table('partners')->delete();

        foreach ($rows as $row) {
            DB::table('partners')->insert($row);
        }
    }
}