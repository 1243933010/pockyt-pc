// i18n.js
import { createI18n } from 'vue-i18n';

const messages = {
	'zh-Hans': {
		app: {
			hello: 'hello',
			"name1": "游客",
			"name2": "全部礼卡",
			"name3": "游戏",
			"name4": "餐饮",
			"name5": "娱乐",
			"name6": "购物",
			"name7": "旅游",
			"name8": "其他",
			"tip1": "安全保障",
			"tip2": "超值折扣",
			"tip3": "快速发货",
			"tip4": "轻松查询",
			"name9": "赚",
			"name10": "欢迎回来!",
			"name11": "请登录您的帐号",
			"name12": "邮箱",
			"name13": "密码",
			"name14": "忘记密码?",
			"name15": "登录",
			"name16": "创建账号",

			"name17": "返回",
			"name18": "输入金额",
			"name19": "已同意",
			"name20": "条款和条件",
			"name21": "和",
			"name22": "隐私政策",
			"name23": " 一旦售出，非礼品卡自身问题不支持退款、换货/退货",
			"name24": "购卡须知",
			"name25": "关于商家",
			"name26": "立即购买",
			"name27": "请输入个人信息",
			"name28": "名字",
			"name29": "姓氏",
			"name30": "邮箱地址",
			"name31": "密码",
			"name32": "确认密码",
			"name33": "下一步",
			"name34": "已有账号",
			"name35": "您的密码需要满足以下条件：",
			"name36": "10～32个字符",
			"name37": "数字",
			"name38": "大写字母",
			"name39": "小写字母",
			"name40": "半角符号(!@#$%^&*()_+-=[]{};:,.<>?/.)",
			"name41": "礼品卡号码",
			"name42": "复制",
			"name43": "防诈提醒",
			"name44": "实付金额",
			"name45": "交易状态",
			"name46": "订单编号",
			"name47": "购买时间",
			"name48": "再次购买",
			"name49": "订单编号",
			"name50": "邮箱验证",
			"name51": "验证码已发送到",
			"name52": "返回上一步",
			"name53": "确认",
			"name54": "请先勾选协议",
			"name55": "密码格式错误",
			"name56": "密码不一致",
			"name57": "验证码",
			"name58": "忘记密码?",
			"name59": "重设密码",
			"name60": "选择支付方式",
			"name61": "折扣价",
			"name62": "价格不能为空",
			"name63": "支付",
			"name64": "输入充值金额",
			"home": "首页",
			"collect": "收藏",
			"order": "订单",
			"detail": "详情",
			"language": "语言",
			"language-info": "语言信息",
			"message": "提示",
			"name": "姓名",
			"add": "新增",
			"add-success": "新增成功",
			"yue1": "订单",
			"yue2": "查看",
			"yue3": "联系我们",
			"yue4": "全部",
			"yue5": "待支付",
			"yue6": "已完成",
			"yue7": "已取消",
			"yue8": "暂无订单",
			"yue9": "您可以在主页挑选你最喜欢的礼品卡"
		}
	},
	fr: {
		message: {
			hello: 'bonjour'
		}
	}
};

const i18n = createI18n({
	locale: 'zh-Hans', // set default locale
	fallbackLocale: 'en', // set fallback locale
	messages, // set locale messages
});

export default i18n;