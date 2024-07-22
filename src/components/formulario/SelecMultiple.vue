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
    
    <script>
        export default {
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
    </script>
    
    <style lang="scss" scoped>
    .dropdown {
      position: relative;
      width: 300px;
    }
    
    .dropdown-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
      cursor: pointer;
    }
    
    .selected-options {
      display: flex;
      flex-wrap: wrap;
    }
    
    .selected-option {
      background-color: #e0e0e0;
      padding: 4px;
      margin: 2px;
      border-radius: 4px;
      display: flex;
      align-items: center;
    }
    
    .remove-option {
      margin-left: 4px;
      cursor: pointer;
    }
    
    .dropdown-arrow {
      margin-left: 8px;
    }
    
    .dropdown-menu {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background-color: white;
      border: 1px solid #ccc;
      border-radius: 4px;
      max-height: 200px;
      overflow-y: auto;
      z-index: 10;
    }
    
    .dropdown-item {
      padding: 8px;
      display: flex;
      align-items: center;
    }
    
    .dropdown-item:hover {
      background-color: #f0f0f0;
    }
    </style>