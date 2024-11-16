<!-- src/components/UserProfile.vue -->
<template>
  <div class="user-profile">
    <h2>个人主页</h2>
    <div class="profile-info">
      <p><strong>用户名:</strong> {{ user.name }}</p>
      <p><strong>邮箱:</strong> {{ user.email }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserProfile',
  data() {
    return {
      user: {
        name: '',
        email: '',
      },
    };
  },
  created() {
    // 从本地存储中获取用户信息
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (userInfo) {
      this.user.name = userInfo.name;
      this.user.email = userInfo.email;
    }
  },
};
</script>

<style scoped>
.user-profile {
  padding: 20px;
  background-color: #f0f8ff; /* 浅蓝色背景 */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 0 auto;
  font-family: 'Arial', sans-serif; /* 使用无衬线字体 */
}

.user-profile h2 {
  color: #333;
  text-align: center;
  font-size: 24px; /* 标题字体大小 */
  margin-bottom: 20px; /* 标题与内容之间的间距 */
}

.profile-info p {
  margin: 10px 0;
  font-size: 16px;
}

.profile-info strong {
  color: #333;
}
</style>