class Node{
    val;
    next;
    constructor(val)
    {
        this.val = val;
        this.next = null;
    }
}



class CircularLinkedList{
    head;
    constructor()
    {
        this.head = null;
    }


    addLast(val)
    {
        let tracker = this.head;
        let currNode = new Node(val)
        if(tracker == null)
        {
            this.head = currNode;
            this.head.next = currNode;
            return;
        }
        while(tracker.next!=this.head)
        {
            tracker = tracker.next;
        }
        tracker.next = currNode;
        currNode.next = this.head
    }

    addFirst(val)
    {
        let tracker = this.head;
        let currNode = new Node(val)
        if(tracker == null)
        {
            this.head = currNode;
            currNode.next = this.head;
            return;
        }
        let lastNode = this.head;
        while(lastNode.next!=this.head)
        {
            lastNode = lastNode.next;
        }
        currNode.next = this.head;
        lastNode.next = currNode;
        this.head = currNode;
    }

    size()
    {
        if(this.head == null)
        return 0;
        
        let tracker = this.head;
        let sz=0
        while(tracker.next!=this.head)
        {
            tracker = tracker.next;
            sz++;
        }
        return sz;
    }

    addAt(idx,val)
    {
        if(idx>this.size() || idx<0)
        return;
        if(idx==0)
        {
            this.addFirst(val);
            return;
        }
        if(idx==this.size())
        {
            
            this.addLast(val);
            return;
        }
        else
        {
            let tracker = this.head;
            let curr = 0;
            while(curr!=idx-1)
            {
                tracker = tracker.next;
                curr++;
            }
            let currNode = new Node(val);
            currNode.next = tracker.next;
            tracker.next = currNode;
            return;
        }
    }

    removeFirst()
    {
        if(this.head ==null)
        return;

        if(this.head.next==this.head)
        {
            this.head = null
            return;
        }
        
        

        let tracker = this.head;
        while(tracker.next!=this.head)
        {
            tracker = tracker.next
        }
        tracker.next=this.head.next;
        this.head = this.head.next;
    }
    removeLast()
    {
        if(this.head==null)
        return;
        if(this.head.next == this.head)
        {
            this.head = null;
            return;
        }

        let tracker = this.head;
        let prevNode = null;
        while(tracker.next!=this.head)
        {
            prevNode = tracker;
            tracker = tracker.next;
           
        }
        prevNode.next = this.head;


    }

    removeAt(idx)
    {
        if(idx<0 || idx>this.size())
        return;

        if(idx==0)
        {
            this.removeFirst();
            return;
        }
        else if(idx==this.size())
        {
            this.removeLast();
            return;
        }
        else
        {
            let tracker = this.head;
            let currsz=0;
            while(currsz!=idx-1)
            {
                tracker = tracker.next;
                currsz++;
            }
            tracker.next = tracker.next.next;
        }
    }


    print()
    {
        if(this.head == null)
        {
            return;
        }
        let tracker = this.head;
        let res =''
        while(tracker.next!=this.head){
            res=res+'->'+tracker.val;
            tracker = tracker.next
        }
        res=res+'->'+tracker.val
        console.log(res)
    }
}



const CLL = new CircularLinkedList();
CLL.addFirst(78)
CLL.addFirst(456)
CLL.addLast(345)
CLL.addFirst(43)
CLL.addFirst(82);

CLL.addLast(9)
CLL.addLast(27)
CLL.addFirst(20);

CLL.addAt(8,45)
console.log(CLL.size())

CLL.removeAt(2)

CLL.print()