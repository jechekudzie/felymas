<?php

namespace Database\Seeders;

use App\Models\Service;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ServiceSeeder extends Seeder
{
    public function run(): void
    {
        $rows = [
  0 => 
  [
    'id' => 1,
    'name' => 'Project Management',
    'description' => '<p>We have the experience and expertise to offer the best project management on your building developments. We offer the following</p>

<p><strong>Pre-construction</strong></p>

<ul>
	<li>
	<p>Site/Land Acquisition<strong>-</strong><strong> </strong>Procurement of land for development is one of our services.</p>
	</li>
</ul>

<p>We help the Clients to acquire land including carrying out the requisite due diligence with the Local Authority with the help of our Legal Partners.</p>

<ol>
	<li>
	<p>Feasibility&nbsp; Studies&nbsp; <strong>&ndash;&nbsp; </strong>We&nbsp; undertake&nbsp; feasibility&nbsp; studies&nbsp; for&nbsp; the&nbsp; developments&nbsp; to assess the practicality of a proposed development before implementation.</p>
	</li>
	<li>
	<p>Planning&nbsp; of&nbsp; activities<strong>-</strong><strong>&nbsp; </strong>We&nbsp; use&nbsp; the&nbsp; Client`s&nbsp; brief&nbsp; to&nbsp; determine&nbsp; the&nbsp; appropriate delivery method.</p>
	</li>
	<li>
	<p>Appointment and management of the professional team</p>
	</li>
	<li>
	<p>Design&nbsp; Development<strong>-</strong><strong>&nbsp; </strong>We&nbsp; assist&nbsp; in&nbsp; developing&nbsp; the&nbsp; required&nbsp; building&nbsp; plans&nbsp; in consultation with other development partners.</p>
	</li>
	<li>
	<p>Local Authority Approvals- We are responsible for consultations with Local Authority for statutory compliance including building plans approvals.</p>
	</li>
	<li>
	<p>Cost Estimates <strong>&ndash; </strong>We prepare bills of quantities for the Clients who need to know the budget for their developments.</p>
	</li>
	<li>
	<p>Procurement/Tendering - We assist clients with appointment of building contractor and materials procurement depending with the type of contract adopted.</p>
	</li>
</ol>

<p><strong>During construction</strong></p>

<ol>
	<li>
	<p>Coordination&nbsp; of&nbsp; activities&nbsp; &ndash;&nbsp; We&nbsp; make&nbsp; sure&nbsp; the&nbsp; activities&nbsp; are&nbsp; well&nbsp; planned&nbsp; and coordinated during construction to ensure successful project delivery</p>
	</li>
	<li>
	<p>Time,&nbsp; cost&nbsp; and&nbsp; quality&nbsp; management<strong>-</strong><strong>&nbsp; </strong>Time,&nbsp; cost&nbsp; and&nbsp; quality&nbsp; are&nbsp; the&nbsp; critical elements&nbsp; of&nbsp; any&nbsp; development.&nbsp; Felymas ensures that a high quality project is completed within the agreed timelines, at an agreed cost/budget.</p>
	</li>
	<li>
	<p>Health &amp; Safety management <strong>&ndash; </strong>To minimize any additional cost and losses to the</p>
	</li>
	<li>
	<p>Clients, we ensure safety is observed during implementation of the works<strong>.</strong></p>
	</li>
	<li>
	<p>Programme Management&nbsp;<strong>-</strong><strong> </strong>We ensure that all the work activities are planned and controlled to ensure the project is completed within the proposed timelines.</p>
	</li>
	<li>
	<p>Reporting&nbsp;&nbsp; &ndash;&nbsp;&nbsp; Production&nbsp;&nbsp; of&nbsp;&nbsp; regular&nbsp;&nbsp; construction&nbsp;&nbsp; progress&nbsp;&nbsp; reports&nbsp;&nbsp; including identification of risk elements</p>
	</li>
	<li>
	<p>Stage Approvals &ndash;Coordination of stage approvals and completion documentation</p>
	</li>
</ol>',
    'path' => 'services/1561913292Services-01.jpg',
    'created_at' => '2019-06-30 23:48:12',
    'updated_at' => '2019-07-03 22:24:32',
  ],
  1 => 
  [
    'id' => 2,
    'name' => 'Construction',
    'description' => '<p><strong>i.</strong><strong> Site Acquisition</strong></p>

<p>Felymas Consultants International in partnership with Real Estate Agents has a number of properties in their portfolio from High Density to Low Density nationwide. Felymas Consultants International has been assisting Clients to secure and acquire properties.</p>

<p><strong>ii.</strong><strong> Plan Drawing</strong></p>

<p>Felymas Consultants is in partnership with Architectural and Engineering experts who are responsible for designing housing plans for our Clients.</p>

<p><strong>Iii.Plans</strong><strong> Submission/Approval of Plans to Local Authority</strong></p>

<p>We together with are our partners are responsible for coordinating Local Authority building plans approvals.</p>

<p><strong>iv.</strong><strong> Plan Approval Follow up</strong></p>

<p>Felymas Consultants make follow ups with Local Authorities to ensure timely approvals of&nbsp; submitted&nbsp; plans&nbsp; and&nbsp; make&nbsp; sure&nbsp; any&nbsp; changes&nbsp; which&nbsp; require&nbsp; approvals&nbsp; are incorporated.</p>

<p><strong>v. Budget Preparation/Cost Estimates BOQ</strong></p>

<p>We have a competent team of Quantity Surveyors who prepares Bills of Quantities (BOQs) and budget estimates for the Client. A Bill of Quantity is an itemised list of materials, parts, and labour (with their costs) required to construct, maintain or repair a specific structure.</p>

<p><strong>vi. Contractor Procurement</strong></p>

<p>Felymas Consultants is in partnership with Building Contractors who then undertake the actual&nbsp;&nbsp; construction.&nbsp;&nbsp; We&nbsp;&nbsp; offer&nbsp;&nbsp; services&nbsp;&nbsp; for&nbsp;&nbsp; both&nbsp;&nbsp; commercial&nbsp;&nbsp; and&nbsp;&nbsp; residential developments (high, medium and low density structures).</p>

<p><strong>vii.&nbsp;&nbsp;&nbsp; Procurement of materials</strong></p>

<p>We are in partnership with building materials suppliers i.e. Halsteds, Electro sales, BETA&nbsp;&nbsp; Bricks,&nbsp;&nbsp; Willdale&nbsp;&nbsp; Bricks,&nbsp;&nbsp; POMONA&nbsp;&nbsp; Quarry,Essar&nbsp;&nbsp; Tubes&nbsp;&nbsp; and&nbsp;&nbsp; Towers,&nbsp;&nbsp; PPC</p>

<p>Zimbabwe, Allied Timbers among others. Felymas Consultants will assists Clients to procure all building materials at affordable prices based on our relationship with our partners.</p>

<p><strong>viii. Construction Works</strong></p>

<p>Felymas Consultants coordinates all the activities with building contractors to ensure the works are properly done. These are our obligations as we carry out the construction process.</p>

<p><strong>ix.Construction Site Visits/Quality Control</strong></p>

<p>Felymas Consultants has a competent team that supervises the construction from site preparation, building setting out with the assistance of a Land Surveyor, preparation of foundations, footing, and brick laying. We have the resources and workforce with extensive experience for execution of complex structures.</p>

<p><strong>x.</strong><strong> Stage Approvals</strong></p>

<p>Felymas Consultants ensures all building inspections stages are approved by Local Authority Inspectors.</p>

<ul>
	<li>
	<pre>
Site/Trenches inspection</pre>
	</li>
	<li>
	<pre>
DPC/Compaction inspection</pre>
	</li>
	<li>
	<pre>
Lintel/Window Level inspection</pre>
	</li>
	<li>
	<pre>
Wallplate/Gable inspection</pre>
	</li>
	<li>
	<pre>
Roof/Beams/Trusses inspection</pre>
	</li>
	<li>
	<pre>
Drain open test inspection</pre>
	</li>
	<li>
	<pre>
Final inspection</pre>
	</li>
</ul>

<p><strong>Xi.Compliance/Occupation</strong><strong> Certificate</strong></p>

<p>Felymas&nbsp; Consultants&nbsp; ensures&nbsp; that&nbsp; the&nbsp; building&nbsp; complies&nbsp; with&nbsp; the&nbsp; Local&nbsp; Authority requirements&nbsp; and&nbsp; make&nbsp; sure&nbsp; the&nbsp; structure&nbsp; obtains&nbsp; the&nbsp; Compliance/Occupation Certificate from the Local Authority such that the Client will then be in full occupation of their building.</p>',
    'path' => 'services/1561913509Services-03.jpg',
    'created_at' => '2019-06-30 23:51:49',
    'updated_at' => '2019-07-03 22:19:49',
  ],
  2 => 
  [
    'id' => 3,
    'name' => 'Consultancy',
    'description' => '<p>&nbsp;</p>

<ol>
	<li>
	<p><strong>We offer construction consultancy to Clients to help them make sound preparations for their upcoming projects by providing real-world, cost effective solutions to the everyday challenges that owners face throughout the construction process. </strong></p>
	</li>
	<li>
	<p><strong>We provide property acquisitions and project development consultancy where through our legal partner we verify authenticity of title deeds, land use, if there are any disputes or caveats etc. We provide advice through a detailed report with our findings and advice. </strong></p>
	</li>
</ol>',
    'path' => 'services/1561913585Services-04.jpg',
    'created_at' => '2019-06-30 23:53:05',
    'updated_at' => '2019-07-19 14:55:38',
  ],
  3 => 
  [
    'id' => 4,
    'name' => 'Felymas logistics',
    'description' => '<ul>
	<li>
	<p><strong>Felymas logistics is a subsidiary of Felymas Consultants that provide services of purchasing and transportation of building material to different sites nationwide for our Clients.</strong></p>
	</li>
	<li>
	<p><strong>Felymas Consultants is in partnership with building materials suppliers i.e. Halsted, Electro&nbsp; sales,&nbsp; BETA&nbsp; Bricks,&nbsp; Willdale&nbsp; Bricks,&nbsp; POMONA&nbsp; Quarry,Essar&nbsp; Tubes&nbsp; and Towers,&nbsp; PPC&nbsp; Zimbabwe,&nbsp; Allied&nbsp; Timbers&nbsp; among&nbsp; other.&nbsp; Felymas Consultants will assists Clients to procure all building materials at affordable prices based on our relationship with our partners.</strong></p>
	</li>
</ul>',
    'path' => 'services/1562927048Services-05.png',
    'created_at' => '2019-06-30 23:53:55',
    'updated_at' => '2019-07-12 17:24:08',
  ],
];

        DB::table('services')->delete();

        foreach ($rows as $row) {
            DB::table('services')->insert($row);
        }
    }
}