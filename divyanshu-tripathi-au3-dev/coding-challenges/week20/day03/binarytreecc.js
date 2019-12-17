// Given a binary tree and a node, find the level order successor of the given node in the tree. 
// The level order successor is the node that appears right after the given node in the level order traversal.

TRAVERSAL = {};



TRAVERSAL.TreeNode = function(){
	this.item = null;
	this.parent = null;
	this.firstChild = null;
	this.nextSibling = null;
	
	

	this.levelorder = function(){
		var queue = new Array();
		queue.push(this);
		while(queue.length > 0){
			var node = queue.shift();
			console.log("Visited Node: "+node.item);
			if(node.firstChild != null){
				queue.push(node.firstChild);
				if(node.firstChild.nextSibling != null){
					queue.push(node.firstChild.nextSibling);
				}
			}
		}
	}
	
	this.visited = function(){
		console.log("Current Node visited: "+this.item);
	}
}


TRAVERSAL.TreeList = function(){
	this.root = null;
	this.size = null;
	
	this.createBasicTree = function(){
		var home = createNode("Home",null,null,null);
		this.root = home;
		
		var users = createNode("Users",home,null,null);
		home.firstChild = users;
		
		var user1 = createNode("User1",users,null,null);
		users.firstChild = user1;
		
		var user2 = createNode("User2",users,null,null);
		user1.nextSibling = user2;
		
		var user3 = createNode("User3",users,null,null);
		user2.nextSibling = user3;
		
		var files = createNode("Files",home, null,null);
		users.nextSibling = files;
		
		var file1 = createNode("File1",files,null,null);
		files.firstChild = file1;
		
		var desktop = createNode("Desktop",user1,null,null);
		user1.firstChild = desktop;
		
		var file2 = createNode("File2",files,null,null);
		file1.nextSibling = file2;
		
		var languages = createNode("Languages",home,null,null);
		files.nextSibling = languages;
		
		var javaL = createNode("Java",languages,null,null);
		languages.firstChild = javaL;
		
		var jsL = createNode("JS",languages,null,null);
		javaL.nextSibling = jsL;
	}
	
	var createNode = function(item,parent, firstChild, nextSibling){
		var node = new TRAVERSAL.TreeNode();
		node.item = item;
		node.parent = parent;
		node.firstChild = firstChild;
		node.nextSibling = nextSibling;
		return node;
	}
	
	this.getRoot = function(){
		return this.root;
	}
}

var tree = new TRAVERSAL.TreeList();
tree.createBasicTree();
console.log("Tree:");
var root = tree.getRoot();

console.log("Level Order");
console.log(root.levelorder());

