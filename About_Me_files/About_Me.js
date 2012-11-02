// Created by iWeb 3.0.4 local-build-20121102

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({reflection_3:new IWReflection({opacity:0.50,offset:1.00}),reflection_1:new IWReflection({opacity:0.50,offset:1.00}),reflection_0:new IWReflection({opacity:0.50,offset:-23.00}),reflection_4:new IWReflection({opacity:0.50,offset:1.00}),reflection_2:new IWReflection({opacity:0.50,offset:1.00})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('About_Me_files/About_MeMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');fixAllIEPNGs('Media/transparent.gif');Widget.onload();applyEffects()}
function onPageUnload()
{Widget.onunload();}
