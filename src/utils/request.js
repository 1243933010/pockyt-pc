import requestObj from '@/utils/requestObj.js'
export let filesUrl = 'https://maojian886.oss-ap-northeast-1.aliyuncs.com/';
export let url = 'http://8.210.175.5:8001'
import axios from 'axios'
import {useRouter} from 'vue-router'

// let useRouter = useRouter();
export const $request = (requestName,params,headerType=0)=>{
	let reqObj = requestObj[requestName];
	let token = localStorage.getItem('token');
	// let language = uni.getLocale();
	// console.log(language)
	let languageObj = {'en':'en','fr': "fr",'es': "es",'ara': "ara","zh-Hans":"zh_CN"}
	let shareInfo = {
		'invitation_code':'',
		'scene':'',
		'associated_id':'',
	}
	// if(params.invite_code&&params.type&&params.associated_id){
	// 	shareInfo.invitation_code = params.invite_code;
	// 	shareInfo.scene = params.type;
	// 	shareInfo.associated_id = params.id;
	// }
	let headerObj = [
		{
			"Content-Type":"application/json",
			"Authorization":token?`Bearer ${token}`:'',
			"token":token?`${token}`:'',
			"Accept":"application/json",
			// "Accept-Language":languageObj[language],
			'Invitation-Code':shareInfo.invitation_code,
			'Scene':shareInfo.scene,
			'Associated-Id':shareInfo.associated_id
		},
		{
			"Content-Type": "application/x-www-form-urlencoded",
			"Authorization":token?`Bearer ${token}`:'',
			"token":token?`${token}`:'',
			"Accept":"application/json",
			// "Accept-Language":languageObj[language],
			'Invitation-Code':shareInfo.invitation_code,
			'Scene':shareInfo.scene,
			'Associated-Id':shareInfo.associated_id
		}
	]
	
	let reqUrl = reqObj?.otherGet?`${url}${reqObj?.url}${params}`:`${url}${reqObj?.url}`
	let data = reqObj?.otherGet?{}:params;
	if(params.invite_code&&params.type&&params.associated_id){
		data = {id:params.id}
	}
	return new Promise((resolve1,reject)=>{
		axios({
		    url: reqUrl, 
			method:requestObj[requestName]?.type,
		    data,
		    header: headerObj[headerType]}).then((resolve)=>{
				
					console.log(resolve,'=====================')
					if(resolve.data.code==401){
						uni.hideLoading()
						uni.clearStorageSync();
						uni.showToast({
							icon:'none',
							title:resolve.data.message
						})
						setTimeout(()=>{
							// uni.reLaunch({
							// 	url:'/pages/index/index'
							// })
							useRouter.push({})
							
						},1000)
						return
					}
					resolve1(resolve)
				// fail: (err) => {
				// 	console.log(err,'-------------')
				// 	reject(err)
				// }
			})

	})
}