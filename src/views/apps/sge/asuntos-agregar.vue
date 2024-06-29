<template>
    <div class="layout-px-spacing apps-invoice-add">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Apps</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Invoice Edit</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>
        <div class="row invoice layout-top-spacing layout-spacing no-gutters justify-content-center"> <!--PAO -->
            <div class="col-xxl-10 col-12"> <!--PAO -->
                <div class="doc-container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="invoice-content">
                                <div class="invoice-detail-body">
                                    <div class="invoice-detail-title mb-0">
                                        <div class="col-xl-5 invoice-address-company">
                                            <h3>Agregar nuevo asunto</h3>
                                        </div>
                                    </div>
                                    <!-- Título del documento PAO-->

                                    <!-- INPUTS ASUNTOS -->

                                    <div class="invoice-detail-total mb-3">
                                        <div class="row">
                                            <!-- Fecha de recepción -->
                                            <div class="col-12 col-md-6 col-lg-2">
                                                <FechaBasica label="Fecha de recepción"></FechaBasica>
                                            </div>
                                            <!--  -->

                                            <!-- Expediente -->
                                            <div class="col-12 col-md-6 col-lg-4">
                                                <div class="form-group row invoice-created-by">
                                                    <div class="col-sm-12">
                                                        <label :for="nombreExpediente"
                                                            class="col-sm-12 col-form-label col-form-label-sm pb-0">Nombre
                                                            de Expediente:</label>
                                                        <input type="text" v-model="params.nombreExpediente"
                                                            :id="nombreExpediente" class="form-control form-control-sm"
                                                            placeholder="Nombre de expediente " />
                                                    </div>
                                                </div>
                                            </div>
                                            <!--  -->
                                            <div class="col-12 col-md-6 col-lg-6">

                                            </div>
                                            <!-- Parte Actora -->
                                            <div class="col-12 col-md-6 col-lg-6">
                                                <InputForm idName="autoridadResponsable" label="Parte Actora"
                                                    placeholder="Parte Actora">
                                                </InputForm>
                                            </div>
                                            <!--  -->
                                            <!-- Autoridad Responsable -->
                                            <div class="col-12 col-md-6 col-lg-6">
                                                <InputForm idName="pActora" label="Autoridad u Órgano responsable"
                                                    placeholder="Autoridad u Órgano responsable">
                                                </InputForm>
                                            </div>
                                            <!--  -->

                                            <!-- Acto impugnado -->
                                            <TextAreaNotas label="Acto impugnado"
                                                placeholder="Agregue descripción del acto impugnado"></TextAreaNotas>
                                            <!--  -->


                                            <div class="col-12 col-md-6 col-lg-4">
                                                <div class="form-group row invoice-created-by">
                                                    <div class="col-sm-12">
                                                        <label :for="uso"
                                                            class="col-sm-12 col-form-label col-form-label-sm pb-0">Via
                                                            de recepción</label>
                                                        <select v-model="params.idUso"
                                                            class="form-select form-select-sm" :id="uso">
                                                            <option value="">Seleccionar</option>
                                                            <option v-for="opcion in catViaRecepcion" :value="opcion.id">{{
                                                                opcion.label }}</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-12 col-md-6 col-lg-4">
                                                <div class="form-group row invoice-created-by">
                                                    <div class="col-sm-12">
                                                        <label :for="areaDestino"
                                                            class="col-sm-12 col-form-label col-form-label-sm pb-0">
                                                            Unidad territorial</label>
                                                        <select v-model="params.idAreaDestino"
                                                            class="form-select form-select-sm" :id="areaDestino">
                                                            <option value="">Seleccionar</option>
                                                            <option v-for="opcion in catUnidadTerritorial" :value="opcion.id">
                                                                {{ opcion.distrito }}</option>

                                                        </select>
                                                    </div>
                                                </div>

                                            </div>
                                            <div class="col-12 col-md-6 col-lg-4">
                                                <div class="form-group row invoice-created-by">
                                                    <div class="col-sm-12">
                                                        <label :for="areaCopia"
                                                            class="col-sm-12 col-form-label col-form-label-sm pb-0">Demarcación
                                                            territorial</label>
                                                        <select v-model="params.idAreaCopia"
                                                            class="form-select form-select-sm" :id="areaCopia">
                                                            <option value="">Seleccionar</option>
                                                            <option v-for="opcion in catDemarcacion" :value="opcion.id">
                                                                {{ opcion.demarcacion }}</option>

                                                        </select>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-12 col-md-6 col-lg-4">
                                                <div class="form-group row invoice-created-by">
                                                    <div class="col-sm-12">
                                                        <label :for="tipoDocumento"
                                                            class="col-sm-12 col-form-label col-form-label-sm pb-0">Magistratura</label>
                                                        <select v-model="params.idtipoDocumento"
                                                            class="form-select form-select-sm" :id="tipoDocumento">
                                                            <option value="">Seleccionar</option>
                                                            <option v-for="opcion in catMagistrados"
                                                                :value="opcion.id">{{ opcion.magistrado }}</option>

                                                        </select>
                                                    </div>
                                                </div>
                                            </div>

                                            <!-- Vinculado -->
                                            <div class="col-12 col-md-6 col-lg-4">
                                                <InputForm idName="vinculado" label="Vinculado"
                                                    placeholder="Por definir">
                                                </InputForm>
                                            </div>
                                            <!--  -->

                                            <!-- Reencauzamiento o Escisión -->
                                            <div class="col-12 col-md-6 col-lg-4">
                                                <InputForm idName="rEscision" label="Reencauzamiento o Escisión"
                                                    placeholder="Por definir">
                                                </InputForm>
                                            </div>
                                            <!--  -->
                                            <!-- FIN DEL PRIMER FORMULARIO DE CAPTURA -->


                                            <!-- <div class="col-12 col-md-6 col-lg-4">
                                                <div class="form-group row invoice-created-by">
                                                    <div class="col-sm-12">
                                                        <label :for="tipoDocumento"
                                                            class="col-sm-12 col-form-label col-form-label-sm pb-0">Tipo
                                                            de Documento:</label>
                                                        <select v-model="params.idtipoDocumento"
                                                            class="form-select form-select-sm" :id="tipoDocumento">
                                                            <option value="">--Seleccionar--</option>
                                                            <option v-for="opcion in catTipoDocumento"
                                                                :value="opcion.id">{{ opcion.tipo }}</option>

                                                        </select>
                                                    </div>
                                                </div> 

                                            </div>

                                            <div class="col-12 col-md-6 col-lg-4">
                                                <div class="form-group row invoice-created-by">
                                                    <div class="col-sm-12">
                                                        <label :for="idDocumento"
                                                            class="col-sm-12 col-form-label col-form-label-sm pb-0">ID
                                                            del Documento:</label>
                                                        <input type="text" v-model="params.idDocumento"
                                                            :id="idDocumento" class="form-control form-control-sm"
                                                            placeholder=" id documento " />
                                                    </div>
                                                </div>
                                                
                                            </div>


                                            <div class="col-12 col-md-6 col-lg-4">
                                                <div class="form-group row invoice-created-by">
                                                    <div class="col-sm-12">
                                                        <label :for="folio"
                                                            class="col-sm-12 col-form-label col-form-label-sm pb-0">Folio:</label>
                                                        <input type="text" v-model="params.folio" :id="folio"
                                                            class="form-control form-control-sm"
                                                            placeholder=" folio " />
                                                    </div>
                                                </div>
                                            </div>


                                            <div class="col-12 col-md-6 col-lg-4">
                                                <div class="form-group row invoice-created-by">
                                                    <div class="col-sm-12">
                                                        <label for="payment-method-account"
                                                            class="col-sm-12 col-form-label col-form-label-sm pb-0">Folio
                                                            del
                                                            documento:</label>
                                                        <input type="text" v-model="params.folioDocumento"
                                                            id="payment-method-account"
                                                            class="form-control form-control-sm"
                                                            placeholder="Generar ..." />
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-12 col-md-6 col-lg-4">
                                                <div class="form-group row invoice-created-by">
                                                    <div class="col-sm-12">
                                                        <label :for="numeroExpediente"
                                                            class="col-sm-12 col-form-label col-form-label-sm pb-0">Número
                                                            de Expediente:</label>
                                                        <input type="text" v-model="params.numeroExpediente"
                                                            :id="numeroExpediente" class="form-control form-control-sm"
                                                            placeholder="expediente " />
                                                    </div>
                                                </div> 
                                            </div>

                                            <div class="col-12 col-md-6 col-lg-4">
                                                <FechaBasica label="Fecha de documento"></FechaBasica>
                                            </div>

                                            <div class="col-12 col-md-6 col-lg-4">
                                                <div class="form-group row invoice-created-by">
                                                    <div class="col-sm-12">
                                                        <label :for="destinatario"
                                                            class="col-sm-12 col-form-label col-form-label-sm pb-0">Destinatario:</label>
                                                        <select v-model="params.idDestinatario"
                                                            class="form-select form-select-sm" :id="destinatario">
                                                            <option value="">--Seleccionar--</option>
                                                            <option v-for="opcion in catDestinatario"
                                                                :value="opcion.id">{{ opcion.nombre }}</option>

                                                        </select>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-12 col-md-6 col-lg-4">
                                                <div class="form-group row invoice-created-by">
                                                    <div class="col-sm-12">
                                                        <label :for="cargo"
                                                            class="col-sm-12 col-form-label col-form-label-sm pb-0">Cargo:</label>
                                                        <select v-model="params.idCargo"
                                                            class="form-select form-select-sm" :id="cargo">
                                                            <option value="">--Seleccionar--</option>
                                                            <option v-for="opcion in catCargo" :value="opcion.id">{{
                                                                opcion.cargo }}</option>

                                                        </select>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-12 col-md-6 col-lg-4">
                                                <div class="form-group row invoice-created-by">
                                                    <div class="col-sm-12">
                                                        <label :for="asuntoDocumento"
                                                            class="col-sm-12 col-form-label col-form-label-sm pb-0">Asunto:</label>
                                                        <input type="text" v-model="params.asunto" :id="asuntoDocumento"
                                                            class="form-control form-control-sm"
                                                            placeholder="asunto " />
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-12 col-md-6 col-lg-4">
                                                <InputForm idName="contenidoDocumento" label="Contenido:"
                                                    placeholder="Contenido"></InputForm>
                                            </div> -->

                                        </div>
                                    </div>

                                    <!-- SUGUNDO FORMULARIO-->
                                    <div class="invoice-detail-items">
                                        <div class="row">
                                            <!-- Fecha de recepción -->
                                            <div class="col-12 col-md-6 col-lg-4">
                                                <FechaBasica label="Fecha de la resolución"></FechaBasica>
                                            </div>

                                            <div class="col-12 col-md-6 col-lg-4">
                                                <div class="form-group row invoice-created-by">
                                                    <div class="col-sm-12">
                                                        <label :for="uso"
                                                            class="col-sm-12 col-form-label col-form-label-sm pb-0">Tipo
                                                            de
                                                            resolución</label>
                                                        <select v-model="params.idUso"
                                                            class="form-select form-select-sm" :id="uso">
                                                            <option value="">Seleccionar</option>
                                                            <option v-for="opcion in catUso" :value="opcion.id">{{
                                                                opcion.label }}</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-12 col-md-6 col-lg-4">
                                                <div class="form-group row invoice-created-by">
                                                    <div class="col-sm-12">
                                                        <label :for="tipoDocumento"
                                                            class="col-sm-12 col-form-label col-form-label-sm pb-0">Magistrada/o
                                                            encargado del engrose</label>
                                                        <select v-model="params.idtipoDocumento"
                                                            class="form-select form-select-sm" :id="tipoDocumento">
                                                            <option value="">--Seleccionar--</option>
                                                            <option v-for="opcion in catMagistrados"
                                                                :value="opcion.id">{{ opcion.magistrado }}</option>

                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Acto impugnado -->
                                        <TextAreaNotas label="Sentido de la resolución"
                                            placeholder="Agregue descripción del sentido de la resolución">
                                        </TextAreaNotas>
                                        <!--  -->

                                        <!--  -->
                                    </div>

                                    <div class="invoice-detail-total mb-3">
                                        <div class="row">
                                            <!-- Tematics -->
                                            <div class="col-12 col-md-6 col-lg-6">
                                                <InputForm idName="vinculado" label="Temática"
                                                    placeholder="Por definir">
                                                </InputForm>
                                            </div>
                                            <!--  -->

                                            <!-- Juicio Federal-->
                                            <div class="col-12 col-md-6 col-lg-6">
                                                <InputForm idName="rEscision" label="Juicio Federal"
                                                    placeholder="Por definir">
                                                </InputForm>
                                            </div>

                                            <TextAreaNotas label="Sentido de la resolución"
                                                placeholder="Agregue descripción del sentido de la resolución">
                                            </TextAreaNotas>
                                        </div>

                                    </div>

                                    <div class="invoice-detail-items">
                                        <div class="row">
                                            <!-- Oficio de radicación -->
                                            <div class="col-12 col-md-6 col-lg-4">
                                                <InputForm idName="vinculado" label="Oficio de radicación "
                                                    placeholder="Por definir">
                                                </InputForm>
                                            </div>
                                            <!--  -->

                                            <!-- Cierre de instrucción-->
                                            <div class="col-12 col-md-6 col-lg-4">
                                                <InputForm idName="rEscision" label="Cierre de instrucción"
                                                    placeholder="Por definir">
                                                </InputForm>
                                            </div>

                                            <!-- Audiencias -->
                                            <div class="col-12 col-md-6 col-lg-4">
                                                <InputForm idName="rEscision" label="Audiencias"
                                                    placeholder="Por definir">
                                                </InputForm>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="invoice-detail-total mb-3">
                                        <div class="row">
                                            <!-- Carga -->
                                            <div class="col-12 col-md-6 col-lg-3">
                                                <InputForm idName="cResponsable" label="Carga para la responsable"
                                                    placeholder="Por definir">
                                                </InputForm>
                                            </div>

                                            <div class="col-12 col-md-6 col-lg-3">
                                                <FechaBasica label="Fecha en que la Ponencia regresó el expediente">
                                                </FechaBasica>
                                            </div>

                                            <!-- Carga -->
                                            <div class="col-12 col-md-6 col-lg-3">
                                                <InputForm idName="cResponsable" label="Incidentes"
                                                    placeholder="Por definir">
                                                </InputForm>
                                            </div>

                                            <div class="col-12 col-md-6 col-lg-3">
                                                <FechaBasica label="Fecha de acuerdo plenario de cumplimiento">
                                                </FechaBasica>
                                            </div>

                                            <div class="col-lg-6">
                                                <TextAreaNotas label="Resolutivos"
                                                    placeholder="Agregue los resolutivos"></TextAreaNotas>
                                            </div>
                                            <div class="col-lg-6">
                                                <TextAreaNotas label="Observaciones"
                                                    placeholder="Agregue las observaciones"></TextAreaNotas>
                                            </div>

                                            <div class="col-12 col-md-6 col-lg-4">
                                                <div class="form-group row invoice-created-by">
                                                    <div class="col-sm-12">
                                                        <label :for="uso"
                                                            class="col-sm-12 col-form-label col-form-label-sm pb-0">Estado</label>
                                                        <select v-model="params.idUso"
                                                            class="form-select form-select-sm" :id="uso">
                                                            <option value="">Seleccionar</option>
                                                            <option v-for="opcion in catUso" :value="opcion.id">{{
                                                                opcion.label }}</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-lg-4">

                                            </div>

                                            <div class="col-lg-4">

                                                <SwitchRounded class="ms-5" label="Aprobar publicación"></SwitchRounded>
                                            </div>





                                        </div>
                                    </div>


                                    <!-- <TablaAgregar
                                        titulo="Agregar Firmantes"
                                        labelButton="Agregar firmante"
                                        :options = catFirmantes
                                    ></TablaAgregar> -->

                                    <!-- Agregar Destinatarios -->
                                    <!-- <TablaAgregar
                                        titulo="Agregar Destinatarios"
                                        labelButton="Agregar Destinatario"
                                    ></TablaAgregar> -->

                                    <!-- ./ Agregar Firmantes -->
                                    <!-- <TextAreaNotas
                                        label="Notas:"
                                        placeholder="Agregue sus observaciones"
                                    ></TextAreaNotas> -->
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-12">

                            <!-- <div class="invoice-actions"> -->
                            <!-- <div class="invoice-action-currency">
                                    <h4 class="ms-5 mb-3">Configuración</h4>
                                        <SwitchRounded
                                            class="ms-5"
                                            label="Firmar en este orden"
                                        ></SwitchRounded>
                                        <SwitchRounded
                                            class="ms-5"
                                            label="Mantener en modo captura"
                                        ></SwitchRounded>
                                        <SwitchRounded
                                            class="ms-5"
                                            label="Generar número de oficio"
                                        ></SwitchRounded>

                                </div> -->
                            <!-- Fecha límite de firma -->
                            <!-- <div class="invoice-action-tax ms-4">
                                    <div class="invoice-action-tax-fields">
                                        <div class="row">
                                            <div class="col-12 col-sm-8 col-lg-4">
                                                <FechaBasica
                                                    label="Fecha límite de firma"
                                                ></FechaBasica>
                                            </div>
                                        </div>
                                    </div>
                                </div> -->


                            <!--  <div class="invoice-action-discount ms-5">
                                    <h4>Documentos a firmar</h4>
                                    <div class="row">
                                        <div class="col-12 col-sm-8 col-lg-6">
                                            <AgregarArchivoMultiple></AgregarArchivoMultiple>
                                        </div>
                                    </div>
                                </div> -->
                            <!-- </div> -->

                            <!-- Botones -->
                            <div class="invoice-actions-btn d-flex flex-row-reverse mt-1">
                                <div class="invoice-action-btn">
                                    <div class="row">
                                        <div class="col-xl-6 col-md-6">
                                            <a href="javascript:;" class="btn btn-danger btn-send p-3">Cancelar</a>
                                        </div>
                                        <div class="col-xl-6 col-md-6">
                                            <a href="javascript:;" class="btn btn-primary btn-send p-3">Guardar</a>
                                        </div>
                                        <!-- <div class="col-xl-3 col-md-3">
                                            <a data-bs-toggle="modal" data-bs-target="#composeMailModal"
                                                id="btn-compose-mail" class="btn btn-secondary btn-send p-3"
                                                href="javascript:void(0);" @click="open_mail('add')">
                                                Firmar ahora
                                            </a>

                                        </div>
                                        <div class="col-xl-3 col-md-3">
                                            <a href="javascript:;" class="btn btn-success btn-download">Enviar a
                                                firmantes</a>
                                        </div> -->
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
     
    </div>
