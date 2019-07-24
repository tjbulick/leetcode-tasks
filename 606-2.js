// 606. Construct String from Binary Tree
// https://leetcode.com/problems/construct-string-from-binary-tree/

// this solution has a contracted form of conditional statements, replaced by ternary operators
const tree2str = (t) => {
	if(!t) return '';
	return t.val + (t.left || t.right ? `(${tree2str(t.left)})` : '') + (t.right ? `(${tree2str(t.right)})` : '');
}