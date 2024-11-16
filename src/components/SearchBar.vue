<!-- src/components/SearchBar.vue -->
<template>
    <div class="search-bar">
      <input type="text" v-model="searchQuery" placeholder="搜索..." class="search-box" @input="onSearch" />
      <div class="filter-bar">
        <button @click="filterCondition('all')">全部</button>
        <button @click="filterCondition('category1')">类别1</button>
        <button @click="filterCondition('category2')">类别2</button>
        <!-- 根据需要添加更多筛选条件 -->
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SearchBar',
    props: {
      value: String,
    },
    data() {
      return {
        searchQuery: this.value || '',
      };
    },
    methods: {
      onSearch() {
        this.$emit('input', this.searchQuery);
      },
      filterCondition(condition) {
        this.$emit('filter', condition);
      },
    },
    watch: {
      value(newVal) {
        this.searchQuery = newVal;
      },
    },
  };
  </script>
  
  <style scoped>
  .search-bar {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .search-box {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 10px;
    width: 80%;
    max-width: 400px;
  }
  
  .filter-bar {
    display: flex;
    justify-content: center;
    gap: 10px;
  }
  
  .filter-bar button {
    padding: 5px 10px;
    background-color: #007bff; /* 蓝色按钮 */
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .filter-bar button:hover {
    background-color: #0056b3;
  }
  </style>