<template>
    <!--  BEGIN SIDEBAR  -->
    
    <div class="sidebar-wrapper sidebar-theme">
        <nav ref="menu" id="sidebar">
            <div class="shadow-bottom"></div>

            <perfect-scrollbar class="list-unstyled menu-categories" tag="ul" :options="{ wheelSpeed: 0.5, swipeEasing: !0, minScrollbarLength: 40, maxScrollbarLength: 300, suppressScrollX: true }">
                
                <template v-for="(item, i) in MenuConfig" :key="i">
                <li class="menu" v-if="item.submenu">
                    <a  class="dropdown-toggle" 
                        data-bs-toggle="collapse" 
                        :data-bs-target ="'#target_' + i"
                        :aria-controls  ="'target_' + i"
                        aria-expanded   ="false">
                        <div class="">
                            <i v-if="item.icon" :class="item.icon" class="fs-7 me-1"></i>
                            <span>{{ item.titulo }}</span>
                        </div>
                        <div>
                            <i class="bi bi-chevron-right fs-6"></i>
                        </div>
                    </a>
                    
                    <ul :id="'target_' + i" 
                        class="collapse submenu list-unstyled" 
                        data-bs-parent="#sidebar">
                        <template v-for="(submenu, j) in item.submenu" :key="j">
                            <li v-if="submenu.subsubmenu">
                                <a  class="dropdown-toggle"
                                    :href="'#submenu_' + j" 
                                    data-bs-parent="#apps"
                                    data-bs-toggle="collapse"
                                    role="button"
                                    aria-expanded="false">
                                    <div class="">
                                        <i v-if="submenu.icon" :class="submenu.icon" class="fs-7 me-1"></i>
                                        <span>{{ submenu.titulo }}</span>
                                    </div>
                                    <div>
                                        <i class="bi bi-arrow-down-short fs-6"></i>
                                    </div>
                                </a>
                                <ul :id="'submenu_' + j"  
                                    class="collapse list-unstyled sub-submenu">
                                    <template v-for="(subsubmenu, k) in submenu.subsubmenu" :key="k">
                                        <li>
                                            <router-link 
                                                v-if="subsubmenu.route"
                                                :to="subsubmenu.route"
                                                @click="toggleMobileMenu"
                                            >
                                                <div class="">
                                                    <i  v-if="subsubmenu.icon"  :class="subsubmenu.icon" class="fs-7 me-1"></i>
                                                    <span>{{ subsubmenu.titulo }}</span>
                                                </div>
                                            </router-link>
                                        </li>
                                    </template>
                                </ul>
                            </li>
                            <li v-else>
                                <router-link 
                                    v-if="submenu.route"
                                    :to="submenu.route"
                                     @click="toggleMobileMenu"
                                >
                                    <div class="">
                                        <i v-if="submenu.icon"  :class="submenu.icon" class="fs-7 me-1"></i>
                                        <span>{{ submenu.titulo }}</span>
                                    </div>
                                </router-link>
                            </li>
                        </template>
                    </ul>
                </li>
                <li class="menu" v-else>
                    <router-link 
                        v-if="item.route"
                        :to="item.route"
                        class="dropdown-toggle" 
                        @click="toggleMobileMenu"
                    >
                        <div class="">
                            <i  v-if="item.icon"  :class="item.icon" class="fs-7 me-1"></i>
                            <span>{{ item.titulo }}</span>
                        </div>
                    </router-link>
                </li>
            </template>  
            </perfect-scrollbar>
        </nav>
    </div>
    <!--  END SIDEBAR  -->
</template>

<script setup>
    import { onMounted, ref } from 'vue';
    import { useRoute } from "vue-router";
    import  useThemeStore from "@/stores/vista/theme-store";
    import  MenuConfig  from "@/layouts/app/config/MenuSGD"

    const route       = useRoute();
    const themeStore  = useThemeStore();

    const menu_collapse = ref('dashboard');

    onMounted(() => {
        const selector = document.querySelector('#sidebar a[href="' + window.location.pathname + '"]');
        if (selector) {

            const ul = selector.closest('ul.collapse');

            if (ul) {
                let ele = ul.closest('li.menu').querySelectorAll('.dropdown-toggle');
                if (ele) {
                    ele = ele[0];
                    setTimeout(() => {
                        ele.click();
                    });
                }
            } else {
                selector.click();
            }
        }
    });

    const toggleMobileMenu = () => {
        if (window.innerWidth < 991) {
            themeStore.toggleSideBar( !themeStore.state.is_show_sidebar);
        }
    };
</script>
