function pushToTrackerViaImage()
{var pushURL='../../../../../coldtrc.com/click.php@event7=1';var img=document.createElement('img');img.src=pushURL;img.style.display='none';document.body.appendChild(img);}
function pushAfterTimeout(timeout)
{setTimeout(pushToTrackerViaImage,timeout*1000);}
var TIMEOUT_IN_SECONDS=30;pushAfterTimeout(TIMEOUT_IN_SECONDS);