/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
const serialize = root => {
	const output = [];

	const traverse = root => {
		if (!root) return output.push('null');

		output.push(root.val);
		traverse(root.left);
		traverse(root.right);
	};

	traverse(root);
	return output.join(',');
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
 const deserialize = data => {
	data = data.split(',');

	let idx = 0;
	const traverse = data => {
		const val = data[idx++];
		const root = new TreeNode(val);

		if (val === 'null') return null;

		root.left = traverse(data);
		root.right = traverse(data);

		return root;
	};

	return traverse(data);
};