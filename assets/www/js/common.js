

// for supplier
function main_menuSupplier()
{
	var str='';
	str+='<div class="main-menu-cont" id="sidr">';
	str+='<ul>';
	str+='<li><a href="#">Create Message</a></li>';
	str+='<li><a href="#">Create Group Message</a></li>';
	str+='<li><a href="#">Inbox</a></li>';
	str+='<li><a href="#">Sent Items</a></li>';
	//str+='<li><a href="main-menu.html">Upload LR Copy <span>(only for supplier)</span></a></li>';
	str+='<li><a href="#" onclick="supplierLogout();">Logout</a></li>';
	str+='</ul>';      	
	str+='</div>';
	document.write(str);
}

//for employee
function main_menuEmployee()
{
	var str='';
	str+='<div class="main-menu-cont" id="sidr">';
	str+='<ul>';
	str+='<li><a href="#">Create Message</a></li>';
	str+='<li><a href="#">Create Group Message</a></li>';
	str+='<li><a href="#">Inbox</a></li>';
	str+='<li><a href="#">Sent Items</a></li>';
	str+='<li><a href="#" onclick="employeeLogout();">Logout</a></li>';
	str+='</ul>';      	
	str+='</div>';
	document.write(str);
}

