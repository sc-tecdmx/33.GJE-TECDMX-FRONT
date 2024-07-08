<template>
    <div class="container">
        <br /><br /><br />
        Layout Catálogos---
        <div class="d-flex overflow-auto h-55px">
            <ul class="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bold flex-nowrap">
                <li class="nav-item">
                    <router-link class="nav-link text-active-primary me-6" to="/gje/admin/catalogos/tipo-acuerdo"
                        active-class="active">
                        Tipos de acuerdo
                    </router-link>
                    <router-link class="nav-link text-active-primary me-6"
                        to="/gje/admin/catalogos/tipo-acuerdo-agregar" active-class="active">
                        Agregar
                    </router-link>
                </li>
            </ul>
        </div>

        <router-view></router-view>
    </div>
</template>
<script setup lang="ts">
import { plugin, defaultConfig } from '@formkit/vue'

</script>