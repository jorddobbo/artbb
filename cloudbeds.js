//<script>

//<script>
    //! moment.js
//! version : 2.10.6
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
!function(a,b){"object"==typeof exports&&"undefined"!=typeof module?module.exports=b():"function"==typeof define&&define.amd?define(b):a.moment=b()}(this,function(){"use strict";function a(){return Hc.apply(null,arguments)}function b(a){Hc=a}function c(a){return"[object Array]"===Object.prototype.toString.call(a)}function d(a){return a instanceof Date||"[object Date]"===Object.prototype.toString.call(a)}function e(a,b){var c,d=[];for(c=0;c<a.length;++c)d.push(b(a[c],c));return d}function f(a,b){return Object.prototype.hasOwnProperty.call(a,b)}function g(a,b){for(var c in b)f(b,c)&&(a[c]=b[c]);return f(b,"toString")&&(a.toString=b.toString),f(b,"valueOf")&&(a.valueOf=b.valueOf),a}function h(a,b,c,d){return Ca(a,b,c,d,!0).utc()}function i(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1}}function j(a){return null==a._pf&&(a._pf=i()),a._pf}function k(a){if(null==a._isValid){var b=j(a);a._isValid=!(isNaN(a._d.getTime())||!(b.overflow<0)||b.empty||b.invalidMonth||b.invalidWeekday||b.nullInput||b.invalidFormat||b.userInvalidated),a._strict&&(a._isValid=a._isValid&&0===b.charsLeftOver&&0===b.unusedTokens.length&&void 0===b.bigHour)}return a._isValid}function l(a){var b=h(NaN);return null!=a?g(j(b),a):j(b).userInvalidated=!0,b}function m(a,b){var c,d,e;if("undefined"!=typeof b._isAMomentObject&&(a._isAMomentObject=b._isAMomentObject),"undefined"!=typeof b._i&&(a._i=b._i),"undefined"!=typeof b._f&&(a._f=b._f),"undefined"!=typeof b._l&&(a._l=b._l),"undefined"!=typeof b._strict&&(a._strict=b._strict),"undefined"!=typeof b._tzm&&(a._tzm=b._tzm),"undefined"!=typeof b._isUTC&&(a._isUTC=b._isUTC),"undefined"!=typeof b._offset&&(a._offset=b._offset),"undefined"!=typeof b._pf&&(a._pf=j(b)),"undefined"!=typeof b._locale&&(a._locale=b._locale),Jc.length>0)for(c in Jc)d=Jc[c],e=b[d],"undefined"!=typeof e&&(a[d]=e);return a}function n(b){m(this,b),this._d=new Date(null!=b._d?b._d.getTime():NaN),Kc===!1&&(Kc=!0,a.updateOffset(this),Kc=!1)}function o(a){return a instanceof n||null!=a&&null!=a._isAMomentObject}function p(a){return 0>a?Math.ceil(a):Math.floor(a)}function q(a){var b=+a,c=0;return 0!==b&&isFinite(b)&&(c=p(b)),c}function r(a,b,c){var d,e=Math.min(a.length,b.length),f=Math.abs(a.length-b.length),g=0;for(d=0;e>d;d++)(c&&a[d]!==b[d]||!c&&q(a[d])!==q(b[d]))&&g++;return g+f}function s(){}function t(a){return a?a.toLowerCase().replace("_","-"):a}function u(a){for(var b,c,d,e,f=0;f<a.length;){for(e=t(a[f]).split("-"),b=e.length,c=t(a[f+1]),c=c?c.split("-"):null;b>0;){if(d=v(e.slice(0,b).join("-")))return d;if(c&&c.length>=b&&r(e,c,!0)>=b-1)break;b--}f++}return null}function v(a){var b=null;if(!Lc[a]&&"undefined"!=typeof module&&module&&module.exports)try{b=Ic._abbr,require("./locale/"+a),w(b)}catch(c){}return Lc[a]}function w(a,b){var c;return a&&(c="undefined"==typeof b?y(a):x(a,b),c&&(Ic=c)),Ic._abbr}function x(a,b){return null!==b?(b.abbr=a,Lc[a]=Lc[a]||new s,Lc[a].set(b),w(a),Lc[a]):(delete Lc[a],null)}function y(a){var b;if(a&&a._locale&&a._locale._abbr&&(a=a._locale._abbr),!a)return Ic;if(!c(a)){if(b=v(a))return b;a=[a]}return u(a)}function z(a,b){var c=a.toLowerCase();Mc[c]=Mc[c+"s"]=Mc[b]=a}function A(a){return"string"==typeof a?Mc[a]||Mc[a.toLowerCase()]:void 0}function B(a){var b,c,d={};for(c in a)f(a,c)&&(b=A(c),b&&(d[b]=a[c]));return d}function C(b,c){return function(d){return null!=d?(E(this,b,d),a.updateOffset(this,c),this):D(this,b)}}function D(a,b){return a._d["get"+(a._isUTC?"UTC":"")+b]()}function E(a,b,c){return a._d["set"+(a._isUTC?"UTC":"")+b](c)}function F(a,b){var c;if("object"==typeof a)for(c in a)this.set(c,a[c]);else if(a=A(a),"function"==typeof this[a])return this[a](b);return this}function G(a,b,c){var d=""+Math.abs(a),e=b-d.length,f=a>=0;return(f?c?"+":"":"-")+Math.pow(10,Math.max(0,e)).toString().substr(1)+d}function H(a,b,c,d){var e=d;"string"==typeof d&&(e=function(){return this[d]()}),a&&(Qc[a]=e),b&&(Qc[b[0]]=function(){return G(e.apply(this,arguments),b[1],b[2])}),c&&(Qc[c]=function(){return this.localeData().ordinal(e.apply(this,arguments),a)})}function I(a){return a.match(/\[[\s\S]/)?a.replace(/^\[|\]$/g,""):a.replace(/\\/g,"")}function J(a){var b,c,d=a.match(Nc);for(b=0,c=d.length;c>b;b++)Qc[d[b]]?d[b]=Qc[d[b]]:d[b]=I(d[b]);return function(e){var f="";for(b=0;c>b;b++)f+=d[b]instanceof Function?d[b].call(e,a):d[b];return f}}function K(a,b){return a.isValid()?(b=L(b,a.localeData()),Pc[b]=Pc[b]||J(b),Pc[b](a)):a.localeData().invalidDate()}function L(a,b){function c(a){return b.longDateFormat(a)||a}var d=5;for(Oc.lastIndex=0;d>=0&&Oc.test(a);)a=a.replace(Oc,c),Oc.lastIndex=0,d-=1;return a}function M(a){return"function"==typeof a&&"[object Function]"===Object.prototype.toString.call(a)}function N(a,b,c){dd[a]=M(b)?b:function(a){return a&&c?c:b}}function O(a,b){return f(dd,a)?dd[a](b._strict,b._locale):new RegExp(P(a))}function P(a){return a.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(a,b,c,d,e){return b||c||d||e}).replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function Q(a,b){var c,d=b;for("string"==typeof a&&(a=[a]),"number"==typeof b&&(d=function(a,c){c[b]=q(a)}),c=0;c<a.length;c++)ed[a[c]]=d}function R(a,b){Q(a,function(a,c,d,e){d._w=d._w||{},b(a,d._w,d,e)})}function S(a,b,c){null!=b&&f(ed,a)&&ed[a](b,c._a,c,a)}function T(a,b){return new Date(Date.UTC(a,b+1,0)).getUTCDate()}function U(a){return this._months[a.month()]}function V(a){return this._monthsShort[a.month()]}function W(a,b,c){var d,e,f;for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),d=0;12>d;d++){if(e=h([2e3,d]),c&&!this._longMonthsParse[d]&&(this._longMonthsParse[d]=new RegExp("^"+this.months(e,"").replace(".","")+"$","i"),this._shortMonthsParse[d]=new RegExp("^"+this.monthsShort(e,"").replace(".","")+"$","i")),c||this._monthsParse[d]||(f="^"+this.months(e,"")+"|^"+this.monthsShort(e,""),this._monthsParse[d]=new RegExp(f.replace(".",""),"i")),c&&"MMMM"===b&&this._longMonthsParse[d].test(a))return d;if(c&&"MMM"===b&&this._shortMonthsParse[d].test(a))return d;if(!c&&this._monthsParse[d].test(a))return d}}function X(a,b){var c;return"string"==typeof b&&(b=a.localeData().monthsParse(b),"number"!=typeof b)?a:(c=Math.min(a.date(),T(a.year(),b)),a._d["set"+(a._isUTC?"UTC":"")+"Month"](b,c),a)}function Y(b){return null!=b?(X(this,b),a.updateOffset(this,!0),this):D(this,"Month")}function Z(){return T(this.year(),this.month())}function $(a){var b,c=a._a;return c&&-2===j(a).overflow&&(b=c[gd]<0||c[gd]>11?gd:c[hd]<1||c[hd]>T(c[fd],c[gd])?hd:c[id]<0||c[id]>24||24===c[id]&&(0!==c[jd]||0!==c[kd]||0!==c[ld])?id:c[jd]<0||c[jd]>59?jd:c[kd]<0||c[kd]>59?kd:c[ld]<0||c[ld]>999?ld:-1,j(a)._overflowDayOfYear&&(fd>b||b>hd)&&(b=hd),j(a).overflow=b),a}function _(b){a.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+b)}function aa(a,b){var c=!0;return g(function(){return c&&(_(a+"\n"+(new Error).stack),c=!1),b.apply(this,arguments)},b)}function ba(a,b){od[a]||(_(b),od[a]=!0)}function ca(a){var b,c,d=a._i,e=pd.exec(d);if(e){for(j(a).iso=!0,b=0,c=qd.length;c>b;b++)if(qd[b][1].exec(d)){a._f=qd[b][0];break}for(b=0,c=rd.length;c>b;b++)if(rd[b][1].exec(d)){a._f+=(e[6]||" ")+rd[b][0];break}d.match(ad)&&(a._f+="Z"),va(a)}else a._isValid=!1}function da(b){var c=sd.exec(b._i);return null!==c?void(b._d=new Date(+c[1])):(ca(b),void(b._isValid===!1&&(delete b._isValid,a.createFromInputFallback(b))))}function ea(a,b,c,d,e,f,g){var h=new Date(a,b,c,d,e,f,g);return 1970>a&&h.setFullYear(a),h}function fa(a){var b=new Date(Date.UTC.apply(null,arguments));return 1970>a&&b.setUTCFullYear(a),b}function ga(a){return ha(a)?366:365}function ha(a){return a%4===0&&a%100!==0||a%400===0}function ia(){return ha(this.year())}function ja(a,b,c){var d,e=c-b,f=c-a.day();return f>e&&(f-=7),e-7>f&&(f+=7),d=Da(a).add(f,"d"),{week:Math.ceil(d.dayOfYear()/7),year:d.year()}}function ka(a){return ja(a,this._week.dow,this._week.doy).week}function la(){return this._week.dow}function ma(){return this._week.doy}function na(a){var b=this.localeData().week(this);return null==a?b:this.add(7*(a-b),"d")}function oa(a){var b=ja(this,1,4).week;return null==a?b:this.add(7*(a-b),"d")}function pa(a,b,c,d,e){var f,g=6+e-d,h=fa(a,0,1+g),i=h.getUTCDay();return e>i&&(i+=7),c=null!=c?1*c:e,f=1+g+7*(b-1)-i+c,{year:f>0?a:a-1,dayOfYear:f>0?f:ga(a-1)+f}}function qa(a){var b=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==a?b:this.add(a-b,"d")}function ra(a,b,c){return null!=a?a:null!=b?b:c}function sa(a){var b=new Date;return a._useUTC?[b.getUTCFullYear(),b.getUTCMonth(),b.getUTCDate()]:[b.getFullYear(),b.getMonth(),b.getDate()]}function ta(a){var b,c,d,e,f=[];if(!a._d){for(d=sa(a),a._w&&null==a._a[hd]&&null==a._a[gd]&&ua(a),a._dayOfYear&&(e=ra(a._a[fd],d[fd]),a._dayOfYear>ga(e)&&(j(a)._overflowDayOfYear=!0),c=fa(e,0,a._dayOfYear),a._a[gd]=c.getUTCMonth(),a._a[hd]=c.getUTCDate()),b=0;3>b&&null==a._a[b];++b)a._a[b]=f[b]=d[b];for(;7>b;b++)a._a[b]=f[b]=null==a._a[b]?2===b?1:0:a._a[b];24===a._a[id]&&0===a._a[jd]&&0===a._a[kd]&&0===a._a[ld]&&(a._nextDay=!0,a._a[id]=0),a._d=(a._useUTC?fa:ea).apply(null,f),null!=a._tzm&&a._d.setUTCMinutes(a._d.getUTCMinutes()-a._tzm),a._nextDay&&(a._a[id]=24)}}function ua(a){var b,c,d,e,f,g,h;b=a._w,null!=b.GG||null!=b.W||null!=b.E?(f=1,g=4,c=ra(b.GG,a._a[fd],ja(Da(),1,4).year),d=ra(b.W,1),e=ra(b.E,1)):(f=a._locale._week.dow,g=a._locale._week.doy,c=ra(b.gg,a._a[fd],ja(Da(),f,g).year),d=ra(b.w,1),null!=b.d?(e=b.d,f>e&&++d):e=null!=b.e?b.e+f:f),h=pa(c,d,e,g,f),a._a[fd]=h.year,a._dayOfYear=h.dayOfYear}function va(b){if(b._f===a.ISO_8601)return void ca(b);b._a=[],j(b).empty=!0;var c,d,e,f,g,h=""+b._i,i=h.length,k=0;for(e=L(b._f,b._locale).match(Nc)||[],c=0;c<e.length;c++)f=e[c],d=(h.match(O(f,b))||[])[0],d&&(g=h.substr(0,h.indexOf(d)),g.length>0&&j(b).unusedInput.push(g),h=h.slice(h.indexOf(d)+d.length),k+=d.length),Qc[f]?(d?j(b).empty=!1:j(b).unusedTokens.push(f),S(f,d,b)):b._strict&&!d&&j(b).unusedTokens.push(f);j(b).charsLeftOver=i-k,h.length>0&&j(b).unusedInput.push(h),j(b).bigHour===!0&&b._a[id]<=12&&b._a[id]>0&&(j(b).bigHour=void 0),b._a[id]=wa(b._locale,b._a[id],b._meridiem),ta(b),$(b)}function wa(a,b,c){var d;return null==c?b:null!=a.meridiemHour?a.meridiemHour(b,c):null!=a.isPM?(d=a.isPM(c),d&&12>b&&(b+=12),d||12!==b||(b=0),b):b}function xa(a){var b,c,d,e,f;if(0===a._f.length)return j(a).invalidFormat=!0,void(a._d=new Date(NaN));for(e=0;e<a._f.length;e++)f=0,b=m({},a),null!=a._useUTC&&(b._useUTC=a._useUTC),b._f=a._f[e],va(b),k(b)&&(f+=j(b).charsLeftOver,f+=10*j(b).unusedTokens.length,j(b).score=f,(null==d||d>f)&&(d=f,c=b));g(a,c||b)}function ya(a){if(!a._d){var b=B(a._i);a._a=[b.year,b.month,b.day||b.date,b.hour,b.minute,b.second,b.millisecond],ta(a)}}function za(a){var b=new n($(Aa(a)));return b._nextDay&&(b.add(1,"d"),b._nextDay=void 0),b}function Aa(a){var b=a._i,e=a._f;return a._locale=a._locale||y(a._l),null===b||void 0===e&&""===b?l({nullInput:!0}):("string"==typeof b&&(a._i=b=a._locale.preparse(b)),o(b)?new n($(b)):(c(e)?xa(a):e?va(a):d(b)?a._d=b:Ba(a),a))}function Ba(b){var f=b._i;void 0===f?b._d=new Date:d(f)?b._d=new Date(+f):"string"==typeof f?da(b):c(f)?(b._a=e(f.slice(0),function(a){return parseInt(a,10)}),ta(b)):"object"==typeof f?ya(b):"number"==typeof f?b._d=new Date(f):a.createFromInputFallback(b)}function Ca(a,b,c,d,e){var f={};return"boolean"==typeof c&&(d=c,c=void 0),f._isAMomentObject=!0,f._useUTC=f._isUTC=e,f._l=c,f._i=a,f._f=b,f._strict=d,za(f)}function Da(a,b,c,d){return Ca(a,b,c,d,!1)}function Ea(a,b){var d,e;if(1===b.length&&c(b[0])&&(b=b[0]),!b.length)return Da();for(d=b[0],e=1;e<b.length;++e)(!b[e].isValid()||b[e][a](d))&&(d=b[e]);return d}function Fa(){var a=[].slice.call(arguments,0);return Ea("isBefore",a)}function Ga(){var a=[].slice.call(arguments,0);return Ea("isAfter",a)}function Ha(a){var b=B(a),c=b.year||0,d=b.quarter||0,e=b.month||0,f=b.week||0,g=b.day||0,h=b.hour||0,i=b.minute||0,j=b.second||0,k=b.millisecond||0;this._milliseconds=+k+1e3*j+6e4*i+36e5*h,this._days=+g+7*f,this._months=+e+3*d+12*c,this._data={},this._locale=y(),this._bubble()}function Ia(a){return a instanceof Ha}function Ja(a,b){H(a,0,0,function(){var a=this.utcOffset(),c="+";return 0>a&&(a=-a,c="-"),c+G(~~(a/60),2)+b+G(~~a%60,2)})}function Ka(a){var b=(a||"").match(ad)||[],c=b[b.length-1]||[],d=(c+"").match(xd)||["-",0,0],e=+(60*d[1])+q(d[2]);return"+"===d[0]?e:-e}function La(b,c){var e,f;return c._isUTC?(e=c.clone(),f=(o(b)||d(b)?+b:+Da(b))-+e,e._d.setTime(+e._d+f),a.updateOffset(e,!1),e):Da(b).local()}function Ma(a){return 15*-Math.round(a._d.getTimezoneOffset()/15)}function Na(b,c){var d,e=this._offset||0;return null!=b?("string"==typeof b&&(b=Ka(b)),Math.abs(b)<16&&(b=60*b),!this._isUTC&&c&&(d=Ma(this)),this._offset=b,this._isUTC=!0,null!=d&&this.add(d,"m"),e!==b&&(!c||this._changeInProgress?bb(this,Ya(b-e,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,a.updateOffset(this,!0),this._changeInProgress=null)),this):this._isUTC?e:Ma(this)}function Oa(a,b){return null!=a?("string"!=typeof a&&(a=-a),this.utcOffset(a,b),this):-this.utcOffset()}function Pa(a){return this.utcOffset(0,a)}function Qa(a){return this._isUTC&&(this.utcOffset(0,a),this._isUTC=!1,a&&this.subtract(Ma(this),"m")),this}function Ra(){return this._tzm?this.utcOffset(this._tzm):"string"==typeof this._i&&this.utcOffset(Ka(this._i)),this}function Sa(a){return a=a?Da(a).utcOffset():0,(this.utcOffset()-a)%60===0}function Ta(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function Ua(){if("undefined"!=typeof this._isDSTShifted)return this._isDSTShifted;var a={};if(m(a,this),a=Aa(a),a._a){var b=a._isUTC?h(a._a):Da(a._a);this._isDSTShifted=this.isValid()&&r(a._a,b.toArray())>0}else this._isDSTShifted=!1;return this._isDSTShifted}function Va(){return!this._isUTC}function Wa(){return this._isUTC}function Xa(){return this._isUTC&&0===this._offset}function Ya(a,b){var c,d,e,g=a,h=null;return Ia(a)?g={ms:a._milliseconds,d:a._days,M:a._months}:"number"==typeof a?(g={},b?g[b]=a:g.milliseconds=a):(h=yd.exec(a))?(c="-"===h[1]?-1:1,g={y:0,d:q(h[hd])*c,h:q(h[id])*c,m:q(h[jd])*c,s:q(h[kd])*c,ms:q(h[ld])*c}):(h=zd.exec(a))?(c="-"===h[1]?-1:1,g={y:Za(h[2],c),M:Za(h[3],c),d:Za(h[4],c),h:Za(h[5],c),m:Za(h[6],c),s:Za(h[7],c),w:Za(h[8],c)}):null==g?g={}:"object"==typeof g&&("from"in g||"to"in g)&&(e=_a(Da(g.from),Da(g.to)),g={},g.ms=e.milliseconds,g.M=e.months),d=new Ha(g),Ia(a)&&f(a,"_locale")&&(d._locale=a._locale),d}function Za(a,b){var c=a&&parseFloat(a.replace(",","."));return(isNaN(c)?0:c)*b}function $a(a,b){var c={milliseconds:0,months:0};return c.months=b.month()-a.month()+12*(b.year()-a.year()),a.clone().add(c.months,"M").isAfter(b)&&--c.months,c.milliseconds=+b-+a.clone().add(c.months,"M"),c}function _a(a,b){var c;return b=La(b,a),a.isBefore(b)?c=$a(a,b):(c=$a(b,a),c.milliseconds=-c.milliseconds,c.months=-c.months),c}function ab(a,b){return function(c,d){var e,f;return null===d||isNaN(+d)||(ba(b,"moment()."+b+"(period, number) is deprecated. Please use moment()."+b+"(number, period)."),f=c,c=d,d=f),c="string"==typeof c?+c:c,e=Ya(c,d),bb(this,e,a),this}}function bb(b,c,d,e){var f=c._milliseconds,g=c._days,h=c._months;e=null==e?!0:e,f&&b._d.setTime(+b._d+f*d),g&&E(b,"Date",D(b,"Date")+g*d),h&&X(b,D(b,"Month")+h*d),e&&a.updateOffset(b,g||h)}function cb(a,b){var c=a||Da(),d=La(c,this).startOf("day"),e=this.diff(d,"days",!0),f=-6>e?"sameElse":-1>e?"lastWeek":0>e?"lastDay":1>e?"sameDay":2>e?"nextDay":7>e?"nextWeek":"sameElse";return this.format(b&&b[f]||this.localeData().calendar(f,this,Da(c)))}function db(){return new n(this)}function eb(a,b){var c;return b=A("undefined"!=typeof b?b:"millisecond"),"millisecond"===b?(a=o(a)?a:Da(a),+this>+a):(c=o(a)?+a:+Da(a),c<+this.clone().startOf(b))}function fb(a,b){var c;return b=A("undefined"!=typeof b?b:"millisecond"),"millisecond"===b?(a=o(a)?a:Da(a),+a>+this):(c=o(a)?+a:+Da(a),+this.clone().endOf(b)<c)}function gb(a,b,c){return this.isAfter(a,c)&&this.isBefore(b,c)}function hb(a,b){var c;return b=A(b||"millisecond"),"millisecond"===b?(a=o(a)?a:Da(a),+this===+a):(c=+Da(a),+this.clone().startOf(b)<=c&&c<=+this.clone().endOf(b))}function ib(a,b,c){var d,e,f=La(a,this),g=6e4*(f.utcOffset()-this.utcOffset());return b=A(b),"year"===b||"month"===b||"quarter"===b?(e=jb(this,f),"quarter"===b?e/=3:"year"===b&&(e/=12)):(d=this-f,e="second"===b?d/1e3:"minute"===b?d/6e4:"hour"===b?d/36e5:"day"===b?(d-g)/864e5:"week"===b?(d-g)/6048e5:d),c?e:p(e)}function jb(a,b){var c,d,e=12*(b.year()-a.year())+(b.month()-a.month()),f=a.clone().add(e,"months");return 0>b-f?(c=a.clone().add(e-1,"months"),d=(b-f)/(f-c)):(c=a.clone().add(e+1,"months"),d=(b-f)/(c-f)),-(e+d)}function kb(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function lb(){var a=this.clone().utc();return 0<a.year()&&a.year()<=9999?"function"==typeof Date.prototype.toISOString?this.toDate().toISOString():K(a,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):K(a,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")}function mb(b){var c=K(this,b||a.defaultFormat);return this.localeData().postformat(c)}function nb(a,b){return this.isValid()?Ya({to:this,from:a}).locale(this.locale()).humanize(!b):this.localeData().invalidDate()}function ob(a){return this.from(Da(),a)}function pb(a,b){return this.isValid()?Ya({from:this,to:a}).locale(this.locale()).humanize(!b):this.localeData().invalidDate()}function qb(a){return this.to(Da(),a)}function rb(a){var b;return void 0===a?this._locale._abbr:(b=y(a),null!=b&&(this._locale=b),this)}function sb(){return this._locale}function tb(a){switch(a=A(a)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===a&&this.weekday(0),"isoWeek"===a&&this.isoWeekday(1),"quarter"===a&&this.month(3*Math.floor(this.month()/3)),this}function ub(a){return a=A(a),void 0===a||"millisecond"===a?this:this.startOf(a).add(1,"isoWeek"===a?"week":a).subtract(1,"ms")}function vb(){return+this._d-6e4*(this._offset||0)}function wb(){return Math.floor(+this/1e3)}function xb(){return this._offset?new Date(+this):this._d}function yb(){var a=this;return[a.year(),a.month(),a.date(),a.hour(),a.minute(),a.second(),a.millisecond()]}function zb(){var a=this;return{years:a.year(),months:a.month(),date:a.date(),hours:a.hours(),minutes:a.minutes(),seconds:a.seconds(),milliseconds:a.milliseconds()}}function Ab(){return k(this)}function Bb(){return g({},j(this))}function Cb(){return j(this).overflow}function Db(a,b){H(0,[a,a.length],0,b)}function Eb(a,b,c){return ja(Da([a,11,31+b-c]),b,c).week}function Fb(a){var b=ja(this,this.localeData()._week.dow,this.localeData()._week.doy).year;return null==a?b:this.add(a-b,"y")}function Gb(a){var b=ja(this,1,4).year;return null==a?b:this.add(a-b,"y")}function Hb(){return Eb(this.year(),1,4)}function Ib(){var a=this.localeData()._week;return Eb(this.year(),a.dow,a.doy)}function Jb(a){return null==a?Math.ceil((this.month()+1)/3):this.month(3*(a-1)+this.month()%3)}function Kb(a,b){return"string"!=typeof a?a:isNaN(a)?(a=b.weekdaysParse(a),"number"==typeof a?a:null):parseInt(a,10)}function Lb(a){return this._weekdays[a.day()]}function Mb(a){return this._weekdaysShort[a.day()]}function Nb(a){return this._weekdaysMin[a.day()]}function Ob(a){var b,c,d;for(this._weekdaysParse=this._weekdaysParse||[],b=0;7>b;b++)if(this._weekdaysParse[b]||(c=Da([2e3,1]).day(b),d="^"+this.weekdays(c,"")+"|^"+this.weekdaysShort(c,"")+"|^"+this.weekdaysMin(c,""),this._weekdaysParse[b]=new RegExp(d.replace(".",""),"i")),this._weekdaysParse[b].test(a))return b}function Pb(a){var b=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=a?(a=Kb(a,this.localeData()),this.add(a-b,"d")):b}function Qb(a){var b=(this.day()+7-this.localeData()._week.dow)%7;return null==a?b:this.add(a-b,"d")}function Rb(a){return null==a?this.day()||7:this.day(this.day()%7?a:a-7)}function Sb(a,b){H(a,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),b)})}function Tb(a,b){return b._meridiemParse}function Ub(a){return"p"===(a+"").toLowerCase().charAt(0)}function Vb(a,b,c){return a>11?c?"pm":"PM":c?"am":"AM"}function Wb(a,b){b[ld]=q(1e3*("0."+a))}function Xb(){return this._isUTC?"UTC":""}function Yb(){return this._isUTC?"Coordinated Universal Time":""}function Zb(a){return Da(1e3*a)}function $b(){return Da.apply(null,arguments).parseZone()}function _b(a,b,c){var d=this._calendar[a];return"function"==typeof d?d.call(b,c):d}function ac(a){var b=this._longDateFormat[a],c=this._longDateFormat[a.toUpperCase()];return b||!c?b:(this._longDateFormat[a]=c.replace(/MMMM|MM|DD|dddd/g,function(a){return a.slice(1)}),this._longDateFormat[a])}function bc(){return this._invalidDate}function cc(a){return this._ordinal.replace("%d",a)}function dc(a){return a}function ec(a,b,c,d){var e=this._relativeTime[c];return"function"==typeof e?e(a,b,c,d):e.replace(/%d/i,a)}function fc(a,b){var c=this._relativeTime[a>0?"future":"past"];return"function"==typeof c?c(b):c.replace(/%s/i,b)}function gc(a){var b,c;for(c in a)b=a[c],"function"==typeof b?this[c]=b:this["_"+c]=b;this._ordinalParseLenient=new RegExp(this._ordinalParse.source+"|"+/\d{1,2}/.source)}function hc(a,b,c,d){var e=y(),f=h().set(d,b);return e[c](f,a)}function ic(a,b,c,d,e){if("number"==typeof a&&(b=a,a=void 0),a=a||"",null!=b)return hc(a,b,c,e);var f,g=[];for(f=0;d>f;f++)g[f]=hc(a,f,c,e);return g}function jc(a,b){return ic(a,b,"months",12,"month")}function kc(a,b){return ic(a,b,"monthsShort",12,"month")}function lc(a,b){return ic(a,b,"weekdays",7,"day")}function mc(a,b){return ic(a,b,"weekdaysShort",7,"day")}function nc(a,b){return ic(a,b,"weekdaysMin",7,"day")}function oc(){var a=this._data;return this._milliseconds=Wd(this._milliseconds),this._days=Wd(this._days),this._months=Wd(this._months),a.milliseconds=Wd(a.milliseconds),a.seconds=Wd(a.seconds),a.minutes=Wd(a.minutes),a.hours=Wd(a.hours),a.months=Wd(a.months),a.years=Wd(a.years),this}function pc(a,b,c,d){var e=Ya(b,c);return a._milliseconds+=d*e._milliseconds,a._days+=d*e._days,a._months+=d*e._months,a._bubble()}function qc(a,b){return pc(this,a,b,1)}function rc(a,b){return pc(this,a,b,-1)}function sc(a){return 0>a?Math.floor(a):Math.ceil(a)}function tc(){var a,b,c,d,e,f=this._milliseconds,g=this._days,h=this._months,i=this._data;return f>=0&&g>=0&&h>=0||0>=f&&0>=g&&0>=h||(f+=864e5*sc(vc(h)+g),g=0,h=0),i.milliseconds=f%1e3,a=p(f/1e3),i.seconds=a%60,b=p(a/60),i.minutes=b%60,c=p(b/60),i.hours=c%24,g+=p(c/24),e=p(uc(g)),h+=e,g-=sc(vc(e)),d=p(h/12),h%=12,i.days=g,i.months=h,i.years=d,this}function uc(a){return 4800*a/146097}function vc(a){return 146097*a/4800}function wc(a){var b,c,d=this._milliseconds;if(a=A(a),"month"===a||"year"===a)return b=this._days+d/864e5,c=this._months+uc(b),"month"===a?c:c/12;switch(b=this._days+Math.round(vc(this._months)),a){case"week":return b/7+d/6048e5;case"day":return b+d/864e5;case"hour":return 24*b+d/36e5;case"minute":return 1440*b+d/6e4;case"second":return 86400*b+d/1e3;case"millisecond":return Math.floor(864e5*b)+d;default:throw new Error("Unknown unit "+a)}}function xc(){return this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*q(this._months/12)}function yc(a){return function(){return this.as(a)}}function zc(a){return a=A(a),this[a+"s"]()}function Ac(a){return function(){return this._data[a]}}function Bc(){return p(this.days()/7)}function Cc(a,b,c,d,e){return e.relativeTime(b||1,!!c,a,d)}function Dc(a,b,c){var d=Ya(a).abs(),e=ke(d.as("s")),f=ke(d.as("m")),g=ke(d.as("h")),h=ke(d.as("d")),i=ke(d.as("M")),j=ke(d.as("y")),k=e<le.s&&["s",e]||1===f&&["m"]||f<le.m&&["mm",f]||1===g&&["h"]||g<le.h&&["hh",g]||1===h&&["d"]||h<le.d&&["dd",h]||1===i&&["M"]||i<le.M&&["MM",i]||1===j&&["y"]||["yy",j];return k[2]=b,k[3]=+a>0,k[4]=c,Cc.apply(null,k)}function Ec(a,b){return void 0===le[a]?!1:void 0===b?le[a]:(le[a]=b,!0)}function Fc(a){var b=this.localeData(),c=Dc(this,!a,b);return a&&(c=b.pastFuture(+this,c)),b.postformat(c)}function Gc(){var a,b,c,d=me(this._milliseconds)/1e3,e=me(this._days),f=me(this._months);a=p(d/60),b=p(a/60),d%=60,a%=60,c=p(f/12),f%=12;var g=c,h=f,i=e,j=b,k=a,l=d,m=this.asSeconds();return m?(0>m?"-":"")+"P"+(g?g+"Y":"")+(h?h+"M":"")+(i?i+"D":"")+(j||k||l?"T":"")+(j?j+"H":"")+(k?k+"M":"")+(l?l+"S":""):"P0D"}var Hc,Ic,Jc=a.momentProperties=[],Kc=!1,Lc={},Mc={},Nc=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,Oc=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Pc={},Qc={},Rc=/\d/,Sc=/\d\d/,Tc=/\d{3}/,Uc=/\d{4}/,Vc=/[+-]?\d{6}/,Wc=/\d\d?/,Xc=/\d{1,3}/,Yc=/\d{1,4}/,Zc=/[+-]?\d{1,6}/,$c=/\d+/,_c=/[+-]?\d+/,ad=/Z|[+-]\d\d:?\d\d/gi,bd=/[+-]?\d+(\.\d{1,3})?/,cd=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,dd={},ed={},fd=0,gd=1,hd=2,id=3,jd=4,kd=5,ld=6;H("M",["MM",2],"Mo",function(){return this.month()+1}),H("MMM",0,0,function(a){return this.localeData().monthsShort(this,a)}),H("MMMM",0,0,function(a){return this.localeData().months(this,a)}),z("month","M"),N("M",Wc),N("MM",Wc,Sc),N("MMM",cd),N("MMMM",cd),Q(["M","MM"],function(a,b){b[gd]=q(a)-1}),Q(["MMM","MMMM"],function(a,b,c,d){var e=c._locale.monthsParse(a,d,c._strict);null!=e?b[gd]=e:j(c).invalidMonth=a});var md="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),nd="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),od={};a.suppressDeprecationWarnings=!1;var pd=/^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,qd=[["YYYYYY-MM-DD",/[+-]\d{6}-\d{2}-\d{2}/],["YYYY-MM-DD",/\d{4}-\d{2}-\d{2}/],["GGGG-[W]WW-E",/\d{4}-W\d{2}-\d/],["GGGG-[W]WW",/\d{4}-W\d{2}/],["YYYY-DDD",/\d{4}-\d{3}/]],rd=[["HH:mm:ss.SSSS",/(T| )\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],sd=/^\/?Date\((\-?\d+)/i;a.createFromInputFallback=aa("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.",function(a){a._d=new Date(a._i+(a._useUTC?" UTC":""))}),H(0,["YY",2],0,function(){return this.year()%100}),H(0,["YYYY",4],0,"year"),H(0,["YYYYY",5],0,"year"),H(0,["YYYYYY",6,!0],0,"year"),z("year","y"),N("Y",_c),N("YY",Wc,Sc),N("YYYY",Yc,Uc),N("YYYYY",Zc,Vc),N("YYYYYY",Zc,Vc),Q(["YYYYY","YYYYYY"],fd),Q("YYYY",function(b,c){c[fd]=2===b.length?a.parseTwoDigitYear(b):q(b)}),Q("YY",function(b,c){c[fd]=a.parseTwoDigitYear(b)}),a.parseTwoDigitYear=function(a){return q(a)+(q(a)>68?1900:2e3)};var td=C("FullYear",!1);H("w",["ww",2],"wo","week"),H("W",["WW",2],"Wo","isoWeek"),z("week","w"),z("isoWeek","W"),N("w",Wc),N("ww",Wc,Sc),N("W",Wc),N("WW",Wc,Sc),R(["w","ww","W","WW"],function(a,b,c,d){b[d.substr(0,1)]=q(a)});var ud={dow:0,doy:6};H("DDD",["DDDD",3],"DDDo","dayOfYear"),z("dayOfYear","DDD"),N("DDD",Xc),N("DDDD",Tc),Q(["DDD","DDDD"],function(a,b,c){c._dayOfYear=q(a)}),a.ISO_8601=function(){};var vd=aa("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548",function(){var a=Da.apply(null,arguments);return this>a?this:a}),wd=aa("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548",function(){var a=Da.apply(null,arguments);return a>this?this:a});Ja("Z",":"),Ja("ZZ",""),N("Z",ad),N("ZZ",ad),Q(["Z","ZZ"],function(a,b,c){c._useUTC=!0,c._tzm=Ka(a)});var xd=/([\+\-]|\d\d)/gi;a.updateOffset=function(){};var yd=/(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,zd=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/;Ya.fn=Ha.prototype;var Ad=ab(1,"add"),Bd=ab(-1,"subtract");a.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";var Cd=aa("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(a){return void 0===a?this.localeData():this.locale(a)});H(0,["gg",2],0,function(){return this.weekYear()%100}),H(0,["GG",2],0,function(){return this.isoWeekYear()%100}),Db("gggg","weekYear"),Db("ggggg","weekYear"),Db("GGGG","isoWeekYear"),Db("GGGGG","isoWeekYear"),z("weekYear","gg"),z("isoWeekYear","GG"),N("G",_c),N("g",_c),N("GG",Wc,Sc),N("gg",Wc,Sc),N("GGGG",Yc,Uc),N("gggg",Yc,Uc),N("GGGGG",Zc,Vc),N("ggggg",Zc,Vc),R(["gggg","ggggg","GGGG","GGGGG"],function(a,b,c,d){b[d.substr(0,2)]=q(a)}),R(["gg","GG"],function(b,c,d,e){c[e]=a.parseTwoDigitYear(b)}),H("Q",0,0,"quarter"),z("quarter","Q"),N("Q",Rc),Q("Q",function(a,b){b[gd]=3*(q(a)-1)}),H("D",["DD",2],"Do","date"),z("date","D"),N("D",Wc),N("DD",Wc,Sc),N("Do",function(a,b){return a?b._ordinalParse:b._ordinalParseLenient}),Q(["D","DD"],hd),Q("Do",function(a,b){b[hd]=q(a.match(Wc)[0],10)});var Dd=C("Date",!0);H("d",0,"do","day"),H("dd",0,0,function(a){return this.localeData().weekdaysMin(this,a)}),H("ddd",0,0,function(a){return this.localeData().weekdaysShort(this,a)}),H("dddd",0,0,function(a){return this.localeData().weekdays(this,a)}),H("e",0,0,"weekday"),H("E",0,0,"isoWeekday"),z("day","d"),z("weekday","e"),z("isoWeekday","E"),N("d",Wc),N("e",Wc),N("E",Wc),N("dd",cd),N("ddd",cd),N("dddd",cd),R(["dd","ddd","dddd"],function(a,b,c){var d=c._locale.weekdaysParse(a);null!=d?b.d=d:j(c).invalidWeekday=a}),R(["d","e","E"],function(a,b,c,d){b[d]=q(a)});var Ed="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),Fd="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),Gd="Su_Mo_Tu_We_Th_Fr_Sa".split("_");H("H",["HH",2],0,"hour"),H("h",["hh",2],0,function(){return this.hours()%12||12}),Sb("a",!0),Sb("A",!1),z("hour","h"),N("a",Tb),N("A",Tb),N("H",Wc),N("h",Wc),N("HH",Wc,Sc),N("hh",Wc,Sc),Q(["H","HH"],id),Q(["a","A"],function(a,b,c){c._isPm=c._locale.isPM(a),c._meridiem=a}),Q(["h","hh"],function(a,b,c){b[id]=q(a),j(c).bigHour=!0});var Hd=/[ap]\.?m?\.?/i,Id=C("Hours",!0);H("m",["mm",2],0,"minute"),z("minute","m"),N("m",Wc),N("mm",Wc,Sc),Q(["m","mm"],jd);var Jd=C("Minutes",!1);H("s",["ss",2],0,"second"),z("second","s"),N("s",Wc),N("ss",Wc,Sc),Q(["s","ss"],kd);var Kd=C("Seconds",!1);H("S",0,0,function(){return~~(this.millisecond()/100)}),H(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),H(0,["SSS",3],0,"millisecond"),H(0,["SSSS",4],0,function(){return 10*this.millisecond()}),H(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),H(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),H(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),H(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),H(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),z("millisecond","ms"),N("S",Xc,Rc),N("SS",Xc,Sc),N("SSS",Xc,Tc);var Ld;for(Ld="SSSS";Ld.length<=9;Ld+="S")N(Ld,$c);for(Ld="S";Ld.length<=9;Ld+="S")Q(Ld,Wb);var Md=C("Milliseconds",!1);H("z",0,0,"zoneAbbr"),H("zz",0,0,"zoneName");var Nd=n.prototype;Nd.add=Ad,Nd.calendar=cb,Nd.clone=db,Nd.diff=ib,Nd.endOf=ub,Nd.format=mb,Nd.from=nb,Nd.fromNow=ob,Nd.to=pb,Nd.toNow=qb,Nd.get=F,Nd.invalidAt=Cb,Nd.isAfter=eb,Nd.isBefore=fb,Nd.isBetween=gb,Nd.isSame=hb,Nd.isValid=Ab,Nd.lang=Cd,Nd.locale=rb,Nd.localeData=sb,Nd.max=wd,Nd.min=vd,Nd.parsingFlags=Bb,Nd.set=F,Nd.startOf=tb,Nd.subtract=Bd,Nd.toArray=yb,Nd.toObject=zb,Nd.toDate=xb,Nd.toISOString=lb,Nd.toJSON=lb,Nd.toString=kb,Nd.unix=wb,Nd.valueOf=vb,Nd.year=td,Nd.isLeapYear=ia,Nd.weekYear=Fb,Nd.isoWeekYear=Gb,Nd.quarter=Nd.quarters=Jb,Nd.month=Y,Nd.daysInMonth=Z,Nd.week=Nd.weeks=na,Nd.isoWeek=Nd.isoWeeks=oa,Nd.weeksInYear=Ib,Nd.isoWeeksInYear=Hb,Nd.date=Dd,Nd.day=Nd.days=Pb,Nd.weekday=Qb,Nd.isoWeekday=Rb,Nd.dayOfYear=qa,Nd.hour=Nd.hours=Id,Nd.minute=Nd.minutes=Jd,Nd.second=Nd.seconds=Kd,
Nd.millisecond=Nd.milliseconds=Md,Nd.utcOffset=Na,Nd.utc=Pa,Nd.local=Qa,Nd.parseZone=Ra,Nd.hasAlignedHourOffset=Sa,Nd.isDST=Ta,Nd.isDSTShifted=Ua,Nd.isLocal=Va,Nd.isUtcOffset=Wa,Nd.isUtc=Xa,Nd.isUTC=Xa,Nd.zoneAbbr=Xb,Nd.zoneName=Yb,Nd.dates=aa("dates accessor is deprecated. Use date instead.",Dd),Nd.months=aa("months accessor is deprecated. Use month instead",Y),Nd.years=aa("years accessor is deprecated. Use year instead",td),Nd.zone=aa("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779",Oa);var Od=Nd,Pd={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},Qd={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},Rd="Invalid date",Sd="%d",Td=/\d{1,2}/,Ud={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},Vd=s.prototype;Vd._calendar=Pd,Vd.calendar=_b,Vd._longDateFormat=Qd,Vd.longDateFormat=ac,Vd._invalidDate=Rd,Vd.invalidDate=bc,Vd._ordinal=Sd,Vd.ordinal=cc,Vd._ordinalParse=Td,Vd.preparse=dc,Vd.postformat=dc,Vd._relativeTime=Ud,Vd.relativeTime=ec,Vd.pastFuture=fc,Vd.set=gc,Vd.months=U,Vd._months=md,Vd.monthsShort=V,Vd._monthsShort=nd,Vd.monthsParse=W,Vd.week=ka,Vd._week=ud,Vd.firstDayOfYear=ma,Vd.firstDayOfWeek=la,Vd.weekdays=Lb,Vd._weekdays=Ed,Vd.weekdaysMin=Nb,Vd._weekdaysMin=Gd,Vd.weekdaysShort=Mb,Vd._weekdaysShort=Fd,Vd.weekdaysParse=Ob,Vd.isPM=Ub,Vd._meridiemParse=Hd,Vd.meridiem=Vb,w("en",{ordinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(a){var b=a%10,c=1===q(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th";return a+c}}),a.lang=aa("moment.lang is deprecated. Use moment.locale instead.",w),a.langData=aa("moment.langData is deprecated. Use moment.localeData instead.",y);var Wd=Math.abs,Xd=yc("ms"),Yd=yc("s"),Zd=yc("m"),$d=yc("h"),_d=yc("d"),ae=yc("w"),be=yc("M"),ce=yc("y"),de=Ac("milliseconds"),ee=Ac("seconds"),fe=Ac("minutes"),ge=Ac("hours"),he=Ac("days"),ie=Ac("months"),je=Ac("years"),ke=Math.round,le={s:45,m:45,h:22,d:26,M:11},me=Math.abs,ne=Ha.prototype;ne.abs=oc,ne.add=qc,ne.subtract=rc,ne.as=wc,ne.asMilliseconds=Xd,ne.asSeconds=Yd,ne.asMinutes=Zd,ne.asHours=$d,ne.asDays=_d,ne.asWeeks=ae,ne.asMonths=be,ne.asYears=ce,ne.valueOf=xc,ne._bubble=tc,ne.get=zc,ne.milliseconds=de,ne.seconds=ee,ne.minutes=fe,ne.hours=ge,ne.days=he,ne.weeks=Bc,ne.months=ie,ne.years=je,ne.humanize=Fc,ne.toISOString=Gc,ne.toString=Gc,ne.toJSON=Gc,ne.locale=rb,ne.localeData=sb,ne.toIsoString=aa("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",Gc),ne.lang=Cd,H("X",0,0,"unix"),H("x",0,0,"valueOf"),N("x",_c),N("X",bd),Q("X",function(a,b,c){c._d=new Date(1e3*parseFloat(a,10))}),Q("x",function(a,b,c){c._d=new Date(q(a))}),a.version="2.10.6",b(Da),a.fn=Od,a.min=Fa,a.max=Ga,a.utc=h,a.unix=Zb,a.months=jc,a.isDate=d,a.locale=w,a.invalid=l,a.duration=Ya,a.isMoment=o,a.weekdays=lc,a.parseZone=$b,a.localeData=y,a.isDuration=Ia,a.monthsShort=kc,a.weekdaysMin=nc,a.defineLocale=x,a.weekdaysShort=mc,a.normalizeUnits=A,a.relativeTimeThreshold=Ec;var oe=a;return oe});    !function(t,e){"use strict";var n;if("object"==typeof exports){try{n=require("moment")}catch(i){}module.exports=e(n)}else"function"==typeof define&&define.amd?define(function(t){var i="moment";try{n=t(i)}catch(a){}return e(n)}):t.Pikaday=e(t.moment)}(this,function(t){"use strict";var e="function"==typeof t,n=!!window.addEventListener,i=window.document,a=window.setTimeout,s=function(t,e,i,a){n?t.addEventListener(e,i,!!a):t.attachEvent("on"+e,i)},o=function(t,e,i,a){n?t.removeEventListener(e,i,!!a):t.detachEvent("on"+e,i)},r=function(t,e,n){var a;i.createEvent?(a=i.createEvent("HTMLEvents"),a.initEvent(e,!0,!1),a=v(a,n),t.dispatchEvent(a)):i.createEventObject&&(a=i.createEventObject(),a=v(a,n),t.fireEvent("on"+e,a))},h=function(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")},l=function(t,e){return-1!==(" "+t.className+" ").indexOf(" "+e+" ")},d=function(t,e){l(t,e)||(t.className=""===t.className?e:t.className+" "+e)},u=function(t,e){t.className=h((" "+t.className+" ").replace(" "+e+" "," "))},c=function(t){return/Array/.test(Object.prototype.toString.call(t))},f=function(t){return/Date/.test(Object.prototype.toString.call(t))&&!isNaN(t.getTime())},m=function(t){var e=t.getDay();return 0===e||6===e},g=function(t){return t%4===0&&t%100!==0||t%400===0},p=function(t,e){return[31,g(t)?29:28,31,30,31,30,31,31,30,31,30,31][e]},y=function(t){f(t)&&t.setHours(0,0,0,0)},D=function(t,e){return t.getTime()===e.getTime()},v=function(t,e,n){var i,a;for(i in e)a=void 0!==t[i],a&&"object"==typeof e[i]&&null!==e[i]&&void 0===e[i].nodeName?f(e[i])?n&&(t[i]=new Date(e[i].getTime())):c(e[i])?n&&(t[i]=e[i].slice(0)):t[i]=v({},e[i],n):(n||!a)&&(t[i]=e[i]);return t},_=function(t){return t.month<0&&(t.year-=Math.ceil(Math.abs(t.month)/12),t.month+=12),t.month>11&&(t.year+=Math.floor(Math.abs(t.month)/12),t.month-=12),t},b={field:null,bound:void 0,position:"bottom left",reposition:!0,format:"YYYY-MM-DD",defaultDate:null,setDefaultDate:!1,firstDay:0,formatStrict:!1,minDate:null,maxDate:null,yearRange:10,showWeekNumber:!1,minYear:0,maxYear:9999,minMonth:void 0,maxMonth:void 0,startRange:null,endRange:null,isRTL:!1,yearSuffix:"",showMonthAfterYear:!1,showDaysInNextAndPreviousMonths:!1,numberOfMonths:1,mainCalendar:"left",container:void 0,i18n:{previousMonth:"Previous Month",nextMonth:"Next Month",months:["January","February","March","April","May","June","July","August","September","October","November","December"],weekdays:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]},theme:null,onSelect:null,onOpen:null,onClose:null,onDraw:null},w=function(t,e,n){for(e+=t.firstDay;e>=7;)e-=7;return n?t.i18n.weekdaysShort[e]:t.i18n.weekdays[e]},M=function(t){var e=[];if(t.isEmpty){if(!t.showDaysInNextAndPreviousMonths)return'<td class="is-empty"></td>';e.push("is-outside-current-month")}return t.isDisabled&&e.push("is-disabled"),t.isToday&&e.push("is-today"),t.isSelected&&e.push("is-selected"),t.isInRange&&e.push("is-inrange"),t.isStartRange&&e.push("is-startrange"),t.isEndRange&&e.push("is-endrange"),'<td data-day="'+t.day+'" class="'+e.join(" ")+'"><button class="pika-button pika-day" type="button" data-pika-year="'+t.year+'" data-pika-month="'+t.month+'" data-pika-day="'+t.day+'">'+t.day+"</button></td>"},k=function(t,e,n){var i=new Date(n,0,1),a=Math.ceil(((new Date(n,e,t)-i)/864e5+i.getDay()+1)/7);return'<td class="pika-week">'+a+"</td>"},x=function(t,e){return"<tr>"+(e?t.reverse():t).join("")+"</tr>"},R=function(t){return"<tbody>"+t.join("")+"</tbody>"},N=function(t){var e,n=[];for(t.showWeekNumber&&n.push("<th></th>"),e=0;7>e;e++)n.push('<th scope="col"><abbr title="'+w(t,e)+'">'+w(t,e,!0)+"</abbr></th>");return"<thead>"+(t.isRTL?n.reverse():n).join("")+"</thead>"},C=function(t,e,n,i,a){var s,o,r,h,l,d=t._o,u=n===d.minYear,f=n===d.maxYear,m='<div class="pika-title">',g=!0,p=!0;for(r=[],s=0;12>s;s++)r.push('<option value="'+(n===a?s-e:12+s-e)+'"'+(s===i?" selected":"")+(u&&s<d.minMonth||f&&s>d.maxMonth?"disabled":"")+">"+d.i18n.months[s]+"</option>");for(h='<div class="pika-label">'+d.i18n.months[i]+'<select class="pika-select pika-select-month" tabindex="-1">'+r.join("")+"</select></div>",c(d.yearRange)?(s=d.yearRange[0],o=d.yearRange[1]+1):(s=n-d.yearRange,o=1+n+d.yearRange),r=[];o>s&&s<=d.maxYear;s++)s>=d.minYear&&r.push('<option value="'+s+'"'+(s===n?" selected":"")+">"+s+"</option>");return l='<div class="pika-label">'+n+d.yearSuffix+'<select class="pika-select pika-select-year" tabindex="-1">'+r.join("")+"</select></div>",m+=d.showMonthAfterYear?l+h:h+l,u&&(0===i||d.minMonth>=i)&&(g=!1),f&&(11===i||d.maxMonth<=i)&&(p=!1),0===e&&(m+='<button class="pika-prev'+(g?"":" is-disabled")+'" type="button">'+d.i18n.previousMonth+"</button>"),e===t._o.numberOfMonths-1&&(m+='<button class="pika-next'+(p?"":" is-disabled")+'" type="button">'+d.i18n.nextMonth+"</button>"),m+="</div>"},T=function(t,e){return'<table cellpadding="0" cellspacing="0" class="pika-table">'+N(t)+R(e)+"</table>"},E=function(o){var r=this,h=r.config(o);r._onMouseDown=function(t){if(r._v){t=t||window.event;var e=t.target||t.srcElement;if(e)if(l(e,"is-disabled")||(l(e,"pika-button")&&!l(e,"is-empty")?(r.setDate(new Date(e.getAttribute("data-pika-year"),e.getAttribute("data-pika-month"),e.getAttribute("data-pika-day"))),h.bound&&a(function(){r.hide(),h.field&&h.field.blur()},100)):l(e,"pika-prev")?r.prevMonth():l(e,"pika-next")&&r.nextMonth()),l(e,"pika-select"))r._c=!0;else{if(!t.preventDefault)return t.returnValue=!1,!1;t.preventDefault()}}},r._onChange=function(t){t=t||window.event;var e=t.target||t.srcElement;e&&(l(e,"pika-select-month")?r.gotoMonth(e.value):l(e,"pika-select-year")&&r.gotoYear(e.value))},r._onInputChange=function(n){var i;n.firedBy!==r&&(e?(i=t(h.field.value,h.format,h.formatStrict),i=i&&i.isValid()?i.toDate():null):i=new Date(Date.parse(h.field.value)),f(i)&&r.setDate(i),r._v||r.show())},r._onInputFocus=function(){r.show()},r._onInputClick=function(){r.show()},r._onInputBlur=function(){var t=i.activeElement;do if(l(t,"pika-single"))return;while(t=t.parentNode);r._c||(r._b=a(function(){r.hide()},50)),r._c=!1},r._onClick=function(t){t=t||window.event;var e=t.target||t.srcElement,i=e;if(e){!n&&l(e,"pika-select")&&(e.onchange||(e.setAttribute("onchange","return;"),s(e,"change",r._onChange)));do if(l(i,"pika-single")||i===h.trigger)return;while(i=i.parentNode);r._v&&e!==h.trigger&&i!==h.trigger&&r.hide()}},r.el=i.createElement("div"),r.el.className="pika-single"+(h.isRTL?" is-rtl":"")+(h.theme?" "+h.theme:""),s(r.el,"mousedown",r._onMouseDown,!0),s(r.el,"touchend",r._onMouseDown,!0),s(r.el,"change",r._onChange),h.field&&(h.container?h.container.appendChild(r.el):h.bound?i.body.appendChild(r.el):h.field.parentNode.insertBefore(r.el,h.field.nextSibling),s(h.field,"change",r._onInputChange),h.defaultDate||(e&&h.field.value?h.defaultDate=t(h.field.value,h.format).toDate():h.defaultDate=new Date(Date.parse(h.field.value)),h.setDefaultDate=!0));var d=h.defaultDate;f(d)?h.setDefaultDate?r.setDate(d,!0):r.gotoDate(d):r.gotoDate(new Date),h.bound?(this.hide(),r.el.className+=" is-bound",s(h.trigger,"click",r._onInputClick),s(h.trigger,"focus",r._onInputFocus),s(h.trigger,"blur",r._onInputBlur)):this.show()};return E.prototype={config:function(t){this._o||(this._o=v({},b,!0));var e=v(this._o,t,!0);e.isRTL=!!e.isRTL,e.field=e.field&&e.field.nodeName?e.field:null,e.theme="string"==typeof e.theme&&e.theme?e.theme:null,e.bound=!!(void 0!==e.bound?e.field&&e.bound:e.field),e.trigger=e.trigger&&e.trigger.nodeName?e.trigger:e.field,e.disableWeekends=!!e.disableWeekends,e.disableDayFn="function"==typeof e.disableDayFn?e.disableDayFn:null;var n=parseInt(e.numberOfMonths,10)||1;if(e.numberOfMonths=n>4?4:n,f(e.minDate)||(e.minDate=!1),f(e.maxDate)||(e.maxDate=!1),e.minDate&&e.maxDate&&e.maxDate<e.minDate&&(e.maxDate=e.minDate=!1),e.minDate&&this.setMinDate(e.minDate),e.maxDate&&this.setMaxDate(e.maxDate),c(e.yearRange)){var i=(new Date).getFullYear()-10;e.yearRange[0]=parseInt(e.yearRange[0],10)||i,e.yearRange[1]=parseInt(e.yearRange[1],10)||i}else e.yearRange=Math.abs(parseInt(e.yearRange,10))||b.yearRange,e.yearRange>100&&(e.yearRange=100);return e},toString:function(n){return f(this._d)?e?t(this._d).format(n||this._o.format):this._d.toDateString():""},getMoment:function(){return e?t(this._d):null},setMoment:function(n,i){e&&t.isMoment(n)&&this.setDate(n.toDate(),i)},getDate:function(){return f(this._d)?new Date(this._d.getTime()):null},setDate:function(t,e){if(!t)return this._d=null,this._o.field&&(this._o.field.value="",r(this._o.field,"change",{firedBy:this})),this.draw();if("string"==typeof t&&(t=new Date(Date.parse(t))),f(t)){var n=this._o.minDate,i=this._o.maxDate;f(n)&&n>t?t=n:f(i)&&t>i&&(t=i),this._d=new Date(t.getTime()),y(this._d),this.gotoDate(this._d),this._o.field&&(this._o.field.value=this.toString(),r(this._o.field,"change",{firedBy:this})),e||"function"!=typeof this._o.onSelect||this._o.onSelect.call(this,this.getDate())}},gotoDate:function(t){var e=!0;if(f(t)){if(this.calendars){var n=new Date(this.calendars[0].year,this.calendars[0].month,1),i=new Date(this.calendars[this.calendars.length-1].year,this.calendars[this.calendars.length-1].month,1),a=t.getTime();i.setMonth(i.getMonth()+1),i.setDate(i.getDate()-1),e=a<n.getTime()||i.getTime()<a}e&&(this.calendars=[{month:t.getMonth(),year:t.getFullYear()}],"right"===this._o.mainCalendar&&(this.calendars[0].month+=1-this._o.numberOfMonths)),this.adjustCalendars()}},adjustCalendars:function(){this.calendars[0]=_(this.calendars[0]);for(var t=1;t<this._o.numberOfMonths;t++)this.calendars[t]=_({month:this.calendars[0].month+t,year:this.calendars[0].year});this.draw()},gotoToday:function(){this.gotoDate(new Date)},gotoMonth:function(t){isNaN(t)||(this.calendars[0].month=parseInt(t,10),this.adjustCalendars())},nextMonth:function(){this.calendars[0].month++,this.adjustCalendars()},prevMonth:function(){this.calendars[0].month--,this.adjustCalendars()},gotoYear:function(t){isNaN(t)||(this.calendars[0].year=parseInt(t,10),this.adjustCalendars())},setMinDate:function(t){y(t),this._o.minDate=t,this._o.minYear=t.getFullYear(),this._o.minMonth=t.getMonth(),this.draw()},setMaxDate:function(t){y(t),this._o.maxDate=t,this._o.maxYear=t.getFullYear(),this._o.maxMonth=t.getMonth(),this.draw()},setStartRange:function(t){this._o.startRange=t},setEndRange:function(t){this._o.endRange=t},draw:function(t){if(this._v||t){var e=this._o,n=e.minYear,i=e.maxYear,s=e.minMonth,o=e.maxMonth,r="";this._y<=n&&(this._y=n,!isNaN(s)&&this._m<s&&(this._m=s)),this._y>=i&&(this._y=i,!isNaN(o)&&this._m>o&&(this._m=o));for(var h=0;h<e.numberOfMonths;h++)r+='<div class="pika-lendar">'+C(this,h,this.calendars[h].year,this.calendars[h].month,this.calendars[0].year)+this.render(this.calendars[h].year,this.calendars[h].month)+"</div>";if(this.el.innerHTML=r,e.bound&&"hidden"!==e.field.type&&a(function(){e.trigger.focus()},1),"function"==typeof this._o.onDraw){var l=this;a(function(){l._o.onDraw.call(l)},0)}}},adjustPosition:function(){var t,e,n,a,s,o,r,h,l,d;if(!this._o.container){if(this.el.style.position="absolute",t=this._o.trigger,e=t,n=this.el.offsetWidth,a=this.el.offsetHeight,s=window.innerWidth||i.documentElement.clientWidth,o=window.innerHeight||i.documentElement.clientHeight,r=window.pageYOffset||i.body.scrollTop||i.documentElement.scrollTop,"function"==typeof t.getBoundingClientRect)d=t.getBoundingClientRect(),h=d.left+window.pageXOffset,l=d.bottom+window.pageYOffset;else for(h=e.offsetLeft,l=e.offsetTop+e.offsetHeight;e=e.offsetParent;)h+=e.offsetLeft,l+=e.offsetTop;(this._o.reposition&&h+n>s||this._o.position.indexOf("right")>-1&&h-n+t.offsetWidth>0)&&(h=h>=n?h-n+t.offsetWidth:h),(this._o.reposition&&l+a>o+r||this._o.position.indexOf("top")>-1&&l-a-t.offsetHeight>0)&&(l=l-a-t.offsetHeight),this.el.style.left=h+"px",this.el.style.top=l+"px"}},render:function(t,e){var n=this._o,i=new Date,a=p(t,e),s=new Date(t,e,1).getDay(),o=[],r=[];y(i),n.firstDay>0&&(s-=n.firstDay,0>s&&(s+=7));for(var h=0===e?11:e-1,l=11===e?0:e+1,d=0===e?t-1:t,u=11===e?t+1:t,c=p(d,h),g=a+s,v=g;v>7;)v-=7;g+=7-v;for(var _=0,b=0;g>_;_++){var w=new Date(t,e,1+(_-s)),R=f(this._d)?D(w,this._d):!1,N=D(w,i),C=s>_||_>=a+s,E=1+(_-s),S=e,I=t,Y=n.startRange&&D(n.startRange,w),O=n.endRange&&D(n.endRange,w),j=n.startRange&&n.endRange&&n.startRange<w&&w<n.endRange,F=n.minDate&&w<n.minDate||n.maxDate&&w>n.maxDate||n.disableWeekends&&m(w)||n.disableDayFn&&n.disableDayFn(w);C&&(s>_?(E=c+E,S=h,I=d):(E-=a,S=l,I=u));var A={day:E,month:S,year:I,isSelected:R,isToday:N,isDisabled:F,isEmpty:C,isStartRange:Y,isEndRange:O,isInRange:j,showDaysInNextAndPreviousMonths:n.showDaysInNextAndPreviousMonths};r.push(M(A)),7===++b&&(n.showWeekNumber&&r.unshift(k(_-s,e,t)),o.push(x(r,n.isRTL)),r=[],b=0)}return T(n,o)},isVisible:function(){return this._v},show:function(){this._v||(u(this.el,"is-hidden"),this._v=!0,this.draw(),this._o.bound&&(s(i,"click",this._onClick),this.adjustPosition()),"function"==typeof this._o.onOpen&&this._o.onOpen.call(this))},hide:function(){var t=this._v;t!==!1&&(this._o.bound&&o(i,"click",this._onClick),this.el.style.position="static",this.el.style.left="auto",this.el.style.top="auto",d(this.el,"is-hidden"),this._v=!1,void 0!==t&&"function"==typeof this._o.onClose&&this._o.onClose.call(this))},destroy:function(){this.hide(),o(this.el,"mousedown",this._onMouseDown,!0),o(this.el,"touchend",this._onMouseDown,!0),o(this.el,"change",this._onChange),this._o.field&&(o(this._o.field,"change",this._onInputChange),this._o.bound&&(o(this._o.trigger,"click",this._onInputClick),o(this._o.trigger,"focus",this._onInputFocus),o(this._o.trigger,"blur",this._onInputBlur))),this.el.parentNode&&this.el.parentNode.removeChild(this.el)}},E});
    if (typeof CloudBeds_widget == "undefined") {

        var Load_css = function() {
            var loaded = {};
            function Load(url, prepend = false) {
                if (loaded[url])
                    return;
                loaded[url] = true;
                var fileref = document.createElement("link");
                fileref.setAttribute("rel", "stylesheet");
                fileref.setAttribute("type", "text/css");
                fileref.setAttribute("href", url);

                if (typeof fileref != "undefined") {
                    if (prepend) {
                        document.getElementsByTagName("head")[0].insertBefore(fileref, document.getElementsByTagName("head")[0].childNodes[0])
                    } else {
                        document.getElementsByTagName("head")[0].appendChild(fileref)
                    }
                }
            }
            return {
                Load: Load
            }
        }();

        var Load_custom_css = function() {
            var loaded_custom = {};
            function Load_custom(name, $css, prepend = false) {
                if (loaded_custom[name])
                    return;
                loaded_custom[name] = true;
                var style = $css;
                var fileref = document.createElement("style");
                fileref.setAttribute("type", "text/css");
                fileref.innerHTML = style;
                if (prepend) {
                    document.getElementsByTagName("head")[0].insertBefore(fileref, document.getElementsByTagName("head")[0].childNodes[0])
                } else {
                    document.getElementsByTagName("head")[0].appendChild(fileref)
                }
            }
            return {
                Load_custom: Load_custom
            }
        }();

        var CloudBeds_widget = function (settings) {

            if (typeof(window.widgetUID) == 'undefined') {
                window.widgetUID = 0;
            }
            var loaded = {};
            var baseClass = '.CloudBedsWidget.ver- ';
            var BClass = '.CloudBedsWidget.ver-';
            var widgetUID = window.widgetUID++;

            this.init = function(html, isFloatWidget) {

                Load_custom_css.Load_custom('style', "@charset \"UTF-8\";\n\/*!\n* Cloudbeds Widget\n* Copyright \u00a9 2015 Cloudbeds | https:\/\/www.cloudbeds.com\/\n*\/\n.widgetHotelsForm *{\nmargin: 0;\n}\n.widgetHotelsForm .acessa_widget_block .widgetHotelsInputText, .widgetHotelsForm .acessa_widget_block select {\nborder: 1px solid #3B3B3B;\nborder-radius: 4px 4px 4px 4px;\nbox-shadow: none;\ncolor: #5B5B5B;\nfloat: left;\nfont-family: 'Trebuchet MS', Verdana, sans-serif;\nfont-size: 12px;\nline-height: 20px;\npadding: 4px 22px 4px 6px;\n}\n.widgetHotelsForm .acessa_widget_block select {\nwidth: 100%;\nheight: 30px;\nfloat:none;\n}\n.widgetHotelsForm .acessa_widget_block .widgetHotelsInputText.date,\n.widgetHotelsForm .acessa_widget_block select{\nwidth: 70px;\nheight: 20px !important;\nbox-sizing: content-box;\n-moz-box-sizing: content-box;\n-webkit-box-sizing: content-box;\nmargin:0;\nbackground: #fff;\n}\n.widgetHotelsForm .acessa_widget_block {\ndisplay: inline-block !important;\nmargin-right: 10px !important;\nposition: relative;\n}\n.widgetHotelsForm a.submit_link {\nbox-shadow: 0 1px 0 rgba(255, 255, 255, 0.2) inset, 0 1px 2px rgba(0, 0, 0, 0.05);\ncolor: #333333;\ncursor: pointer;\ndisplay: inline-block;\nfont-size: 14px;\nline-height: 20px;\nmargin-bottom: 0;\nmargin-top: 20px;\npadding: 4px 12px;\ntext-align: center;\ntext-shadow: 0 1px 1px rgba(255, 255, 255, 0.75);\nvertical-align: middle;\nmax-width: 180px;\nborder: 1px solid #fff;\n}\n.CloudBedsWidget .widgetHotelsForm a.submit_link {\nborder-radius: 0 !important;\nbackground: #464646;\ntext-transform: uppercase;\nfont-family: Arial, Helvetica, sans-serif;\nfont-weight: 600;\ncolor: #fff;\npadding: 4px;\nmin-width: 100px;\nmargin-top: -5px;\ntext-shadow: none;\nwhite-space: normal;\ncursor: pointer;\n}\n.CloudBedsWidget .widgetHotelsForm a.submit_link:hover {\nbackground: #FFF;\ncolor: #464646;\n}\n.CloudBedsWidget .horizontal-widget a.submit_link:hover {\nbackground: #808080;\ncolor: #fff;\n}\n.CloudBedsWidget .horizontal-widget, .CloudBedsWidget .vertical-widget { font-family: Arial, Helvetica, sans-serif; }\n.widgetHotelsForm p{\nwidth:auto !important;\nmargin-left:auto !important;\nmargin-top:auto !important;\n}\n.widgetHotelsForm .acessa_widget_block p {\nfont-family: Arial, Helvetica, sans-serif;\nfont-size: 13px;\nline-height: 20px;\npadding: 0;\nmargin-bottom: 0;\n\/*font-stretch: semi-condensed;*\/\n}\n.widgetHotelsForm .horizontal-widget a.submit_link {\nmargin-top:0px;\ncolor: #ffffff;\nposition: relative;\ntop: 24px;\n}\n.widgetHotelsForm .vertical-widget .acessa_widget_block {\nfloat: none !important;\nmargin-right: 0 !important;\nmargin-top: 10px;\n}\n.widgetHotelsForm .vertical-widget a.submit_link {\nmargin-top: 9px;\n}\n.widgetHotelsForm .vertical-widget a.submit_link:hover {\nbackground: #808080;\ncolor: #fff;\n}\n.widgetHotelsForm .vertical-widget .acessa_widget_block .widgetHotelsInputText{\nfloat: none;\n}\n.button {\nborder: none;\nheight: 28px;\nwidth: 96px;\ndisplay: inline-block;\ntext-align: center;\ntext-decoration: none;\ncolor: #ffffff;\nfont-size: 16px;\nfont-weight: bold;\nline-height: 26px;}\n.button.lang-pt-br{\n}\n.button.lang-en{\n}\n.button.lang-es{\n}\n.button:hover{\nbackground-position: center -28px ;\n}\n.button:active{\nbackground-position: center -56px ;\n}\n.largeButton{\nborder: none;\nheight: 38px;\nwidth: 206px;\ndisplay: inline-block;\ntext-align: center;\ntext-decoration: none;\ncolor: #ffffff;\nfont-size: 24px;\nfont-weight: bold;\nline-height: 36px;\n}\n.largeButton:hover{\nbackground-position: center -38px ;\n}\n.largeButton:active {\nbackground-position: center -76px;\n}\n\n\/* ###################################### FLOAT WIDGET ###################################### *\/\n.float_bg2{\nbackground: #464646;\nwidth: 100%;\nz-index: 50001;\nleft:0;\ntop:0;\ndisplay:block;\ncolor: #fff;\nfont-family: Arial, Helvetica, sans-serif;\nfont-size: 13px;\nfont-weight: 600;\nborder: none;\nborder-bottom: 2px solid #fff;\nbox-shadow: 0 3px 5px #808080;\n}\n.float{\npadding-top: 3px;\nmargin-left: auto;\nmargin-right: auto;\nwidth: 1060px;\n}\n\na.submit_link {\n    text-decoration: none;\n}\n\n.float_bg2 a.submit_link {\nmargin: 0;\nborder: 1px solid #fff;\n}\n.float_bg2 .acessa_widget_block p{\nfloat: left;\nline-height: 24px;\npadding: 16px 4px 3px 0;\ncolor:#FFFFFF;\nfont-size: 14px;\ndisplay: inline-block;\n}\n.float_bg2 .acessa_float_left{\nfloat:left;\n}\n.float_bg2 .acessa_float_dates .form_group,\n.float_bg2 .acessa_float_dates .input_group{\ndisplay: inline-block;\n}\n.CloudBedsWidget .float .form_group {\nmargin-right: 10px;\nmargin-bottom: 0;\nwidth: auto;\n}\n.CloudBedsWidget .float .form_group label {\ndisplay: inline-block;\nmargin-right: 10px;\npadding: 0;\nfont-family: Arial, Helvetica, sans-serif;\nfont-size: 13px;\nfont-weight: 400;\ntext-overflow: ellipsis;\nwhite-space: nowrap;\noverflow: hidden;\nline-height: 14px;\nvertical-align: text-bottom;\nmax-width: 80px !important;\n}\n.CloudBedsWidget .float_bg2 .acessa_float_description{\nmargin: 14px 4px 14px 4px;\nfont-size: 14px;\nwidth:390px;\nline-height:15px;\n}\n.CloudBedsWidget .float_bg2 input[type=\"text\"].date,\n.CloudBedsWidget .float_bg2 select{\nwidth: 120px;\nheight: 32px;\nborder: none;\nmargin: 6px 0;\npadding: 0 0 0 10px;\ncolor: #464646;\nfont-size: 13px;\nfont-weight: 300;\nbox-sizing: border-box !important;\nborder-radius:2px;\ndisplay:inline-block;\nbackground:#fff;\n}\n.widgetHotelsForm .widget_text{\ntext-align: center;\nmargin: 30px 51px 0;\nfont-size: 19px;\ncolor: black;\n}\n.float_bg2 .acessa_float_dates {\nwidth: 620px;\ntext-align: right;\n}\n.widgetHotelsForm.v2 .acessa_widget_block {\nmargin-right: 13px !important;\ndisplay: inline-block;\n}\n.CloudBedsWidget .float .dates_group {\ndisplay: inline-block;\n}\n@media (min-width: 1060px) {\n.float{\nwidth: 1060px;\n}\n.float_bg2{\nposition: fixed;\nheight:50px;\n}\n.floatWrapper{\npadding-bottom: 51px\n}\n}\n@media (max-width: 1059px) {\n.float{\nwidth: auto;\n}\n.CloudBedsWidget .float_bg2{\nposition: fixed; \/* Make the div \"float\" over the site *\/\nheight: 87px;\n}\n.CloudBedsWidget .float .form_group label {\ndisplay: inline-block;\ntext-align: left;\n}\n.CloudBedsWidget .float_bg2 .acessa_float_dates  {\nwidth: 100%;\ntext-align: center;\nclear: both;\n}\n.CloudBedsWidget .float_bg2 .acessa_float_description {\nwidth: 100%;\ntext-align: center;\nmargin: 10px 0;\n}\n.floatWrapper{\npadding-bottom: 82px;\n}\n}\n@media (max-width: 549px) {\n.float{\nwidth: auto;\n}\n.CloudBedsWidget .float_bg2{\nposition: absolute !important;\nwidth: 100%;\nheight: 107px;\n}\n.CloudBedsWidget .float .dates_group {\nclear: both;\n}\n.CloudBedsWidget .float .dates_group .end_date {\nmargin-right: 0 !important;\n}\n.CloudBedsWidget .float .form_group label {\ndisplay: block;\ntext-align: left;\n}\n.CloudBedsWidget .widgetHotelsForm.float a.submit_link {\ndisplay: block;\nmargin: 0 auto 10px;\nwidth: 100%;\nmax-width: 252px !important;\n}\n.CloudBedsWidget .float_bg2 .acessa_float_description {\ndisplay: none;\n}\n.floatWrapper{\npadding-bottom: 106px;\n}\n}\n\/* #################################### OTHER ####################################*\/\n.modul_website_published.btn-group {\ndisplay: inline-block;\nfont-size: 0;\nposition: relative;\nvertical-align: middle;\nwhite-space: nowrap;\nz-index: 1;\n}\n.modul_website_published .btn-group {\ndisplay: inline-block;\nfont-size: 0;\nposition: relative;\nvertical-align: middle;\nwhite-space: nowrap;\nz-index: 1;\n}\n.modul_website_published .btn-group > .btn:first-child, .modul_website_published .btn-group > .btn.first-child {\nborder-bottom-left-radius: 4px;\nborder-top-left-radius: 4px;\ncolor: #757575;\nfont-size: 12px;\nmargin-left: 0;\n}\n.modul_website_published .btn-group div.smm {\npadding: 0;\nwidth: 46px;\n}\n.modul_website_published .social_fc > div.btn {\nborder-color: #222F65;\ncolor: #FFFFFF;\nfont-family: Arial,Helvetica,sans-serif;\nfont-size: 16px;\nfont-weight: bold;\nheight: 44px;\n}\n.modul_website_published .social_fc > div.bigger {\npadding: 0 20px;\n}\n.modul_website_published .social_tw > div.btn {\nborder-color: #4B81C5;\ncolor: #FFFFFF;\nfont-family: Arial,Helvetica,sans-serif;\nfont-size: 16px;\nfont-weight: bold;\nheight: 44px;\n}\n.modul_website_published .social_tw > div.bigger {\npadding: 0 30px;\n}\n.modul_website_published .btn-group > .btn, .modul_website_published .btn-group > .dropdown-menu {\nfont-size: 12px;\n}\n.modul_website_published .btn-group > .btn {\nborder-radius: 0 0 0 0;\nposition: relative;\n}\n.modul_website_published .btn {\n-moz-border-bottom-colors: none;\n-moz-border-left-colors: none;\n-moz-border-right-colors: none;\n-moz-border-top-colors: none;\nbackground-color: #F3F3F3;\nbackground-image: linear-gradient(to bottom, #FFFFFF, #E6E6E6);\nbackground-repeat: repeat-x;\nborder-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) #A2A2A2;\nborder-image: none;\nborder-radius: 4px 4px 4px 4px;\nborder-style: solid;\nborder-width: 1px;\nbox-shadow: 0 1px 0 rgba(255, 255, 255, 0.2) inset, 0 1px 2px rgba(0, 0, 0, 0.05);\ncolor: #333333;\ncursor: pointer;\ndisplay: inline-block;\nfont-size: 14px;\nline-height: 20px;\nmargin: 0;\ntext-align: center;\ntext-shadow: 0 1px 1px rgba(255, 255, 255, 0.75);\nvertical-align: middle;\n}\n.modul_website_published .btn-group > .btn:last-child, .modul_website_published .btn-group > .dropdown-toggle {\nborder-bottom-right-radius: 4px;\nborder-top-right-radius: 4px;\n}\n.modul_website_published .btn-group > .btn + .btn {\nmargin-left: -1px;\n}\ndiv.bigger span {\npadding-top:10px;\ndisplay:block;\n}\ndiv.smm img {\npadding-top: 10px;\n}\n.modul_website_published .buttons{\npadding-top:30px;\ntext-align: center;\n}\n.CloudBedsDatePicker table.ui-datepicker-calendar th, .CloudBedsDatePicker table.ui-datepicker-calendar td{\nwidth: auto;\n}\n\/* ************ Style for new datapicker ************** *\/\n.pika-lendar {\nwidth: 210px;\n}\n.CloudBedsDatePicker {\nz-index: 50002 !important;\n}\n.CloudBedsDatePicker.pika-single .is-today .pika-button {\ncolor: #7aad3a;\nfont-weight: bold;\n}\n.CloudBedsDatePicker.pika-single .is-today .pika-button:hover {\ncolor: #fff;\nfont-weight: bold;\n}\n.CloudBedsDatePicker.pika-single .is-selected .pika-button {\ncolor: #000;\nfont-weight: bold;\nbackground: #B1B1B1 none repeat scroll 0 0;\nbox-shadow: 0 1px 3px #ccc inset;\nborder-radius: 3px;\n}\n.CloudBedsDatePicker .pika-button:hover {\ncolor: #fff;\nbackground: #7aad3a;\nbox-shadow: none;\nborder-radius: 3px;\n}\n.CloudBedsDatePicker.pika-single {\nfont-family: \"Trebuchet MS\",Verdana,Arial,sans-serif !important;\n}\n.CloudBedsDatePicker.pika-single .pika-table button {\nbox-shadow: none !important;\nborder: none;\n}\n.CloudBedsDatePicker.pika-single .pika-table td {\nwidth: auto;\nborder: none !important;\npadding: 0 !important;\n}\n.CloudBedsDatePicker.pika-single .pika-table th {\nwidth: auto;\ncolor: #000 !important;\nborder: none !important;\npadding: 0 !important;\n}\n.CloudBedsDatePicker.pika-single table {\nleft: 0 !important;\nmargin-bottom: 0 !important;\n}\n.CloudBedsDatePicker .pika-button {\nborder-radius: 0;\nbox-shadow: none !important;\n}\n\n.CloudBedsDatePicker button{\n    min-width: 10px !important;\n}\n#start_date_mobile, #end_date_mobile{\nposition: absolute;\nopacity: 0;\nwidth: 100%;\nheight: 100%;\nz-index: 1000;\ntop: 0;\nleft: 0;\n}\n.CloudBedsWidget .vertical-widget {\nwidth: 100px;\n}\n.acessa_float_dates .input_group{\nposition: relative;\n}\n.date_mobile{\nfont-size:16px !important;\n}\n.widget_hide{\ndisplay: none !important;\n}\n.float_assoc2 .acessa_float_dates {\nwidth: 700px;\ntext-align: right;\n}\n@media (min-width: 1200px) {\n.float_assoc2 .float{\nwidth: 1200px;\n}\n}\n@media (max-width: 1199px) {\n.float_assoc2 .float{\nwidth: auto;\n}\n} \n");
                Load_css.Load('https://hotels.cloudbeds.com/plugins/pikaday/css/pikaday.css');
                Load_css.Load('https://hotels.cloudbeds.com/assets/themes/widget/css/style.css');

                if (!isFloatWidget) {
                    document.write(html);
                    if (document.querySelectorAll(BClass).length > 1) {
                        baseClass = BClass + widgetUID;
                        document.querySelectorAll(BClass)[1].className = baseClass.replace(/\./g, " ");
                        baseClass += ' ';
                    }
                    bind_actions_by_interval();
                } else {
                    window.onload = function() {
                        // For float widget only
                        var e = document.createElement('div');
                        e.innerHTML = html;
                        document.body.insertBefore(e, document.body.childNodes[0]);

                        if (document.querySelectorAll(BClass).length > 1){
                            baseClass = BClass + widgetUID;
                            document.querySelectorAll('.floatWrapper')[0].className = baseClass.replace(/\./g, " ");
                            baseClass += ' ';
                        }

                        bind_actions_by_interval()
                    }
                }
            };

            function bind_actions_by_interval(){
                var libswaiter = setInterval(function () {
                    if (typeof moment !== 'undefined' && typeof Pikaday !== 'undefined') {
                        uiStylization();
                        clearInterval(libswaiter);
                    }
                }, 1000);
            }

            function uiStylization() {
                if (typeof(window.checkinPicker) == 'undefined') {
                    window.checkinPicker = [];
                }
                if (typeof(window.checkoutPicker) == 'undefined') {
                    window.checkoutPicker = [];
                }
                _bind_dates();
                _generate_link();
            }
            function date_toIso(date){
                return formatDate(date, 'yy-mm-dd');
            }

            function date_fromIso(date){
                date = date.split('-');
                return new Date(date[0], date[1]-1, date[2]);
            }

            function formatDate(date, format)
            {
                var _date = new Date(date.getTime());
                var d = _date.getDate(),
                    m = _date.getMonth() + 1,
                    Y = _date.getFullYear();

                if (d < 10)
                    d = "0" + d;
                if (m < 10)
                    m = "0" + m;

                return format ? format.replace('yy', Y).replace('mm', m).replace('dd', d) : format;
            }


            function _bind_dates() {
                if (typeof Pikaday === 'function') {
                    var nowDate = new Date(),
                        startDate = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate() + (settings.sameDayReservation ? 0 : 1), 0, 0, 0, 0),
                        nextDay = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate() + (settings.sameDayReservation ? 0 : 1) + 1, 0, 0, 0, 0),
                        maxDate = new Date(nowDate.getFullYear() + 2, nowDate.getMonth(), nowDate.getDate() + 1, 0, 0, 0, 0);

                    var dateFormat = settings.dateFormat;
                    dateFormat = dateFormat.toUpperCase();

                    var startDateField = document.querySelectorAll(baseClass + '[name=widget_date]')[0],
                        endDateField = document.querySelectorAll(baseClass + '[name=widget_date_to]')[0],
                        endMobileDateField = document.querySelectorAll(baseClass+ '[name=end_date_mobile]')[0],
                        startMobileDateField = document.querySelectorAll(baseClass+ '[name=start_date_mobile]')[0];

                    window.checkinPicker[widgetUID] = new Pikaday({
                        field: startDateField,
                        format: dateFormat,
                        firstDay: settings.firstDay,
                        isRTL: settings.isRTL,
                        i18n: {
                            previousMonth: settings.prevText,
                            nextMonth: settings.nextText,
                            months: settings.monthNames,
                            monthsShort: settings.monthNamesShort,
                            weekdays: settings.dayNames,
                            weekdaysShort: settings.dayNamesShort
                        },
                        setDefaultDate: true,
                        defaultDate: startDate,
                        minDate: startDate,
                        maxDate: false,
                        onSelect: function () {
                            var date = this.getDate();
                            date.setTime(date.getTime() + (24 * 3600 * 1000));
                            var maxDate = this.getDate();
                            maxDate.setTime(date.getTime() + (2 * 365 * 24 * 60 * 60 * 1000));
                            window.checkoutPicker[widgetUID].setMinDate(date);
                            window.checkoutPicker[widgetUID].setMaxDate(maxDate);
                            var checkoutDate = window.checkoutPicker[widgetUID].getDate();
                            if (checkoutDate < date || checkoutDate > maxDate) {
                                if (checkoutDate < date)
                                    window.checkoutPicker[widgetUID].setDate(date);
                                if (checkoutDate > maxDate)
                                    window.checkoutPicker[widgetUID].setDate(maxDate);
                                if (document.querySelectorAll(baseClass + '[name=end_date_mobile]').length) {
                                    endMobileDateField.value = date_toIso(window.checkoutPicker[widgetUID].getDate());
                                }
                                setTimeout(function () {
                                    window.checkoutPicker[widgetUID].show();
                                }, 100);
                            }
                        },
                        onOpen: function () {
                            this.el.setAttribute('class', 'pika-single is-bound CloudBedsDatePicker');
                        }
                    });

                    window.checkoutPicker[widgetUID] = new Pikaday({
                        field: endDateField,
                        format: dateFormat,
                        firstDay: settings.firstDay,
                        isRTL: settings.isRTL,
                        i18n: {
                            previousMonth: settings.prevText,
                            nextMonth: settings.nextText,
                            months: settings.monthNames,
                            monthsShort: settings.monthNamesShort,
                            weekdays: settings.dayNames,
                            weekdaysShort: settings.dayNamesShort
                        },
                        setDefaultDate: true,
                        defaultDate: nextDay,
                        minDate: nextDay,
                        maxDate: maxDate,
                        onOpen: function () {
                            this.el.setAttribute('class', 'pika-single is-bound CloudBedsDatePicker');
                        }
                    });
                    if (document.querySelectorAll(baseClass+ '[name=end_date_mobile]').length && document.querySelectorAll(baseClass+ '[name=start_date_mobile]').length) {
                        startMobileDateField.value = date_toIso(window.checkinPicker[widgetUID].getDate());
                        endMobileDateField.value = date_toIso(window.checkoutPicker[widgetUID].getDate());
                    }

                    startDateField.addEventListener("change", function(){
                        if (!this.value) {
                            window.checkinPicker[widgetUID].setDate(window.checkinPicker[widgetUID].getDate(), true);
                        }
                        if (document.querySelectorAll(baseClass+ '[name=end_date_mobile]').length) {
                            var date = window.checkinPicker[widgetUID].getDate();
                            date.setTime(date.getTime() + (24 * 3600 * 1000));
                            window.checkoutPicker[widgetUID].setMinDate(date);
                            if (window.checkoutPicker[widgetUID].getDate() <= date) {
                                window.checkoutPicker[widgetUID].setDate(date);
                                endMobileDateField.value = date_toIso(window.checkoutPicker[widgetUID].getDate());
                                setTimeout(function () {
                                    if (!document.querySelectorAll(baseClass+ '.is_mbv').length) {
                                        window.checkoutPicker[widgetUID].show();
                                    }
                                }, 100);
                            }
                        }
                        _generate_link();
                    });
                    endDateField.addEventListener("change", function(){
                        if (!this.value) {
                            window.checkoutPicker[widgetUID].setDate(window.checkoutPicker[widgetUID].getDate(), true);
                        }
                        if (document.querySelectorAll(baseClass+ '[name=start_date_mobile]').length) {
                            startMobileDateField.value = date_toIso(window.checkinPicker[widgetUID].getDate());
                        }
                        _generate_link();
                    });
                    window.addEventListener('resize', function(){
                        if (window.checkinPicker[widgetUID].isVisible()) {
                            window.checkinPicker[widgetUID].adjustPosition();
                        }
                        if (window.checkoutPicker[widgetUID].isVisible()) {
                            window.checkoutPicker[widgetUID].adjustPosition();
                        }
                    }, true);


                    if (document.querySelectorAll(baseClass+ '[name=end_date_mobile]').length && document.querySelectorAll(baseClass+ '[name=start_date_mobile]').length) {
                        startMobileDateField.addEventListener("change", function () {
                            window.checkinPicker[widgetUID].setDate(date_fromIso(this.value), true);
                            this.value = date_toIso(window.checkinPicker[widgetUID].getDate());
                        });
                        endMobileDateField.addEventListener("change", function () {
                            window.checkoutPicker[widgetUID].setDate(date_fromIso(this.value), true);
                            this.value = date_toIso(window.checkoutPicker[widgetUID].getDate());
                        });
                    }
                }
            }

            function _generate_link() {
                var baseHref = settings.bookingUrl,
                    hash = '#checkin=' + date_toIso(window.checkinPicker[widgetUID].getDate())
                        + '&checkout=' + date_toIso(window.checkoutPicker[widgetUID].getDate()),
                    link = document.querySelectorAll(baseClass + ' .submit_link')[0];

                link.href = baseHref + (ga_sess == '' ? '' : '?ga_sess_id=' + ga_sess) + hash;
            }

            var ga_sess = '';
            var ga_onde = settings.analyticsWidgetId;
            var dimensionValue = settings.propertyId;

            if (ga_onde) {
                if (typeof __ofGa == 'undefined') {
                    if (window.GoogleAnalyticsObject) {
                        window.console && window.console.debug('Cloudbeds Widget - Detected prev GA script:', window.GoogleAnalyticsObject);
                        __ofGa = window[window.GoogleAnalyticsObject];
                    } else {
                        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                })(window,document,'script','//www.google-analytics.com/analytics.js','__ofGa');                    }
                    __ofGa('create', ga_onde, {'name': 'ondeFicarTracker', 'cookieDomain': 'none'});
                }

                __ofGa(function () {
                    var ondeFicarTracker = __ofGa.getByName('ondeFicarTracker');
                    ga_sess = ondeFicarTracker.get('clientId');
                    _generate_link();
                });

                __ofGa('ondeFicarTracker.set', 'dimension1', dimensionValue);

                __ofGa('ondeFicarTracker.send', 'event', 'Reserva Widget', 'Widget Load', settings.widgetFormat, {
                    'nonInteraction': 1,
                    'hitCallback': function () {
                        window.console && window.console.debug('Cloudbeds Widget - Widget Load');
                    }
                });
            }
        };
    }
    //</script>


