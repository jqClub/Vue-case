<template>
    <div class="login-form">
        <div class="g-form">
            <div class="g-form-line">
                <span class="g-form-label">用户名：</span>
                <div class="g-form-input">
                    <input type="text" v-model="usernameModel" placeholder="请输入用户名">
                </div>
                <span class="g-form-error">{{ userErrors.errorText }}</span>
            </div>
            <div class="g-form-line">
                <span class="g-form-label">密码：</span>
                <div class="g-form-input">
                    <input type="password" v-model="passwordModel" placeholder="请输入密码">
                </div>
                <span class="g-form-error">{{ passwordErrors.errorText }}</span>
            </div>
            <div class="g-form-line">
                <div class="g-form-btn">
                    <a class="button" @click="onLogin">登录</a>
                </div>
            </div>
            <p>{{ errorText }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                usernameModel: '',
                passwordModel: '',
                errorText: '', //都不通过时的错误信息
            }
        },
        computed: {
            //设置了一个错误信息，和一个状态来提示
            userErrors() {
                let errorText, status
                let isContain = /@/g.test(this.usernameModel)
                let len = this.usernameModel.length
                //              if(len == 0) {
                //                  status = true
                //                  errorText = ''
                //              } else {
                //                  log(isContain)
                //                  if(!isContain) {
                //                      status = false
                //                      errorText = '没有包含@'
                //                  } else {
                //                      status = true
                //                      errorText = ''
                //                  }
                //              }

                log(isContain)
                if(!isContain) {
                    status = false
                    errorText = '没有包含@'
                } else {
                    status = true
                    errorText = ''
                }
                //检验首次为空
                if(!this.userFlag) {
                    errorText = ''
                    this.userFlag = true
                }

                let result = {
                    status,
                    errorText,
                }
                return result
            },
            passwordErrors() {
                let errorText, status
                if(!/^\w{1,6}$/g.test(this.passwordModel)) {
                    status = false
                    errorText = '密码不是1-6位'
                } else {
                    status = true
                    errorText = ''
                }
                //检验首次为空
                if(!this.passwordFlag) {
                    errorText = ''
                    this.passwordFlag = true
                }
                return {
                    status,
                    errorText
                }
            }
        },
        methods: {
            onLogin() {
                if(!this.userErrors.status || !this.passwordErrors.status) {
                    this.errorText = '部分选项未通过'
                } else {
                    this.errorText = ''
                    this.$http.get('/apis/api/testData')
                        .then((res) => {
                            //登录成功后，把用户信息返回回去
                            this.$emit('has-log', res.data)
                            
//                          this.$emit('has-log', res.data)
                        }, (error) => {
                            console.log(`error: ${error}`)
                        }).catch((data) => {
                            console.log(`data: ${data}`)
                        })
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>