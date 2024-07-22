<template>
    <!--CONTENEDOR DE TABLE-->
    <div class="table-responsive-xxl p-0">

        <!--TABLE-->
        <table  class="table table-striped table-hover rounded">
            <!--THEAD-->
            <thead class="table-dark ">
                <tr>
                    <th v-for="(header, index) in headers" :key="index" class="fixed-width col2 align-middle text-center fw-light fs-6">{{ header }}</th>
                </tr>
            </thead>
            <!--END THEAD-->

            <!--TBODY-->
            <tbody>
                <!--<tr v-for="(row, rowIndex) in data" :key="rowIndex">-->
                    <tr v-for="(row, rowIndex) in visibleData" :key="rowIndex">
                    <td v-for="(cell, cellIndex) in row" :key="cellIndex" class="fixed-width align-middle text-center fs-6">
                        <span v-if="cell.icon && cell.url && cell.texto  && cell.li">
                            <lista-menu 
                        :liClass="cell.li"
                        :rutaName="cell.url"
                        :iconClass="cell.icon"
                        :texto="cell.texto"
                        />
                        </span>
                        <span v-else>{{ cell }}</span>
                    </td>
                </tr>
            </tbody>
            <!--END TBODY-->

        </table>
        <!--END TABLE-->

    </div>
    <!--END CONTENEDOR DE TABLE-->
</template>

<script>

    import ListaMenu from '../../common/ListaMenu.vue';
    export default {
        name: 'TablaPrincipal',
        components: {
            ListaMenu
        },
        props: {
            headers: {
            type: Array,
            required: true
            },
            data: {
            type: Array,
            required: true
            },
    limit: {
      type: Number,
      required: true
    }
        },
  computed: {
    visibleData() {
      return this.data.slice(0, this.limit);
    }
  }
    }
</script>

<style lang="scss" scoped>

th:first-of-type{

  border-radius: 5px 0px 0px 0px;
}

th:last-of-type {
    border-radius: 0px 5px 0px 0px;
}

/*
th {
    background: #0A2241!important; 
}
    */

.fixed-width:first-of-type {
    width: 50px!important;

}

.fixed-width:nth-of-type(2) {
    width: 150px!important;

}

.fixed-width:nth-of-type(3) {
    width: 250px!important;
}

.fixed-width:last-of-type {
    width: 45px!important;
}
/*
th {
  background-color: #f2f2f2;
}*/
</style>