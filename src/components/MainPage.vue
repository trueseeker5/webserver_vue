<template>
  <div class="main-page">
    <header class="top-bar">
      <button @click="toggleSidebar" class="sidebar-toggle-button">
        {{ isSidebarCollapsed ? '展开侧边栏' : '收起侧边栏' }}
      </button>
      <button @click="showUserProfile" class="profile-button">
        个人主页
      </button>
    </header>
    <div class="content-container">
      <aside v-if="!isSidebarCollapsed" class="sidebar">
        <ul>
          <li><a href="#" @click.prevent="currentComponent = 'SearchBar'">产品信息</a></li>
          <li><a href="#" @click.prevent="currentComponent = ''">菜单项2</a></li>
          <li><a href="#" @click.prevent="currentComponent = 'UserProfile'">个人主页</a></li>
          <li><a href="#" @click.prevent="currentComponent = 'ProductPublish'">新信息发布</a></li>
        </ul>
      </aside>
      <div class="content">
        <component :is="currentComponent" />
      </div>
    </div>
  </div>
</template>

<script>

import UserProfile from '@/components/UserProfile.vue';
import SearchBar from '@/components/SearchBar.vue';
import ProductPublish from './ProductPublish.vue';

export default {
  name: 'MainPage',
  components: {
    UserProfile,
    SearchBar,
    ProductPublish
  },
  data() {
    return {
      isSidebarCollapsed: false,
      currentComponent: 'SearchBar', // 默认显示的组件
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarCollapsed = !this.isSidebarCollapsed;
    },
    showUserProfile() {
      this.currentComponent = 'UserProfile';
    },

  },
};  
</script>

<style scoped>
.main-page {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #007bff; /* 蓝色背景 */
  color: white;
  padding: 10px 20px;
}

.sidebar-toggle-button,
.profile-button {
  background: none;
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;
}

.content-container {
  display: flex;
  flex: 1;
}

.sidebar {
  width: 200px;
  background-color: #f0f8ff; /* 浅蓝色背景 */
  padding: 20px;
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar li {
  margin-bottom: 15px;
}

.sidebar a {
  text-decoration: none;
  color: #333;
  cursor: pointer;
}

.content {
  flex: 1;
  padding: 20px;
  overflow: auto;
}

.header-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

.site-name {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}
</style>