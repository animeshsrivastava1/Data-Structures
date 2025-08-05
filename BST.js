class TreeNode{
 left;
 right;
val;
constructor(val)
{
    this.left = null;
    this.right = null;
    this.val = val
}
}


class BST{

    root;

    constructor()
    {
        this.root = null;
    }

    insert(val)
    {
        let newNode = new TreeNode(val);
        if(this.root==null)
        {
            this.root = newNode;
            return;
        }
        
        this.insertNode(this.root,newNode);
    }

    insertNode(root,newNode)
    {
        if(root==null)
        return newNode;

        if(root.val>newNode.val)
        root.left  = this.insertNode(root.left,newNode);
        else if(root.val<=newNode.val)
        root.right = this.insertNode(root.right,newNode)

        return root;
    }



    printPreOrder()
    {
        if(this.root==null)
        return;
        this.preOrderHelper(this.root)
    }

    preOrderHelper(curr)
    {
        if(curr==null)
        return ;

        
        console.log(curr.val);
        this.preOrderHelper(curr.left);
        this.preOrderHelper(curr.right)
    }

    printPostOrder()
    {
        if(this.root==null)
        return;
        this.postOrderHelper(this.root)
    }

    postOrderHelper(curr)
    {
        if(curr==null)
        return;

        
       
        this.postOrderHelper(curr.left);
        
        this.postOrderHelper(curr.right)
        console.log(curr.val);
    }

    printInOrder()
    {
        if(this.root==null)
        return;
        this.inOrderHelper(this.root)
    }

    inOrderHelper(curr)
    {
        if(curr==null)
        return;

        
       
        this.inOrderHelper(curr.left);
        console.log(curr.val);
        this.inOrderHelper(curr.right)
    }

    deleteNode(val)
    {
        if(this.root == null)
        return;

        this.root = this.deleteNodeHelper(this.root,val);
    }

    deleteNodeHelper(curr,val)
    {
        if(curr==null)
        return curr;
        
            if(curr.val<val)
            curr.right = this.deleteNodeHelper(curr.right,val);
            else if(curr.val>val)
            curr.left = this.deleteNodeHelper(curr.left,val);
            else
            {
                if(curr.left==null && curr.right==null)
                return null;

                if(curr.left==null && curr.right!=null)
                    return curr.right
                else if(curr.left!=null && curr.right==null)
                    return curr.left
                else
                {
                    let currTracker = curr.right;
                    while(currTracker.left!=null)
                    {
                        currTracker = currTracker.left;
                    }
                    curr.val = currTracker.val;
                    curr.right = this.deleteNodeHelper(curr.right,currTracker.val)
                }
                

            }
            return curr;
        
    }
}

const BSTree = new BST();
BSTree.insert(67);
BSTree.insert(42);
BSTree.insert(89);
BSTree.insert(23);
BSTree.insert(55);
BSTree.insert(78);
BSTree.insert(91);
BSTree.insert(15);
BSTree.insert(34);
BSTree.insert(48);
BSTree.insert(62);
BSTree.insert(73);
BSTree.insert(85);
BSTree.insert(95);
BSTree.insert(12);
BSTree.insert(18);
BSTree.insert(29);
BSTree.deleteNode(91)
BSTree.insert(38);
BSTree.insert(51);
BSTree.insert(59);
BSTree.printPreOrder();