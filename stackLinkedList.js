class Node{
    val;
    next;
    constructor(val)
    {
        this.val = val;
        this.next = null
    }
}


class Stack{
    top
    size
    constructor()
    {
        this.top=null
        this.size=0
    }
    push(val)
    {
        let curr = new Node(val);
       curr.next = this.top;
       this.top = curr;
       this.size++;
    }
    pop()
    {
        if(this.size==0)
        return;

        this.top = this.top.next;
        this.size--;
    }
    isEmpty()
    {
        return this.size==0
    }
    peek()
    {
        if(this.size==0)
        return;

        return this.top.val
    }
    print()
    {
        let curr = this.top;
        while(curr!=null)
        {
            console.log(curr.val);
            curr = curr.next;
        }
    }
}


let st = new Stack();

st.push(56);
st.push(44);
st.push(72);

st.print();