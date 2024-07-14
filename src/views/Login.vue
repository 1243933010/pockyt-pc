<template>
    <div class="page-con">
        <div class="content">
            <div class="tip">
                <div class="title">{{ $t("app.name10") }}</div>
                <div class="label">{{ $t("app.name11") }}</div>
            </div>
            <div class="form">

                <div class="input">
                    <el-input v-model="requestInfo.email" :placeholder="$t('app.name12')" />
                </div>
                <div class="input">
                    <el-input v-model="requestInfo.password" :placeholder="$t('app.name12')" />
                </div>
                <div class="forget">
                    <span>{{ $t("app.name14") }}</span>
                </div>
                <!-- <el-table mb-1 :data="[]" />
                    <el-pagination :total="100" /> -->

                <div class="btn" @click="loginHandle"> <el-button type="primary">{{ $t("app.name15") }}</el-button>
                </div>
                <div class="btn btn1"><el-button type="primary">{{ $t("app.name16") }}</el-button></div>
            </div>
        </div>
    </div>
</template>


<script setup>
import { ref, reactive } from 'vue'
import { $request } from '@/utils/request';
import { useRouter } from 'vue-router';
import { ElMessage } from 'element-plus'
// import {useStore} from 'pinia'
// import type { FormInstance, FormRules } from 'element-plus'
// const store = useStore()
const requestInfo = ref({
    email: "1243933010@qq.com",
    password: "ChongShao1@"
})
const router = useRouter();

const loginHandle = async () => {
    console.log(requestInfo)
    if (!requestInfo.value.email || !requestInfo.value.password) {
        return false
    }
    $request("login", requestInfo.value).then(async res => {
        console.log(res)
        let {
            data,
            code,
            msg
        } = res.data;


        if (code !== 200) {
            // 登录失败
            ElMessage({
                message: res.data.msg,
                type: 'error',
            })
            return;
        }
        let {
            token,
            userinfo
        } = data;

        // console.log(store)

        // localStorage.setItem("token", JSON.stringify(token))
        // localStorage.setItem("userinfo", JSON.stringify(userinfo))
        // router.push({ path: '/' })


    });
}
</script>


<style lang="less" scoped>
@import url('../assets/less/variable.less');

.page-con {
    width: 100%;
    padding-top: 20px;

    .content {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;

        .tip {
            text-align: center;

            .title {
                font-size: 30px;
                font-weight: 600;
            }

            .label {
                font-size: 17px;
                margin-bottom: 15px;
            }
        }

        .form {
            min-width: 400px;

            .input {
                margin-bottom: 15px;
            }

            .forget {
                width: 100%;
                display: flex;
                flex-direction: row-reverse;
                color: #a0d7ba;
                margin-bottom: 15px;
            }

            .btn {
                width: 100%;
                margin-bottom: 15px;

                .el-button {
                    width: 100%;
                    background-color: #41AF74;
                    border: 1px solid #41AF74;
                    border-radius: 10px;
                }
            }

            .btn1 {
                .el-button {
                    background-color: white;
                    color: #41AF74;
                }

            }
        }
    }


}
</style>