// Load Styles
Load_custom_css.Load_custom('style', ["@charset \"UTF-8\";\n\/*!\n* Cloudbeds Widget\n* Copyright \u00a9 2015 Cloudbeds | https:\/\/www.cloudbeds.com\/\n*\/\n.widgetHotelsForm *{\nmargin: 0;\n}\n.widgetHotelsForm .acessa_widget_block .widgetHotelsInputText, .widgetHotelsForm .acessa_widget_block select {\nborder: 1px solid #3B3B3B;\nborder-radius: 4px 4px 4px 4px;\nbox-shadow: none;\ncolor: #5B5B5B;\nfloat: left;\nfont-family: 'Trebuchet MS', Verdana, sans-serif;\nfont-size: 12px;\nline-height: 20px;\npadding: 4px 22px 4px 6px;\n}\n.widgetHotelsForm .acessa_widget_block select {\nwidth: 100%;\nheight: 30px;\nfloat:none;\n}\n.widgetHotelsForm .acessa_widget_block .widgetHotelsInputText.date,\n.widgetHotelsForm .acessa_widget_block select{\nwidth: 70px;\nheight: 20px !important;\nbox-sizing: content-box;\n-moz-box-sizing: content-box;\n-webkit-box-sizing: content-box;\nmargin:0;\nbackground: #fff;\n}\n.widgetHotelsForm .acessa_widget_block {\ndisplay: inline-block !important;\nmargin-right: 10px !important;\nposition: relative;\n}\n.widgetHotelsForm a.submit_link {\nbox-shadow: 0 1px 0 rgba(255, 255, 255, 0.2) inset, 0 1px 2px rgba(0, 0, 0, 0.05);\ncolor: #333333;\ncursor: pointer;\ndisplay: inline-block;\nfont-size: 14px;\nline-height: 20px;\nmargin-bottom: 0;\nmargin-top: 20px;\npadding: 4px 12px;\ntext-align: center;\ntext-shadow: 0 1px 1px rgba(255, 255, 255, 0.75);\nvertical-align: middle;\nmax-width: 180px;\nborder: 1px solid #fff;\n}\n.CloudBedsWidget .widgetHotelsForm a.submit_link {\nborder-radius: 0 !important;\nbackground: #464646;\ntext-transform: uppercase;\nfont-family: Arial, Helvetica, sans-serif;\nfont-weight: 600;\ncolor: #fff;\npadding: 4px;\nmin-width: 100px;\nmargin-top: -5px;\ntext-shadow: none;\nwhite-space: normal;\ncursor: pointer;\n}\n.CloudBedsWidget .widgetHotelsForm a.submit_link:hover {\nbackground: #FFF;\ncolor: #464646;\n}\n.CloudBedsWidget .horizontal-widget a.submit_link:hover {\nbackground: #808080;\ncolor: #fff;\n}\n.CloudBedsWidget .horizontal-widget, .CloudBedsWidget .vertical-widget { font-family: Arial, Helvetica, sans-serif; }\n.widgetHotelsForm p{\nwidth:auto !important;\nmargin-left:auto !important;\nmargin-top:auto !important;\n}\n.widgetHotelsForm .acessa_widget_block p {\nfont-family: Arial, Helvetica, sans-serif;\nfont-size: 13px;\nline-height: 20px;\npadding: 0;\nmargin-bottom: 0;\n\/*font-stretch: semi-condensed;*\/\n}\n.widgetHotelsForm .horizontal-widget a.submit_link {\nmargin-top:0px;\ncolor: #ffffff;\nposition: relative;\ntop: 24px;\n}\n.widgetHotelsForm .vertical-widget .acessa_widget_block {\nfloat: none !important;\nmargin-right: 0 !important;\nmargin-top: 10px;\n}\n.widgetHotelsForm .vertical-widget a.submit_link {\nmargin-top: 9px;\n}\n.widgetHotelsForm .vertical-widget a.submit_link:hover {\nbackground: #808080;\ncolor: #fff;\n}\n.widgetHotelsForm .vertical-widget .acessa_widget_block .widgetHotelsInputText{\nfloat: none;\n}\n.button {\nborder: none;\nheight: 28px;\nwidth: 96px;\ndisplay: inline-block;\ntext-align: center;\ntext-decoration: none;\ncolor: #ffffff;\nfont-size: 16px;\nfont-weight: bold;\nline-height: 26px;}\n.button.lang-pt-br{\n}\n.button.lang-en{\n}\n.button.lang-es{\n}\n.button:hover{\nbackground-position: center -28px ;\n}\n.button:active{\nbackground-position: center -56px ;\n}\n.largeButton{\nborder: none;\nheight: 38px;\nwidth: 206px;\ndisplay: inline-block;\ntext-align: center;\ntext-decoration: none;\ncolor: #ffffff;\nfont-size: 24px;\nfont-weight: bold;\nline-height: 36px;\n}\n.largeButton:hover{\nbackground-position: center -38px ;\n}\n.largeButton:active {\nbackground-position: center -76px;\n}\n\n\/* ###################################### FLOAT WIDGET ###################################### *\/\n.float_bg2{\nbackground: #464646;\nwidth: 100%;\nz-index: 50001;\nleft:0;\ntop:0;\ndisplay:block;\ncolor: #fff;\nfont-family: Arial, Helvetica, sans-serif;\nfont-size: 13px;\nfont-weight: 600;\nborder: none;\nborder-bottom: 2px solid #fff;\nbox-shadow: 0 3px 5px #808080;\n}\n.float{\npadding-top: 3px;\nmargin-left: auto;\nmargin-right: auto;\nwidth: 1060px;\n}\n\na.submit_link {\n    text-decoration: none;\n}\n\n.float_bg2 a.submit_link {\nmargin: 0;\nborder: 1px solid #fff;\n}\n.float_bg2 .acessa_widget_block p{\nfloat: left;\nline-height: 24px;\npadding: 16px 4px 3px 0;\ncolor:#FFFFFF;\nfont-size: 14px;\ndisplay: inline-block;\n}\n.float_bg2 .acessa_float_left{\nfloat:left;\n}\n.float_bg2 .acessa_float_dates .form_group,\n.float_bg2 .acessa_float_dates .input_group{\ndisplay: inline-block;\n}\n.CloudBedsWidget .float .form_group {\nmargin-right: 10px;\nmargin-bottom: 0;\nwidth: auto;\n}\n.CloudBedsWidget .float .form_group label {\ndisplay: inline-block;\nmargin-right: 10px;\npadding: 0;\nfont-family: Arial, Helvetica, sans-serif;\nfont-size: 13px;\nfont-weight: 400;\ntext-overflow: ellipsis;\nwhite-space: nowrap;\noverflow: hidden;\nline-height: 14px;\nvertical-align: text-bottom;\nmax-width: 80px !important;\n}\n.CloudBedsWidget .float_bg2 .acessa_float_description{\nmargin: 14px 4px 14px 4px;\nfont-size: 14px;\nwidth:390px;\nline-height:15px;\n}\n.CloudBedsWidget .float_bg2 input[type=\"text\"].date,\n.CloudBedsWidget .float_bg2 select{\nwidth: 120px;\nheight: 32px;\nborder: none;\nmargin: 6px 0;\npadding: 0 0 0 10px;\ncolor: #464646;\nfont-size: 13px;\nfont-weight: 300;\nbox-sizing: border-box !important;\nborder-radius:2px;\ndisplay:inline-block;\nbackground:#fff;\n}\n.widgetHotelsForm .widget_text{\ntext-align: center;\nmargin: 30px 51px 0;\nfont-size: 19px;\ncolor: black;\n}\n.float_bg2 .acessa_float_dates {\nwidth: 620px;\ntext-align: right;\n}\n.widgetHotelsForm.v2 .acessa_widget_block {\nmargin-right: 13px !important;\ndisplay: inline-block;\n}\n.CloudBedsWidget .float .dates_group {\ndisplay: inline-block;\n}\n@media (min-width: 1060px) {\n.float{\nwidth: 1060px;\n}\n.float_bg2{\nposition: fixed;\nheight:50px;\n}\n.floatWrapper{\npadding-bottom: 51px\n}\n}\n@media (max-width: 1059px) {\n.float{\nwidth: auto;\n}\n.CloudBedsWidget .float_bg2{\nposition: fixed; \/* Make the div \"float\" over the site *\/\nheight: 87px;\n}\n.CloudBedsWidget .float .form_group label {\ndisplay: inline-block;\ntext-align: left;\n}\n.CloudBedsWidget .float_bg2 .acessa_float_dates  {\nwidth: 100%;\ntext-align: center;\nclear: both;\n}\n.CloudBedsWidget .float_bg2 .acessa_float_description {\nwidth: 100%;\ntext-align: center;\nmargin: 10px 0;\n}\n.floatWrapper{\npadding-bottom: 82px;\n}\n}\n@media (max-width: 549px) {\n.float{\nwidth: auto;\n}\n.CloudBedsWidget .float_bg2{\nposition: absolute !important;\nwidth: 100%;\nheight: 107px;\n}\n.CloudBedsWidget .float .dates_group {\nclear: both;\n}\n.CloudBedsWidget .float .dates_group .end_date {\nmargin-right: 0 !important;\n}\n.CloudBedsWidget .float .form_group label {\ndisplay: block;\ntext-align: left;\n}\n.CloudBedsWidget .widgetHotelsForm.float a.submit_link {\ndisplay: block;\nmargin: 0 auto 10px;\nwidth: 100%;\nmax-width: 252px !important;\n}\n.CloudBedsWidget .float_bg2 .acessa_float_description {\ndisplay: none;\n}\n.floatWrapper{\npadding-bottom: 106px;\n}\n}\n\/* #################################### OTHER ####################################*\/\n.modul_website_published.btn-group {\ndisplay: inline-block;\nfont-size: 0;\nposition: relative;\nvertical-align: middle;\nwhite-space: nowrap;\nz-index: 1;\n}\n.modul_website_published .btn-group {\ndisplay: inline-block;\nfont-size: 0;\nposition: relative;\nvertical-align: middle;\nwhite-space: nowrap;\nz-index: 1;\n}\n.modul_website_published .btn-group > .btn:first-child, .modul_website_published .btn-group > .btn.first-child {\nborder-bottom-left-radius: 4px;\nborder-top-left-radius: 4px;\ncolor: #757575;\nfont-size: 12px;\nmargin-left: 0;\n}\n.modul_website_published .btn-group div.smm {\npadding: 0;\nwidth: 46px;\n}\n.modul_website_published .social_fc > div.btn {\nborder-color: #222F65;\ncolor: #FFFFFF;\nfont-family: Arial,Helvetica,sans-serif;\nfont-size: 16px;\nfont-weight: bold;\nheight: 44px;\n}\n.modul_website_published .social_fc > div.bigger {\npadding: 0 20px;\n}\n.modul_website_published .social_tw > div.btn {\nborder-color: #4B81C5;\ncolor: #FFFFFF;\nfont-family: Arial,Helvetica,sans-serif;\nfont-size: 16px;\nfont-weight: bold;\nheight: 44px;\n}\n.modul_website_published .social_tw > div.bigger {\npadding: 0 30px;\n}\n.modul_website_published .btn-group > .btn, .modul_website_published .btn-group > .dropdown-menu {\nfont-size: 12px;\n}\n.modul_website_published .btn-group > .btn {\nborder-radius: 0 0 0 0;\nposition: relative;\n}\n.modul_website_published .btn {\n-moz-border-bottom-colors: none;\n-moz-border-left-colors: none;\n-moz-border-right-colors: none;\n-moz-border-top-colors: none;\nbackground-color: #F3F3F3;\nbackground-image: linear-gradient(to bottom, #FFFFFF, #E6E6E6);\nbackground-repeat: repeat-x;\nborder-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) #A2A2A2;\nborder-image: none;\nborder-radius: 4px 4px 4px 4px;\nborder-style: solid;\nborder-width: 1px;\nbox-shadow: 0 1px 0 rgba(255, 255, 255, 0.2) inset, 0 1px 2px rgba(0, 0, 0, 0.05);\ncolor: #333333;\ncursor: pointer;\ndisplay: inline-block;\nfont-size: 14px;\nline-height: 20px;\nmargin: 0;\ntext-align: center;\ntext-shadow: 0 1px 1px rgba(255, 255, 255, 0.75);\nvertical-align: middle;\n}\n.modul_website_published .btn-group > .btn:last-child, .modul_website_published .btn-group > .dropdown-toggle {\nborder-bottom-right-radius: 4px;\nborder-top-right-radius: 4px;\n}\n.modul_website_published .btn-group > .btn + .btn {\nmargin-left: -1px;\n}\ndiv.bigger span {\npadding-top:10px;\ndisplay:block;\n}\ndiv.smm img {\npadding-top: 10px;\n}\n.modul_website_published .buttons{\npadding-top:30px;\ntext-align: center;\n}\n.CloudBedsDatePicker table.ui-datepicker-calendar th, .CloudBedsDatePicker table.ui-datepicker-calendar td{\nwidth: auto;\n}\n\/* ************ Style for new datapicker ************** *\/\n.pika-lendar {\nwidth: 210px;\n}\n.CloudBedsDatePicker {\nz-index: 50002 !important;\n}\n.CloudBedsDatePicker.pika-single .is-today .pika-button {\ncolor: #7aad3a;\nfont-weight: bold;\n}\n.CloudBedsDatePicker.pika-single .is-today .pika-button:hover {\ncolor: #fff;\nfont-weight: bold;\n}\n.CloudBedsDatePicker.pika-single .is-selected .pika-button {\ncolor: #000;\nfont-weight: bold;\nbackground: #B1B1B1 none repeat scroll 0 0;\nbox-shadow: 0 1px 3px #ccc inset;\nborder-radius: 3px;\n}\n.CloudBedsDatePicker .pika-button:hover {\ncolor: #fff;\nbackground: #7aad3a;\nbox-shadow: none;\nborder-radius: 3px;\n}\n.CloudBedsDatePicker.pika-single {\nfont-family: \"Trebuchet MS\",Verdana,Arial,sans-serif !important;\n}\n.CloudBedsDatePicker.pika-single .pika-table button {\nbox-shadow: none !important;\nborder: none;\n}\n.CloudBedsDatePicker.pika-single .pika-table td {\nwidth: auto;\nborder: none !important;\npadding: 0 !important;\n}\n.CloudBedsDatePicker.pika-single .pika-table th {\nwidth: auto;\ncolor: #000 !important;\nborder: none !important;\npadding: 0 !important;\n}\n.CloudBedsDatePicker.pika-single table {\nleft: 0 !important;\nmargin-bottom: 0 !important;\n}\n.CloudBedsDatePicker .pika-button {\nborder-radius: 0;\nbox-shadow: none !important;\n}\n\n.CloudBedsDatePicker button{\n    min-width: 10px !important;\n}\n#start_date_mobile, #end_date_mobile{\nposition: absolute;\nopacity: 0;\nwidth: 100%;\nheight: 100%;\nz-index: 1000;\ntop: 0;\nleft: 0;\n}\n.CloudBedsWidget .vertical-widget {\nwidth: 100px;\n}\n.acessa_float_dates .input_group{\nposition: relative;\n}\n.date_mobile{\nfont-size:16px !important;\n}\n.widget_hide{\ndisplay: none !important;\n}\n.float_assoc2 .acessa_float_dates {\nwidth: 700px;\ntext-align: right;\n}\n@media (min-width: 1200px) {\n.float_assoc2 .float{\nwidth: 1200px;\n}\n}\n@media (max-width: 1199px) {\n.float_assoc2 .float{\nwidth: auto;\n}\n} \n"]);
Load_css.Load('https://hotels.cloudbeds.com/plugins/pikaday/css/pikaday.css');
Load_css.Load('https://hotels.cloudbeds.com/assets/themes/widget/css/style.css');
Load_css.Load('https://hotels.cloudbeds.com/assets/themes/widget/css/overlay.css', true);

