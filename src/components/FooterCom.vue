<template>
    <div class="page-con">
        <div class="xieyi">
            <div class="content">
                <div class="item" v-for="(item, index) in list" :key="index">
                    <img :src="getImageUrl(item.url)" alt="">
                    <span>{{ item.title }}</span>
                </div>
            </div>
        </div>
        <div class="ip">
            <span class="text1">Powered by <img src="@/assets/logo4.svg" alt=""> </span>
            <span class="text2">© 2024 pockyt. All Rights Reserved.</span>
        </div>
    </div>
</template>


<script setup>
import foot1 from '@/assets/foot1.svg'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n';
let { t, locale } = useI18n();
const list = ref([
    { url: 'foot1.svg', title: t('app.name22') },
    { url: 'foot2.svg', title: t('app.name20') },
    { url: 'foot3.svg', title: 'FAQ' },
    { url: 'foot4.svg', title: t('app.yue3') },
])
const getImageUrl = (url) => {
    return new URL(`../assets/${url}`, import.meta.url).href;
}

</script>

<style lang="less" scoped>
.page-con {
    // position: fixed;
    // bottom: 0;
    // left: 0;
    width: 100%;

    .xieyi {
        width: 100%;
        background-color: #2A9C62;
        box-sizing: border-box;
        padding: 20px 0;

        .content {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

            .item {
                display: flex;
                justify-content: center;
                align-items: center;
                margin-right: 20px;
                img{
                    margin-right: 5px;
                }
                span {
                    color: white;
                    font-weight: 600;
                }
            }
        }
    }
    .ip{
        background-color: #333333;
        box-sizing: border-box;
        padding: 20px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #999;
        .text1{
            display: flex;
            flex-direction: row;
            align-items: center;
            margin-bottom: 10px;
        }
    }
}
</style>