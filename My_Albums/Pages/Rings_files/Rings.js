// Created by iWeb 3.0.4 local-build-20121102

function createMediaStream_id3()
{return IWCreatePhotocast("file://localhost/Users/Amers/amymadethat2/AmyMadeThat/My_Albums/Pages/Rings_files/rss.xml",true);}
function initializeMediaStream_id3()
{createMediaStream_id3().load('file://localhost/Users/Amers/amymadethat2/AmyMadeThat/My_Albums/Pages',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id3',{pageIndex:0}));});}
function layoutMediaGrid_id3(range)
{createMediaStream_id3().load('file://localhost/Users/Amers/amymadethat2/AmyMadeThat/My_Albums/Pages',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id3',new IWPhotoGridLayout(3,new IWSize(166,166),new IWSize(166,32),new IWSize(204,213),27,27,0,new IWSize(18,31)),new IWPhotoFrame([IWCreateImage('Rings_files/Pushpin_01.jpg'),IWCreateImage('Rings_files/Pushpin_02.jpg'),IWCreateImage('Rings_files/Pushpin_03.jpg'),IWCreateImage('Rings_files/Pushpin_06.jpg'),IWCreateImage('Rings_files/Pushpin_09.jpg'),IWCreateImage('Rings_files/Pushpin_02_1.jpg'),IWCreateImage('Rings_files/Pushpin_03_1.jpg'),IWCreateImage('Rings_files/Pushpin_04.jpg')],null,1,0.500000,0.000000,0.000000,0.000000,0.000000,18.000000,18.000000,18.000000,18.000000,298.000000,472.000000,298.000000,472.000000,'Rings_files/bullet_pp_3.png',new IWPoint(0.500000,-10),new IWSize(45,65),0.100000),imageStream,range,null,null,1.000000,{backgroundColor:'rgb(0, 0, 0)',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:0,transitionIndex:2},'../../Media/slideshow.html','widget1','widget2','widget3')});}
function relayoutMediaGrid_id3(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id3(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id3(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('../../Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','../../Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','../../Media/Photo-Overlay-Movie.png')
loadMozillaCSS('Rings_files/RingsMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');NotificationCenter.addObserver(null,relayoutMediaGrid_id3,'RangeChanged','id3')
fixAllIEPNGs('../../Media/transparent.gif');Widget.onload();initializeMediaStream_id3()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
