<template>
    <div>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <a href="https://www.tecdmx.org.mx">
                        <IconHome />
                    </a>
                </li>
                <template v-for="(item, i) in breadcrumbs" :key="i">
                    <template v-for="(path, i) in item" :key="i">
                        <li class="breadcrumb-item" v-if="path?.to">
                            <router-link :to="{ name: path?.to}">
                                {{ path?.label }} 
                            </router-link>
                        </li>
                        <li class="breadcrumb-item" v-else>
                                {{ path?.label }} 
                        </li>
                    </template>
                </template>
            </ol>
        </nav>
        
    </div>
</template>
<script setup lang="ts">
import IconHome from "@/assets/svg/IconHome.vue";
import { computed } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const breadcrumbs = computed(() => {
    const matchedRoutes = route.matched;
    return matchedRoutes.map((routeItem) => (
        routeItem.meta.breadcrumb
    ));
});
</script>