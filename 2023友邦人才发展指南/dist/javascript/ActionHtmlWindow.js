function ActionHtmlWindow(e){var t=this,o=(e=(e=e).split(";"),d=e[0]||"",p=/^(<iframe|<embed).*(<\/iframe>|<\/embed>)$/.test(d)?d:"",{oldSrc:d,src:d.replace(/^http:/,window.location.protocol),width:e[1]||600,height:e[2]||340,title:e[3]||"",iStr:p}),i=document.createElement("div"),n=document.createElement("div"),l=document.createElement("div"),d=document.createElement("div"),r=document.createElement("iframe"),e=i.style,p=n.style,h=l.style,a=d.style,c=r.style,s=document.createElement("div"),m=s.style,g=0,s=(""!=o.title&&" "!=o.title&&(d.appendChild(s),g=30),m.height=g,s.innerHTML=o.title,m.lineHeight=g-1+"px",m.fontSize="16px",m.borderBottom="1px solid #c1c1c1",m.paddingLeft="8px",document.createElement("div")),u=s.style,m=(u.position="relative",u.display="block",u.backgroundColor="#fff",u.lineHeight="0px",u.margin="0",u.width="100%",u.maxWidth=o.width+"px",u.height=o.height+"px",e.position="fixed",e.top="0",e.right="0",e.bottom="0",e.left="0",e.zIndex="1040",e.opacity=.5,e.backgroundColor="#000",m=i,e=50,document.all?m.style.filter="alpha(opacity="+e+")":m.style.opacity=e/100,p.position="fixed",p.top="0",p.right="0",p.bottom="0",p.left="0",p.zIndex="1040",p.padding="0",p.border="none",p.margin="0",p.overflow="auto",a.position="relative",a.display="block",a.backgroundColor="#fff",a.lineHeight="0px",a.margin="0 auto",a.maxWidth="100%",a.width=o.width+"px",a.height=parseInt(o.height)+g+"px",h.position="fixed",h.width="60px",h.height="60px",h.top="0px",h.right="0px",h.overflow="hidden",h.cursor="pointer",l.title="Close",l.innerHTML="<img src='files/extfiles/close_btn.png' style='width:100%;height:100%;'>",new Image);if(m.onload=function(){l.innerHTML="<img src='files/extfile/close_btn.png' style='width:100%;height:100%;'>"},m.onerror=function(){l.innerHTML="<img src='../files/extfile/close_btn.png' style='width:100%;height:100%;'>"},m.src="files/extfile/close_btn.png",n.appendChild(d),n.appendChild(l),d.appendChild(s),""==o.iStr){c.position="relative",c.border="none",c.margin="0",c.padding="0",c.left="0px",c.top="0px",r.setAttribute("frameborder",0),r.setAttribute("allowfullscreen",!0),r.width="100%",r.height="100%",r.src=o.src,s.appendChild(r);try{$.ajax({url:o.src,type:"GET",dataType:"jsonp",timeout:3e3,complete:function(e){200!=e.status&&(r.src=o.oldSrc)}})}catch(o){}}else{e=(e=o.iStr).replace(/http:/g,""),m=(p=e,(h=document.createElement("div")).innerHTML=p,h.childNodes[0]),c=m.style;c.position="relative",c.border="none",c.margin="0",c.padding="0",c.left="0px",c.top="0px",c.width="100%",c.height="100%",s.appendChild(m)}function f(){var e,t=window.innerHeight||$(window).height(),i=parseInt(o.height)+g;t-20<=i?(e=(t=t-20)-g,a.height=t+"px",u.height=e+"px"):(a.height=i+"px",u.height=o.height+"px"),a.marginTop=Math.max(10,(n.clientHeight-(parseInt(o.height)+g))/2)+"px",a.marginBottom=Math.max(10,(n.clientHeight-(parseInt(o.height)+g))/2)+"px"}e=document.getElementsByTagName("body")[0];e.appendChild(i),e.appendChild(n),n.onclick=function(){var e=document.getElementsByTagName("body")[0];e.removeChild(i),e.removeChild(n)},d.onclick=function(e){return e.preventDefault(),!1},l.onclick=function(e){e.stopPropagation(),e.preventDefault();e=document.getElementsByTagName("body")[0];return e.removeChild(i),e.removeChild(n),window.FlipBookBuilder.onCloseHtml&&window.FlipBookBuilder.onCloseHtml(),!1},setTimeout(function(){t.box=n,t.bg=i},0);f(),window.onresize=function(){f()}}ActionHtmlWindow.prototype={constructor:ActionHtmlWindow,destroy:function(){var e=document.getElementsByTagName("body")[0];e.removeChild(this.bg),e.removeChild(this.box),window.FlipBookBuilder.onCloseHtml&&window.FlipBookBuilder.onCloseHtml()}};