function cntGetCookieVal (offset) {
    var endstr = document.cookie.indexOf (";", offset);
    if (endstr == -1)
         endstr = document.cookie.length;
    return unescape(document.cookie.substring(offset, endstr));
}
function cntGetCookie (name) {
    var arg = name + "=";
    var alen = arg.length;
    var clen = document.cookie.length;
    var i = 0;
    while (i < clen) {
      var j = i + alen;
      if (document.cookie.substring(i,j)==arg) return cntGetCookieVal(j);
      i = document.cookie.indexOf(" ", i) + 1; if (i == 0) break;
  }
  return null;
}
function cntSetCookie (name, value) {
    var argv = cntSetCookie.arguments;
    var argc = cntSetCookie.arguments.length;
    document.cookie = name + "=" + escape (value) +
    "; expires=Thu, 14 May 2020 02:33:40 GMT";
}
var fv = cntGetCookie('cnt_676053_fv');
var lv = cntGetCookie('cnt_676053_lv');
var nv = cntGetCookie('cnt_676053_nv');
var t  = 1274063620;
var isUnique = 0;
if( fv==null ) {
  fv=t;
  cntSetCookie('cnt_676053_fv',fv);
}
if( lv==null ) {
  lv=t;
}
if( nv==null ) {
  nv=1;
  isUnique=1;
} else {
if( (t-lv)>3600 ) {
		nv++;
		isUnique=1;
   }
}
cntSetCookie('cnt_676053_lv',t);
cntSetCookie('cnt_676053_nv',nv);
if(!self.screen){
	 screen=new Object();
	 screen.width=screen.height=screen.colorDepth=0;
}
document.write('<SCRIPT Language="JavaScript" src="http://analyzer2.fc2.com/processer.js?','uid=676053','&fv=',fv,'&lv=',lv,'&nv=',nv,'&t=',t,'&isUnique=',isUnique,'&ref=',escape(document.referrer)+'','&x=',screen.width,'&y=',screen.height,'&cols=',screen.colorDepth,'">',
'</SCRIPT>');
