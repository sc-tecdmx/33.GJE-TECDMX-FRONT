<template>
    <!--UL-->
    <ul class="tree-list">

        <!--LISTA QUE MUESTRA CARPETAS-->
        <li v-for="(node, index) in nodes" :key="node.id" class="tree-list__tree-item" :class="{'selected': selectedFile && selectedFile.id === node.id }">
           
            <!--RENDER DE NODO-->
            <div class="tree-list__tree-item__tree-node" :class="[node.type]" @click="toggle(node.id, node)">
                <span v-if="node.type === 'folder'" class="tree-list__tree-item__tree-node__folder-icon">
                <font-awesome-icon icon="folder" class="tree-list__tree-item__tree-node__folder-icon__icon-folder"/>
                </span>
                <span class="tree-list__tree-item__tree-node__node-text">{{ node.name }}</span>
                <span v-if="node.type === 'file'" class="tree-list__tree-item__tree-node__file-icon">
                <font-awesome-icon icon="file" class="tree-list__tree-item__tree-node__file-icon__icon-pdf"/>
                </span>
            </div>
           <!--END RENDER DE NODO-->

            <!--RENDER DE HIJOS Y EMITE EL EVENTO FILE-SELECTED-->
            <ul v-if="isExpanded(node.id) && node.children && node.children.length" class="nested-tree-list">
                <Tree :nodes="node.children" @file-selected="$emit('file-selected', $event)" />
            </ul>
            <!--END RENDER DE HIJOS-->

        </li>
         <!--END LISTA QUE MUESTRA CARPETAS-->
  </ul> 
  <!--END UL-->
  </template>
  
  <script setup lang="ts">

        import { ref } from 'vue';
        import { defineProps } from 'vue';
        import { TreeNode } from '@/components/ts/types';
        import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
        import { faFolder, faFile } from '@fortawesome/free-solid-svg-icons';
        import { library } from '@fortawesome/fontawesome-svg-core';

        library.add(faFolder, faFile);

        const props = defineProps<{
        nodes: TreeNode[];
        }>();

        const emits = defineEmits<{
        (event: 'file-selected', file: TreeNode): void;
        }>();

        const expandedNodes = ref(new Set<number>());
        const selectedFile = ref<TreeNode | null>(null);

        const toggle = (id: number, node: TreeNode) => {
        if (node.type === 'file') {
            selectedFile.value = node;
            emits('file-selected', node);
        }
        if (expandedNodes.value.has(id)) {
            expandedNodes.value.delete(id);
        } else {
            expandedNodes.value.add(id);
        }
        };
        const isExpanded = (id: number) => expandedNodes.value.has(id);

  </script>
  
  <style lang="scss" scoped>

    @import "../../assets/tecdmx/sass/jel/_var.scss";

    .tree-list, .nested-tree-list {
            list-style-type: none;
            padding-left: 5px;
            margin: 0;
        &__tree-item {
            margin: 0; 
            position: relative;
            padding-left: 0px;
            &__tree-node {
                display: flex;
                align-items: center;
                padding: 2px 0; 

                transition: background-color 0.2s;
                cursor: pointer;
            &__node-text {
                flex-grow: 1;
                padding: 0 5px;
                text-align: left!important;
            }
            &__folder-icon {
                margin-right: 5px;
                &__icon-folder {
                    color: $icon-folder;
                    font-size: $text-lg;
                }
            }
            &__file-icon {
                margin-left: 5px;
                background: $white;
                &__icon-file {
                    font-size: $text-lg;
                }
            }
            }
            &__tree-node:hover {
                background-color: $bg-pdf;
            }
        }
        &__tree-item::before {
            content: '';
            position: absolute;
            background: $bg-claro-2;
            top: -8px;
            left: -10px;
            bottom: 0;
            width: 1px;
            height: 20px;
        }
        &__tree-item::after {
            content: '';
            position: absolute;
            background: $bg-claro-2;
            top: 15px;
            left: -10px;
            width: 10px;
            height: 1px;
        }
        &__tree-item:last-child::before {
            height: 23px; 
        }

    }

    .folder {
        font-weight: normal;
        color: $link-base;
    }

    .file {
        font-style: italic;
        color: $file;
        width: auto;
        display:block;
        text-align: left;
    }

  </style>