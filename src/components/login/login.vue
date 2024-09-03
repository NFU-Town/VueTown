<template>
  <div class="container">
    <div class="login">
      <h2>登 录</h2>
      <div class="login_form">
        <div class="form_item">
          <span>账号：</span>
          <input v-model="usernameInput" type="text" placeholder="请输入账号" />
        </div>
        <div class="form_item">
          <span>密码：</span>
          <input v-model="passwordInput" type="password" placeholder="请输入密码" />
        </div>
      </div>
      <div class="btn">
        <button class="login_btn" @click="login">登 &nbsp;&nbsp;录</button>
      </div>
      <div v-if="error" class="error">{{ error }}</div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'Login',
  setup() {
    const username = ref('');
    const password = ref('');
    const usernameInput = ref('');
    const passwordInput = ref('');
    const error = ref('');
    const router = useRouter();

    // 初始登录数据
    const fetchLoginData = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            username: 'nanyuanxiaozhen',
            password: '123456',
          });
        }, 1000); // 模拟网络延迟
      });
    };

    const login = () => {
      if (usernameInput.value === username.value && passwordInput.value === password.value) {
        router.push('/setting');
      } else {
        error.value = '账号或密码错误';
      }
    };

    onMounted(async () => {
      try {
        const data = await fetchLoginData();
        username.value = data.username;
        password.value = data.password;
      } catch (err) {
        console.error('Error fetching login data:', err);
      }
    });

    return {
      usernameInput,
      passwordInput,
      login,
      error,
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('@/assets/town_files/backgound.jpg');
  background-size: cover;
  background-position: center;
}

.login {
  text-align: center;
  width: 600px;
  padding: 20px;
  background-color: rgba(87, 86, 86, 0.2);
  border-radius: 25px;
  box-shadow: 5px 2px 35px -7px #fff;
}

.login h2 {
  margin-top: 40px;
  color: #fff;
  font-weight: 700;
  font-size: 30px;
  font-family: "KaiTi", "Microsoft YaHei", sans-serif;
}

.login_form {
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form_item {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  width: 100%;
  justify-content: center;
}

.form_item span {
  color: #fff;
  font-size: 19px;
  font-weight: 700;
  width: 80px; /* 可以根据需要调整 */
  text-align: right;
  margin-right: 10px;
}

.login_form input {
  background-color: transparent;
  width: 250px; /* 调整输入框宽度 */
  padding: 10px;
  color: #fff;
  font-size: 20px;
  font-family: "KaiTi";
  border: 0;
  border-bottom: 2px solid rgb(242, 244, 245); /* 加粗底部边框 */
  outline: none;
}

input::placeholder {
  color: #f8f5f7;
  font-weight: 100;
  font-size: 19px;
  font-style: italic;
}

.login_btn {
  background-color: rgba(255, 255, 255, 0.26);
  border: 1px solid rgb(190, 225, 255);
  width: 220px;
  height: 60px;
  border-radius: 30px;
  font-size: 22px;
  font-family: "KaiTi";
  color: white;
  font-weight: 100;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s, box-shadow 0.3s;
}

.login_btn:hover {
  box-shadow: 2px 2px 15px 2px rgb(251, 251, 252);
  background-color: transparent;
}

.error {
  color: red;
  margin-top: 20px;
  font-size: 18px;
}
</style>
