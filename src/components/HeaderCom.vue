<script setup>
import { $request } from '@/utils/request'
import { reactive, ref } from 'vue';
import { userStoreFnc } from '@/stores/userStore';
const store = userStoreFnc()
import { useI18n } from 'vue-i18n';
let { t, locale } = useI18n();
const scroll = ref([])
const list = ref([])

// const local = ref(store.local);
const locals = ref('zh-ch');

const options = ref([
    {value:'zh-ch',label:'CN'},
    {value:'en',label:'EN'},
])
let getClass = async () => {
    let res = await $request('goodsClass', '/0')
    console.log(res)
    if (res.data.code == 200) {
        scroll.value = res.data.data;
        list.value = scroll.value[0].child;
    }
}

console.log(locals.value)

const checkLocal = () => {
    locale.value = 'fr'
}

getClass();
</script>

<template>
    <div class="header-container">
        <div class="header-container-top">
            <div class="logo" @click="checkLocal">
                <img class="img1" src="@/assets/logo1.svg" alt="">
                <div class="search-box">
                    <div class="search">
                        <input type="text" placeholder="search" />
                        <div class="search-icon">
                            <div class="pic">
                                <img src="@/assets/search.svg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="right">
                <el-dropdown trigger="click">
                    <div class="name" v-if="store.user.email">
                        <span>{{ store.user.email ? store.user.email : $t("app.name1") }}</span>
                        <!-- <span>{{store.user.email }}</span> -->

                        <img src="@/assets/xiala.png" alt="">
                        <!-- {{ $t("message.hello") }} -->
                    </div>
                    <template #dropdown>

                        <el-dropdown-menu>
                            <el-dropdown-item>{{ $t('app.newAdd1') }}</el-dropdown-item>
                            <el-dropdown-item>{{ $t('app.newAdd2') }}</el-dropdown-item>
                            <el-dropdown-item>{{ $t('app.newAdd3') }}</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
                <div class="name" v-if="!store.user.email">
                    <span>{{ $t("app.name1") }}</span>
                    <img src="@/assets/xiala.png" alt="">
                </div>
                <div class="other">
                    <img src="@/assets/collect.svg" alt="">
                </div>
                <div class="other">
                    <img src="@/assets/order.svg" alt="">
                </div>
                <div class="select">
                    <el-select v-model="locals"  placeholder="Select" >
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                    </el-select>
                </div>
            </div>
        </div>
        <div class="tab-con">
            <div class="content">
                <div class="item" v-for="(item, index) in scroll">
                    <div class="img-bk"> <img :src="item.class_img" alt=""></div>
                    <span class="name">{{ item.class_name }}</span>

                </div>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
@import url(../assets/less/variable.less);
.header-container {
    width: 100%;
    box-sizing: border-box;
    background-color: rgba(243, 243, 243, 1);
    // background: red;
    // padding: 20px 0;
    padding-top: 20px;

    .header-container-top {
        max-width: 1024px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 20px;

        .logo {
            display: flex;
            flex-direction: row;
            align-items: center;

            // background-color: red;
            .img1 {
                width: 150px;
                // height: 40px;
                margin-right: 40px;
            }

            .search-box {
                // width: 350px;
                box-sizing: border-box;
                // padding: 11px 13px;
                // background-color: white;
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-right: 20px;

                .search {
                    min-width: 350px;
                    border-radius: 1.333333vw;
                    // border: 0.4vw solid #66c496;
                    padding: 5px 8px 5px 14px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    background-color: rgba(232, 232, 232, 1);

                    input {
                        all: unset;
                        color: #606266;
                    }

                    .search-icon {
                        border-radius: 50%;
                        width: 30px;
                        height: 30px;
                        background-color: #66c496;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-shrink: 0;

                        .pic {
                            width: 100%;
                            height: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;

                            img {
                                width: 15px;
                            }
                        }
                    }
                }

            }
        }

        .right {
            display: flex;
            flex-direction: row;
            align-items: center;

            .name {
                display: flex;
                flex-direction: row;
                align-items: center;
                margin-right: 20px;

                span {
                    color: #197e4c;
                    font-size: 15px;
                }

                img {
                    width: 15px;
                }
            }

            .other {
                display: flex;
                justify-content: center;
                align-items: center;
                margin-right: 20px;
            }
        }
    }

    .tab-con {
        width: 100%;
        background-color: #2A9C62;
        box-sizing: border-box;
        padding: 20px 0;

        .content {
            max-width: 1280px;
            margin: 0 auto;
            display: flex;
            justify-content: space-around;
            // flex-direction: row;
            align-items: center;

            .item {
                color: white;

                .img-bk {
                    background: white;
                    border-radius: 30px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    box-sizing: border-box;
                    padding: 5px 0;

                    img {
                        width: 24px;
                    }
                }
            }
        }
    }
}
</style>