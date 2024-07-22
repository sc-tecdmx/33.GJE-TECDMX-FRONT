<template>
    <!--COMPONENTE DRAG AND DROP-->
    <div class="drag-drop-container"
        @dragover.prevent
        @dragenter="dragEnter"
        @dragleave="dragLeave"
        @drop="dropFile">
        <div v-if="!file">
        <p>{{ texDrag }}</p>
        </div>
        <div v-else>
        <p>Archivo seleccionado: {{ file.name }}</p>
        </div>
    </div>
    <!--END COMPONENTE DRAG AND DROP-->
</template>

<script>
export default {
    name: 'InptDragDrop',
    data() {
        return {
        file: null,
        isDragging: false
        }
    },
    methods: {
        dragEnter(event) {
        event.preventDefault();
        this.isDragging = true;
        },
        dragLeave(event) {
        event.preventDefault();
        this.isDragging = false;
        },
        dropFile(event) {
        event.preventDefault();
        this.isDragging = false;
        const fileList = event.dataTransfer.files;
        if (fileList.length > 0) {
            this.file = fileList[0];
            }
        }
    },
    props: {
        texDrag: String
    }
}
</script>

<style lang="scss" scoped>
.drag-drop-container {
    border: 2px dashed #ccc;
    padding: 20px;
    text-align: center;
    cursor: pointer;
}

</style>