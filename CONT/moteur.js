var item = new Array();


// "Page","Address","","Title of the page","Keyword","Description of the page"

//A
c=0; item[c]=new Array("","","Aa","a","a");

//ほ
c++; item[c]=new Array("","","ほうがんし【方眼紙】","方眼紙, graph paper, a","Papel quadriculado; Graph paper;");

//め
//めい
c++; item[c]=new Array("","","め<font color='red'>いだい</font>【命題】","命題, proposition, a","Proposição; Proposition;");

//り
//りせ
c++; item[c]=new Array("","","<font color='red'>り</font>せい・り<font color='red'>せい</font>【理性】","理性, reason","Razão; Reason;");

//ろ
//ろん
c++; item[c]=new Array("","","ろ<font color='red'>んしょう</font>【論証】","論証, logical argument","Argumento lógico; Logical argument;");

page=
"<html><head><title>Results of the search</title></head><body bgcolor=''><center><a href='https://demisart.github.io/nihongo/'><img src='https://demisart.github.io/nihongo/CONT/homecanvas.png' style='max-width:100px;width: auto;'/></a><table border=0 cellspacing=10 width=80%>"
;

function search(frm) {
	win=window.open("", "_self");
	win.document.write(page);
	txt = frm.srchval.value.split(" ");
	fnd = new Array(); total=0;
	for (i = 0; i < item.length; i++) {
		fnd[i] = 0; order = new Array(0, 4, 2, 3);
		for (j = 0; j < order.length; j++)
		for (k = 0; k < txt.length; k++)
		if (item[i][order[j]].toLowerCase().indexOf(txt[k]) > -1 && txt[k] != "")
		fnd[i] += (j+1);
	}
	for (i = 0; i < fnd.length; i++) {
		n = 0; w = -1;
		for (j = 0;j < fnd.length; j++)
		if (fnd[j] > n) { n = fnd[j]; w = j; };
		if (w > -1) total += show(w, win, n);
		fnd[w] = 0;
	}
win.document.write("</table><br><font face='meiryo'>約 <b>"+total+"</b> 件</font><br></body></html>");
win.document.close();
}
function show(which,wind,num) {
	link = item[which][1] + item[which][0]; 
	line = "<tr><td><a href='"+link+"' style='color:black; font-family:Meiryo;font-weight: bold; text-decoration:none;'>"+item[which][2]+"</a> <br/>";
	line += item[which][4] + "</td></tr>";
	wind.document.write(line);
return 1;
}
