class TrieNode{
    isEnd;
    children;
    constructor()
    {
        this.isEnd=false;
        this.children = {}
    }
}


class Trie{
    root;
    constructor()
    {
        this.root=new TrieNode();
    }

    insert(val)
    {
        let tracker = this.root;
        for(let i  =0 ;i < val.length ; i++)
        {
            let currChar = val[i]
            if(!tracker.children[currChar])
            {
                tracker.children[currChar] = new TrieNode();
            }
          

            tracker = tracker.children[currChar]
          
        }
        tracker.isEnd = true
        
        
    }

    search(val)
    {
        let tracker = this.root;
        for(let i = 0 ; i < val.length ; i++)
        {
            let curr = val[i];

            if(tracker.children[curr]!==undefined)
            tracker = tracker.children[curr];
        }

        if(tracker.isEnd==true)
        return true;

        return false;
    }

    print()
    {
        this.printHelper(this.root,"")
    }

    printHelper(curr,currentWord)

    {
        if(curr.isEnd==true)
        {
            console.log(currentWord);
            return;
        }

        for(let c in curr.children)
        {
            this.printHelper(curr.children[c],currentWord+c)
        }
    }
    




}

let trie  = new Trie();
trie.insert('apple');
trie.insert('bag');
trie.print()
/
console.log(trie.search('apple'))