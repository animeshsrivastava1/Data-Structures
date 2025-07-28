class Node{
     val;
     next;
     prev;

    constructor(val)
    {
        this.val = val;
        this.next = null;
        this.prev=null;
    }
}

class DoublyLinkedList{
    head;
    constructor()
    {
        this.head = null
    }

    addLast(val)
    {
        let currNode = new Node(val);
        if(this.head==null)
        {
            this.head = currNode;
            return
        }
        let tracker = this.head;
        while(tracker.next!=null)
        {
            tracker = tracker.next;
        }

        tracker.next = currNode;
        currNode.prev = tracker;
        currNode.next = null;

    }

    addBegin(val)
    {
        let tracker = this.head;
        let currNode = new Node(val)
        if(tracker==null)
        {
            this.head = currNode
            return;
        }
        currNode.next = this.head;
        this.head.prev = currNode;
        this.head = currNode;
       
    }


    size()
    {
        let tracker = this.head;
        if(tracker==null)
        return 0;
        let sz =0;
        while(tracker!=null)
        {
            tracker = tracker.next;
            sz++;
        }
        return sz;
    }

    addAt(idx,val)
    {
        let tracker = this.head;
        if(idx==0)
        {
            this.addBegin(val);
            return;
        }
        else if(idx==this.size())
        {
            this.addLast(val);
            return;
        }
        else
        {
            let curr = 0;
            while(curr!=idx-1)
            {
                tracker = tracker.next;
                curr++;
            }
            let currNode = new Node(val);
            currNode.next = tracker.next;
            tracker.next.prev =currNode;
            currNode.prev = tracker;
            tracker.next = currNode;
        }

    }

    removeLast()
    {
        let tracker = this.head;
        if(tracker==null)
        {
            return;
        }
        while(tracker.next!=null)
        {
            tracker = tracker.next;
        }
        let prev  = tracker.prev;
        prev.next = null;
        tracker.prev = null;
    }

    removeBegin()
    {
        let tracker = this.head;
        if(tracker == null)
        return;
        
        this.head = this.head.next;
        this.head.prev = null;
    }

    removeAt(idx)
    {
        if(idx<0  || idx>this.size())
        return;

        if(idx==0)
        {
            this.removeBegin();
            return;
        }
        else if(idx == this.size())
        {
            this.removeLast();
            return;
        }
        else
        {
            let tracker = this.head;
            let curr = 0;
            while(curr!=idx)
            {
                tracker = tracker.next;
                curr++;
            }
            let prev = tracker.prev;
            prev.next  = tracker.next;
            prev.next.prev = prev;
            tracker.next = null;
            tracker.prev = null

        }
    }


    print()
    {
        let tracker = this.head;
        if(tracker==null)
        {
            return;
        }
        let res = ''
        while(tracker!=null)
        {
            res=res+'->'+tracker.val;
            tracker = tracker.next;
        }
        console.log(res)
    }

}



let DLL = new DoublyLinkedList()
DLL.addLast(90);
DLL.addLast(56);
DLL.addLast(23);
DLL.addLast(6);
DLL.addBegin(88);
console.log(DLL.size())
DLL.addAt(1,16);
DLL.removeLast();
DLL.removeBegin();
DLL.removeAt(1);
DLL.print()