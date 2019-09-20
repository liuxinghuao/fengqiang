document.writeln('<style>.fc{ width: 136px; height: 582px; position: fixed; top: 90px; left: 0; text-align: right;z-index: 999;}</style>');
document.writeln('<img class="fc" src="swt/fc.png" usemap="#float" id="swt"></img>');
document.writeln('<map name="float" id="float">');
document.writeln('<area shape="rect" coords="116,10,130,24" id="close">');
document.writeln('<area shape="rect" coords="17,242,120,266" href="swt.html"/>');
document.writeln('<area shape="rect" coords="17,212,120,236" href="swt.html"/>');
document.writeln('<area shape="rect" coords="17,272,120,296" href="swt.html"/>');
document.writeln('<area shape="rect" coords="17,434,120,458" href="swt.html"/>');
document.writeln('<area shape="rect" coords="17,464,120,488" href="swt.html"/');
document.writeln('</map>');
		$(function(){
			$('#close').click(function(){
			    $(this).hide();
			    $("#swt").hide();
			})
		});