</template>

<script setup>
    import { onMounted, ref } from "vue";
    import "/src/assets/ck/sass/apps/invoice-edit.scss";

    //flatpickr
    import flatPickr from "vue-flatpickr-component";
    import "flatpickr/dist/flatpickr.css";
    import "/src/assets/ck/sass/forms/custom-flatpickr.css";

    import { useMeta } from "/src/composables/use-meta";

    useMeta({ title: "Invoice Edit" });

    const items = ref([]);
    const selected_file = ref("/src/assets/ck/images/cork-logo.png");
    const params = ref({
        title: "Cork Inc.",
        invoice_no: "#0001",
        from: { name: "Cork Inc.", email: "info@company.com", address: "XYZ Delta Street", phone: "(120) 456 789" },
        to: { name: "Jesse Cory", email: "redq@company.com", address: "405 Mulberry Rd. Mc Grady, NC, 28649", phone: "(128) 666 070" },

        invoice_date: "",
        due_date: "",
        bank_info: { no: "1234567890", name: "Bank of America", swift_code: "VS70134", country: "United States" },
        notes: "Thank you for doing business with us.",
    });
    const currency_list = ref([]);
    const selected_currency = ref({ key: "USD - US Dollar", thumb: "flags/en.png" });
    const tax_type_list = ref([]);
    const selected_tax_type = ref({ key: "None", value: null });
    const discount_list = ref([]);
    const selected_discount = ref({ key: "None", value: null, type: "" });

    onMounted(() => {
        //set default data
        items.value = [
            { id: 1, title: "Calendar App Customization", description: "Make Calendar App Dynamic", rate: 60, quantity: 2, amount: 120, is_tax: false },
            { id: 2, title: "Chat App Customization", description: "Customized Chat Application to resolve some Bug Fixes", rate: 25, quantity: 1, amount: 25, is_tax: false },
        ];

        let dt = new Date();
        params.value.invoice_date = JSON.parse(JSON.stringify(dt));
        dt.setDate(dt.getDate() + 5);
        params.value.due_date = dt;

        //currency list
        currency_list.value = [
            { key: "USD - US Dollar", thumb: "flags/en.png" },
            { key: "GBP - British Pound", thumb: "flags/gbp.png" },
            { key: "IDR - Indonesian Rupiah", thumb: "flags/idr.png" },
            { key: "INR - Indian Rupee", thumb: "flags/inr.png" },
            { key: "BRL - Brazilian Real", thumb: "flags/brl.png" },
            { key: "EUR - Germany (Euro)", thumb: "flags/de.png" },
            { key: "TRY - Turkish Lira", thumb: "flags/tr.png" },
        ];

        //tax type list
        tax_type_list.value = [
            { key: "Deducted", value: 10 },
            { key: "Per Item", value: 5 },
            { key: "On Total", value: 25 },
            { key: "None", value: null },
        ];

        //discount list
        discount_list.value = [
            { key: "Percent", value: 10, type: "percent" },
            { key: "Flat Amount", value: 25, type: "amount" },
            { key: "None", value: null, type: "" },
        ];
    });

    const change_file = (event) => {
        selected_file.value = URL.createObjectURL(event.target.files[0]);
    };

    const add_item = () => {
        let max_id = 0;
        if (items.value && items.value.length) {
            max_id = items.value.reduce((max, character) => (character.id > max ? character.id : max), items.value[0].id);
        }
        items.value.push({ id: max_id + 1, title: "", description: "", rate: 0, quantity: 0, amount: 0, is_tax: false });
    };

    const remove_item = (item) => {
        items.value = items.value.filter((d) => d.id != item.id);
    };
</script>
