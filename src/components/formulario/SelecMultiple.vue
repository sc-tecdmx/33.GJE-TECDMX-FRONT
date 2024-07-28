<template>
    <div class="dropdown">
        <label :for="selectId">{{ labelText }}</label>
        <div class="dropdown-container" @click="toggleDropdown">
          <div class="selected-options">
            <span v-if="selectedOptions.length === 0">{{ placeholder }}</span>
            <span v-for="option in selectedOptions" :key="option" class="selected-option">
              {{ getOptionLabel(option) }}
              <span class="remove-option" @click.stop="removeOption(option)">×</span>
            </span>
          </div>
          <div class="dropdown-arrow">v</div>
        </div>
        <div class="dropdown-menu" v-if="isOpen">
          <div v-for="option in options" :key="option.value" class="dropdown-item" @click="selectOption(option.value)">
            {{ option.label }}
          </div>
        </div>
      </div>
    </template>
    
    <script setup lang="ts">
       /* export default {
            name: 'SelcMultiple',
            props: {
        options: {
          type: Array,
          required: true
        },
        modelValue: {
          type: Array,
          required: true
        },
        labelText: {
          type: String,
          required: true
        },
        placeholder: {
          type: String,
          default: 'Selecciona opciones'
        }
      },
      data() {
        return {
          isOpen: false
        };
      },
      computed: {
        selectedOptions: {
          get() {
            return this.modelValue;
          },
          set(value) {
            this.$emit('update:modelValue', value);
          }
        },
        selectId() {
          return `select-${this._uid}`;
        }
      },
      methods: {
        toggleDropdown() {
          console.log('toggleDropdown called, current isOpen:', this.isOpen); // Mensaje de consola para depuración
          this.isOpen = !this.isOpen;
          console.log('New isOpen value:', this.isOpen); // Mensaje de consola para depuración
        },
        selectOption(value) {
          console.log('selectOption called with value:', value); // Mensaje de consola para depuración
          if (this.selectedOptions.includes(value)) {
            this.selectedOptions = this.selectedOptions.filter(option => option !== value);
          } else {
            this.selectedOptions.push(value);
          }
        },
        removeOption(value) {
          console.log('removeOption called with value:', value); // Mensaje de consola para depuración
          this.selectedOptions = this.selectedOptions.filter(option => option !== value);
        },
        getOptionLabel(value) {
          const option = this.options.find(option => option.value === value);
          return option ? option.label : '';
        },
        handleClickOutside(event) {
          if (!this.$el.contains(event.target)) {
            console.log('Click outside detected'); // Mensaje de consola para depuración
            this.isOpen = false;
          }
        }
      },
      mounted() {
        console.log('Component mounted'); // Mensaje de consola para depuración
        document.addEventListener('click', this.handleClickOutside);
      },
      beforeUnmount() {
        console.log('Component beforeUnmount'); // Mensaje de consola para depuración
        document.removeEventListener('click', this.handleClickOutside);
      }
        }
      */
      import { ref, computed, defineProps, defineEmits, onMounted, onBeforeUnmount } from 'vue';

    // Definición de tipos para las opciones y los props
    type Option = {
      value: any;
      label: string;
    };

    type Props = {
      options: Option[];
      modelValue: any[];
      labelText: string;
      placeholder?: string;
    };

    const props = defineProps<Props>();
    const emit = defineEmits(['update:modelValue']);

    const isOpen = ref(false);

    const selectedOptions = computed({
      get: () => props.modelValue,
      set: (value) => emit('update:modelValue', value),
    });

    const selectId = computed(() => `select-${Math.random().toString(36).substr(2, 9)}`);

    const toggleDropdown = () => {
      console.log('toggleDropdown called, current isOpen:', isOpen.value);
      isOpen.value = !isOpen.value;
      console.log('New isOpen value:', isOpen.value);
    };

    const selectOption = (value: any) => {
      console.log('selectOption called with value:', value);
      if (selectedOptions.value.includes(value)) {
        selectedOptions.value = selectedOptions.value.filter(option => option !== value);
      } else {
        selectedOptions.value.push(value);
      }
    };

    const removeOption = (value: any) => {
      console.log('removeOption called with value:', value);
      selectedOptions.value = selectedOptions.value.filter(option => option !== value);
    };

    const getOptionLabel = (value: any) => {
      const option = props.options.find(option => option.value === value);
      return option ? option.label : '';
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (!event.target) return;
      const el = event.target as HTMLElement;
      if (!el.closest(`#${selectId.value}`)) {
        console.log('Click outside detected');
        isOpen.value = false;
      }
    };

    onMounted(() => {
      console.log('Component mounted');
      document.addEventListener('click', handleClickOutside);
    });

    onBeforeUnmount(() => {
      console.log('Component beforeUnmount');
      document.removeEventListener('click', handleClickOutside);
    });
</script>
    
<style lang="scss" scoped>

    @import "../../assets/tecdmx/sass/jel/_var.scss";
    .dropdown {
      position: relative;
      width: 300px;
    }
    
    .dropdown-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px;
      border: $border-width $border-style $border-color-claro;
      border-radius: 4px;
      cursor: pointer;
    }
    
    .selected-options {
      display: flex;
      flex-wrap: wrap;
    }
    
    .selected-option {
      background-color: #e0e0e0;
      padding: $padding-sm;
      margin: 2px;
      border-radius: $br-xs;
      display: flex;
      align-items: center;
    }
    
    .remove-option {
      margin-left: $margin-xs;
      cursor: pointer;
    }
    
    .dropdown-arrow {
      margin-left: $margin-xm;
    }
    
    .dropdown-menu {
      position: absolute;
      top: 100%;
      left: $left-n;
      right: $rigth-n;
      background-color: $white;
      border: $border-width $border-style $border-color-claro;
      border-radius: $br-xs;
      max-height: 200px;
      overflow-y: auto;
      z-index: 10;
    }
    
    .dropdown-item {
      padding: $padding-xm;
      display: flex;
      align-items: center;
    }
    
    .dropdown-item:hover {
      background-color: $bg-pdf;
    }
    </style>