<template>
    <div class="layout-px-spacing">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Apps</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Contacts</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

<!-- Buscar -->
        <div class="row layout-spacing layout-top-spacing" id="cancel-row">
            <div class="col-lg-12">
                <div class="panel-body searchable-container" :class="[grid_type]">
                    <div class="row">
                                <div class="col-xl-4 col-lg-5 col-md-5 col-sm-7 filtered-list-search layout-spacing align-self-center">
                                    <form class="form-inline my-2 my-lg-0">
                                        <div class="">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                class="feather feather-search"
                                            >
                                                <circle cx="11" cy="11" r="8"></circle>
                                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                            </svg>
                                            <input type="text" v-model.trim="search_user" class="product-search form-control" v-on:keyup="search_contacts()" placeholder="Search Contacts..." />
                                        </div>
                                    </form>
                                </div>

                                <div class="col-xl-8 col-lg-7 col-md-7 col-sm-5 text-sm-end text-center layout-spacing align-self-center">
                                    <div class="d-flex justify-content-sm-end justify-content-center">
                                        <a href="javascript:;" @click="edit_user">
                                            <svg
                                                id="btn-add-contact"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                class="feather feather-user-plus"
                                            >
                                                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                                <circle cx="8.5" cy="7" r="4"></circle>
                                                <line x1="20" y1="8" x2="20" y2="14"></line>
                                                <line x1="23" y1="11" x2="17" y2="11"></line>
                                            </svg>
                                        </a>

                                        <div class="switch align-self-center">
                                            <a href="javascript:;" @click="grid_type = 'list'">
                                                <svg
                                                    :class="{ 'active-view': grid_type == 'list' }"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    class="feather feather-list view-list me-1"
                                                >
                                                    <line x1="8" y1="6" x2="21" y2="6"></line>
                                                    <line x1="8" y1="12" x2="21" y2="12"></line>
                                                    <line x1="8" y1="18" x2="21" y2="18"></line>
                                                    <line x1="3" y1="6" x2="3" y2="6"></line>
                                                    <line x1="3" y1="12" x2="3" y2="12"></line>
                                                    <line x1="3" y1="18" x2="3" y2="18"></line>
                                                </svg>
                                            </a>
                                            <a href="javascript:;" @click="grid_type = 'grid'">
                                                <svg
                                                    :class="{ 'active-view': grid_type == 'grid' }"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    class="feather feather-grid view-grid"
                                                >
                                                    <rect x="3" y="3" width="7" height="7"></rect>
                                                    <rect x="14" y="3" width="7" height="7"></rect>
                                                    <rect x="14" y="14" width="7" height="7"></rect>
                                                    <rect x="3" y="14" width="7" height="7"></rect>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                </div>
            </div>
        </div>

<!-- Calendar -->        

<div class="row layout-top-spacing" id="cancel-row">
    <div class="col-xl-12 col-lg-12 col-md-12">
        <div class="statbox panel box box-shadow border-1">
            <div class="panel-body">
                <div class="calendar-upper-section">
                    <div class="row">
                        <div class="col-md-8 col-12">
                            <div class="labels text-md-start text-center">
                                <p class="label label-primary">Work</p>
                                <p class="label label-warning">Travel</p>
                                <p class="label label-success">Personal</p>
                                <p class="label label-danger">Important</p>
                            </div>
                        </div>
                        <div class="col-md-4 col-12">
                        <form class="form-horizontal mt-md-0 mt-3 text-md-end text-center">
                            <button type="button" 
                                    class="btn btn-primary br-4"
                                    data-bs-toggle="modal"
                                    data-bs-target="#addEventsModal" 
                                    @click="edit_event()">
                                <i class="bi bi-search me-2" ></i>
                                Recibir oficio
                            </button>
                        </form>
                    </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>            
<!-- Bootstrap -->
<div class="px-3 py-2 border-bottom mb-3">
      <div class="container d-flex flex-wrap justify-content-center">
        <form class="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto" role="search">
          <input type="search" class="form-control" placeholder="Search..." aria-label="Search">
        </form>

        <div class="text-end">
          <button type="button" class="btn btn-light text-dark me-2">Login</button>
          <button type="button" class="btn btn-primary me-2">Sign-up</button>
          <button type="button" 
                    class="btn btn-primary br-4"
                    data-bs-toggle="modal"
                    data-bs-target="#addEventsModal" 
                    @click="edit_event()">
                <i class="bi bi-search me-2" ></i>
                Recibir oficio
            </button>
        </div>
      </div>