var CBWidget = CBWidget || {};

CBWidget.Overlay = CBWidget.Overlay || class CBWidgetOverlay {

    root = null;
    btnOpen = null;
    btnClose = null;
    btnSearch = null;
    modal = null;

    calendar1 = null;
    calendar2 = null;
    calendars = [];

    calendarTemplate = null;

    checkin = null;
    checkout = null;

    strCheckinDate = null;
    strCheckoutDate = null;

    strCheckinDay = null;
    strCheckoutDay = null;

    template = null;
    settings = null;

    constructor(settings) {
        this.settings = settings;
        this.init();
    }

    compileTemplate(template, data = {}) {
        const replaceAll = (str, find, replace) => str.replace(new RegExp(find, 'g'), replace);
        let text = template;
        for (let key in data) {
            if (data.hasOwnProperty(key)) {
                text = replaceAll(text, '{{' + key + '}}', data[key]);
            }
        }
        return text;
    }

    appendWidgetToDocument() {

        const data = { ...this.settings.translations };
        
        const div = document.createElement('div');
        div.innerHTML = this.compileTemplate(`
        <div id="CBWidget">
            <button id="cbwidget-btn-open" class="btn-open"><span>{{bookNowText}}</span></button>
            <div id="cbwidget-overlay" class="overlay" style="display:none">
                <div class="header">
                    <button id="cbwidget-btn-close" class="btn-close">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.6797 12.5L20.5312 18.4062C20.9688 18.8073 20.9688 19.2083 20.5312 19.6094L19.1641 20.9766C18.763 21.4141 18.362 21.4141 17.9609 20.9766L12.0547 15.125L6.14844 20.9766C5.7474 21.4141 5.34635 21.4141 4.94531 20.9766L3.57812 19.6094C3.14062 19.2083 3.14062 18.8073 3.57812 18.4062L9.42969 12.5L3.57812 6.59375C3.14062 6.19271 3.14062 5.79167 3.57812 5.39062L4.94531 4.02344C5.34635 3.58594 5.7474 3.58594 6.14844 4.02344L12.0547 9.875L17.9609 4.02344C18.362 3.58594 18.763 3.58594 19.1641 4.02344L20.5312 5.39062C20.9688 5.79167 20.9688 6.19271 20.5312 6.59375L14.6797 12.5Z" fill="black"/>
                    </svg>
                    </button>
                    <h1 id="cbwidget-title"><span>{{bookNowText}}<span></h1>
                    <p id="cbwidget-subtitle"><span><span></p>
                </div>
                <div class="content">
                    <div id="cbwidget-calendar-desktop" class="calendar"></div>
                    <div id="cbwidget-calendar-mobile" class="calendar"></div>
                    <div class="date-preview">
                        <div class="date-preview-container">
                            <div class="date-preview-content">
                                <div class="flex-content">
                                    <div class="date-item">
                                        <div class="step-name" id="cbwidget-checkin"><span>{{checkinText}}</span></div>
                                        <div id="cbwidget-checkin-date" class="formatted-date">12/12/2021</div>
                                        <div id="cbwidget-checkin-day" class="day-name">Day Name</div>
                                    </div>
                                    <div class="arrow">
                                        <svg width="21" height="12" viewBox="0 0 21 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.9375 11.1562C15.7812 11.3438 15.5781 11.3906 15.3281 11.2969C15.1094 11.2031 15 11.0312 15 10.7812V7.40625H0.5625C0.40625 7.40625 0.265625 7.35938 0.140625 7.26562C0.046875 7.14062 0 7 0 6.84375V5.34375C0 5.21875 0.046875 5.09375 0.140625 4.96875C0.265625 4.84375 0.40625 4.78125 0.5625 4.78125H15V1.45312C15 1.20313 15.1094 1.03125 15.3281 0.9375C15.5781 0.84375 15.7812 0.890625 15.9375 1.07812L20.625 5.71875C20.875 5.96875 20.875 6.23438 20.625 6.51562L15.9375 11.1562Z" fill="currentColor"/>
                                        </svg>
                                    </div>
                                    <div class="date-item">
                                        <div class="step-name" id="cbwidget-checkout"><span>{{checkoutText}}</span></div>
                                        <div id="cbwidget-checkout-date" class="formatted-date">12/12/2021</div>
                                        <div id="cbwidget-checkout-day" class="day-name">Day Name</div>
                                    </div>
                                </div>
                            </div>
                            <button id="cbwidget-btn-search" class="btn-search"><span>{{searchText}}</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `, data);
        
        const scriptTag = document.scripts[document.scripts.length - 1];
        scriptTag.parentNode.appendChild(div);

        return div;
    }

    async init() {

        this.root = this.appendWidgetToDocument();


        this.checkin = null;
        this.checkout = null;

        this.modal = this.root.querySelector('#cbwidget-overlay');
        this.btnOpen = this.root.querySelector('#cbwidget-btn-open');
        this.btnClose = this.modal.querySelector('#cbwidget-btn-close');
        this.btnSearch = this.modal.querySelector('.btn-search');

        this.btnOpen.addEventListener('click', (e) => this.open(e));
        this.btnClose.addEventListener('click', (e) => this.close(e));
        this.btnSearch.addEventListener('click', (e) => {
            this.search(e)
            this.btnSearch.blur();
        });

        this.strCheckinDate = this.modal.querySelector('#cbwidget-checkin-date');
        this.strCheckoutDate = this.modal.querySelector('#cbwidget-checkout-date');

        this.strCheckinDay = this.modal.querySelector('#cbwidget-checkin-day');
        this.strCheckoutDay = this.modal.querySelector('#cbwidget-checkout-day');

        this.calendars = [];
        this.createCalendar(this.modal.querySelector('#cbwidget-calendar-desktop'), 2);
        this.createCalendar(this.modal.querySelector('#cbwidget-calendar-mobile'), 1);
    }

    onUpdateDate() {

        for (let i = 0; i < this.calendars.length; i++) {
            this.calendars[i].setStartRange(this.checkin);
            this.calendars[i].setEndRange(this.checkout);
            this.calendars[i].draw();
        }

        this.strCheckinDate.innerHTML = this.formatDateHumanReadable(this.checkin);
        this.strCheckoutDate.innerHTML = this.formatDateHumanReadable(this.checkout);

        this.strCheckinDay.innerHTML = this.getDayName(this.checkin);
        this.strCheckoutDay.innerHTML = this.getDayName(this.checkout);

        if (!this.checkin && !this.checkout) {
            this.btnSearch.classList.add('btn-search-disabled');
        }
        else {
            this.btnSearch.classList.remove('btn-search-disabled');
        }

    }

    getDayName(date) {
        if (!date) return '';
        return this.settings.dayNames[date.getDay()];
    }

    createFromTemplate(template) {
        const div = document.createElement('div');
        div.innerHTML = template;
        return div;
    }

    onDateSelected(date) {
        const checkinTime = this.checkin ? this.checkin.getTime() : 0;
        const checkoutTime = this.checkout ? this.checkout.getTime() : 0;
        const dateTime = date.getTime();

        for (let i = 0; i < this.calendars.length; i++) {
            this.calendars[i].setDate(null);
        }

        if (dateTime === checkinTime) {
            this.checkin = null;
            this.checkout = null;
        }
        else if (dateTime === checkoutTime) {
            this.checkout = null;
        }
        else if (!this.checkin) {
            this.checkin = date;
        }
        else if (dateTime < checkinTime) {
            this.checkin = date;
        }
        else {
            this.checkout = date;
        }


        this.onUpdateDate();
    }

    moveCalendar(direction) {
        for (let i = 0; i < this.calendars.length; i++) {
            if (direction < 0) {
                this.calendars[i].prevMonth();
            }
            else {
                this.calendars[i].nextMonth();
            }
        }
    }

    createCalendar(target, numberOfMonths) {

        const i18n = {
            previousMonth : '',
            nextMonth     : '',
            months        : this.settings.translations.monthNames,
            weekdays      : this.settings.translations.dayNames,
            weekdaysShort : this.settings.translations.dayNamesShort
        }

        const picker = new Pikaday({
            i18n, 
            minDate:new Date(), 
            bound: false, 
            numberOfMonths,
            onSelect: (e) => this.onDateSelected(e),
        })
        picker.gotoDate(new Date());
        target.appendChild(picker.el);

        this.calendars.push(picker);
        return picker;
    }

    formatDate(date) {
        if (!date) return '-'
        return date.toISOString().split('T')[0];
    }

    formatDateHumanReadable(date) {
        if (!date) return '-';
        const m = moment(date);
        m.locale(this.settings.language);
        const format = this.settings.language === 'en' ? 'MMM D, YYYY' : 'D MMM YYYY';
        return m.format(format);
    }

    open(e) {
        if (e) {
            const documentCSSRoot = document.querySelector(':root');
            documentCSSRoot.style.setProperty('--cbwidgetoverlay-mouse-x', e.clientX + 'px');
            documentCSSRoot.style.setProperty('--cbwidgetoverlay-mouse-y', e.clientY + 'px');
        }
        this.onUpdateDate();
        this.modal.classList.add('cbwidget-modal-open');
    }

    close() {
        this.modal.classList.remove('cbwidget-modal-open');
    }

    search(e) {
        if (!this.checkin || !this.checkout) return;
        const strCheckin = this.formatDate(this.checkin);
        const strCheckout = this.formatDate(this.checkout);
        window.open(this.settings.bookingUrl + `#checkin=${strCheckin}&checkout=${strCheckout}`, this.settings.target);
    }

}

