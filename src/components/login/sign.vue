<template>
  <div class="container">
    <div class="login">
      <h2>注册</h2>
      <div class="login_form">
        <div class="form_item">
          <span>用户名：</span>
          <input v-model="usernameInput" type="text" placeholder="请输入用户名" />
        </div>
        <div class="form_item">
          <span>邮箱：</span>
          <input v-model="usernameInput" type="text" placeholder="请输入邮箱" />
        </div>
        <div class="form_item">
          <span>设置密码：</span>
          <input v-model="passwordInput" type="password" placeholder="请输入密码" />
        </div>
        <div class="form_item">
          <span>确认密码：</span>
          <input v-model="passwordConfirmInput" type="password" placeholder="请重新输入密码" />
        </div>
        <div class="form_item">
          <span>验证码：</span>
          <div class="verification-container">
            <input v-model="verificationCodeInput" type="text" placeholder="请输入验证码" />
            <button class="get-code-btn" @click="getVerificationCode">获取验证码</button>
          </div>
        </div>
      </div>
      <div class="btn">
        <button class="login_btn" @click="register">注 &nbsp;&nbsp;册</button>
      </div>
      <div v-if="error" class="error">{{ error }}</div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'Register',
  setup() {
    const usernameInput = ref('');
    const passwordInput = ref('');
    const passwordConfirmInput = ref('');
    const verificationCodeInput = ref('');
    const error = ref('');
    const router = useRouter();

    const register = () => {
      if (passwordInput.value !== passwordConfirmInput.value) {
        error.value = '两次输入的密码不一致';
      } else {
        // 执行注册逻辑
        router.push('/login'); // 注册成功后跳转
      }
    };

    const getVerificationCode = () => {
      // 这里可以添加获取验证码的逻辑
      alert('验证码已发送！'); // 示例
    };

    return {
      usernameInput,
      passwordInput,
      passwordConfirmInput,
      verificationCodeInput,
      register,
      getVerificationCode,
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
  width: 100px; /* 统一设置标签宽度 */
  text-align: right;
  margin-right: 10px;
}

.verification-container {
  position: relative;
  display: flex;
  align-items: center;
}

.login_form input {
  background-color: transparent;
  width: 250px; /* 统一设置输入框宽度 */
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

.get-code-btn {
  background: none;
  color: #007bff; /* 蓝色字体 */
  border: none;
  cursor: pointer;
  font-size: 14px; /* 小字体 */
   font-weight: bold;
  position: absolute; /* 绝对定位 */
  right: 0; /* 靠右对齐 */
  top: 50%; /* 垂直居中 */
  transform: translateY(-50%); /* 向上移动50%以居中 */
  padding: 0;
}

.btn {
  display: flex;
  gap: 20px; /* 按钮间距 */
  justify-content: center;
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