</div>
<!-- Datatable -->
        <div class="row layout-top-spacing">
            <div class="col-xl-12 col-lg-12 col-sm-12 layout-spacing">
                <div class="panel br-6 p-0">
                    <div class="vue3-datatable">
                        <vue3-datatable :rows="rows" :columns="cols" :totalRows="rows?.length" :sortable="true"> </vue3-datatable>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { onMounted, ref } from 'vue';
    import Vue3Datatable from '@bhplugin/vue3-datatable'

    //// ifr. removed import { useMeta } from '/src/composables/use-meta';
    //// ifr. removed useMeta({ title: 'Sorting Table' });

    import "@/assets/ck/sass/apps/scrumboard.scss";
    import "@/assets/ck/sass/apps/invoice-list.scss";
    import '@/assets/ck/sass/apps/calendar.scss';

    const cols = ref([
        { field: 'id', title: 'ID', isUnique: true },
        { field: 'firstName', title: 'First Name' },
        { field: 'lastName', title: 'Last Name' },
        { field: 'email', title: 'Email' },
        { field: 'phone', title: 'Phone' },
    ]);
    const rows : any = ref([]);

    onMounted(() => {
        bind_data();
    });

    const bind_data = () => {
        rows.value  = [
            {
                id: 1,
                firstName: 'Caroline',
                lastName: 'Jensen',
                email: 'carolinejensen@zidant.com',
                dob: '2004-05-28',
                address: { street: '529 Scholes Street', city: 'Temperanceville', zipcode: 5235, geo: { lat: 23.806115, lng: 164.677197 } },
                phone: '+1 (821) 447-3782',
                isActive: true,
                age: 39,
                company: 'POLARAX',
            },
            {
                id: 2,
                firstName: 'Celeste',
                lastName: 'Grant',
                email: 'celestegrant@polarax.com',
                dob: '1989-11-19',
                address: { street: '639 Kimball Street', city: 'Bascom', zipcode: 8907, geo: { lat: 65.954483, lng: 98.906478 } },
                phone: '+1 (838) 515-3408',
                isActive: false,
                age: 32,
                company: 'MANGLO',
            },
            {
                id: 3,
                firstName: 'Tillman',
                lastName: 'Forbes',
                email: 'tillmanforbes@manglo.com',
                dob: '2016-09-05',
                address: { street: '240 Vandalia Avenue', city: 'Thynedale', zipcode: 8994, geo: { lat: -34.949388, lng: -82.958111 } },
                phone: '+1 (969) 496-2892',
                isActive: false,
                age: 26,
                company: 'APPLIDECK',
            },
            {
                id: 4,
                firstName: 'Daisy',
                lastName: 'Whitley',
                email: 'daisywhitley@applideck.com',
                dob: '1987-03-23',
                address: { street: '350 Pleasant Place', city: 'Idledale', zipcode: 9369, geo: { lat: -54.458809, lng: -127.476556 } },
                phone: '+1 (861) 564-2877',
                isActive: true,
                age: 21,
                company: 'VOLAX',
            },
            {
                id: 5,
                firstName: 'Weber',
                lastName: 'Bowman',
                email: 'weberbowman@volax.com',
                dob: '1983-02-24',
                address: { street: '154 Conway Street', city: 'Broadlands', zipcode: 8131, geo: { lat: 54.501351, lng: -167.47138 } },
                phone: '+1 (962) 466-3483',
                isActive: false,
                age: 26,
                company: 'ORBAXTER',
            },
            {
                id: 6,
                firstName: 'Buckley',
                lastName: 'Townsend',
                email: 'buckleytownsend@orbaxter.com',
                dob: '2011-05-29',
                address: { street: '131 Guernsey Street', city: 'Vallonia', zipcode: 6779, geo: { lat: -2.681655, lng: 3.528942 } },
                phone: '+1 (884) 595-2643',
                isActive: true,
                age: 40,
                company: 'OPPORTECH',
            },
            {
                id: 7,
                firstName: 'Latoya',
                lastName: 'Bradshaw',
                email: 'latoyabradshaw@opportech.com',
                dob: '2010-11-23',
                address: { street: '668 Lenox Road', city: 'Lowgap', zipcode: 992, geo: { lat: 36.026423, lng: 130.412198 } },
                phone: '+1 (906) 474-3155',
                isActive: true,
                age: 24,
                company: 'GORGANIC',
            },
            {
                id: 8,
                firstName: 'Kate',
                lastName: 'Lindsay',
                email: 'katelindsay@gorganic.com',
                dob: '1987-07-02',
                address: { street: '773 Harrison Avenue', city: 'Carlton', zipcode: 5909, geo: { lat: 42.464724, lng: -12.948403 } },
                phone: '+1 (930) 546-2952',
                isActive: true,
                age: 24,
                company: 'AVIT',
            },
            {
                id: 9,
                firstName: 'Marva',
                lastName: 'Sandoval',
                email: 'marvasandoval@avit.com',
                dob: '2010-11-02',
                address: { street: '200 Malta Street', city: 'Tuskahoma', zipcode: 1292, geo: { lat: -52.206169, lng: 74.19452 } },
                phone: '+1 (927) 566-3600',
                isActive: false,
                age: 28,
                company: 'QUILCH',
            },
            {
                id: 10,
                firstName: 'Decker',
                lastName: 'Russell',
                email: 'deckerrussell@quilch.com',
                dob: '1994-04-21',
                address: { street: '708 Bath Avenue', city: 'Coultervillle', zipcode: 1268, geo: { lat: -41.550295, lng: -146.598075 } },
                phone: '+1 (846) 535-3283',
                isActive: false,
                age: 27,
                company: 'MEMORA',
            },
            {
                id: 11,
                firstName: 'Odom',
                lastName: 'Mills',
                email: 'odommills@memora.com',
                dob: '2010-01-24',
                address: { street: '907 Blake Avenue', city: 'Churchill', zipcode: 4400, geo: { lat: -56.061694, lng: -130.238523 } },
                phone: '+1 (995) 525-3402',
                isActive: true,
                age: 34,
                company: 'ZORROMOP',
            },
            {
                id: 12,
                firstName: 'Sellers',
                lastName: 'Walters',
                email: 'sellerswalters@zorromop.com',
                dob: '1975-11-12',
                address: { street: '978 Oakland Place', city: 'Gloucester', zipcode: 3802, geo: { lat: 11.732587, lng: 96.118099 } },
                phone: '+1 (830) 430-3157',
                isActive: true,
                age: 28,
                company: 'ORBOID',
            },
            {
                id: 13,
                firstName: 'Wendi',
                lastName: 'Powers',
                email: 'wendipowers@orboid.com',
                dob: '1979-06-02',
                address: { street: '376 Greenpoint Avenue', city: 'Elliott', zipcode: 9149, geo: { lat: -78.159578, lng: -9.835103 } },
                phone: '+1 (863) 457-2088',
                isActive: true,
                age: 31,
                company: 'SNORUS',
            },
            {
                id: 14,
                firstName: 'Sophie',
                lastName: 'Horn',
                email: 'sophiehorn@snorus.com',
                dob: '2018-09-20',
                address: { street: '343 Doughty Street', city: 'Homestead', zipcode: 330, geo: { lat: 65.484087, lng: 137.413998 } },
                phone: '+1 (885) 418-3948',
                isActive: true,
                age: 22,
                company: 'XTH',
            },
            {
                id: 15,
                firstName: 'Levine',
                lastName: 'Rodriquez',
                email: 'levinerodriquez@xth.com',
                dob: '1973-02-08',
                address: { street: '643 Allen Avenue', city: 'Weedville', zipcode: 8931, geo: { lat: -63.185586, lng: 117.327808 } },
                phone: '+1 (999) 565-3239',
                isActive: true,
                age: 27,
                company: 'COMTRACT',
            },
            {
                id: 16,
                firstName: 'Little',
                lastName: 'Hatfield',
                email: 'littlehatfield@comtract.com',
                dob: '2012-01-03',
                address: { street: '194 Anthony Street', city: 'Williston', zipcode: 7456, geo: { lat: 47.480837, lng: 6.085909 } },
                phone: '+1 (812) 488-3011',
                isActive: false,
                age: 33,
                company: 'ZIDANT',
            },
            {
                id: 17,
                firstName: 'Larson',
                lastName: 'Kelly',
                email: 'larsonkelly@zidant.com',
                dob: '2010-06-14',
                address: { street: '978 Indiana Place', city: 'Innsbrook', zipcode: 639, geo: { lat: -71.766732, lng: 150.854345 } },
                phone: '+1 (892) 484-2162',
                isActive: true,
                age: 20,
                company: 'SUREPLEX',
            },
            {
                id: 18,
                firstName: 'Kendra',
                lastName: 'Molina',
                email: 'kendramolina@sureplex.com',
                dob: '2002-07-19',
                address: { street: '567 Charles Place', city: 'Kimmell', zipcode: 1966, geo: { lat: 50.765816, lng: -117.106499 } },
                phone: '+1 (920) 528-3330',
                isActive: false,
                age: 31,
                company: 'DANJA',
            },
            {
                id: 19,
                firstName: 'Ebony',
                lastName: 'Livingston',
                email: 'ebonylivingston@danja.com',
                dob: '1994-10-18',
                address: { street: '284 Cass Place', city: 'Navarre', zipcode: 948, geo: { lat: 65.271256, lng: -83.064729 } },
                phone: '+1 (970) 591-3039',
                isActive: false,
                age: 33,
                company: 'EURON',
            },
            {
                id: 20,
                firstName: 'Kaufman',
                lastName: 'Rush',
                email: 'kaufmanrush@euron.com',
                dob: '2011-07-10',
                address: { street: '408 Kingsland Avenue', city: 'Beaulieu', zipcode: 7911, geo: { lat: 41.513153, lng: 54.821641 } },
                phone: '+1 (924) 463-2934',
                isActive: false,
                age: 39,
                company: 'ILLUMITY',
            },
            {
                id: 21,
                firstName: 'Frank',
                lastName: 'Hays',
                email: 'frankhays@illumity.com',
                dob: '2005-06-15',
                address: { street: '973 Caton Place', city: 'Dargan', zipcode: 4104, geo: { lat: 63.314988, lng: -138.771323 } },
                phone: '+1 (930) 577-2670',
                isActive: false,
                age: 31,
                company: 'SYBIXTEX',
            },
        ];
    };
</script>