new CBWidget.Overlay({
    "widgetFormat": "overlay",
    "propertyId": 300755,
    "sameDayReservation": true,
    "dateFormat": "dd\/mm\/yyyy",
    "firstDay": 0,
    "isRTL": false,
    "prevText": "&#x3c;Prev",
    "nextText": "Next&#x3e;",
    "monthNames": [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ],
    "monthNamesShort": [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ],
    "dayNames": [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ],
    "dayNamesShort": [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
    ],
    "bookingUrl": "https:\/\/hotels.cloudbeds.com\/en\/reservation\/6AjIE8",
    "analyticsWidgetId": "UA-38521101-4",
    "language": "en",
    "translations": {
        "closeText": "Done",
        "prevText": "&#x3c;Prev",
        "nextText": "Next&#x3e;",
        "currentText": "Today",
        "weekHeader": "Wk",
        "bookNowText": "BOOK NOW",
        "searchText": "Search",
        "checkinText": "Check-in",
        "checkoutText": "Check-out",
        "monthNames": [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ],
        "monthNamesShort": [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
        ],
        "dayNames": [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ],
        "dayNamesShort": [
            "Sun",
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat"
        ],
        "dayNamesMin": [
            "Su",
            "Mo",
            "Tu",
            "We",
            "Th",
            "Fr",
            "Sa"
        ],
        "firstDay": 0,
        "isRTL": false
    },
    "target": "_blank"
});

//</script>
