<template>
 <div class="container my-5">
    <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
      <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
        <h1 class="display-4 fw-bold lh-1 text-body-emphasis">Portal de Sistemas Institucionales</h1>
        <p class="lead">Accede a los servicios informáticos del Tribunal Electoral de la Ciudad de México.</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
          <button type="button" class="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Ingresar</button>
          <button type="button" class="btn btn-outline-secondary btn-lg px-4">Registrar</button>
        </div>
      </div>
      <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
          <img class="rounded-lg-3" src="@/assets/tecdmx/images/tecdmx_xv.jpg" alt="" width="720">
      </div>
    </div>
  </div>

</template>

<script setup>
    import "/src/assets/ck/sass/pages/error/style-maintanence.scss";
    import { useMeta } from "/src/composables/use-meta";
    useMeta({ title: "Maintenence" });
</script>
