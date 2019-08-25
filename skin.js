// Garden Gnome Software - Skin
// Pano2VR 6.0.3/17298
// Filename: ailaz.ggsk
// Generated 2019-07-16T12:54:57

function pano2vrSkin(player,base) {
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressed = 0;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	this.callNodeChange=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggNodeChange) {
				e.ggNodeChange();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('configloaded', function() { me.callNodeChange(me.divSkin); });
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; me.callNodeChange(me.divSkin); });
	
	var parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._toolbar=document.createElement('div');
		el.ggId="toolbar";
		el.ggDx=-30;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.00392157);';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -10px;';
		hs+='cursor : default;';
		hs+='height : 28px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 277px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		me._toolbar.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._toolbar.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._left=document.createElement('div');
		els=me._left__img=document.createElement('img');
		els.className='ggskin ggskin_left';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAACvklEQVRYhe2XzY4bRRSFv3O7x5mZyPlRELNJND+wYQESD5GHiISySZRVHocdEmsQEgvEGwArJF4gCE0YJhBpEiFCRPxT97DobmMncmxPLIGQj+Tuqupy1de3Tt2y9cP3d81/RPFvA0xrAzNPG5h52sDM01pgJMBNuhJg3Lapa14XTDeaXmo22DiTLMJAuuktQSmAytT31wLTgXh2YIERVAFRkIKqaokykAxUS4MsCdNFZPYN3V3TyDVZRoyGA4ggSSRj57phQBihpuTGExOPKCj5F7sXD+hffo9xGSOJtF4/6HlhJgv0zwUpEKLkkLp3haN373N4eIe6qlv41bX8buoi0qC0/i3IwdHhHS5sX+Pnk8/JHLRGNpJe8f2bwWjqMw3mpOSA6we36F/5gF'+
			'9OvuD3p98R9AgFUuBue60NBlAGllFnW4nMAW/v3WRv7yZPz77h19OvqHUJRzZ2cptrVtBimAQiEcIOUKDygv7l99nfv82zZw94ePwZdd0jw8gBlNY1q+XUpZYp21BboARTMR6dMRiesd27xoXttyhlSBRR1ADVkY1v1gmjlkIWUgIJscWL57/x048fE3Wfo6N71NUlHCNqieKkTBLfGmEwSInt5qwJE05ia5s//3jAw+NP2Nm9zv47d3EmJU0VATKZXsW/i2ES2tTfFaLdtqbu9Xny+FsenX7J1asfcmP/I+zESigQsZpn6kUdJJCFJUSBDBzgMVAn1dYuj0+/prdzg52LB1RR4TSuAnIMWh5oIUyT4LIZswUJKlwVXAICbHFy/CmyKGVEVfXABalilUSzBIyb8BhQk8SyqUzqSLgMMRBRN/5CmGyy8NSLvQ5uCZhp'+
			'qeGaOaO6CTTpMzv58loRpp1iZo5pkK4+DeM5z17VG/zsnD6w/NL9fDpXZGa1aFmWX6r/37+DdWkDM08bmHn6G2qNLZDuc0+sAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAACgklEQVRYhe2YTW8cRRRFz33dbWMnxOMEFGWdbaJECInfzf8gi0gIBMsoYoexnTGR7e53WVTPuD3EzJSZCBL5Lbqr1DVVp+77qO7Rb2+/N/8Ti/8aYGp3MDfZHcxNdgdzk90CRuPdy16uVCr76nlNEdsQRpO2rzUzEzUGTNpg0zRAqgqkAsYr9wJogSQ0FNhQYETfg2OoRKl205VCxuNVoMQkyksIE4KgG/21uT4bwEwBFvN77AAkmUnbzYi9r8EJSobsUW7MsSnMKpuXoWsJY5pun68efcfhly8IWkBEBEOjf56rHsZ/b0ujYIkIDg9eoGafd2c/M/gCp0gPtJURXKHMuMuliwzueTB7xu7eE07/+JE/z97SqIVIpIaszKe1MPKoghfBakCke+7tP+'+
			'X+/aeczd8wP/uFiA67ZBguQ2sctRbGMUaIIGSgBV+yu/uY2cOXnJ//zunpa0JtyTCDUwhBbF2ZEQrARh4ra57TX85pm32iuUc6kYRdJLEMrsuPqtELNyk6Lvtjjo5+QM0Ojw6/pWl2yCGhieJa10bMJm5SuaigkBYwIDouLo44PnpFu/OAg8NvEOU4sAwRpeZsE2acH6PlYthEiFDL+/dvODn5ib0vnnDw8DmKcQc5QNTVmXbdAEEp9wpwIBmrwR7AQahjPv+VrpvRxAwyIHrIpoBX8KyFKYksnGXiZZCO8TO2ODl+BQRJjxxcnReb06yFWQItah6T3S4Pc2EnkEij5wWkrn64LZiplcjxpH+N9LoYdSFTD7MAWi5mTx+svvJU2RbegSdgizOgusIUu5UyH2Ip61dKsWIf6evgdlD/DubGNW/npk/9u2liW/5n5zNS'+
			'Zsv2F3o5DGmC3SZWAAAAAElFTkSuQmCC';
		me._left__img.ggOverSrc=hs;
		el.ggId="left";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='left : 60px;';
		hs+='position : absolute;';
		hs+='top : -19px;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._left.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._left.onmouseover=function (e) {
			me._left__img.src=me._left__img.ggOverSrc;
		}
		me._left.onmouseout=function (e) {
			me._left__img.src=me._left__img.ggNormalSrc;
			me.elementMouseDown['left']=false;
		}
		me._left.onmousedown=function (e) {
			me.elementMouseDown['left']=true;
		}
		me._left.onmouseup=function (e) {
			me.elementMouseDown['left']=false;
		}
		me._left.ontouchend=function (e) {
			me.elementMouseDown['left']=false;
		}
		me._left.ggUpdatePosition=function (useTransition) {
		}
		me._toolbar.appendChild(me._left);
		el=me._right=document.createElement('div');
		els=me._right__img=document.createElement('img');
		els.className='ggskin ggskin_right';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAADLElEQVRYhe2YvYtcVRjGf897ZmZ3sgYLCSIabKLgB0G2EGy0sxBEm2WDaRaMFqKFIPg/2AgBC4moKEoCEQRrsVSw2LUIiB+FgYWAWFjMbnbm3vexOJOwfqxzJzvgB/sUw5l7Z+55zvs87/uec/X6uWXzL0H80wT244jMQTgicxCOyByEmWQMSEAaBCCwASGM6hAwVh16+smcFaw36wc3eEQEzsQkUsHOOlcYsjKO1mSYAOxS781BaLZMhpBvzAcKIJFERI+gUCwgaYoQIgmyZCU5B2ZGxgGkkIytKb8qz95kREHEsA+NKMpK1lBacAgyp6uYjZmRmaoPMmlXnxCMmwnPnn2Tx596jd3RmFCARTqRTYbIbDuR6E4mQVGjUmUSkkibu+89zdNn3uDh00'+
			'+yM7qOohAECUQaqSyWTMpg1awxpJN00o/Ce+fX+fnad5x96WPuOnk/18e71UuZtBLQLtbAQsjCSoj6HUT0e+z8+gsfvLVOryyx8cplhv3jjMd7uPSQs8vj5yVjUiZcjalpTaE1SyvLXP1xi4vvbHDnPQ+w9uIF+oMVaBso1W3zJNTsoqcqUVbDkOZmXckmObZyjM2vPuHK5mc88uga9z34BONmQrhfpaW7UrPJTNO62tJIqv+SKaWwO9ph9bE1Hlp9hq0vL/L9lS/oD5Zo2wlENX23xO4okyVSwgRkJRQu7O7ucPLUKmfOvc/21S0uvfsCTTM1cYjM+frB7MgEuK227ZE1uwRNs8dtt59g4+VLjMcjPjy/zmQ8ogyW6iKUFC3awAmltGDRGnpRyCYpgyHPv/opd5w4xUdvP8e17R/o91dqFtk07bRSd6y+0KVRBjTZ'+
			'o6jBAqeJgLZp2f5pk2++vsy3m58zPD4ET7ADlPRU8JxtWzOPKgbLtbKmcUnUCttMxmN6IWJpAI7aKmRaiwhw97YEdIgM0nTnUieqaQ1SMFge1js20IKEqV0eaypR9+jMJrP/YapGtuv13y9adE/iWybzR2hfK59u8+bR4m9wS3tgeV8Mbg7+So75DHwLkeFPTBYTl4WeDg5P6b91VJkPh3u7smAyh5Pq/yzT4fAb+wdO9S3f6l8AAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAC5UlEQVRYhe2XXWtcZRSFn7Xfkw/8iFKLraWI1QuFlloDIoJ/wKteqeDf8dcoReiFd/4AqUKIWK3eeJFWo0ZqJCU2c969vHgncdSkM8fEL5h1MQNn5px5zt5rr31GH15/x/xHFP82wKTmMEdpDnOU5jBHaTqMfh9DRgjD+BWD2ttvp2Bs/Q0wFkhAAkJOEsg0Mf64JwkbG9KAhIoZitNN/YYMFRSFdEXEAQQSkSAKKRMkqOBMAKo0yAdTYeSAMGmjEFlbo6Rkb9RDEZ3aZWoGjkpI4KAjyQH1mQpuG0to3IZQ88qor7zw4us8e+E1+r1fcBRCprMwQajSI+zZV99MbXKKEqLPRCGKoTesPPYUp557hu173/LD7a9YXFzGYag9NTrClSHOmVoZuRBKqk'+
			'yokE4MlC5Y++hd7u1sceWlN1h5/EmyjrBFRCDzZxA9GGx6m1TBgVKgSjgwJtQxur/D+o1rsBBcfuVNolvCWWmdSYaO0wxmF5aRwBIeJ4ox3cISP929zeefXOfRlbNcXL2KVJAPUugPd/Zg/8wEA25AGYBRANWAWV5Y5s7GOt9/c4uz5y9y+swF+hyRY6ghmgEmEQEO7IQIMo1IINjd2+Xc01c4c+55Njc+Y2vza6KUlsKHVec4MC1ns92l2hEsHAvU0S6nnzjP5dWrbN/d5Oba+9jZfGWPk/EEYeTEUhtxCyWUEqTvs7C8wqWX36KvPZ9+/B51lJSyv0GC6DTIxNNhQjjbzonSzuj7pIslVl99m4cfOcX6jWvs/Pwd3VKHM7CSyEqOEg2gmRp6mRBhcNBXE8WUKDh7trfvsLlxkx+3vmSxe2i8PAUU3NFKdJIJHIJ0'+
			'IdS3nVMDVEnBF2sfoAg6WvKG1SYN2nIdOE5TYZpvE3v8KzJu80WURSYfaCbnR1PS9i/BTGr/8j7kGAwz67Fh0CSI9svGsSnGOt4z8MkwHGhYZeCQUT05ov/Zv4N/UHOYozSHOUq/AjaVSCIGbalgAAAAAElFTkSuQmCC';
		me._right__img.ggOverSrc=hs;
		el.ggId="right";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='left : 94px;';
		hs+='position : absolute;';
		hs+='top : -19px;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._right.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._right.onmouseover=function (e) {
			me._right__img.src=me._right__img.ggOverSrc;
		}
		me._right.onmouseout=function (e) {
			me._right__img.src=me._right__img.ggNormalSrc;
			me.elementMouseDown['right']=false;
		}
		me._right.onmousedown=function (e) {
			me.elementMouseDown['right']=true;
		}
		me._right.onmouseup=function (e) {
			me.elementMouseDown['right']=false;
		}
		me._right.ontouchend=function (e) {
			me.elementMouseDown['right']=false;
		}
		me._right.ggUpdatePosition=function (useTransition) {
		}
		me._toolbar.appendChild(me._right);
		el=me._up=document.createElement('div');
		els=me._up__img=document.createElement('img');
		els.className='ggskin ggskin_up';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAACxUlEQVRYhe2WzY5bRRCFv1N97TEaZgRCiRgpSiaJEAHegiVPkDUEFjwBb8GKFTwA7BC8AQs2SCyQQGJBlCFiABHxE5TReDxdh8X1tZ2AfcciCQh8Nm61rtpfna7qKn3+2Q3zL1H80wCL2sAs0wZmmTYwy/S3YQTY8zV0z5ZnO48NxkBEC5AphEDCDkQ+RhgDNpkBAoWxDWkkkY/aGXsOYYxE64DrnE8ApzjX6zRng3kgQGOmt0EaFIE9JDORhDB2IULMc+hhwHROoOmvF9hESJzWE+xjIkprnYV0SubiIQ8DZoHKs0PV/qcrkzpmd/cFRqM9JpOj9kgltTaU4nkwZ+Bper+Y2eDpWhhhVzJP2dt7hQsXr3My/o2b37zD73e/pCnbRKnU1P3R9lT7GZ'+
			'wRzgQFJAiRdYxouHz1DS5cvM7RvduoNFx78S3OnX+ZWo9gWmEgrC7PVtvT7wxgCTKxgqzHDIfn2b96g92da/xy51MOvn2f0egZLu2/zqUrr7G1dY4fDj/GmVilKy/sNumXuaS+SU9OEiECe8z2k89z+bk3GQ6e4rvDD/n+9kcQwpNjRtvPsn/lVXZ2XuLXn7/g4OBd6uRogUDz5V+o95pShQAsUzGKLewJBzff4/DWByhEU4JmuM34+A5ff/U2P/34CaMnnobsol9sESsC75+BTQoiwRZmwqDsMql3IRrkAComKBFtPkWDGFDrGMU0d7r+tcKaXmdMUNI4gUhUGsan9yAGRAqRGCGZrBVrQAJZT4gSzN+nfvXCBCYlsgEcuIpBEZGQ0b5qAuQWSDIkRIlpN/csUf/kyQMbvdXUtiFTHFgQMhWhApHtnqS2DykQQpFU'+
			'm2gb1+rD14HBJqaX3j0Tge/LSXcDjZm90poG0ZV1p1XVdIYXePUYsN6QsFr/rbGzV2tY9+hh1piv/mfXtIY2MMu0gVmmPwAfDTN/fH7buwAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAACaklEQVRYhe2WMW8TQRCFvzfnBCMgJFZIS0NBk4IIqPjT/IeUUCEENBQI0QAhOCQhzu08irszJsHYJkEg5Fetx6vdN29m3q3evX1s/hHE3yYwiSWZaViSmYYlmWm4OBmdW4xXixrYgmR0PjS+MRHGQLbx+Mn2SyRzNleBO4oiHUQTxYDzj5PxxKpZF8AkUiExEkRALlio3vxbJzWfuEQirOZ/GWVgEgsaneYntIAy7aH2D6UxUDjFTqDCVeIKpIpUPf/x85GZmA17XKiuWM5Cf/UWKys3yBxBGjnILK1K8yszu0wy9iSploQNMtdv3GFtfZtSH/Np7wmj0ftmr4TkcW/pZ5N4BrOVMUAit4cL7Boi2FjfYW19m/pkn4gem1uPuNq/DVmQEhOoS8Pf9Z'+
			'yGuRpYCpyJZURB1XUGg3tc6W9xdPiG4fA5EX0Gg/sMNncYfr7G4ZdXpGuQwOcN8bfIuDOvSjiT1f4mGxsPiarP8PNLvhy8wBKlPmbv/S5rgwes3bzLldUN9vaf4HLaKnIJZZKM06TdOmyFXdj/9JSD4bP2CBG9HiOf8PHDLodHryFW0ViR+axYs9/AApIsQj2DayKukvVXiJVmuNMkoBBkJ6WQa0yMO0UI/YLXTGVMIkSE25leIcuIiIrOYy2jADlxtFerkKoaI6TT5oINHKooWSMFMlhJKBolsvssBraxhaIJyUHojMvMqNbsBs4kIiCbsRZBuvUOgd1lr6Y8xRDN7+JAGtv1zM6Zy/S6Yeik/i47oGyjtKPXJoFRW6IzB16AzIx8Fnyy/BL/2bPzErEkMw1LMtOwJDMN/xSZbxSAF6MOxu5mAAAAAElFTkSuQmCC'+
			'';
		me._up__img.ggOverSrc=hs;
		el.ggId="up";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='left : 128px;';
		hs+='position : absolute;';
		hs+='top : -19px;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._up.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._up.onmouseover=function (e) {
			me._up__img.src=me._up__img.ggOverSrc;
		}
		me._up.onmouseout=function (e) {
			me._up__img.src=me._up__img.ggNormalSrc;
			me.elementMouseDown['up']=false;
		}
		me._up.onmousedown=function (e) {
			me.elementMouseDown['up']=true;
		}
		me._up.onmouseup=function (e) {
			me.elementMouseDown['up']=false;
		}
		me._up.ontouchend=function (e) {
			me.elementMouseDown['up']=false;
		}
		me._up.ggUpdatePosition=function (useTransition) {
		}
		me._toolbar.appendChild(me._up);
		el=me._down=document.createElement('div');
		els=me._down__img=document.createElement('img');
		els.className='ggskin ggskin_down';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAADY0lEQVRYhe2WO4hkRRSGv7/q9rxERMUVXNzxlRisyLiw4gPEQQxEMRFxMFAYdVnEQEFTc80MBJ3EYNVQExFEDQRTkwVhWUxcXUQDd53Znse95zeoO909j57uMdAV+gTd98Gt89Vfp/5Temt5xlwlkf5rgMGYwAyLCcywmMAMi/FgDAiwEBBqb3e8176f9a5MO0j/7/AwElKhcQLbdAThPlDK7YPtTDYGMgPPNIA3CHYoGAe2kEEEJFHXoFQGFBB1YG0ndnlpE+SDBt6DMwaMQAkriLrMWjIKgxtsSnIVdWRjm2SAuqg0pOGYnS+qkTAJHA0AObvMR9BQdBHGlOQhY2UkYyfCkAikfuKi5fYCa3eqUcoYLBKmcSqqkFBymXWUASOMlHGrlgQ5eaCwBS'+
			'Na8mhlnEBBIFDDxvomEdDpVOTUwaohKqgC10GlzMZml7qBTkrkTtUu445B9001xm5yK6io17c4fuJpnnnxfaamZtnc7JI0BWqgSSiJtW6X+dvvZ2n5Q66/6RhNBHa0tXZwqjF8pqyvImGZW44t8ODiKyy/8SU3HLmN9StrpNxBMqur6xy/7wleevMLTj6yzI1H7iSaKMsqEduVLPUqaDDyQwvV2wey2MgVTjVV7nD+7FdcunyRBxZPs3DyWX698AO//HwO1TWPPvk6Sy9/xOU/f2flncf56fx3VLlTfMjF+KR+Ae9WSqNOepagqYuICZKhu7bB3fcusnTqDNdedzOfrixzdP4eHn7sVc6d/ZZPVl7g0h8XmJqdbd3R9Ba7JbBN6ik0JoyAsFFKRB2kLKTE6l9XOHrrXTx36mPm7zgBFt9/8wGfn3mNrWaD6elriHqr'+
			'7KZeFxh04sEtPiYMNqTiqERDtDujo4q17hpzM3M89fx7/HbxR77+7F1m5ipymqJxQ8rgoO0GA1t7SCGPhpFwY5RdLK42JGhsKom6NnVskg15Zho5FSWJ1mPUrw0X0xy8HyycMXzGkAIi0dioAsJkiVAidcxsmsORCNegaCeekaIoA6VutFuUQzswpNIVyVkQQqRWehdnro211Xb3RJJKg1XbUFUS91vBvixjKNPuSgSOgU7r8hMACojtkojeCUGxN+FBPWE0zA6wvZWnIdf/JP6Hx85/KSYww2ICMywmMMPiqoL5G3ncfDMXAQTDAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAADGUlEQVRYhe2WTYscZRSFn3PfmukMIRNmXEyMX4FAUGch5gM/IWt3WWQhiG78Kf4LN/6FmIUrcREIKEIMhEgUiQQ3QgKzSSZjd733uKiamZ4ZO90TgkbosyiKl6ruh3vPubf07ddfmOdE8V8DjGsOM0lzmEmaw0zS7DAGpLGD7n7nSLvnAmwx/vQzgZHANpaQaw8mRAKQCSKxO6DuXqgk+HA4U2FqCoUIKplN91KYagFGIUwAxgmJumrVgnvgZwZTIiGhuqDSVaClEghbUJPat7CQ2CZJTO1ad4hlMxUmHVgmXMFdDcIFIkEJAY2MK1QFQSCrN5Mwxp6NaCpMkIQFCwUbUoACqpADCNqEKCADtGj7V7dNr9m800x7IAlEkiMoglE7wrREOdKlxUmEwO'+
			'5MHA2jUYuoKArRk5np6Zoh2gmIkBnWlrWTb/DmW5coUcjaEhHIkAaVYDjc5PjKi6yfvcSRpWXszkc48ZiBBAfgpkebALJLjM3y8RO8cvoCb7//CUtHV2iHW0AgidFfj1h7aZ3zH37Gy6fOsnR0BWf27Ys9f+++WoesjEm6aDeLA3698x0/37jK6guv8c7Fz1ldO8Nw9Ji2Vl49c5Fz733McLjF99e+ZOP+PRSl94zZjdY2xN7oT/UM7vxqBE6KFvjj9x/YerzB+rnLXPjgU27dvMqx5TVOnX6XB3/e5fZPV9ja3CCaQefqfiZhj4EdlKZ9dlpAa1RETVP6ITccPmR5+QTr5y+zsnoSgHu//cgvt79BrkgDpCQ9Zl3xRBtPrYwS3AinkTr3lKwsLh7j4eYDblz/itfXP+LR5n3u3rlG0yyBCumWkgVFDzBDuqe3Kbop'+
			'G9F32KLKmCGNBmRtuXXzCkkwWBh0k9eBFDg8tp/2++VpYDJRdPOGrL1/THHpR37DQtOgMK7CVCLAFVR2Ef4RZZ99Ztja3QQNG5VCCsKxe64ETKZAlRKBEaXpPyPkHa8c8Mu+rT61Mu4vXSC6mTG+b3avxmjnPLdffKJZ9mZnepv2SLOumafS//Sz81/QHGaS5jCTNIeZpOcK5m8n/1jw3WCoKAAAAABJRU5ErkJggg==';
		me._down__img.ggOverSrc=hs;
		el.ggId="down";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='left : 162px;';
		hs+='position : absolute;';
		hs+='top : -19px;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._down.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._down.onmouseover=function (e) {
			me._down__img.src=me._down__img.ggOverSrc;
		}
		me._down.onmouseout=function (e) {
			me._down__img.src=me._down__img.ggNormalSrc;
			me.elementMouseDown['down']=false;
		}
		me._down.onmousedown=function (e) {
			me.elementMouseDown['down']=true;
		}
		me._down.onmouseup=function (e) {
			me.elementMouseDown['down']=false;
		}
		me._down.ontouchend=function (e) {
			me.elementMouseDown['down']=false;
		}
		me._down.ggUpdatePosition=function (useTransition) {
		}
		me._toolbar.appendChild(me._down);
		el=me._fullscreen1=document.createElement('div');
		els=me._fullscreen1__img=document.createElement('img');
		els.className='ggskin ggskin_fullscreen1';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAACMUlEQVRYhe2WTY7TQBCFv1d2xIAQB2DHhgPMmVhyAA7CoZCQEBIrxIY1iE12mUnXY+F2Ynvi2Cz4k/yUjqK4u/qr6qpq68P7V+YfUfxtgKE2mDltMHPaYOa0AkZ1/H6tgHEdvYZwK/qlg7XOrDymobGsA4Su4xhQqfOnDj1Uu4ThU2R6Azp9W0K+Hh2jydZDexpBXoWxqyn1RgBPo3TZS/eQ7leqfobzx47MwvTGjDsAVS/UG+g8m8sGaRIPn8HOj4YRX3FMp4UWEAOYZY1P8FwIdrUrjYKznDMW9hHnPZ4ciyaeDbcdEilaIlpQnB9e8GkRBidN+5hnT28xDShBwjLhqAk+60mHnAf2+8/AERGdU/rFBAZIH7nZPefFy9ddhvTBMKRMXO0h3eRy3P'+
			'Pp4xsyC47EFkFgCsPusggT2nG4+8HXL29JhEnkQE3nuedgBgFzuSMpEAVlS4RJJ6IZ5eAsjKSuokLgA9++v6OJLroJkBDS9WOqSovd7gZ7h6OQFk2tzuHqhcgIkdgtj26e4BJAIRTQCFHwQhO3TRtBloKiQM27Sy5chZFAbsg8AiK5B7WEE8JkBiIfFpTHP50FouvGlEKESESER+W/nMCRhIIUBG1tEkAJojH2hZwZ/NVUoC41BG3BFg0mJ+FZvCiVXQmGzXm1oBHO5dvYqvxhFImzOeXdNPmX+0y9l3y6o/pdvO7NoHbbPoLS+Wimd/7/9qb357TBzGmDmdMGM6cNZk4/AWdF+iht9C3TAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAB7UlEQVRYhe2W3Y6UQBCFv1M9u/5dGG98FZ/be1/A59AYExO9dDI71PGigYEdmsHErCZySAhN6OLr01UF+vL5vflHFH8bYKodpqUdpqUdpqUngNHmJ58AZntP/QMw4ndWv6Z1GAPSZPBolWrcx+OxHHTZrcM6i5GHANOzLnHRLLgmZwDbINA4R00jmzDjqnx5uabvWQCZSgtX4zRPDN8CM84MzYZzqHZyjs+69cw1zTrMqI50Vst7R5ZWtgxkhBBlEWA7jACS5MCrF2/pMDjq7QDyRvyhAHzmePoGmf1Y2CakmbdNmCEbMs2z5y95/eYdGmvP2Bvc6dPtlEdOXz+QGGxsKCVI5yWx12CmVA+nI99/fJxvUV8la9Zc0qoje1eUxpG9w/O5KzDVmxIF+4'+
			'Hjz0+QQ4NLFMJuV9MgB3A2cX+o8yWkwOkJ8U2Yqq4TEYG4R0HdKtfa9KTsm0uycAHOfc8prhUmarBJta12YCFKOSMCq8OGzCQBjy6tyNCROM4QRncJDHk/B7kJA5B5h90RKqiAVCEko6Ut0vw6BNHdVYQskDXnlj4VN2FCWSN2k57q2tXthelX7xBZsuaJgWIia7499vVmnxk/TXFpeGPda9vvgTy0nLqK+nm69uZ/+9Pbrh2mpR2mpR2mpR2mpV+KL9RFf70J3AAAAABJRU5ErkJggg==';
		me._fullscreen1__img.ggOverSrc=hs;
		el.ggId="fullscreen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='left : 196px;';
		hs+='position : absolute;';
		hs+='top : -19px;';
		hs+='visibility : inherit;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._fullscreen1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._fullscreen1.onclick=function (e) {
			player.changeFovLog(1,true);
		}
		me._fullscreen1.onmouseover=function (e) {
			me._fullscreen1__img.src=me._fullscreen1__img.ggOverSrc;
		}
		me._fullscreen1.onmouseout=function (e) {
			me._fullscreen1__img.src=me._fullscreen1__img.ggNormalSrc;
		}
		me._fullscreen1.ggUpdatePosition=function (useTransition) {
		}
		me._toolbar.appendChild(me._fullscreen1);
		el=me._fullscreen0=document.createElement('div');
		els=me._fullscreen0__img=document.createElement('img');
		els.className='ggskin ggskin_fullscreen0';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAD1klEQVRYhd2XPY8cRRCGn7d69sNnJAQpICcgAhIESGDITE6AkBAiQxYpGUjk/AMiJCL/AP4AxI74knCAIEAEBAiRwHnvdqfrJeiZ9S4cvt27NQGVzKhnpvrpquq3a/TBzbk5kGm4XtRhHApkhBhBbNgX66Aw90xI7bqPPSCYiyXqAcFczA4Ac1YUxL4pAugujeIRRqzBdBGUA8AoCkINw5v76T+HMc5ksVgRYWbTOZYRJhFF2gvtwjVjm0wjF56//jpPP3OD7HsUQZ+iK0H64DpzTjGq8ua7t3j1tQ856Xts0wncA3HwyGzp6j+eJsHij99YntxFoqVIkBOj3K+Qd4QZrUVJGhUWQhClG2YNIoIiQW+Q1nHdBWqHAt5008Ds8ewZLIKQIJNqg6FIVI'+
			'HH6OxAc25kPDi/B3GPxIbERBojiLY6p6kkyrpewvq7+2z/8yMjkMb0bIzZQBIqeHgQBFYhOhOIVLuC1zAGZNbCuInVbQ9tdCTD6iVYLk6oadLNkQdHfUIJsCt1teT42CTHuIIKuALRvpnOoHTzBiQQItnOXrfNtnE/RGN1csr1Gze59uQr1FwR0bVVKsAVG+azR3js2rO8894nKDoUhioyIGqPuhlf3b7F9998wezqnJo9cUYh3T9Ngj6Tx596iedefIvar4hJh9NoHedE3YyH50/wwstvkwoCISWukE5iWvj5x9t8Vz9nWgJlkwTI5mec7sy2czNrCd1kjiYFZxIESdvStRoJ3v/oDr/89DWffvwGR1eO2o5CyIklOmC5XNLXU6LlFQooA29k4+zIjGVkk0Wsln/ilUgnslEE6YRMogSWqOpZHN8lvCSHAreEbBaC'+
			'CYXSiWoTCrJC0XbV/HuaBqBiU6MjgFKCdCHwMJkJqeXfYjIJ1HUUe4iqoEAMczohDI5KKPDfttP9dUYiPUwmWvU7W+6ieVe08SLoaxJokJOClNCEGFsQiTogo43l9vRnw2zoktZvCFlIrT1QttUP6acn6AQpgUShJ1UGVyIiIUuLTjAsMneA2TxM1mEcVHdd/4Pg2PTZE06qaJA2SbT6Gt61Nahd8yQG1T4XZgczYJmUeOjqo3TTI1SB0o4DSXs7v1SnJ9qE3375Gb//+gMxAfdCpclAEki7dzRn68wuZppGCE4Xp0TAdDojqQQFSXg8O3a0i0dm3JYSV46uYAp4RdGEfqiV4m1RO88uVTMApFsr4SV2E7XOpqO1F/vY5X7i1KrGSrrBVQAZoibs1wFfAma9+5UoRaVpkIFIER3g/dxf+idu7JI0qEc7GTzK9V6e/m'+
			'8//oezvwAG/OXdLaKuwwAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAADcElEQVRYhd2YP48cVRDEf9Vvdg8CkJGR+HOWDBIishAgkdgSGTEhn4JPwZdBIiInJyFAggCJEAyCwBjJMne3M10E/XZ9y9ne250zgVtaaWZW+7ped1X1m9U3X39hZoWAmUv0iPlLXA0QuBIwVxfPIxj1z7wY5gPxxcsDcc0G462LfmdtAO2DazYYrVt0XuEHVuZAzhjZYGOb1fiQ1eoEEFaSNof4z4FghM+lev3Ge7z62juMuYIMcBIyeL/l56nJBgW3PviUt9/9mMwRBUgDUxoi/0cwVKvGcWQcT4ksfJBECHI/8uwk8MXOn5eJSBsFRIAlUPHFBsKlrKsC4//cram5WSAqsRBIROcTBnetXTZ2t2kLjS48T9QTg5V0kYG2a+q+FfcNHQTm0Y/LT2'+
			'qvsWmTofgByIEUSP0Xbjx5VFx8/sQ22R2/ghxPyJyq7AbLiMCeQI3MJKeJ1dlDnImUJevITuggYmA5DIx2bUECZ6/gDjDrmMYTjm9+xLXrN8Ejiii33xhN0oYXeemVN3n/9meEF1hVzyDARhK//vID9/78mWVbkk4IY9XmdoKR6P0Prl0/5vitW0zjWCl6W2xBBOGkxcu8cePDNX1RQI7lMxqC+/fvcu/3EQ9HEIGy6H1ebHrasdOdjW1YgAacSQz9eQYwkYY7n3zOg79/4/tvvyQWS9Qr4qgKysHkM0zC1JnWoqvwEpWp6giHqiI6BUSeqvPJJCbUEGZ0crb6h6OCiEJ4JQijNERDaqAJRfGsoS1f3D2100gQGjACFWmFiByrzA4Gw9AGHIEcBMatvltn8bTCLYhMmmCqRm1S7ZS2CglZdlLSdYG0A9RAkArclRIR'+
			'ZF9eArIbYDSaRRomBeFthlxuNqUJQ9ibaa0oiWdm77u72QU5rYo3ZG+DK7GEMa3RLWI7zeUOV+rF7KYqwFmwQsLOjYRFQjRQIm/K2UfEubn1GB+eObUFGbTlEYu2JD0yZakE6ynG//iYdewUgkj+uPsTJw/+og1LGrmZTdv0fKZges8MP373FZYYtCCpeRYhctpy+2cJpgDJyWJ4oaiRE6lGCJhGQosyukvG4ZxR33U0UuXUGeXKZa1DDdI9YvYbpV2yhwSihiMle2K/Y+dsMAoAYzXCEylQCBV59or5r7eb4+WjI4HXZrRnPI//QlxN/AsURriZ6Oz6PwAAAABJRU5ErkJggg==';
		me._fullscreen0__img.ggOverSrc=hs;
		el.ggId="fullscreen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='left : 231px;';
		hs+='position : absolute;';
		hs+='top : -19px;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._fullscreen0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._fullscreen0.onclick=function (e) {
			player.changeFovLog(-1,true);
		}
		me._fullscreen0.onmouseover=function (e) {
			me._fullscreen0__img.src=me._fullscreen0__img.ggOverSrc;
		}
		me._fullscreen0.onmouseout=function (e) {
			me._fullscreen0__img.src=me._fullscreen0__img.ggNormalSrc;
		}
		me._fullscreen0.ggUpdatePosition=function (useTransition) {
		}
		me._toolbar.appendChild(me._fullscreen0);
		el=me._fullscreen=document.createElement('div');
		els=me._fullscreen__img=document.createElement('img');
		els.className='ggskin ggskin_fullscreen';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,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';
		me._fullscreen__img.ggOverSrc=hs;
		el.ggId="fullscreen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='left : 266px;';
		hs+='position : absolute;';
		hs+='top : -19px;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._fullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._fullscreen.onclick=function (e) {
			player.toggleFullscreen();
		}
		me._fullscreen.onmouseover=function (e) {
			me._fullscreen__img.src=me._fullscreen__img.ggOverSrc;
		}
		me._fullscreen.onmouseout=function (e) {
			me._fullscreen__img.src=me._fullscreen__img.ggNormalSrc;
		}
		me._fullscreen.ggUpdatePosition=function (useTransition) {
		}
		me._toolbar.appendChild(me._fullscreen);
		me.divSkin.appendChild(me._toolbar);
		el=me._screentint=document.createElement('div');
		el.ggId="screentint";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.392157);';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0.0239583%;';
		hs+='position : absolute;';
		hs+='top : -0.0462963%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._screentint.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._screentint.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._screentint);
		el=me._image_1=document.createElement('div');
		els=me._image_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1';
		hs=basePath + 'images/image_1.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 47px;';
		hs+='left : 1px;';
		hs+='position : absolute;';
		hs+='top : 2px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_1.onclick=function (e) {
			player.openUrl("https:\/\/www.fashionplus.in.ua\/","_blank");
		}
		me._image_1.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._image_1);
		player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
	};
	this.hotspotProxyClick=function(id, url) {
	}
	this.hotspotProxyDoubleClick=function(id, url) {
	}
	me.hotspotProxyOver=function(id, url) {
	}
	me.hotspotProxyOut=function(id, url) {
	}
	me.callChildLogicBlocksHotspot_p_mouseover = function(){
		if(hotspotTemplates['p']) {
			var i;
			for(i = 0; i < hotspotTemplates['p'].length; i++) {
				if (hotspotTemplates['p'][i]._hotspot_preview3 && hotspotTemplates['p'][i]._hotspot_preview3.logicBlock_visible) {
					hotspotTemplates['p'][i]._hotspot_preview3.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_l_mouseover = function(){
		if(hotspotTemplates['l']) {
			var i;
			for(i = 0; i < hotspotTemplates['l'].length; i++) {
				if (hotspotTemplates['l'][i]._hotspot_preview2 && hotspotTemplates['l'][i]._hotspot_preview2.logicBlock_visible) {
					hotspotTemplates['l'][i]._hotspot_preview2.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_r_mouseover = function(){
		if(hotspotTemplates['r']) {
			var i;
			for(i = 0; i < hotspotTemplates['r'].length; i++) {
				if (hotspotTemplates['r'][i]._hotspot_preview1 && hotspotTemplates['r'][i]._hotspot_preview1.logicBlock_visible) {
					hotspotTemplates['r'][i]._hotspot_preview1.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_air_mouseover = function(){
		if(hotspotTemplates['air']) {
			var i;
			for(i = 0; i < hotspotTemplates['air'].length; i++) {
				if (hotspotTemplates['air'][i]._hotspot_preview0 && hotspotTemplates['air'][i]._hotspot_preview0.logicBlock_visible) {
					hotspotTemplates['air'][i]._hotspot_preview0.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_c_mouseover = function(){
		if(hotspotTemplates['c']) {
			var i;
			for(i = 0; i < hotspotTemplates['c'].length; i++) {
				if (hotspotTemplates['c'][i]._hotspot_preview && hotspotTemplates['c'][i]._hotspot_preview.logicBlock_visible) {
					hotspotTemplates['c'][i]._hotspot_preview.logicBlock_visible();
				}
			}
		}
	}
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		me.ggCurrentTime=new Date().getTime();
		if (me.elementMouseDown['left']) {
			player.changePanLog(1,true);
		}
		if (me.elementMouseDown['right']) {
			player.changePanLog(-1,true);
		}
		if (me.elementMouseDown['up']) {
			player.changeTiltLog(1,true);
		}
		if (me.elementMouseDown['down']) {
			player.changeTiltLog(-1,true);
		}
	};
	player.addListener('timer', me.skinTimerEvent);
	function SkinHotspotClass_p(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._p=document.createElement('div');
		el.ggId="p";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 636px;';
		hs+='position : absolute;';
		hs+='top : 439px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._p.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._p.onclick=function (e) {
			player.openUrl(me.hotspot.url,me.hotspot.target);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._p.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._p.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['p']=true;
			me._hotspot_preview3.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._p.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['p']=false;
			me._hotspot_preview3.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._p.ontouchend=function (e) {
			me.elementMouseOver['p']=false;
			me._hotspot_preview3.logicBlock_visible();
		}
		me._p.ggUpdatePosition=function (useTransition) {
		}
		el=me.__29=document.createElement('div');
		els=me.__29__img=document.createElement('img');
		els.className='ggskin ggskin__29';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 29";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 28px;';
		hs+='left : -15px;';
		hs+='position : absolute;';
		hs+='top : -4px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__29.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__29.onmouseover=function (e) {
			player.stopAutorotate();
		}
		me.__29.ggUpdatePosition=function (useTransition) {
		}
		me._p.appendChild(me.__29);
		el=me._hotspot_preview3=document.createElement('div');
		el.ggId="hotspot_preview";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 103px;';
		hs+='left : -73px;';
		hs+='position : absolute;';
		hs+='top : -128px;';
		hs+='visibility : hidden;';
		hs+='width : 153px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hotspot_preview3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hotspot_preview3.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['p'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hotspot_preview3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hotspot_preview3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hotspot_preview3.style[domTransition]='';
				if (me._hotspot_preview3.ggCurrentLogicStateVisible == 0) {
					me._hotspot_preview3.style.visibility=(Number(me._hotspot_preview3.style.opacity)>0||!me._hotspot_preview3.style.opacity)?'inherit':'hidden';
					me._hotspot_preview3.ggVisible=true;
				}
				else {
					me._hotspot_preview3.style.visibility="hidden";
					me._hotspot_preview3.ggVisible=false;
				}
			}
		}
		me._hotspot_preview3.ggUpdatePosition=function (useTransition) {
		}
		el=me._preview_picture_frame_3=document.createElement('div');
		el.ggId="preview_picture_frame ";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._preview_picture_frame_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._preview_picture_frame_3.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_preview3.appendChild(me._preview_picture_frame_3);
		el=me._preview_nodeimage3=document.createElement('div');
		els=me._preview_nodeimage3__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/preview_nodeimage_" + nodeId + ".png");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;preview_nodeimage3;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Preview NodeImage";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='height : 90px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._preview_nodeimage3.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._preview_nodeimage3.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_preview3.appendChild(me._preview_nodeimage3);
		me._p.appendChild(me._hotspot_preview3);
		me.__div = me._p;
	};
	function SkinHotspotClass_l(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._l=document.createElement('div');
		el.ggId="l";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 448px;';
		hs+='position : absolute;';
		hs+='top : 434px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._l.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._l.onclick=function (e) {
			player.openUrl(me.hotspot.url,me.hotspot.target);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._l.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._l.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['l']=true;
			me._hotspot_preview2.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._l.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['l']=false;
			me._hotspot_preview2.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._l.ontouchend=function (e) {
			me.elementMouseOver['l']=false;
			me._hotspot_preview2.logicBlock_visible();
		}
		me._l.ggUpdatePosition=function (useTransition) {
		}
		el=me._hotspot_preview2=document.createElement('div');
		el.ggId="hotspot_preview";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 103px;';
		hs+='left : -73px;';
		hs+='position : absolute;';
		hs+='top : -128px;';
		hs+='visibility : hidden;';
		hs+='width : 153px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hotspot_preview2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hotspot_preview2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['l'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hotspot_preview2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hotspot_preview2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hotspot_preview2.style[domTransition]='';
				if (me._hotspot_preview2.ggCurrentLogicStateVisible == 0) {
					me._hotspot_preview2.style.visibility=(Number(me._hotspot_preview2.style.opacity)>0||!me._hotspot_preview2.style.opacity)?'inherit':'hidden';
					me._hotspot_preview2.ggVisible=true;
				}
				else {
					me._hotspot_preview2.style.visibility="hidden";
					me._hotspot_preview2.ggVisible=false;
				}
			}
		}
		me._hotspot_preview2.ggUpdatePosition=function (useTransition) {
		}
		el=me._preview_picture_frame_2=document.createElement('div');
		el.ggId="preview_picture_frame ";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._preview_picture_frame_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._preview_picture_frame_2.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_preview2.appendChild(me._preview_picture_frame_2);
		el=me._preview_nodeimage2=document.createElement('div');
		els=me._preview_nodeimage2__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/preview_nodeimage_" + nodeId + ".png");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;preview_nodeimage2;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Preview NodeImage";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='height : 90px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._preview_nodeimage2.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._preview_nodeimage2.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_preview2.appendChild(me._preview_nodeimage2);
		me._l.appendChild(me._hotspot_preview2);
		el=me.__320=document.createElement('div');
		els=me.__320__img=document.createElement('img');
		els.className='ggskin ggskin__320';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 32";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 28px;';
		hs+='left : -5px;';
		hs+='position : absolute;';
		hs+='top : -7px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__320.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__320.onmouseover=function (e) {
			player.stopAutorotate();
		}
		me.__320.ggUpdatePosition=function (useTransition) {
		}
		me._l.appendChild(me.__320);
		me.__div = me._l;
	};
	function SkinHotspotClass_r(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._r=document.createElement('div');
		el.ggId="r";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 818px;';
		hs+='position : absolute;';
		hs+='top : 440px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._r.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._r.onclick=function (e) {
			player.openUrl(me.hotspot.url,me.hotspot.target);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._r.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._r.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['r']=true;
			me._hotspot_preview1.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._r.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['r']=false;
			me._hotspot_preview1.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._r.ontouchend=function (e) {
			me.elementMouseOver['r']=false;
			me._hotspot_preview1.logicBlock_visible();
		}
		me._r.ggUpdatePosition=function (useTransition) {
		}
		el=me.__32=document.createElement('div');
		els=me.__32__img=document.createElement('img');
		els.className='ggskin ggskin__32';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAcCAYAAAATFf3WAAAIcUlEQVRYhb2WWWxc1RnHf+fce2fxeOzMOI6XOI6T2HEgRKFQlkCbBBECBUpbhMoiitoCEoaH9qEqLzxQ9aVS1UpIVYuQKEVFlDQsAqGCkoiExUlsHJI4tmMn3u147PEy45mx5/pupw/XTpzGiVnaftJodKVzzvfT/3zf/zvi+eef5+uE54GrBSjNnb62duDvR8ZjNz3bpV+1xwnGxmSkBIJRhGagKQvpmAjPRsP9ynn0r0UHCAlCeWSDlYOONM5W5Zpe2BBLNoym7BNT6ZITGW1VW96IDznBFSOqoGTCC0Rx9QhSuQjXQioHoRSI/xUgoOFgBkumetY8+NP6kdf2b7+ufpMeiG/KTp55KJvqJ5VpzyWz7plUOtSd9qLdOSPWkw+UnHUiFZ1OpHzcCU'+
			'YQjoNQLlK5gEIA6nwOhfi6Vwz+SUqAIyNUDL7VUO8c/fOuB34JoVJws+A5MJuGfBIzM0EqlWIqlcmNp83EpKkNprXi9pyxqmW2YM0X+XBlhxMoUkJIhJQIIRHK/YaA85QuGq4IUdP+h5fqw2NPbn/oWRAKlAXCAKn5sngKlAOuCfkJzIkRJpNJJqdT9mQ6n5qc0zsyWklTLrr+iLOirtXUwulvDqgAobAJoRlBatp+9+q1Vdpj37r1fgga4LkgBOeLTQi/gJn/CQ2UC+4spIfJpqYZHejk5GiCuYp7fii/Moxa+BO4aNhaGEeECZuJSOG5g7fbomCkeSjBaE8ryIJ5uMVnKB/as8DNg5MDz/RBV20mWn8HcyjmiO/rLd7+/pdsEoVC4EkdJTSE8nA9j6g5XBlNNN8bnu3dHdOyW1YZqrpsfV2oZM09xEpXgjNzhS4V'+
			'F8MrF5RGX8vrtPSNJiZrG57I27jLACoUEkcrQAqBbk1L5qbKV0we3xVLHPlJLMaOykjIqKjbQEXtRiheB1rIl9k1/Xpj0fUuFRJwHDCKMcc6aDrThlVx+3OT0U1DhpW6nM0oPCSOFkFTHoXZ/jXR2Y47ipOffz/gzNy5rrIwXHbTNVTWbUFfud4vfs8CHFAz/jfM19oy4bqgGeBatHz6NmquaF9y/c6/atY0UqgFQIXvOuCh4WohQm6O0rHPvhfMtt0dyPbsXh1hY+3Wayit3Eikoha0ADgmWBl/v5C+Uor/UOyCqy0lBAjQopz5eC99OS8/Uf3wU6YnMISvvu7bhI6HjkARcZLRkr6PGgrz7Q+juVdtCMjgutu2U7p6ExSWA7YP5ubn84r5e1oiuVIgQyB0UKbvi5oEb2GJAqOI3PBpjp/rxC668bmporo+3cqer0'+
			'/d0qPojsmKfM9VK8cPPSFmup+MGkRry8qo/fatFJRv9AGUBc40KG+RVSwV82BCByOKk+pnYnyY8uo60AvAdeb3KpA6uNDeegBvVjafq7n7j9j5i5pHL8u13VI2dfQxL9P5eHEYvaaung1X30Bw5boLVnD+mrhyXSnPX6sXgpIkWg9wtPkwYwLrnhvnAmu23AZ25oJ6WgHJrkbOJtNz09UP/srUCjGcLGIx4DUDf3t1DGq3rK1h4/W7CcTK/Q6004uAlpnoC3BSA1nEzLnTnG7bT9twejwVv+vJAnNg23Bb47Nrrr7ZX+M5fmM4OU4cO4QIVL8xXrj1M+nMXgQHIGfW7vqTaeLJYCGBkmqwp31Xv+I1XkQG0gOtAESIs83v8MHBvbQl1J7Ehme2jtQ88O5M8dZ3hvI4zvQQiIC/Xkbo/nw/ozaZifI7f28butLFpc8x'+
			'2R7c9pdYtLipq7sNd7LbL+rlvGsxnPJAFkMmydF3X+Bw16nxsaI7fty36dcPzYSrE6G5UfLxumM24abB1hZQOhBEZc5x8mwHUta8kSzc1G5YM0vmlDPhMitf+Z1XZg3obD0G0gDty8IpCMTJDnfx4Qev0Gtqn0xUPr5jpHz3XqEcDDePrmxyWsyZKbj6rc6eXv+VE4jSdayRGYu5RPV9v5HWzCUT8TzgnGOTCGx+u0QrOHui+xTW5CAQ9kfPcsoFYoz3tvDhob0ktarX+qp+cddUtP604eR8VxUAAt3Okana8XLaZWp6sBNyGc4MdCHC616eDq0e0YS7pHoA2q7v3kzGKMlHcGzD7bk33T9AzZZt/phasJSL2BY6NcZU30n2HX0fS65+sa/6mcdNLeQY7qWFLvDIG/G5FROnNhRZg9fbHnQN9zO+7tH7TVmYkXiXLS'+
			'gpBejODCOl219cIVcd7PXSdHz8LwjEFwEtUg4FRozcudMcaHwPdza2p3/tUw02HgGVRyyRSiDAtRivue+3PYmU23r8IMFQ5Z6cXjYslDM/wy4DCAJDuGRMj9NVj/6syiPZ3PMFA8c+glCJr+ACpFKgRXCnR2j85E1cFflkYOPTj9hCYGD7z+ulpBAgPYdMQc1wvqT+ZSsKU/Gb9phaCInHlRpSLpxgKIcxUT4wVNNwb2mY6YMthxhpOwrBuG83ypsfWZKjB95kco6hROVjj+QDxZ7m2X6SK/SWEAoPwUj85pcMJ34wFapuRtmIy4sHgLZz584LH8pmIlg9YoSrGkuzX/yoLdEdCs1arKzZ7AMahQyfOsTx0bPMFu9uGC695XDQyfpXuEzjCyGQuJgylhgtvO512yhMS8+5pF4vo+D8AQIC1hQ9Rv2n/dVP7azQQx2f'+
			'9x+mad+rqPws2DmajjUSnIt+NBrf9g/Dzi7q1uVDzL9eLBG2lVKXtZbFcZGCfjkrdGWRlvGx2ZU3/LPczhSNjnZtTQ2e1JK93aTMnDVZetfTU9G63oBn8qXpzp8PF7p2+b1LzDJ/igSFxYRTMHF81aMNuZqf70iLkvd6c6OE3XDHaPyG/QF3aef/b8cVnvyCABaO7TAU3nRkcHX9DzbTuSXhBcddDwyh/i+A/waZ1fFgvdic1wAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 32";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 28px;';
		hs+='left : -34px;';
		hs+='position : absolute;';
		hs+='top : -5px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__32.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__32.onmouseover=function (e) {
			player.stopAutorotate();
		}
		me.__32.ggUpdatePosition=function (useTransition) {
		}
		me._r.appendChild(me.__32);
		el=me._hotspot_preview1=document.createElement('div');
		el.ggId="hotspot_preview";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 103px;';
		hs+='left : -73px;';
		hs+='position : absolute;';
		hs+='top : -128px;';
		hs+='visibility : hidden;';
		hs+='width : 153px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hotspot_preview1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hotspot_preview1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['r'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hotspot_preview1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hotspot_preview1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hotspot_preview1.style[domTransition]='';
				if (me._hotspot_preview1.ggCurrentLogicStateVisible == 0) {
					me._hotspot_preview1.style.visibility=(Number(me._hotspot_preview1.style.opacity)>0||!me._hotspot_preview1.style.opacity)?'inherit':'hidden';
					me._hotspot_preview1.ggVisible=true;
				}
				else {
					me._hotspot_preview1.style.visibility="hidden";
					me._hotspot_preview1.ggVisible=false;
				}
			}
		}
		me._hotspot_preview1.ggUpdatePosition=function (useTransition) {
		}
		el=me._preview_picture_frame_1=document.createElement('div');
		el.ggId="preview_picture_frame ";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._preview_picture_frame_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._preview_picture_frame_1.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_preview1.appendChild(me._preview_picture_frame_1);
		el=me._preview_nodeimage1=document.createElement('div');
		els=me._preview_nodeimage1__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/preview_nodeimage_" + nodeId + ".png");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;preview_nodeimage1;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Preview NodeImage";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='height : 90px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._preview_nodeimage1.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._preview_nodeimage1.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_preview1.appendChild(me._preview_nodeimage1);
		me._r.appendChild(me._hotspot_preview1);
		me.__div = me._r;
	};
	function SkinHotspotClass_air(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._air=document.createElement('div');
		el.ggId="air";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 562px;';
		hs+='position : absolute;';
		hs+='top : 211px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._air.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._air.onclick=function (e) {
			player.openUrl(me.hotspot.url,me.hotspot.target);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._air.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._air.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['air']=true;
			me._hotspot_preview0.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._air.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['air']=false;
			me._hotspot_preview0.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._air.ontouchend=function (e) {
			me.elementMouseOver['air']=false;
			me._hotspot_preview0.logicBlock_visible();
		}
		me._air.ggUpdatePosition=function (useTransition) {
		}
		el=me._hsimage0=document.createElement('div');
		els=me._hsimage0__img=document.createElement('img');
		els.className='ggskin ggskin_hsimage0';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="hsimage";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 50px;';
		hs+='left : -23px;';
		hs+='position : absolute;';
		hs+='top : -24px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hsimage0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hsimage0.ggUpdatePosition=function (useTransition) {
		}
		me._air.appendChild(me._hsimage0);
		el=me._hotspot_preview0=document.createElement('div');
		el.ggId="hotspot_preview";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 103px;';
		hs+='left : -76px;';
		hs+='position : absolute;';
		hs+='top : -128px;';
		hs+='visibility : hidden;';
		hs+='width : 153px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hotspot_preview0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hotspot_preview0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['air'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hotspot_preview0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hotspot_preview0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hotspot_preview0.style[domTransition]='';
				if (me._hotspot_preview0.ggCurrentLogicStateVisible == 0) {
					me._hotspot_preview0.style.visibility=(Number(me._hotspot_preview0.style.opacity)>0||!me._hotspot_preview0.style.opacity)?'inherit':'hidden';
					me._hotspot_preview0.ggVisible=true;
				}
				else {
					me._hotspot_preview0.style.visibility="hidden";
					me._hotspot_preview0.ggVisible=false;
				}
			}
		}
		me._hotspot_preview0.ggUpdatePosition=function (useTransition) {
		}
		el=me._preview_picture_frame_0=document.createElement('div');
		el.ggId="preview_picture_frame ";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 5px;';
		hs+='border-radius : 5px;';
		hs+='background : rgba(255,255,255,0.784314);';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 99px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 149px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._preview_picture_frame_0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._preview_picture_frame_0.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_preview0.appendChild(me._preview_picture_frame_0);
		el=me._preview_nodeimage0=document.createElement('div');
		els=me._preview_nodeimage0__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/preview_nodeimage_" + nodeId + ".png");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;preview_nodeimage0;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Preview NodeImage";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='height : 90px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._preview_nodeimage0.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._preview_nodeimage0.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_preview0.appendChild(me._preview_nodeimage0);
		me._air.appendChild(me._hotspot_preview0);
		me.__div = me._air;
	};
	function SkinHotspotClass_c(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._c=document.createElement('div');
		el.ggId="c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 821px;';
		hs+='position : absolute;';
		hs+='top : 212px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._c.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._c.onclick=function (e) {
			player.openUrl(me.hotspot.url,me.hotspot.target);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._c.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._c.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['c']=true;
			me._hotspot_preview.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._c.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['c']=false;
			me._hotspot_preview.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._c.ontouchend=function (e) {
			me.elementMouseOver['c']=false;
			me._hotspot_preview.logicBlock_visible();
		}
		me._c.ggUpdatePosition=function (useTransition) {
		}
		el=me._hsimage=document.createElement('div');
		els=me._hsimage__img=document.createElement('img');
		els.className='ggskin ggskin_hsimage';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="hsimage";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 38px;';
		hs+='left : -15px;';
		hs+='position : absolute;';
		hs+='top : -24px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hsimage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hsimage.ggUpdatePosition=function (useTransition) {
		}
		me._c.appendChild(me._hsimage);
		el=me._hotspot_preview=document.createElement('div');
		el.ggId="hotspot_preview";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 103px;';
		hs+='left : -76px;';
		hs+='position : absolute;';
		hs+='top : -128px;';
		hs+='visibility : hidden;';
		hs+='width : 153px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hotspot_preview.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hotspot_preview.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['c'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hotspot_preview.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hotspot_preview.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hotspot_preview.style[domTransition]='';
				if (me._hotspot_preview.ggCurrentLogicStateVisible == 0) {
					me._hotspot_preview.style.visibility=(Number(me._hotspot_preview.style.opacity)>0||!me._hotspot_preview.style.opacity)?'inherit':'hidden';
					me._hotspot_preview.ggVisible=true;
				}
				else {
					me._hotspot_preview.style.visibility="hidden";
					me._hotspot_preview.ggVisible=false;
				}
			}
		}
		me._hotspot_preview.ggUpdatePosition=function (useTransition) {
		}
		el=me._preview_picture_frame_=document.createElement('div');
		el.ggId="preview_picture_frame ";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 5px;';
		hs+='border-radius : 5px;';
		hs+='background : rgba(255,255,255,0.784314);';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 99px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 149px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._preview_picture_frame_.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._preview_picture_frame_.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_preview.appendChild(me._preview_picture_frame_);
		el=me._preview_nodeimage=document.createElement('div');
		els=me._preview_nodeimage__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/preview_nodeimage_" + nodeId + ".png");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;preview_nodeimage;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Preview NodeImage";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='height : 90px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._preview_nodeimage.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._preview_nodeimage.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_preview.appendChild(me._preview_nodeimage);
		me._c.appendChild(me._hotspot_preview);
		me.__div = me._c;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
		if (hotspot.skinid=='p') {
			hotspot.skinid = 'p';
			hsinst = new SkinHotspotClass_p(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_p_mouseover();;
		} else
		if (hotspot.skinid=='l') {
			hotspot.skinid = 'l';
			hsinst = new SkinHotspotClass_l(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_l_mouseover();;
		} else
		if (hotspot.skinid=='r') {
			hotspot.skinid = 'r';
			hsinst = new SkinHotspotClass_r(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_r_mouseover();;
		} else
		if (hotspot.skinid=='air') {
			hotspot.skinid = 'air';
			hsinst = new SkinHotspotClass_air(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_air_mouseover();;
		} else
		{
			hotspot.skinid = 'c';
			hsinst = new SkinHotspotClass_c(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_c_mouseover();;
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		if(hotspotTemplates['p']) {
			var i;
			for(i = 0; i < hotspotTemplates['p'].length; i++) {
				hotspotTemplates['p'][i] = null;
			}
		}
		if(hotspotTemplates['l']) {
			var i;
			for(i = 0; i < hotspotTemplates['l'].length; i++) {
				hotspotTemplates['l'][i] = null;
			}
		}
		if(hotspotTemplates['r']) {
			var i;
			for(i = 0; i < hotspotTemplates['r'].length; i++) {
				hotspotTemplates['r'][i] = null;
			}
		}
		if(hotspotTemplates['air']) {
			var i;
			for(i = 0; i < hotspotTemplates['air'].length; i++) {
				hotspotTemplates['air'][i] = null;
			}
		}
		if(hotspotTemplates['c']) {
			var i;
			for(i = 0; i < hotspotTemplates['c'].length; i++) {
				hotspotTemplates['c'][i] = null;
			}
		}
		hotspotTemplates = [];
	}
	me.addSkin();
	player.addListener('mouseover', function(args) { me.callChildLogicBlocksHotspot_p_mouseover();me.callChildLogicBlocksHotspot_l_mouseover();me.callChildLogicBlocksHotspot_r_mouseover();me.callChildLogicBlocksHotspot_air_mouseover();me.callChildLogicBlocksHotspot_c_mouseover(); });
	player.addListener('hotspotsremoved', function(args) { me.removeSkinHotspots(); });
	me.skinTimerEvent();
};