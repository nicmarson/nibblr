var input,cursor,hiddenInput,content=[],lastContent="",targetContent="",inputLock=!1,autoWriteTimer,isMobile,isIE;$(function(){function e(){inputLock=!0;if(targetContent.length-lastContent.length===0)return;var t=targetContent.substring(0,lastContent.length+1);content=[];var n=!1;for(var r=0;r<t.length;r++){var i=t.charAt(r),s=document.createElement("div");s.setAttribute("class","letterContainer");var o=document.createElement("div"),u=r%2===0?"letterAnimTop":"letterAnimBottom",a=lastContent.charAt(r)===i?"letterStatic":u;a!=="letterStatic"&&(n=!0);o.setAttribute("class",a);s.appendChild(o);o.innerHTML=i;content.push(s)}input.innerHTML="";for(var r=0;r<content.length;r++)input.appendChild(content[r]);cursor.style.paddingLeft=n?"22px":"0";!isMobile&&!isIE&&input.appendChild(cursor);targetContent.length-lastContent.length>1?setTimeout(e,150):inputLock=!1;lastContent=t}input=$("#inputAnim");hiddenInput=$("#inputURL");hiddenInput.focus();input.append('<cursor class="blink">|</cursor>');if(document.addEventListener){document.addEventListener("touchstart",function(){clearInterval(autoWriteTimer);targetContent=lastContent},!1);document.addEventListener("click",function(){clearInterval(autoWriteTimer);targetContent=lastContent;hiddenInput.focus()},!1);isIE?setInterval(function(){targetContent=hiddenInput.value;targetContent!==lastContent&&!inputLock&&e()},100):hiddenInput.addEventListener("input",function(t){t.preventDefault();targetContent=hiddenInput.value;inputLock||e()},!1)}hiddenInput.value="";autoWriteTimer=setTimeout(function(){if(lastContent!=="")return;targetContent="enter your URL...";e()},2e3)});