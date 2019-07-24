// 606. Construct String from Binary Tree
// https://leetcode.com/problems/construct-string-from-binary-tree/

const tree2str = (t) => {
	if(!t) return '';
	if (t.left || t.right) {
		if (t.right) return `${t.val}(${tree2str(t.left)})(${tree2str(t.right)})`
		else return `${t.val}(${tree2str(t.left)})`
	} else return `${t.val}`;
}