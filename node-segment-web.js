var NODE_SEGMENT = (function () {

	/*///////////////////////////////////////////////////////////////////////////
	lib/module/CHS_NAMES.js
	///////////////////////////////////////////////////////////////////////////*/	

	'use strict';

	/**
	 * 中文姓
	 */
	 
	// 单姓
	var list_FAMILY_NAME_1 = [
	  //有明显歧义的姓氏
	  '王','张','黄','周','徐','胡','高','林','马','于','程','傅','曾','叶','余',
	  '夏','钟','田','任','方','石','熊','白','毛','江','史','候','龙','万','段',
	  '雷','钱','汤','易','常','武','赖','文', '查',
	  //没有明显歧义的姓氏
	  '赵', '肖', '孙', '李', '吴', '郑', '冯', '陈', '褚', '卫', '蒋', '沈', 
	  '韩', '杨', '朱', '秦', '尤', '许', '何', '吕', '施', '桓', '孔', '曹',
	  '严', '华', '金', '魏', '陶', '姜', '戚', '谢', '邹', '喻', '柏', '窦',
	  '苏', '潘', '葛', '奚', '范', '彭', '鲁', '韦', '昌', '俞', '袁', '酆', 
	  '鲍', '唐', '费', '廉', '岑', '薛', '贺', '倪', '滕', '殷', '罗', '毕',
	  '郝', '邬', '卞', '康', '卜', '顾', '孟', '穆', '萧', '尹', '姚', '邵',
	  '湛', '汪', '祁', '禹', '狄', '贝', '臧', '伏', '戴', '宋', '茅', '庞',
	  '纪', '舒', '屈', '祝', '董', '梁', '杜', '阮', '闵', '贾', '娄', '颜',
	  '郭', '邱', '骆', '蔡', '樊', '凌', '霍', '虞', '柯', '昝', '卢', '柯',
	  '缪', '宗', '丁', '贲', '邓', '郁', '杭', '洪', '崔', '龚', '嵇', '邢',
	  '滑', '裴', '陆', '荣', '荀', '惠', '甄', '芮', '羿', '储', '靳', '汲', 
	  '邴', '糜', '隗', '侯', '宓', '蓬', '郗', '仲', '栾', '钭', '历', '戎',
	  '刘', '詹', '幸', '韶', '郜', '黎', '蓟', '溥', '蒲', '邰', '鄂', '咸',
	  '卓', '蔺', '屠', '乔', '郁', '胥', '苍', '莘', '翟', '谭', '贡', '劳',
	  '冉', '郦', '雍', '璩', '桑', '桂', '濮', '扈', '冀', '浦', '庄', '晏',
	  '瞿', '阎', '慕', '茹', '习', '宦', '艾', '容', '慎', '戈', '廖', '庾',
	  '衡', '耿', '弘', '匡', '阙', '殳', '沃', '蔚', '夔', '隆', '巩', '聂',
	  '晁', '敖', '融', '訾', '辛', '阚', '毋', '乜', '鞠', '丰', '蒯', '荆',
	  '竺', '盍', '单', '欧'];
	// 复姓
	var list_FAMILY_NAME_2 = [
	  '司马', '上官', '欧阳','夏侯', '诸葛', '闻人','东方', '赫连', '皇甫',
	  '尉迟', '公羊', '澹台','公冶', '宗政', '濮阳','淳于', '单于', '太叔',
	  '申屠', '公孙', '仲孙','轩辕', '令狐', '徐离','宇文', '长孙', '慕容',
	  '司徒', '司空', '万俟'];
	  
	// 双字姓名第一个字
	var list_DOUBLE_NAME_1 = [
	  '阿','建','小','晓','文','志','国','玉','丽','永','海','春','金','明',
	  '新','德','秀','红','亚','伟','雪','俊','桂','爱','美','世','正','庆',
	  '学','家','立','淑','振','云','华','光','惠','兴','天','长','艳','慧',
	  '利','宏','佳','瑞','凤','荣','秋','继','嘉','卫','燕','思','维','少',
	  '福','忠','宝','子','成','月','洪','东','一','泽','林','大','素','旭',
	  '宇','智','锦','冬','玲','雅','伯','翠','传','启','剑','安','树','良',
	  '中','梦','广','昌','元','万','清','静','友','宗','兆','丹','克','彩',
	  '绍','喜','远','朝','敏','培','胜','祖','先','菊','士','向','有','连',
	  '军','健','巧','耀','莉','英','方','和','仁','孝','梅','汉','兰','松',
	  '水','江','益','开','景','运','贵','祥','青','芳','碧','婷','龙','鹏',
	  '自','顺','双','书','生','义','跃','银','佩','雨','保','贤','仲','鸿',
	  '浩','加','定','炳','飞','锡','柏','发','超','道','怀','进','其','富',
	  '平','全','阳','吉','茂','彦','诗','洁','润','承','治','焕','如','君',
	  '增','善','希','根','应','勇','宜','守','会','凯','育','湘','凌','本',
	  '敬','博','延','乐','三','二', '四', '五', '六', '七','八', '九', '十'];
	  
	// 双字姓名第二个字 
	var list_DOUBLE_NAME_2 = [
	  '华','平','明','英','军','林','萍','芳','玲','红','生','霞','梅','文',
	  '荣','珍','兰','娟','峰','琴','云','辉','东','龙','敏','伟','强','丽',
	  '春','杰','燕','民','君','波','国','芬','清','祥','斌','婷','飞','良',
	  '忠','新','凤','锋','成','勇','刚','玉','元','宇','海','兵','安','庆',
	  '涛','鹏','亮','青','阳','艳','松','江','莲','娜','兴','光','德','武',
	  '香','俊','秀','慧','雄','才','宏','群','琼','胜','超','彬','莉','中',
	  '山','富','花','宁','利','贵','福','发','义','蓉','喜','娥','昌','仁',
	  '志','全','宝','权','美','琳','建','金','贤','星','丹','根','和','珠',
	  '康','菊','琪','坤','泉','秋','静','佳','顺','源','珊','达','欣','如',
	  '莹','章','浩','勤','芹','容','友','芝','豪','洁','鑫','惠','洪','旺',
	  '虎','远','妮','森','妹','南','雯','奇','健','卿','虹','娇','媛','怡',
	  '铭','川','进','博','智','来','琦','学','聪','洋','乐','年','翔','然',
	  '栋','凯','颖','鸣','丰','瑞','奎','立','堂','威','雪','鸿','晶','桂',
	  '凡','娣','先','洲','毅','雅','月','旭','田','晖','方','恒','亚','泽',
	  '风','银','高','贞','九','薇'];
	  
	// 单字姓名
	var list_SINGLE_NAME = [
	  '家','民','敏','伟','勇','军','斌','静','丽','涛','芳','杰','萍','强',
	  '俊','明','燕','磊','玲','华','平','鹏','健','波','红','丹','辉','超',
	  '艳','莉','刚','娟','峰','婷','亮','洁','颖','琳','英','慧','飞','霞',
	  '浩','凯','宇','毅','林','佳','云','莹','娜','晶','洋','文','鑫','欣',
	  '琴','宁','琼','兵','青','琦','翔','彬','锋','阳','璐','旭','蕾','剑',
	  '虹','蓉','建','倩','梅','宏','威','博','君','力','龙','晨','薇','雪',
	  '琪','欢','荣','江','炜','成','庆','冰','东','帆','雷','楠','锐','进',
	  '海','凡','巍','维','迪','媛','玮','杨','群','瑛','悦','春','瑶','婧',
	  '兰','茜','松','爽','立','瑜','睿','晖','聪','帅','瑾','骏','雯','晓',
	  '昊','勤','新','瑞','岩','星','忠','志','怡','坤','康','航','利','畅',
	  '坚','雄','智','萌','哲','岚','洪','捷','珊','恒','靖','清','扬','昕',
	  '乐','武','玉','诚','菲','锦','凤','珍','晔','妍','璇','胜','菁','科',
	  '芬','露','越','彤','曦','义','良','鸣','芸','方','月','铭','光','震',
	  '冬','源','政','虎','莎','彪','蓓','钢','凌','奇','卫','彦','烨','可',
	  '黎','川','淼','惠','祥','然','三','二', '一', '四', '五', '六', '七',
	  '八', '九', '十'];

	var FAMILY_NAME_1 = {},
			FAMILY_NAME_2 = {},
			DOUBLE_NAME_1 = {},
			DOUBLE_NAME_2 = {},
			SINGLE_NAME = {};	  

	function p (a, f, n) {
	  a.forEach(function (v) {
	    f[v] = n;
	  });
	}

	p(list_FAMILY_NAME_1, FAMILY_NAME_1, 1);
	p(list_FAMILY_NAME_2, FAMILY_NAME_2, 2);
	p(list_DOUBLE_NAME_1, DOUBLE_NAME_1, 1);
	p(list_DOUBLE_NAME_2, DOUBLE_NAME_2, 2);
	p(list_SINGLE_NAME, SINGLE_NAME, 1);

	/*///////////////////////////////////////////////////////////////////////////
	lib/module/URLTokenizer.js
	///////////////////////////////////////////////////////////////////////////*/

	'use strict';

	/**
	 * URL识别模块
	 *
	 * @author 老雷<leizongmin@gmail.com>
	 */

	var debug = console.log;

	var URLTokenizer = (function() {

		/**
		 * 模块初始化
		 *
		 * @param {Segment} segment 分词接口
		 */
		var init = function (segment) {
		  return segment;
		};

		/**
		 * 对未识别的单词进行分词
		 *
		 * @param {array} words 单词数组
		 * @return {array}
		 */
		var split = function (words) {
		  var ret = [];
		  for (var i = 0, word; word = words[i]; i++) {
		    if (word.p > 0) {
		      ret.push(word);
		      continue;
		    }
		    // 仅对未识别的词进行匹配
		    var urlinfo = matchURL(word.w);
		    if (urlinfo.length < 1) {
		      ret.push(word);
		      continue;
		    }
		    // 分离出URL
		    var lastc = 0;
		    for (var ui = 0, url; url = urlinfo[ui]; ui++) {
		      if (url.c > lastc) {
		        ret.push({w: word.w.substr(lastc, url.c - lastc)});
		      }
		      ret.push({w: url.w, p: POSTAG.URL});
		      lastc = url.c + url.w.length;
		    }
		    var lasturl = urlinfo[urlinfo.length - 1];
		    if (lasturl.c + lasturl.w.length < word.w.length) {
		      ret.push({w: word.w.substr(lasturl.c + lasturl.w.length)});
		    }
		  }
		  // debug(ret);
		  return ret;
		};

	// =================================================================
		// 协议URL头
		var PROTOTAL = ['http://', 'https://', 'ftp://', 'news://', 'telnet://'];
		// 协议头最小长度
		var MIN_PROTOTAL_LEN = 100;
		for (var i in PROTOTAL) {
		  if (PROTOTAL[i].length < MIN_PROTOTAL_LEN) {
		    MIN_PROTOTAL_LEN = PROTOTAL[i].length;
		  }
		}
		// 允许出现在URL中的字符
		var _URLCHAR = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
		        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
		        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
		        '!', '#', '$', '%', '&', '‘', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '=', '?', '@', '[', '\\', ']', '^', '_', '`', '|', '~'];
		var URLCHAR = {};
		for (var i in _URLCHAR) {
		  URLCHAR[_URLCHAR[i]] = 1;
		}
		// =================================================================

		/**
		 * 匹配包含的网址，返回相关信息
		 *
		 * @param {string} text 文本
		 * @param {int} cur 开始位置
		 * @return {array}  返回格式   {w: '网址', c: 开始位置}
		 */
		var matchURL = function (text, cur) {
		  if (isNaN(cur)) cur = 0;
		  var ret = [];
		  var s = false;
		  while (cur < text.length) {
		    // 判断是否为 http:// 之类的文本开头
		    if (s === false && cur < text.length - MIN_PROTOTAL_LEN) {
		      for (var i = 0, prot; prot = PROTOTAL[i]; i++) {
		        if (text.substr(cur, prot.length) == prot) {
		          s = cur;
		          cur += prot.length - 1;
		          break;
		        }
		      }
		    } else if (s !== false && !(text.charAt(cur) in URLCHAR)) {
		      // 如果以http://之类开头，遇到了非URL字符，则结束
		      ret.push({
		        w:  text.substr(s, cur - s),
		        c:  s
		      });
		      s = false;
		    }
		    cur++;
		  }
		  // 检查剩余部分
		  if (s !== false) {
		    ret.push({
		      w:  text.substr(s, cur - s),
		      c:  s
		    });
		  }

		  return ret;
		};
		// debug(matchURL('http://www.baidu.com哈啊http://哇fdgggghttp://baidu.com/ss/'));

		return {
			type: 'tokenizer', /** 模块类型 */
			init: init,
			split: split
		};

	}());

	/*///////////////////////////////////////////////////////////////////////////
	lib/module/WildcardTokenizer.js
	///////////////////////////////////////////////////////////////////////////*/

	'use strict';

	/**
	 * 通配符识别模块
	 *
	 * @author 老雷<leizongmin@gmail.com>
	 */
	 
	var debug = console.log; 

	var WildcardTokenizer = (function() {

		var this_segment;
		/**
		 * 模块初始化
		 *
		 * @param {Segment} segment 分词接口
		 */
		var init = function (segment) {
			this_segment = segment;
		  return segment;
		};

		/**
		 * 对未识别的单词进行分词
		 *
		 * @param {array} words 单词数组
		 * @return {array}
		 */
		var split = function (words) {
		  var TABLE = this_segment.getDict('WILDCARD');
		  var ret = [];
		  for (var i = 0, word; word = words[i]; i++) {
		    if (word.p > 0) {
		      ret.push(word);
		      continue;
		    }
		    // 仅对未识别的词进行匹配
		    var wordinfo = matchWord(word.w);
		    if (wordinfo.length < 1) {
		      ret.push(word);
		      continue;
		    }
		    // 分离出已识别的单词
		    var lastc = 0;
		    for (var ui = 0, bw; bw = wordinfo[ui]; ui++) {
		      if (bw.c > lastc) {
		        ret.push({w: word.w.substr(lastc, bw.c - lastc)});
		      }
		      ret.push({w: bw.w, p: TABLE[bw.w.toLowerCase()].p});
		      lastc = bw.c + bw.w.length;
		    }
		    var lastword = wordinfo[wordinfo.length - 1];
		    if (lastword.c + lastword.w.length < word.w.length) {
		      ret.push({w: word.w.substr(lastword.c + lastword.w.length)});
		    }
		  }
		  return ret;
		};

		// =================================================================
		/**
		 * 匹配单词，返回相关信息
		 *
		 * @param {string} text 文本
		 * @param {int} cur 开始位置
		 * @return {array}  返回格式   {w: '单词', c: 开始位置}
		 */
		var matchWord = function (text, cur) {
		  if (isNaN(cur)) cur = 0;
		  var ret = [];
		  var s = false;
		  var TABLE = this_segment.getDict('WILDCARD2');
		  // 匹配可能出现的单词，取长度最大的那个
		  var lowertext = text.toLowerCase();
		  while (cur < text.length) {
		    var stopword = false;
		    for (var i in TABLE) {
		      if (lowertext.substr(cur, i) in TABLE[i]) {
		        stopword = {w: text.substr(cur, i), c: cur};
		      }
		    }
		    if (stopword !== false) {
		      ret.push(stopword);
		      cur += stopword.w.length;
		    } else {
		      cur++;
		    }
		  }
		  return ret;
		};

		return {
			type: 'tokenizer', /** 模块类型 */
			init: init,
			split: split
		};

	}());


	/*///////////////////////////////////////////////////////////////////////////
	lib/module/PunctuationTokenizer.js
	///////////////////////////////////////////////////////////////////////////*/

	'use strict';

	/**
	 * 标点符号识别模块
	 *
	 * @author 老雷<leizongmin@gmail.com>
	 */
	 
	var debug = console.log; 
	
	var PunctuationTokenizer = (function() {

		/**
		 * 模块初始化
		 *
		 * @param {Segment} segment 分词接口
		 */
		var init = function (segment) {
		  return segment;
		};

		/**
		 * 对未识别的单词进行分词
		 *
		 * @param {array} words 单词数组
		 * @return {array}
		 */
		var split = function (words) {
		  var ret = [];
		  for (var i = 0, word; word = words[i]; i++) {
		    if (word.p > 0) {
		      ret.push(word);
		      continue;
		    }
		    // 仅对未识别的词进行匹配
		    var stopinfo = matchStopword(word.w);
		    if (stopinfo.length < 1) {
		      ret.push(word);
		      continue;
		    }
		    // 分离出标点符号
		    var lastc = 0;
		    for (var ui = 0, sw; sw = stopinfo[ui]; ui++) {
		      if (sw.c > lastc) {
		        ret.push({w: word.w.substr(lastc, sw.c - lastc)});
		      }
		      // 忽略空格
		      if (sw.w != ' ') {
		        ret.push({w: sw.w, p: POSTAG.D_W});
		      }
		      lastc = sw.c + sw.w.length;
		    }
		    var lastsw = stopinfo[stopinfo.length - 1];
		    if (lastsw.c + lastsw.w.length < word.w.length) {
		      ret.push({w: word.w.substr(lastsw.c + lastsw.w.length)});
		    }
		  }
		  return ret;
		};

		// =================================================================
		// 标点符号
		var _STOPWORD = ' ,.;+-|/\\\'":?<>[]{}=!@#$%^&*()~`' +
		                '。，、＇：∶；?‘’“”〝〞ˆˇ﹕︰﹔﹖﹑·¨….¸;！´？！～—ˉ｜‖＂〃｀@﹫¡¿﹏﹋﹌︴々﹟#﹩$﹠&﹪%*﹡﹢﹦' +
		                '﹤‐￣¯―﹨ˆ˜﹍﹎+=<­＿_-\ˇ~﹉﹊（）〈〉‹›﹛﹜『』〖〗［］《》〔〕{}「」【】︵︷︿︹︽_﹁﹃︻︶︸' +
		                '﹀︺︾ˉ﹂﹄︼＋－×÷﹢﹣±／＝≈≡≠∧∨∑∏∪∩∈⊙⌒⊥∥∠∽≌＜＞≤≥≮≯∧∨√﹙﹚[]﹛﹜∫∮∝∞⊙∏' +
		                '┌┬┐┏┳┓╒╤╕─│├┼┤┣╋┫╞╪╡━┃└┴┘┗┻┛╘╧╛┄┆┅┇╭─╮┏━┓╔╦╗┈┊│╳│┃┃╠╬╣┉┋╰─╯┗━┛' +
		                '╚╩╝╲╱┞┟┠┡┢┦┧┨┩┪╉╊┭┮┯┰┱┲┵┶┷┸╇╈┹┺┽┾┿╀╁╂╃╄╅╆' +
		                '○◇□△▽☆●◆■▲▼★♠♥♦♣☼☺◘♀√☻◙♂×▁▂▃▄▅▆▇█⊙◎۞卍卐╱╲▁▏↖↗↑←↔◤◥╲╱▔▕↙↘↓→↕◣◢∷▒░℡™';
		_STOPWORD = _STOPWORD.split('');
		var STOPWORD = {};
		var STOPWORD2 = {};
		for (var i in _STOPWORD) {
		  if (_STOPWORD[i] == '') continue;
		  var len = _STOPWORD[i].length;
		  STOPWORD[_STOPWORD[i]] = len;
		  if (!STOPWORD2[len]) STOPWORD2[len] = {};
		  STOPWORD2[len][_STOPWORD[i]] = len;
		};
		// debug(STOPWORD2);
		// =================================================================

		/**
		 * 匹配包含的标点符号，返回相关信息
		 *
		 * @param {string} text 文本
		 * @param {int} cur 开始位置
		 * @return {array}  返回格式   {w: '网址', c: 开始位置}
		 */
		var matchStopword = function (text, cur) {
		  if (isNaN(cur)) cur = 0;
		  var ret = [];
		  var isMatch = false;
		  while (cur < text.length) {
		    for (var i in STOPWORD2) {
		      var w = text.substr(cur, i);
		      if (w in STOPWORD2[i]) {
		        ret.push({w: w, c: cur});
		        isMatch = true;
		        break;
		      }
		    }
		    cur += isMatch === false ? 1 : w.length;
		    isMatch = false;
		  }
		  
		  return ret;
		};

		return {
			type: 'tokenizer', /** 模块类型 */
			init: init,
			split: split
		};

	}());


	/*///////////////////////////////////////////////////////////////////////////
	lib/module/ForeignTokenizer.js
	///////////////////////////////////////////////////////////////////////////*/

	var ForeignTokenizer = (function() {

		/**
		 * 模块初始化
		 *
		 * @param {Segment} segment 分词接口
		 */
		var init = function (segment) {
		  return segment;
		};

		/**
		 * 对未识别的单词进行分词
		 *
		 * @param {array} words 单词数组
		 * @return {array}
		 */
		var split = function (words) {
		  var ret = [];
		  for (var i = 0, word; word = words[i]; i++) {
		    if (word.p) {
		      ret.push(word);
		    } else {
		      // 仅对未识别的词进行匹配
		      ret = ret.concat(splitForeign(word.w));
		    }
		  }
		  return ret;
		};

		// =================================================================
		/**
		 * 匹配包含的英文字符和数字，并分割
		 *
		 * @param {string} text 文本
		 * @param {int} cur 开始位置
		 * @return {array}  返回格式   {w: '单词', c: 开始位置}
		 */
		var splitForeign = function (text, cur) {
		  if (isNaN(cur)) cur = 0;
		  var ret = [];
		  
		  // 取第一个字符的ASCII码
		  var lastcur = 0;
		  var lasttype = 0;
		  var c = text.charCodeAt(0);
		  // 全角数字或字母
		  if (c >= 65296 && c <= 65370) c -= 65248;
		  // 数字  lasttype = POSTAG.A_M
		  if (c >= 48 && c <= 57) lasttype = POSTAG.A_M;
		  // 字母 lasttype = POSTAG.A_NX
		  else if ((c >= 65 && c <= 90) || (c >= 97 && c <= 122)) lasttype = POSTAG.A_NX;
		  else lasttype = POSTAG.UNK;
		  
		  for (var i = 1; i < text.length; i++) {
		    var c = text.charCodeAt(i);
		    // 全角数字或字母
		    if (c >= 65296 && c <= 65370) c -= 65248;
		    // 数字  lasttype = POSTAG.A_M
		    if (c >= 48 && c <= 57) {
		      if (lasttype !== POSTAG.A_M) {
		        var nw = {w: text.substr(lastcur, i - lastcur)};
		        if (lasttype !== POSTAG.UNK) nw.p = lasttype;
		        ret.push(nw);
		        lastcur = i;
		      }
		      lasttype = POSTAG.A_M;
		    } else if ((c >= 65 && c <= 90) || (c >= 97 && c <= 122)) {
		      // 字母 lasttype = POSTAG.A_NX
		      if (lasttype !== POSTAG.A_NX) {
		        var nw = {w: text.substr(lastcur, i - lastcur)};
		        if (lasttype !== POSTAG.UNK) nw.p = lasttype;
		        ret.push(nw);
		        lastcur = i;
		      }
		      lasttype = POSTAG.A_NX;
		    } else {
		      // 其他
		      if (lasttype !== POSTAG.UNK) {
		        ret.push({
		          w:  text.substr(lastcur, i - lastcur),
		          p:  [lasttype]
		        });
		        lastcur = i;
		      }
		      lasttype = POSTAG.UNK;
		    }
		  }
		  // 剩余部分
		  var nw = {w: text.substr(lastcur, i - lastcur)};
		  if (lasttype !== POSTAG.UNK) nw.p = lasttype;
		  ret.push(nw);
		  
		  // debug(ret);
		  return ret;
		};
		//debug(splitForeign('ad222经济核算123非'));

		return {
			type: 'tokenizer', /** 模块类型 */
			init: init,
			split: split
		};

	}());


/*///////////////////////////////////////////////////////////////////////////
	lib/module/DictTokenizer.js
	///////////////////////////////////////////////////////////////////////////*/
	
	var DictTokenizer = (function() {
		
		var this_segment;

		/**
		 * 模块初始化
		 *
		 * @param {Segment} segment 分词接口
		 */
		var init = function (segment) {
			this_segment = segment;
		  return segment;
		};

		/**
		 * 字典识别模块
		 *
		 * @author 老雷<leizongmin@gmail.com>
		 */
		 		 

		/**
		 * 对未识别的单词进行分词
		 *
		 * @param {array} words 单词数组
		 * @return {array}
		 */
		var split = function (words) {
		  // debug(words);
		  var TABLE = this_segment.getDict('TABLE');
		  var ret = [];
		  for (var i = 0, word; word = words[i]; i++) {
		    if (word.p > 0) {
		      ret.push(word);
		      continue;
		    }
		    // 仅对未识别的词进行匹配
		    var wordinfo = matchWord(word.w, 0, words[i - 1]);
		    if (wordinfo.length < 1) {
		      ret.push(word);
		      continue;
		    }
		    // 分离出已识别的单词
		    var lastc = 0;
		    for (var ui = 0, bw; bw = wordinfo[ui]; ui++) {
		      if (bw.c > lastc) {
		        ret.push({w: word.w.substr(lastc, bw.c - lastc)});
		      }
		      ret.push({w: bw.w, p: TABLE[bw.w].p});
		      lastc = bw.c + bw.w.length;
		    }
		    var lastword = wordinfo[wordinfo.length - 1];
		    if (lastword.c + lastword.w.length < word.w.length) {
		      ret.push({w: word.w.substr(lastword.c + lastword.w.length)});
		    }
		  }
		  return ret;
		};

		// =================================================================
		// 日期时间常见组合
		var _DATETIME = [
		  '世纪', '年', '年份', '年度', '月', '月份', '月度', '日', '号',
		  '时', '点', '点钟', '分', '分钟', '秒', '毫秒'
		];
		var DATETIME = {};
		for (var i in _DATETIME) DATETIME[_DATETIME[i]] = _DATETIME[i].length;
		//debug(DATETIME);
		// =================================================================
		/**
		 * 匹配单词，返回相关信息
		 *
		 * @param {string} text 文本
		 * @param {int} cur 开始位置
		 * @param {object} preword 上一个单词
		 * @return {array}  返回格式   {w: '单词', c: 开始位置}
		 */
		var matchWord = function (text, cur, preword) {
		  if (isNaN(cur)) cur = 0;
		  var ret = [];
		  var s = false;
		  var TABLE = this_segment.getDict('TABLE2');
		  // 匹配可能出现的单词
		  while (cur < text.length) {
		    for (var i in TABLE) {
		      var w = text.substr(cur, i);
		      if (w in TABLE[i]) {
		        ret.push({w: w, c: cur, f: TABLE[i][w].f});
		      }
		    }
		    cur++;
		  }
		  
		  return filterWord(ret, preword, text);
		};
		//debug(matchWord('长春市长春药店'));

		/**
		 * 选择最有可能匹配的单词
		 *
		 * @param {array} words 单词信息数组
		 * @param {object} preword 上一个单词
		 * @param {string} text 本节要分词的文本
		 * @return {array}
		 */
		var filterWord = function (words, preword, text) {
		  var TABLE = this_segment.getDict('TABLE');
		  var ret = [];
		  
		  // 将单词按位置分组
		  var wordpos = getPosInfo(words, text);
		  //debug(wordpos);
		  
		  // 使用类似于MMSG的分词算法
		  // 找出所有分词可能，主要根据一下几项来评价：
		  // x、词数量最少；
		  // a、词平均频率最大；
		  // b、每个词长度标准差最小；
		  // c、未识别词最少；
		  // d、符合语法结构项：如两个连续的动词减分，数词后面跟量词加分；
		  // 取以上几项综合排名最最好的
		  var chunks = getChunks(wordpos, 0, text);
		  //debug(chunks);
		  var assess = [];  // 评价表
		  
		  // 对各个分支就行评估
		  for (var i = 0, chunk; chunk = chunks[i]; i++) {
		    assess[i] = {x: chunk.length, a:0, b:0, c:0, d:0}
		    // 词平均长度
		    var sp = text.length / chunk.length;
		    // 句子经常包含的语法结构
		    var has_D_V = false;  // 是否包含动词
		    
		    // 遍历各个词
		    if (preword) {
		      var prew = {w: preword.w, p: preword.p, f: preword.f}
		    } else {
		      prew = false;
		    }
		    for (var j = 0, w; w = chunk[j]; j++) {
		      if (w.w in TABLE) {
		        w.p = TABLE[w.w].p;
		        assess[i].a += w.f;   // 总词频
		        
		        // ================ 检查语法结构 ===================
		        if (prew) {
		          // 如果上一个词是数词且当前词是量词（单位），则加分
		          if ((prew.p & POSTAG.A_M) > 0 &&
		          (((TABLE[w.w].p & POSTAG.A_Q) > 0) || w.w in DATETIME)) {
		            assess[i].d++;
		          }
		          // 如果当前词是动词
		          if ((w.p & POSTAG.D_V) > 0) {
		            has_D_V = true;
		            // 如果是连续的两个动词，则减分
		            //if ((prew.p & POSTAG.D_V) > 0)
		              //assess[i].d--;
		            // 如果是 形容词 + 动词，则加分
		            if ((prew.p & POSTAG.D_A) > 0) {
		              assess[i].d++;
		            }
		          }
		          // 如果是地区名、机构名或形容词，后面跟地区、机构、代词、名词等，则加分
		          if (((prew.p & POSTAG.A_NS) > 0 || (prew.p & POSTAG.A_NT) || (prew.p & POSTAG.D_A) > 0) &&
		          ((w.p & POSTAG.D_N) > 0 || (w.p & POSTAG.A_NR) > 0 ||
		          (w.p & POSTAG.A_NS) > 0 || (w.p & POSTAG.A_NZ) > 0 ||
		          (w.p & POSTAG.A_NT) > 0
		          )) {
		            assess[i].d++;
		          }
		          // 如果是 方位词 + 数量词，则加分
		          if ((prew.p & POSTAG.D_F) > 0 && 
		            ((w.p & POSTAG.A_M > 0) || w.p & POSTAG.D_MQ > 0)) {
		            //debug(prew, w);
		            assess[i].d++;
		          }
		          // 如果是 姓 + 名词，则加分
		          if ((prew.w in FAMILY_NAME_1 || prew.w in FAMILY_NAME_2) &&
		            ((w.p & POSTAG.D_N) > 0 || (w.p & POSTAG.A_NZ) > 0)) {
		            //debug(prew, w);
		            assess[i].d++;
		          }

		          // 探测下一个词
		          var nextw = chunk[j + 1];
		          if (nextw) {
		            if (nextw.w in TABLE) {
		              nextw.p = TABLE[nextw.w].p;
		            }
		            // 如果是连词，前后两个词词性相同则加分
		            if ((w.p & POSTAG.D_C) > 0 && prew.p == nextw.p) {
		              assess[i].d++;
		            }
		            // 如果当前是“的”+ 名词，则加分
		            if ((w.w == '的' || w.w == '之') && (
		            (nextw.p & POSTAG.D_N) > 0 || (nextw.p & POSTAG.A_NR) > 0 ||
		            (nextw.p & POSTAG.A_NS) > 0 || (nextw.p & POSTAG.A_NZ) > 0 ||
		            (nextw.p & POSTAG.A_NT) > 0
		            )) {
		              assess[i].d += 1.5;
		            }
		          }
		        }
		        // ===========================================
		      } else {
		        assess[i].c++;      // 未识别的词数量
		      }
		      // 标准差
		      assess[i].b += Math.pow(sp - w.w.length, 2);
		      prew = chunk[j];
		    }
		    // 如果句子中包含了至少一个动词
		    if (has_D_V === false)  assess[i].d -= 0.5;
		    
		    assess[i].a = assess[i].a / chunk.length;
		    assess[i].b = assess[i].b / chunk.length;
		  }
		  
		  // 计算排名
		  var top = getTops(assess);
		  var currchunk = chunks[top];
		  
		  // 剔除不能识别的词
		  for (var i = 0, word; word = currchunk[i]; i++) {
		    if (!(word.w in TABLE)) {
		      currchunk.splice(i--, 1);
		    }
		  }
		  ret = currchunk;
		  
		  //debug(ret);
		  return ret;
		};

		/**
		 * 将单词按照位置排列
		 *
		 * @param {array} words
		 * @param {string} text
		 * @return {object}
		 */
		var getPosInfo = function (words, text) {
		  var wordpos = {};
		  // 将单词按位置分组
		  for (var i = 0, word; word = words[i]; i++) {
		    if (!wordpos[word.c]) {
		      wordpos[word.c] = [];
		    }
		    wordpos[word.c].push(word);
		  }
		  // 按单字分割文本，填补空缺的位置
		  for (var i = 0; i < text.length; i++) {
		    if (!wordpos[i]) {
		      wordpos[i] = [{w: text.charAt(i), c: i, f: 0}];
		    }
		  }
		      
		  return wordpos;
		};

		/**
		 * 取所有分支
		 *
		 * @param {object} wordpos
		 * @param {int} pos 当前位置
		 * @param {string} text 本节要分词的文本
		 * @return {array}
		 */
		var getChunks = function (wordpos, pos, text) {
		  var words = wordpos[pos] || [];
		  // debug('getChunks: ');
		  // debug(words);
		  // throw new Error();
		  var ret = [];
		  for (var i = 0; i < words.length; i++) {
		    var word = words[i];
		    //debug(word);
		    var nextcur = word.c + word.w.length;
		    if (!wordpos[nextcur]) {
		      ret.push([word]);
		    } else {
		      var chunks = getChunks(wordpos, nextcur);
		      for (var j = 0; j < chunks.length; j++) {
		        ret.push([word].concat(chunks[j]));
		      }
		    }
		  }
		  return ret;
		};

		/**
		 * 评价排名
		 *
		 * @param {object} assess
		 * @return {object}
		 */
		var getTops = function (assess) {
		  //debug(assess);
		  // 取各项最大值
		  var top = {x: assess[0].x, a: assess[0].a, b: assess[0].b, c: assess[0].c, d: assess[0].d}
		  for (var i = 1, ass; ass = assess[i]; i++) {
		    if (ass.a > top.a) top.a = ass.a;  // 取最大平均词频
		    if (ass.b < top.b) top.b = ass.b;  // 取最小标准差
		    if (ass.c > top.c) top.c = ass.c;  // 取最大未识别词
		    if (ass.d < top.d) top.d = ass.d;  // 取最小语法分数
		    if (ass.x > top.x) top.x = ass.x;  // 取最大单词数量
		  }
		  //debug(top);
		  
		  // 评估排名
		  var tops = [];
		  for (var i = 0, ass; ass = assess[i]; i++) {
		    tops[i] = 0;
		    // 词数量，越小越好
		    tops[i] += (top.x - ass.x) * 1.5;
		    // 词总频率，越大越好
		    if (ass.a >= top.a) tops[i] += 1;
		    // 词标准差，越小越好
		    if (ass.b <= top.b) tops[i] += 1;
		    // 未识别词，越小越好
		    tops[i] += (top.c - ass.c);//debug(tops[i]);
		    // 符合语法结构程度，越大越好
		    tops[i] += (ass.d < 0 ? top.d + ass.d : ass.d - top.d) * 1;
		    //debug(tops[i]);debug('---');
		  }
		  //debug(tops.join('  '));
		  
		  // 取分数最高的
		  var curri = 0;
		  var maxs = tops[0];
		  for (var i in tops) {
		    var s = tops[i];
		    if (s > maxs) {
		      curri = i;
		      maxs = s;
		    } else if (s == maxs) {
		      // 如果分数相同，则根据词长度、未识别词个数和平均频率来选择
		      var a = 0;
		      var b = 0;
		      if (assess[i].c < assess[curri].c) a++; else b++;
		      if (assess[i].a > assess[curri].a) a++; else b++;
		      if (assess[i].x < assess[curri].x) a++; else b++;
		      if (a > b) {
		        curri = i;
		        maxs = s;
		      }
		    }
		    // debug('i=' + i + ', s=' + s + ', maxs=' + maxs);
		  }
		  //debug('max: i=' + curri + ', s=' + tops[curri]);
		  return curri;
		};


		return {
			type: 'tokenizer', /** 模块类型 */
			init: init,
			split: split
		};

	}());


	/*///////////////////////////////////////////////////////////////////////////
	lib/module/ChsNameTokenizer.js
	///////////////////////////////////////////////////////////////////////////*/
	
	var ChsNameTokenizer = (function() {

		/**
		 * 模块初始化
		 *
		 * @param {Segment} segment 分词接口
		 */
		var init = function (segment) {
		  return segment;
		};

		/**
		 * 对未识别的单词进行分词
		 *
		 * @param {array} words 单词数组
		 * @return {array}
		 */
		var split = function (words) {
		  var ret = [];
		  for (var i = 0, word; word = words[i]; i++) {
		    if (word.p > 0) {
		      ret.push(word);
		      continue;
		    }
		    // 仅对未识别的词进行匹配
		    var nameinfo = matchName(word.w);
		    if (nameinfo.length < 1) {
		      ret.push(word);
		      continue;
		    }
		    // 分离出人名
		    var lastc = 0;
		    for (var ui = 0, url; url = nameinfo[ui]; ui++) {
		      if (url.c > lastc) {
		        ret.push({w: word.w.substr(lastc, url.c - lastc)});
		      }
		      ret.push({w: url.w, p: POSTAG.A_NR});
		      lastc = url.c + url.w.length;
		    }
		    var lastn = nameinfo[nameinfo.length - 1];
		    if (lastn.c + lastn.w.length < word.w.length) {
		      ret.push({w: word.w.substr(lastn.c + lastn.w.length)});
		    }
		  }
		  return ret;
		};


		// ======================================================================
		/**
		 * 匹配包含的人名，并返回相关信息
		 *
		 * @param {string} text 文本
		 * @param {int} cur 开始位置
		 * @return {array}  返回格式   {w: '人名', c: 开始位置}
		 */
		var matchName = function (text, cur) {
		  if (isNaN(cur)) cur = 0;
		  var ret = [];
		  while (cur < text.length) {//debug('cur=' + cur + ', ' + text.charAt(cur));
		    var name = false;
		    // 复姓
		    var f2 = text.substr(cur, 2);
		    if (f2 in FAMILY_NAME_2) {
		      var n1 = text.charAt(cur + 2);
		      var n2 = text.charAt(cur + 3);
		      if (n1 in DOUBLE_NAME_1 && n2 in DOUBLE_NAME_2) {
		        name = f2 + n1 + n2;
		      } else if (n1 in SINGLE_NAME) {
		        name = f2 + n1 + (n1 == n2 ? n2 : '');
		      }
		    }
		    // 单姓
		    var f1 = text.charAt(cur);
		    if (name === false && f1 in FAMILY_NAME_1) {
		      var n1 = text.charAt(cur + 1);
		      var n2 = text.charAt(cur + 2);
		      if (n1 in DOUBLE_NAME_1 && n2 in DOUBLE_NAME_2) {
		        name = f1 + n1 + n2;
		      } else if (n1 in SINGLE_NAME) {
		        name = f1 + n1 + (n1 == n2 ? n2 : '');
		      }
		    }
		    // 检查是否匹配成功
		    if (name === false) {
		      cur++;
		    } else {
		      ret.push({w: name, c: cur});
		      cur += name.length;
		    }
		  }
		  return ret;
		};
		// debug(matchName('刘德华和李娜娜、司马光、上官飞飞'));
		// debug(matchName('李克'));

		return {
			type: 'tokenizer', /** 模块类型 */
			init: init,
			split: split
		};

	}());

	/*///////////////////////////////////////////////////////////////////////////
	lib/module/EmailOptimizer.js
	///////////////////////////////////////////////////////////////////////////*/
	
	var EmailOptimizer = (function() {

		/**
		 * 模块初始化
		 *
		 * @param {Segment} segment 分词接口
		 */
		var init = function (segment) {
		  return segment;
		};

		/**
		 * 对可能是邮箱地址的单词进行优化
		 *
		 * @param {array} words 单词数组
		 * @return {array}
		 */
		var doOptimize = function (words) {
		  //debug(words);

		  var i = 0;
		  var ie = words.length - 1;
		  var addr_start = false;
		  var has_at = false;
		  while (i < ie) {
		    var word = words[i];
		    var is_ascii = ((word.p == POSTAG.A_NX) ||
		            (word.p == POSTAG.A_M && word.w.charCodeAt(0) < 128))
		            ? true : false;

		    // 如果是外文字符或者数字，符合电子邮件地址开头的条件
		    if (addr_start === false && is_ascii) {
		      addr_start = i;
		      i++;
		      continue;
		    } else {
		      // 如果遇到@符号，符合第二个条件
		      if (has_at === false && word.w == '@') {
		        has_at = true;
		        i++;
		        continue;
		      }
		      // 如果已经遇到过@符号，且出现了其他字符，则截取邮箱地址
		      if (has_at !== false && words[i - 1].w != '@' && is_ascii === false && !(word.w in EMAILCHAR)) {
		        var mailws = words.slice(addr_start, i);
		        //debug(toEmailAddress(mailws));
		        words.splice(addr_start, mailws.length, {
		          w:  toEmailAddress(mailws),
		          p:  POSTAG.URL
		        });
		        i = addr_start + 1;
		        ie -= mailws.length - 1;
		        addr_start = false;
		        has_at = false;
		        continue;
		      }
		      // 如果已经开头
		      if (addr_start !== false && (is_ascii || word.w in EMAILCHAR)) {
		        i++;
		        continue;
		      }
		    }

		    // 移到下一个词
		    addr_start = false;
		    has_at = false;
		    i++;
		  }

		  // 检查剩余部分
		  if (addr_start && has_at && words[ie]) {
		    var word = words[ie];
		    var is_ascii = ((word.p == POSTAG.A_NX) ||
		            (word.p == POSTAG.A_M && word.w in EMAILCHAR))
		            ? true : false;
		    if (is_ascii) {
		      var mailws = words.slice(addr_start, words.length);
		      //debug(toEmailAddress(mailws));
		      words.splice(addr_start, mailws.length, {
		        w:  toEmailAddress(mailws),
		        p:  POSTAG.URL
		      });
		    }
		  }

		  return words;
		};

		// ======================================================
		// 邮箱地址中允许出现的字符
		// 参考：http://www.cs.tut.fi/~jkorpela/rfc/822addr.html
		var _EMAILCHAR = '!"#$%&\'*+-/0123456789=?@ABCDEFGHIJKLMNOPQRSTUVWXYZ^_`abcdefghijklmnopqrstuvwxyz{|}~.'.split('');
		var EMAILCHAR = {};
		for (var i in _EMAILCHAR) EMAILCHAR[_EMAILCHAR[i]] = 1;


		/**
		 * 根据一组单词生成邮箱地址
		 *
		 * @param {array} words 单词数组
		 * @return {string}
		 */
		var toEmailAddress = function (words) {
		  var ret = words[0].w;
		  for (var i = 1, word; word = words[i]; i++) {
		    ret += word.w;
		  }
		  return ret;
		};


		return {
			type: 'optimizer', /** 模块类型 */
			init: init,
			doOptimize: doOptimize
		};

	}());


	/*///////////////////////////////////////////////////////////////////////////
	lib/module/ChsNameOptimizer.js
	///////////////////////////////////////////////////////////////////////////*/
	
	var ChsNameOptimizer = (function() {

		/**
		 * 模块初始化
		 *
		 * @param {Segment} segment 分词接口
		 */
		var init = function (segment) {
		  return segment;
		};

		/**
		 * 对可能是人名的单词进行优化
		 *
		 * @param {array} words 单词数组
		 * @return {array}
		 */
		var doOptimize = function (words) {
		  //debug(words);
		  var i = 0;
		  
		  /* 第一遍扫描 */
		  while (i < words.length) {
		    var word = words[i];
		    var nextword = words[i + 1];
		    if (nextword) {
		      //debug(nextword);
		      // 如果为  "小|老" + 姓
		      if (nextword && (word.w == '小' || word.w == '老') &&
		      (nextword.w in FAMILY_NAME_1 || nextword.w in FAMILY_NAME_2)) {
		        words.splice(i, 2, {
		          w:  word.w + nextword.w,
		          p:  POSTAG.A_NR
		        }); 
		        i++;
		        continue;
		      }
		      
		      // 如果是 姓 + 名（2字以内）
		      if ((word.w in FAMILY_NAME_1 || word.w in FAMILY_NAME_2) &&
		      ((nextword.p & POSTAG.A_NR) > 0 && nextword.w.length <= 2)) {
		        words.splice(i, 2, {
		          w:  word.w + nextword.w,
		          p:  POSTAG.A_NR
		        }); 
		        i++;
		        continue;
		      }
		      
		      // 如果相邻两个均为单字且至少有一个字是未识别的，则尝试判断其是否为人名
		      if (!word.p || !nextword.p) {
		        if ((word.w in SINGLE_NAME && word.w == nextword.w) ||
		        (word.w in DOUBLE_NAME_1 && nextword.w in DOUBLE_NAME_2)) {
		          words.splice(i, 2, {
		            w:  word.w + nextword.w,
		            p:  POSTAG.A_NR
		          });
		          // 如果上一个单词可能是一个姓，则合并
		          var preword = words[i - 1];
		          if (preword &&
		          (preword.w in FAMILY_NAME_1 || preword.w in FAMILY_NAME_2)) {
		            words.splice(i - 1, 2, {
		              w:  preword.w + word.w + nextword.w,
		              p:  POSTAG.A_NR
		            });
		          } else {
		            i++;
		          }
		          continue;
		        }
		      }

		      // 如果为 无歧义的姓 + 名（2字以内） 且其中一个未未识别词
		      if ((word.w in FAMILY_NAME_1 || word.w in FAMILY_NAME_2) &&
		          (!word.p || !nextword.p)) {
		        //debug(word, nextword);
		        words.splice(i, 2, {
		          w:  word.w + nextword.w,
		          p:  POSTAG.A_NR
		        });
		      }
		    }
		    
		    // 移到下一个单词
		    i++;
		  }
		  
		  /* 第二遍扫描 */
		  i = 0;
		  while (i < words.length) {
		    var word = words[i];
		    var nextword = words[i + 1];
		    if (nextword) {
		      // 如果为 姓 + 单字名
		      if ((word.w in FAMILY_NAME_1 || word.w in FAMILY_NAME_2) &&
		      nextword.w in SINGLE_NAME) {
		        words.splice(i, 2, {
		          w:  word.w + nextword.w,
		          p:  POSTAG.A_NR
		        });
		        i++;
		        continue;
		      }
		    }
		    
		    // 移到下一个单词
		    i++;
		  }
		  
		  return words;
		};

		return {
			type: 'optimizer', /** 模块类型 */
			init: init,
			doOptimize: doOptimize
		};

	}());


	/*///////////////////////////////////////////////////////////////////////////
	lib/module/DictOptimizer.js
	///////////////////////////////////////////////////////////////////////////*/

	var DictOptimizer = (function() {

		var this_segment;

		/**
		 * 模块初始化
		 *
		 * @param {Segment} segment 分词接口
		 */
		var init = function (segment) {
			this_segment = segment;
		  return segment;
		};

		/**
		 * 词典优化
		 *
		 * @param {array} words 单词数组
		 * @param {bool} is_not_first 是否为管理器调用的
		 * @return {array}
		 */
		var doOptimize = function (words, is_not_first) {
		  //debug(words);
		  if (typeof is_not_first == 'undefined') {
		    is_not_first = false;
		  }
		  // 合并相邻的能组成一个单词的两个词
		  var TABLE = this_segment.getDict('TABLE');
		  
		  var i = 0;
		  var ie = words.length - 1;
		  while (i < ie) {
		    var w1 = words[i];
		    var w2 = words[i + 1];
		    //debug(w1.w + ', ' + w2.w);
		    
		    // ==========================================
		    // 能组成一个新词的(词性必须相同)
		    var nw = w1.w + w2.w;
		    if (w1.p == w2.p && nw in TABLE) {
		      words.splice(i, 2, {
		        w:  nw,
		        p:  TABLE[nw].p
		      });
		      ie--;
		      continue;
		    }
		    
		    // 形容词 + 助词 = 形容词，如： 不同 + 的 = 不同的
		    if ((w1.p & POSTAG.D_A) > 0 && (w2.p & POSTAG.D_U)) {
		      words.splice(i, 2, {
		        w:  nw,
		        p:  POSTAG.D_A
		      });
		      ie--;
		      continue;
		    }

		    // ============================================
		    // 数词组合
		    if ((w1.p & POSTAG.A_M) > 0) {
		      //debug(w2.w + ' ' + (w2.p & POSTAG.A_M));
		      // 百分比数字 如 10%，或者下一个词也是数词，则合并
		      if ((w2.p & POSTAG.A_M) > 0 || w2.w == '%') {
		        words.splice(i, 2, {
		          w:  w1.w + w2.w,
		          p:  POSTAG.A_M
		        });
		        ie--;
		        continue;
		      }
		      // 数词 + 量词，合并。如： 100个
		      if ((w2.p & POSTAG.A_Q) > 0) {
		        words.splice(i, 2, {
		          w:  w1.w + w2.w,
		          p:  POSTAG.D_MQ // 数量词
		        });
		        ie--;
		        continue;
		      }
		      // 带小数点的数字 ，如 “3 . 14”，或者 “十五点三”
		      // 数词 + "分之" + 数词，如“五十分之一”
		      var w3 = words[i + 2];
		      if (w3 && (w3.p & POSTAG.A_M) > 0 &&
		         (w2.w == '.' || w2.w == '点' || w2.w == '分之')) {
		        words.splice(i, 3, {
		          w:  w1.w + w2.w + w3.w,
		          p:  POSTAG.A_M
		        });
		        ie -= 2;
		        continue;
		      }
		    }

		    // 修正 “十五点五八”问题
		    if ((w1.p & POSTAG.D_MQ) > 0 && w1.w.substr(-1) === '点' && w2.p & POSTAG.A_M) {
		      //debug(w1, w2);
		      var i2 = 2;
		      var w4w = '';
		      for (var j = i + i2; j < ie; j++) {
		        var w3 = words[j];
		        if ((w3.p & POSTAG.A_M) > 0) {
		          w4w += w3.w;
		          i2++;
		        } else {
		          break;
		        }
		      }
		      words.splice(i, i2, {
		        w:  w1.w + w2.w + w4w,
		        p:  POSTAG.D_MQ // 数量词
		      });
		      ie -= i2 - 1;
		      continue;
		    }
		    
		    // 移到下一个词
		    i++;
		  }
		  
		  // 针对组合数字后无法识别新组合的数字问题，需要重新扫描一次
		  return is_not_first === true ? words : doOptimize(words, true);
		};

		return {
			type: 'optimizer', /** 模块类型 */
			init: init,
			doOptimize: doOptimize
		};

	}());


	/*///////////////////////////////////////////////////////////////////////////
	lib/module/DatetimeOptimizer.js
	///////////////////////////////////////////////////////////////////////////*/

	var DatetimeOptimizer = (function() {

		var this_segment;

		/**
		 * 模块初始化
		 *
		 * @param {Segment} segment 分词接口
		 */
		var init = function (segment) {
			this_segment = segment;
		  return segment;
		};

		/**
     * 日期时间优化
     *
     * @param {array} words 单词数组
     * @param {bool} is_not_first 是否为管理器调用的
     * @return {array}
     */
    var doOptimize = function (words, is_not_first) {
      if (typeof is_not_first == 'undefined') {
        is_not_first = false;
      }
      // 合并相邻的能组成一个单词的两个词
      var TABLE = this_segment.getDict('TABLE');
      
      var i = 0;
      var ie = words.length - 1;
      while (i < ie) {
        var w1 = words[i];
        var w2 = words[i + 1];
        //debug(w1.w + ', ' + w2.w);
        
        if ((w1.p & POSTAG.A_M) > 0) {
          // =========================================
          // 日期时间组合   数字 + 日期单位，如 “2005年"
          if (w2.w in DATETIME) {
            var nw = w1.w + w2.w;
            var len = 2;
            // 继续搜索后面连续的日期时间描述，必须符合  数字 + 日期单位 
            while (true) {
              var w1 = words[i + len];
              var w2 = words[i + len + 1];
              if (w1 && w2 && (w1.p & POSTAG.A_M) > 0 && w2.w in DATETIME) {
                len += 2;
                nw += w1.w + w2.w;
              } else {
                break;
              }
            }
            words.splice(i, len, {
              w:  nw,
              p:  POSTAG.D_T
            });
            ie -= len - 1;
            continue;
          }
          // =========================================
        }
        
        // 移到下一个词
        i++;
      }
      
      return words;
    };

    // ====================================================
    // 日期时间常见组合
    var _DATETIME = [
      '世纪', '年', '年份', '年度', '月', '月份', '月度', '日', '号',
      '时', '点', '点钟', '分', '分钟', '秒', '毫秒'
    ];
    var DATETIME = {};
    for (var i in _DATETIME) DATETIME[_DATETIME[i]] = _DATETIME[i].length;
    // ====================================================

		return {
			type: 'optimizer', /** 模块类型 */
			init: init,
			doOptimize: doOptimize
		};

	}());


	/*///////////////////////////////////////////////////////////////////////////
	POSTAG.js
	///////////////////////////////////////////////////////////////////////////*/

	'use strict';

	/**
	 * 单词类型
	 */
	 
	var POSTAG = {}; 

	POSTAG.D_A  = 0x40000000; // 形容词 形语素
	POSTAG.D_B  = 0x20000000; // 区别词 区别语素
	POSTAG.D_C  = 0x10000000; // 连词 连语素
	POSTAG.D_D  = 0x08000000; // 副词 副语素
	POSTAG.D_E  = 0x04000000; // 叹词 叹语素
	POSTAG.D_F  = 0x02000000; // 方位词 方位语素
	POSTAG.D_I  = 0x01000000; // 成语
	POSTAG.D_L  = 0x00800000; // 习语
	POSTAG.A_M  = 0x00400000; // 数词 数语素
	POSTAG.D_MQ = 0x00200000; // 数量词
	POSTAG.D_N  = 0x00100000; // 名词 名语素
	POSTAG.D_O  = 0x00080000; // 拟声词
	POSTAG.D_P  = 0x00040000; // 介词
	POSTAG.A_Q  = 0x00020000; // 量词 量语素
	POSTAG.D_R  = 0x00010000; // 代词 代语素
	POSTAG.D_S  = 0x00008000; // 处所词
	POSTAG.D_T  = 0x00004000; // 时间词
	POSTAG.D_U  = 0x00002000; // 助词 助语素
	POSTAG.D_V  = 0x00001000; // 动词 动语素
	POSTAG.D_W  = 0x00000800; // 标点符号
	POSTAG.D_X  = 0x00000400; // 非语素字
	POSTAG.D_Y  = 0x00000200; // 语气词 语气语素
	POSTAG.D_Z  = 0x00000100; // 状态词
	POSTAG.A_NR = 0x00000080; // 人名
	POSTAG.A_NS = 0x00000040; // 地名
	POSTAG.A_NT = 0x00000020; // 机构团体
	POSTAG.A_NX = 0x00000010; // 外文字符
	POSTAG.A_NZ = 0x00000008; // 其他专名
	POSTAG.D_ZH = 0x00000004; // 前接成分
	POSTAG.D_K  = 0x00000002; // 后接成分
	POSTAG.UNK  = 0x00000000; // 未知词性
	POSTAG.URL  = 0x00000001; // 网址、邮箱地址

	var _POSTAG = {};
	for (var i in POSTAG) _POSTAG[i] = POSTAG[i];
	for (var i in POSTAG) POSTAG[i.toLowerCase()] = POSTAG[i];


	/** 中文说明 */
	POSTAG.chsName = function (p) {
	  if (isNaN(p)) {
	    return CHSNAME[p] || CHSNAME.UNK;
	  } else {
	    var ret = [];
	    for (var i in _POSTAG) {
	      if ((p & _POSTAG[i]) > 0) {
	        ret.push(CHSNAME[i]);
	      }
	    }
	    if (ret.length < 1) {
	      return CHSNAME.UNK;
	    } else {
	      return ret.toString();
	    }
	  }
	};

	var CHSNAME = POSTAG.CHSNAME = {};
	POSTAG.CHSNAME.D_A  = '形容词 形语素';
	POSTAG.CHSNAME.D_B  = '区别词 区别语素';
	POSTAG.CHSNAME.D_C  = '连词 连语素';
	POSTAG.CHSNAME.D_D  = '副词 副语素';
	POSTAG.CHSNAME.D_E  = '叹词 叹语素';
	POSTAG.CHSNAME.D_F  = '方位词 方位语素';
	POSTAG.CHSNAME.D_I  = '成语';
	POSTAG.CHSNAME.D_L  = '习语';
	POSTAG.CHSNAME.A_M  = '数词 数语素';
	POSTAG.CHSNAME.D_MQ = '数量词';
	POSTAG.CHSNAME.D_N  = '名词 名语素';
	POSTAG.CHSNAME.D_O  = '拟声词';
	POSTAG.CHSNAME.D_P  = '介词';
	POSTAG.CHSNAME.A_Q  = '量词 量语素';
	POSTAG.CHSNAME.D_R  = '代词 代语素';
	POSTAG.CHSNAME.D_S  = '处所词';
	POSTAG.CHSNAME.D_T  = '时间词';
	POSTAG.CHSNAME.D_U  = '助词 助语素';
	POSTAG.CHSNAME.D_V  = '动词 动语素';
	POSTAG.CHSNAME.D_W  = '标点符号';
	POSTAG.CHSNAME.D_X  = '非语素字';
	POSTAG.CHSNAME.D_Y  = '语气词 语气语素';
	POSTAG.CHSNAME.D_Z  = '状态词';
	POSTAG.CHSNAME.A_NR = '人名';
	POSTAG.CHSNAME.A_NS = '地名';
	POSTAG.CHSNAME.A_NT = '机构团体';
	POSTAG.CHSNAME.A_NX = '外文字符';
	POSTAG.CHSNAME.A_NZ = '其他专名';
	POSTAG.CHSNAME.D_ZH = '前接成分';
	POSTAG.CHSNAME.D_K  = '后接成分';
	POSTAG.CHSNAME.UNK  = '未知';
	POSTAG.CHSNAME.URL  = '网址 邮箱地址';

	for (var i in CHSNAME) {
	  CHSNAME[i.toLowerCase()] = CHSNAME[i];
	}

	/*///////////////////////////////////////////////////////////////////////////
	Tokenizer.js
	///////////////////////////////////////////////////////////////////////////*/

	'use strict';

	/**
	 * 分词模块管理器
	 *
	 * @author 老雷<leizongmin@gmail.com>
	 */
	 
	/**
	 * 分词模块管理器
	*
	* @param {Segment} 分词接口
	*/ 
	var Tokenizer = function (segment) {
	  this.segment = segment;
	};

	/**
	 * 对一段文本进行分词
	 *
	 * @param {string} text 文本
	 * @param {array} modules 分词模块数组
	 * @return {array}
	 */
	Tokenizer.prototype.split = function (text, modules) {
	  if (modules.length < 1) {
	    throw Error('No tokenizer module!');
	  } else {
	    // 按顺序分别调用各个module来进行分词 ： 各个module仅对没有识别类型的单词进行分词
	    var ret = [{w: text}];
	    modules.forEach(function (module) {
	      ret = module.split(ret);
	    });
	    return ret;
	  }
	};


	/*///////////////////////////////////////////////////////////////////////////
	Optimizer.js
	///////////////////////////////////////////////////////////////////////////*/

	'use strict';

	/**
	 * 优化模块管理器
	 *
	 * @author 老雷<leizongmin@gmail.com>
	 */
	 
	/**
	 * 优化模块管理器
	 *
	 * @param {Segment} 分词接口
	 */ 
	var Optimizer = function (segment) {
	  this.segment = segment;
	};

	/**
	 * 对一段文本进行分词
	 *
	 * @param {array} words 单词数组
	 * @param {array} modules 分词模块数组
	 * @return {array}
	 */
	Optimizer.prototype.doOptimize = function (words, modules) {
	  // 按顺序分别调用各个module来进行分词 ： 各个module仅对没有识别类型的单词进行分词
	  modules.forEach(function (module) {
	    words = module.doOptimize(words);
	  });
	  return words;
	};

	/*///////////////////////////////////////////////////////////////////////////
	Segment.js
	///////////////////////////////////////////////////////////////////////////*/

	'use strict';

	/**
	 * 分词器接口
	 *
	 * @author 老雷<leizongmin@gmail.com>
	 */

	// var fs = require('fs');
	// var path = require('path');

	var debug = console.log;

	/**
	 * 创建分词器接口
	*/
	var Segment = function () {
	  this.POSTAG = POSTAG; // 词性
	  this.DICT = {};       // 词典表
	  this.modules = {
	    tokenizer:  [],     // 分词模块
	    optimizer:  []      // 优化模块
	  };
	  this.tokenizer = new Tokenizer(this);
	  this.optimizer = new Optimizer(this);
	};

	/**
	 * 载入分词模块
	 *
	 * @param {String|Array|Object} module 模块名称(数组)或模块对象
	 * @return {Segment}
	 */
	Segment.prototype.use = function (module) {
	  var me = this;

	  if (Array.isArray(module)) {
	    module.forEach(function (module) {
	      me.use(module[i]);
	    });

	  } else {
	    // 初始化并注册模块
	    module = eval(module);

	    module.init(this);
	    this.modules[module.type].push(module);
	  }

	  return this;
	};

	Segment.prototype._resolveDictFilename = function (name) {
	  var filename = path.resolve(name);
	  if (!fs.existsSync(filename)) {
	    var filename = path.resolve(__dirname, '../dicts', name);
	    if (!fs.existsSync(filename)) {
	      throw Error('Cannot find dict file "' + filename + '".');
	    }
	  }
	  return filename;
	};

	/**
	 * 载入字典文件
	 *
	 * @param {String} name 字典文件名
	 * @param {String} type 类型
	 * @param {Boolean} convert_to_lower 是否全部转换为小写
	 * @return {Segment}
	 */
	Segment.prototype.loadDict = function (name, type, convert_to_lower) {
	  if (!type)  type = 'TABLE';     // 默认为TABLE

	  // 初始化词典
	  if (!this.DICT[type]) this.DICT[type] = {};
	  if (!this.DICT[type + '2']) this.DICT[type + '2'] = {};
	  var TABLE = this.DICT[type];        // 词典表  '词' => {属性}
	  var TABLE2 = this.DICT[type + '2']; // 词典表  '长度' => '词' => 属性
	  // 导入数据
	  var POSTAG = this.POSTAG;
	  var data = eval(name);
	  if (convert_to_lower) data = data.toLowerCase();

	  data.split(/ஃ/).forEach(function (line) {
	    var blocks = line.split('|');
	    if (blocks.length > 2) {
	      var w = blocks[0].trim();
	      var p = Number(blocks[1]);
	      var f = Number(blocks[2]);

	      // 一定要检查单词是否为空，如果为空会导致Bug
	      if (w.length > 0) {
	        TABLE[w] = {f: f, p: p};
	        if (!TABLE2[w.length]) TABLE2[w.length] = {};
	        TABLE2[w.length][w] = TABLE[w];
	      }
	    }
	  });

	  return this;
	};

	/**
	 * 取词典表
	 *
	 * @param {String} type 类型
	 * @return {object}
	 */
	Segment.prototype.getDict = function (type) {
	  return this.DICT[type];
	};

	/**
	 * 载入同义词词典
	 *
	 * @param {String} name 字典文件名
	 */
	Segment.prototype.loadSynonymDict = function (name) {
	  var type = 'SYNONYM';

	  // 初始化词典
	  if (!this.DICT[type]) this.DICT[type] = {};
	  var TABLE = this.DICT[type];        // 词典表  '同义词' => '标准词'
	  // 导入数据
	  var data = eval(name);

	  data.split(/ஃ/).forEach(function (line) {
	    var blocks = line.split(',');
	    if (blocks.length > 1) {
	      var n1 = blocks[0].trim();
	      var n2 = blocks[1].trim();
	      TABLE[n1] = n2;
	      if (TABLE[n2] === n1) {
	        delete TABLE[n2];
	      }
	    }
	  });

	  return this;
	};

	/**
	 * 载入停止符词典
	 *
	 * @param {String} name 字典文件名
	 */
	Segment.prototype.loadStopwordDict = function (name) {
	  var type = 'STOPWORD';

	  // 初始化词典
	  if (!this.DICT[type]) this.DICT[type] = {};
	  var TABLE = this.DICT[type];        // 词典表  '同义词' => '标准词'
	  // 导入数据
	  var data = eval(name);

	  data.split(/ஃ/).forEach(function (line) {
	    line = line.trim();
	    if (line) {
	      TABLE[line] = true;
	    }
	  });

	  return this;
	};

	/**
	 * 使用默认的识别模块和字典文件
	 *
	 * @return {Segment}
	 */
	Segment.prototype.useDefault = function () {
	  this
	    // 识别模块
	    // 强制分割类单词识别
	    .use('URLTokenizer')            // URL识别
	    .use('WildcardTokenizer')       // 通配符，必须在标点符号识别之前
	    .use('PunctuationTokenizer')    // 标点符号识别
	    .use('ForeignTokenizer')        // 外文字符、数字识别，必须在标点符号识别之后
	    // 中文单词识别
	    .use('DictTokenizer')           // 词典识别
	    .use('ChsNameTokenizer')        // 人名识别，建议在词典识别之后

	    // 优化模块
	    .use('EmailOptimizer')          // 邮箱地址识别
	    .use('ChsNameOptimizer')        // 人名识别优化
	    .use('DictOptimizer')           // 词典识别优化
	    .use('DatetimeOptimizer')       // 日期时间识别优化

	    // 字典文件
	    // .loadDict('dict.txt')        	// 盘古词典
	    .loadDict('dict2')          			// 扩展词典（用于调整原盘古词典）
	    .loadDict('dict3')          		// 扩展词典（用于调整原盘古词典）
	    .loadDict('names')          		// 常见名词、人名
	    .loadDict('wildcard', 'WILDCARD', true)   // 通配符
	    .loadSynonymDict('synonym')   	// 同义词
	    .loadStopwordDict('stopword') 	// 停止符
	  ;
	  return this;
	};

	/**
	 * 开始分词
	 *
	 * @param {String} text 文本
	 * @param {Object} options 选项
	 *   - {Boolean} simple 是否仅返回单词内容
	 *   - {Boolean} stripPunctuation 去除标点符号
	 *   - {Boolean} convertSynonym 转换同义词
	 *   - {Boolean} stripStopword 去除停止符
	 * @return {Array}
	 */
	Segment.prototype.doSegment = function (text, options) {
	  var me = this;
	  options = options || {};
	  var ret = [];

	  // 将文本按照换行符分割成多段，并逐一分词
	  text.replace(/\r/g, '\n').split(/(\n|\s)+/).forEach(function (section) {
	    var section = section.trim();
	    if (section.length < 1) return;
	    // ======================================
	    // 分词
	    var sret = me.tokenizer.split(section, me.modules.tokenizer);

	    // 优化
	    sret = me.optimizer.doOptimize(sret, me.modules.optimizer);

	    // ======================================
	    // 连接分词结果
	    if (sret.length > 0) ret = ret.concat(sret);
	  });

	  // 去除标点符号
	  if (options.stripPunctuation) {
	    ret = ret.filter(function (item) {
	      return item.p !== POSTAG.D_W;
	    });
	  }

	  // 转换同义词
	  function convertSynonym (list) {
	    var count = 0;
	    var TABLE = me.getDict('SYNONYM');
	    list = list.map(function (item) {
	      if (item.w in TABLE) {
	        count++;
	        return {w: TABLE[item.w], p: item.p};
	      } else {
	        return item;
	      }
	    });
	    return {count: count, list: list};
	  }
	  if (options.convertSynonym) {
	    do {
	      var result = convertSynonym(ret);
	      ret = result.list;
	    } while (result.count > 0);
	  }

	  // 去除停止符
	  if (options.stripStopword) {
	    var STOPWORD = me.getDict('STOPWORD');
	    ret = ret.filter(function (item) {
	      return !(item.w in STOPWORD);
	    });
	  }

	  // 仅返回单词内容
	  if (options.simple) {
	    ret = ret.map(function (item) {
	      return item.w;
	    });
	  }

	  return ret;
	};

	/**
	 * 将单词数组连接成字符串
	 *
	 * @param {Array} words 单词数组
	 * @return {String}
	 */
	Segment.prototype.toString= function (words) {
	  return words.map(function (item) {
	    return item.w;
	  }).join('');
	};

	/**
	 * 根据某个单词或词性来分割单词数组
	 *
	 * @param {Array} words 单词数组
	 * @param {Number|String} s 用于分割的单词或词性
	 * @return {Array}
	 */
	Segment.prototype.split = function (words, s) {
	  var ret = [];
	  var lasti = 0;
	  var i = 0;
	  var f = typeof s === 'string' ? 'w' : 'p';

	  while (i < words.length) {
	    if (words[i][f] == s) {
	      if (lasti < i) ret.push(words.slice(lasti, i));
	      ret.push(words.slice(i, i + 1));
	      i++;
	      lasti = i;
	    } else {
	      i++;
	    }
	  }
	  if (lasti < words.length - 1) {
	    ret.push(words.slice(lasti, words.length));
	  }

	  return ret;
	};

	/**
	 * 在单词数组中查找某一个单词或词性所在的位置
	 *
	 * @param {Array} words 单词数组
	 * @param {Number|String} s 要查找的单词或词性
	 * @param {Number} cur 开始位置
	 * @return {Number} 找不到，返回-1
	 */
	Segment.prototype.indexOf = function (words, s, cur) {
	  cur = isNaN(cur) ? 0 : cur;
	  var f = typeof s === 'string' ? 'w' : 'p';

	  while (cur < words.length) {
	    if (words[cur][f] == s) return cur;
	    cur++;
	  }

	  return -1;
	};

	return {
    Segment: Segment,
    POSTAG: POSTAG
  };

}());