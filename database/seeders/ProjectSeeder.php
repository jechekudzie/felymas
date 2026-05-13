<?php

namespace Database\Seeders;

use App\Models\Project;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProjectSeeder extends Seeder
{
    public function run(): void
    {
        $rows = [
  0 => 
  [
    'id' => 1,
    'name' => 'GWERU MEGAWATT COMPLEX',
    'description' => '<p>An Award winning project development by Zimbabwe Electricity Industry Pension Fund (ZEIPF) for the construction of a four storey office block (6199m2) and a shopping mall complex along Bulawayo Road in Gweru, Zimbabwe. The development was completed in June 2018 at a cost of USD$14 million. Drawcard Construction was the main contractor and the development incorporates a Puma service station, TM Pick &amp; Pay Supermarket as the anchor tenant and other supporting services.&nbsp;</p>',
    'path' => 'projects/1562162300projects-06.jpg',
    'created_at' => '2019-07-03 20:58:20',
    'updated_at' => '2019-07-03 20:58:20',
  ],
  1 => 
  [
    'id' => 2,
    'name' => 'CARRICK ESTATE- BORROWDALE',
    'description' => '<p>The development involves the provision of project management services for a three storey, low density residential home in Borrowdale, Harare, Zimbabwe. The project is being constructed by Delmar Construction at an estimated completion cost of USD$300 000.00.&nbsp;</p>',
    'path' => 'projects/1562162678projects-04.jpg',
    'created_at' => '2019-07-03 21:04:38',
    'updated_at' => '2019-07-03 21:04:38',
  ],
  2 => 
  [
    'id' => 3,
    'name' => 'BELVEDERE RESIDENTIAL',
    'description' => '<p>Development involves the provision of project management and construction services for a low density residential home in Belvedere, Harare, Zimbabwe. Construction is being done by F and F Construction at an estimated cost of USD$90 000.00. Currently finishes are being implemented and completion is expected by September 2019.&nbsp;</p>',
    'path' => 'projects/1562162856projects-11.jpg',
    'created_at' => '2019-07-03 21:07:36',
    'updated_at' => '2019-07-03 21:07:36',
  ],
  3 => 
  [
    'id' => 4,
    'name' => 'WESTGATE RESIDENTIAL',
    'description' => '<p>Project involved the provision of construction services for a low density residential home in Westgate, Harare, Zimbabwe. Construction is being done by F and F Construction at an estimated cost of USD80 000.00.&nbsp;</p>',
    'path' => 'projects/1562163018projects-12.jpg',
    'created_at' => '2019-07-03 21:10:18',
    'updated_at' => '2019-07-03 21:10:18',
  ],
  4 => 
  [
    'id' => 5,
    'name' => 'ZIMRE RESIDENTIAL',
    'description' => '<p>The project involves the provision of construction services for a medium density residential home in Zimre Park, Harare, Zimbabwe. The development is at wall plate level and completion is anticipated during the 3rd quarter of the year. Completion cost is estimated to be USD$60 000.00. F and F Construction are the building contractors.&nbsp;</p>',
    'path' => 'projects/1562163108projects-10.jpg',
    'created_at' => '2019-07-03 21:11:48',
    'updated_at' => '2019-07-03 21:11:48',
  ],
  5 => 
  [
    'id' => 6,
    'name' => 'AVONDALE CLUSTER HOUSES ',
    'description' => '<p>The development involved the provision of project management services for the construction of cluster houses in Avondale, Harare, Zimbabwe. The cost of the development was USD$1 500 000.00. Skyta Construction were the contractors and they took one year to complete the project.&nbsp;</p>',
    'path' => 'projects/1562163163projects-01.jpg',
    'created_at' => '2019-07-03 21:12:43',
    'updated_at' => '2019-07-03 21:12:43',
  ],
];

        DB::table('projects')->delete();

        foreach ($rows as $row) {
            DB::table('projects')->insert($row);
        }
    }
}