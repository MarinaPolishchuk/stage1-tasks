const _0x343f=['addEventListener','querySelector','play','floor','author','description','src','getHours','147759tJcsuw','message','add','1WZJZdE','.play-list','item-active','https://api.openweathermap.org/data/2.5/weather?q=','getItem','padStart','.city','classList','Cann\x27t\x20get\x20weather\x20for\x20\x27','setItem','textContent','name','https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/','title','city','placeholder','.time','cod','body','toLocaleTimeString','value','load','long','cover','320186LXOpqP','36617XcxUeX','weather','Humidity:\x20','12034JICUlB','179790GKxsgK','speed','toLocaleDateString','.weather-description','90984lTEkeg','style','json','change','Error!\x20Incorrect\x20input\x20format\x20for\x20city!','Minsk','.name','click','.author','length','\x20m/s','currentTime','toString','append','owf-','2AVFCnt','morning','className','145726pKCrBq','Good\x20','numeric','random','.humidity','.temperature','.play-next','evening','weather-icon\x20owf','&lang=en&appid=8e161825a316f5542ed49cc61f125f91&units=metric','[Enter\x20sity]','1WnxGtH','wind','text','4DNwMqT','remove','day','.weather-icon','pause','children','[Enter\x20name]','.date','temp','then','main','createElement','.jpg','\x20for\x20\x27'];const _0x126331=_0x2dac;(function(_0x1a01d0,_0x40bbe6){const _0x3f011a=_0x2dac;while(!![]){try{const _0x4fbba6=parseInt(_0x3f011a(0x134))*-parseInt(_0x3f011a(0x15c))+parseInt(_0x3f011a(0x159))*-parseInt(_0x3f011a(0x14e))+parseInt(_0x3f011a(0x172))*parseInt(_0x3f011a(0x175))+-parseInt(_0x3f011a(0x138))+-parseInt(_0x3f011a(0x13c))+parseInt(_0x3f011a(0x137))+parseInt(_0x3f011a(0x14b))*parseInt(_0x3f011a(0x133));if(_0x4fbba6===_0x40bbe6)break;else _0x1a01d0['push'](_0x1a01d0['shift']());}catch(_0x1ab237){_0x1a01d0['push'](_0x1a01d0['shift']());}}}(_0x343f,0x39e8d));import _0x2be09a from'./playList.js';const time=document[_0x126331(0x16b)](_0x126331(0x185)),date=document[_0x126331(0x16b)](_0x126331(0x163)),greeting=document[_0x126331(0x16b)]('.greeting'),name=document[_0x126331(0x16b)](_0x126331(0x142)),city=document[_0x126331(0x16b)](_0x126331(0x17b)),body=document['querySelector'](_0x126331(0x187)),slidePrev=document['querySelector']('.slide-prev'),slideNext=document[_0x126331(0x16b)]('.slide-next'),quote=document[_0x126331(0x16b)]('.quote'),author=document[_0x126331(0x16b)](_0x126331(0x144)),changeQuote=document[_0x126331(0x16b)]('.change-quote'),weatherIcon=document[_0x126331(0x16b)](_0x126331(0x15f)),weatherError=document['querySelector']('.weather-error'),temperature=document[_0x126331(0x16b)](_0x126331(0x153)),weatherDescription=document['querySelector'](_0x126331(0x13b)),humidity=document[_0x126331(0x16b)](_0x126331(0x152)),wind=document[_0x126331(0x16b)]('.wind'),playBtn=document[_0x126331(0x16b)]('.play'),playPrevBtn=document[_0x126331(0x16b)]('.play-prev'),playNextBtn=document[_0x126331(0x16b)](_0x126331(0x154));let randomNum,playNum=0x0,isPlay=![];function showTime(){const _0x4c7f04=_0x126331,_0x102f22=new Date(),_0x5ac8f9=_0x102f22[_0x4c7f04(0x188)]();time[_0x4c7f04(0x17f)]=_0x5ac8f9,showDate(),showGreeting(),setTimeout(showTime,0x3e8);}showTime();function showDate(){const _0x3eb42d=_0x126331,_0x34cf2e=new Date(),_0x485cdf={'weekday':_0x3eb42d(0x18b),'month':_0x3eb42d(0x18b),'day':_0x3eb42d(0x150)},_0x218bdc=_0x34cf2e[_0x3eb42d(0x13a)]('en-US',_0x485cdf);date['textContent']=_0x218bdc;}function getHours(){const _0x4abf53=_0x126331,_0x3a050e=new Date(),_0x429afe=_0x3a050e[_0x4abf53(0x171)]();return _0x429afe;}function getTimeOfDay(){const _0x259d53=_0x126331,_0x14d837=getHours();let _0x175846;if(_0x14d837>0x11)_0x175846=_0x259d53(0x155);else{if(_0x14d837>0xc)_0x175846=_0x259d53(0x15e);else _0x14d837>0x6?_0x175846=_0x259d53(0x14c):_0x175846='night';}return _0x175846;}function showGreeting(){const _0x91f0e7=_0x126331,_0x51ad08=getTimeOfDay(),_0x5194a6=_0x91f0e7(0x14f)+_0x51ad08;greeting['textContent']=_0x5194a6;}function setLocalStorage(){const _0x12ecb7=_0x126331;localStorage[_0x12ecb7(0x17e)]('name',name[_0x12ecb7(0x189)]),localStorage['setItem'](_0x12ecb7(0x183),city[_0x12ecb7(0x189)]);}window['addEventListener']('beforeunload',setLocalStorage);function getLocalStorage(){const _0x79a421=_0x126331;localStorage[_0x79a421(0x179)]('name')?name['value']=localStorage[_0x79a421(0x179)](_0x79a421(0x180)):name[_0x79a421(0x184)]=_0x79a421(0x162),localStorage[_0x79a421(0x179)](_0x79a421(0x183))?city['value']=localStorage[_0x79a421(0x179)]('city'):city['value']=_0x79a421(0x141),getWeather();}window[_0x126331(0x16a)](_0x126331(0x18a),getLocalStorage),name[_0x126331(0x16a)](_0x126331(0x13f),()=>{const _0x4bd0ba=_0x126331;!name['value']&&(name[_0x4bd0ba(0x184)]=_0x4bd0ba(0x162));}),city['addEventListener'](_0x126331(0x13f),()=>{const _0xef4626=_0x126331;!city[_0xef4626(0x189)]&&(city['placeholder']=_0xef4626(0x158));});function getRandomNum(){const _0x1c86c5=_0x126331;randomNum=Math[_0x1c86c5(0x16d)](Math[_0x1c86c5(0x151)]()*0x14)+0x1;}getRandomNum();function setBg(){const _0x10e8ad=_0x126331,_0x19c684=getTimeOfDay(),_0x171e2b=randomNum[_0x10e8ad(0x148)]()[_0x10e8ad(0x17a)](0x2,0x0),_0x458d35=new Image();_0x458d35[_0x10e8ad(0x170)]=_0x10e8ad(0x181)+_0x19c684+'/'+_0x171e2b+_0x10e8ad(0x168),_0x458d35[_0x10e8ad(0x16a)](_0x10e8ad(0x18a),()=>{const _0x23035a=_0x10e8ad;body[_0x23035a(0x13d)]['backgroundImage']='url(\x27'+_0x458d35['src']+'\x27)',body[_0x23035a(0x13d)]['backgroundSize']=_0x23035a(0x132);});}setBg();function getSlideNext(){randomNum<0x14?randomNum++:randomNum=0x1,setBg();}slideNext[_0x126331(0x16a)](_0x126331(0x143),getSlideNext);function getSlidePrev(){randomNum>0x1?randomNum--:randomNum=0x14,setBg();}slidePrev[_0x126331(0x16a)]('click',getSlidePrev);const getQuotes=()=>{const _0x3f8de4=_0x126331;fetch('https://type.fit/api/quotes')[_0x3f8de4(0x165)](function(_0x51a1bd){const _0x365569=_0x3f8de4;return _0x51a1bd[_0x365569(0x13e)]();})[_0x3f8de4(0x165)](function(_0x4f300e){const _0x50c3bd=_0x3f8de4;let _0x45c219=Math['floor'](Math[_0x50c3bd(0x151)]()*_0x4f300e[_0x50c3bd(0x145)]);quote['textContent']='\x22'+_0x4f300e[_0x45c219][_0x50c3bd(0x15b)]+'\x22',author[_0x50c3bd(0x17f)]=_0x4f300e[_0x45c219][_0x50c3bd(0x16e)];});};getQuotes(),changeQuote['addEventListener'](_0x126331(0x143),getQuotes);async function getWeather(){const _0x518794=_0x126331;weatherError[_0x518794(0x17f)]='';if(typeof city['value']!=='string')return weatherIcon[_0x518794(0x14d)]='',temperature[_0x518794(0x17f)]='',humidity[_0x518794(0x17f)]='',wind['textContent']='',weatherDescription[_0x518794(0x17f)]='',weatherError[_0x518794(0x17f)]=_0x518794(0x140),![];const _0x37b7eb=_0x518794(0x178)+city[_0x518794(0x189)]+_0x518794(0x157),_0x325721=await fetch(_0x37b7eb),_0x53bdc5=await _0x325721[_0x518794(0x13e)]();if(!_0x53bdc5||_0x53bdc5[_0x518794(0x145)]<0x1)return weatherError[_0x518794(0x17f)]=_0x518794(0x17d)+city[_0x518794(0x189)]+'\x27!',![];if(_0x53bdc5[_0x518794(0x186)]!==0xc8)return weatherIcon[_0x518794(0x14d)]='',temperature[_0x518794(0x17f)]='',humidity[_0x518794(0x17f)]='',wind['textContent']='',weatherDescription['textContent']='',weatherError[_0x518794(0x17f)]='Error!\x20'+_0x53bdc5[_0x518794(0x173)]+_0x518794(0x169)+city['value']+'\x27!',![];return weatherIcon[_0x518794(0x14d)]=_0x518794(0x156),weatherIcon['classList'][_0x518794(0x174)](_0x518794(0x14a)+_0x53bdc5['weather'][0x0]['id']),temperature['textContent']=Math['floor'](_0x53bdc5[_0x518794(0x166)][_0x518794(0x164)])+'°C',humidity[_0x518794(0x17f)]=_0x518794(0x136)+_0x53bdc5[_0x518794(0x166)]['humidity']+'%',wind['textContent']='Wind\x20speed:\x20'+Math[_0x518794(0x16d)](_0x53bdc5[_0x518794(0x15a)][_0x518794(0x139)])+_0x518794(0x146),weatherDescription[_0x518794(0x17f)]=_0x53bdc5[_0x518794(0x135)][0x0][_0x518794(0x16f)],!![];};city['addEventListener'](_0x126331(0x13f),getWeather);function buildPlayList(){const _0x18a2f7=_0x126331,_0x223260=document[_0x18a2f7(0x16b)](_0x18a2f7(0x176));_0x2be09a['forEach'](_0x2cc061=>{const _0x5105c8=_0x18a2f7,_0x19872e=document[_0x5105c8(0x167)]('li');_0x19872e['classList'][_0x5105c8(0x174)]('play-item'),_0x19872e['textContent']=_0x2cc061[_0x5105c8(0x182)],_0x223260[_0x5105c8(0x149)](_0x19872e);});}buildPlayList();function stylePlayItems(_0x5920be){const _0x5cf27d=_0x126331,_0x1d9b92=document[_0x5cf27d(0x16b)]('.play-list'),_0x20cff0=[..._0x1d9b92[_0x5cf27d(0x161)]];_0x20cff0['forEach']((_0x5704d6,_0x126c26)=>{const _0x5bfdc0=_0x5cf27d;_0x5704d6[_0x5bfdc0(0x17c)][_0x5bfdc0(0x15d)]('item-active'),_0x126c26===_0x5920be&&_0x5704d6[_0x5bfdc0(0x17c)][_0x5bfdc0(0x174)](_0x5bfdc0(0x177));});}const audio=new Audio();function _0x2dac(_0x5d31be,_0x6286f6){_0x5d31be=_0x5d31be-0x132;let _0x343f36=_0x343f[_0x5d31be];return _0x343f36;}function playAudio(){const _0x3f0381=_0x126331;!isPlay?(audio['src']=_0x2be09a[playNum][_0x3f0381(0x170)],audio[_0x3f0381(0x147)]=0xc,audio[_0x3f0381(0x16c)](),playBtn[_0x3f0381(0x17c)][_0x3f0381(0x174)](_0x3f0381(0x160)),isPlay=!![],stylePlayItems(playNum)):(audio[_0x3f0381(0x160)](),playBtn['classList'][_0x3f0381(0x15d)](_0x3f0381(0x160)),isPlay=![]);}playBtn[_0x126331(0x16a)](_0x126331(0x143),playAudio);function playNext(){const _0x542072=_0x126331;playNum<_0x2be09a[_0x542072(0x145)]-0x1?playNum++:playNum=0x0,isPlay=![],playAudio();}playNextBtn[_0x126331(0x16a)](_0x126331(0x143),playNext),audio[_0x126331(0x16a)]('ended',playNext);function playPrev(){const _0x1ce629=_0x126331;playNum>0x0?playNum--:playNum=_0x2be09a[_0x1ce629(0x145)]-0x1,isPlay=![],playAudio();}playPrevBtn[_0x126331(0x16a)](_0x126331(0x143),playPrev);