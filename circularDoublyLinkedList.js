class Node{
    val;
    next;
    prev;
    constructor(val)
    {
        this.val = val;
        this.next=null;
        this.prev=null
    }
}


class CircularDoublyLinkedList{
    head;
    constructor()
    {
        this.head = null;
    }

    addFirst(val)
    {
        let currNode = new Node(val)
        if(this.head == null)
        {
            this.head = currNode;
            this.head.next = this.head;
            this.head.prev = this.head
            return;
        }
        else 
        {
            let lastNode = this.head.prev;
            currNode.next = this.head;
            this.head.prev = currNode;
            this.head = currNode;
            lastNode.next = currNode;
            currNode.prev = lastNode;


        }
    }

    addLast(val)
    {
        if(this.head == null)
        {
            this.head = new Node(val);
            this.head.prev = this.head;
            this.head.next = this.head;
            return;
        }
        let currNode = new Node(val);
        let lastNode = this.head.prev;
        lastNode.next = currNode;
        currNode.prev = lastNode;
        currNode.next  = this.head;
        this.head.prev = currNode;

    }

    addAt(idx,val)
    {
        if(idx>=this.size())
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
            let sz=0;
            let tracker = this.head;
            while(sz!=idx)
            {
                tracker  = tracker.next;
                sz++;
            }
            let currNode = new Node(val)
            let refNode = tracker.next;
            tracker.next = currNode;
            currNode.prev = tracker;
            currNode.next = refNode;
            refNode.prev = currNode;
        }
    }


    removeFirst()
    {
        if(this.head == null)
        return;

        if(this.head.next==this.head)
        {
            this.head = null;
            return;
        }

        let lastNode = this.head.prev;
        let newHeadNode = this.head.next;
        this.head = newHeadNode;
        newHeadNode.prev = lastNode;
        lastNode.next = newHeadNode;
    }


    removeLast()
    {
        if(this.head == null)
        return;

        if(this.head.next==this.head)
        {
            this.head = null;
            return;
        }

        this.head.prev = this.head.prev.prev;
        this.head.prev.next = this.head;
    }


    removeAt(idx,val)
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
            let currsz = 0;
            while(currsz!=idx)
            {
                tracker = tracker.next;
                currsz++;
            }
            let prevNode = tracker.prev;
            let nextNode = tracker.next;
            prevNode.next = nextNode;
            nextNode.prev = prevNode;
            return;
        }
    }

    size()
    {
        if(this.head==null)
        return 0;
        else
        {
            let tracker = this.head;
            let sz = 0;
            while(tracker!=this.head.prev)
            {
                tracker = tracker.next;
                sz++;
            }
            return sz+1;
        }
    }

    print()
    {
        if(this.head == null)
        return;

        let tracker = this.head;
        let res = ""
        while(tracker!=this.head.prev)
        {
            tracker = tracker.next;
            res = res+'->'+tracker.val
        }
        console.log(res)
    }

 


}


let CDLL = new CircularDoublyLinkedList();
CDLL.addFirst(78)
CDLL.addFirst(456)
CDLL.addLast(345)
CDLL.addFirst(43)
CDLL.addFirst(82);

CDLL.addLast(9)
CDLL.addLast(27)
CDLL.addFirst(20);

CDLL.addAt(8,45)
console.log(CDLL.size())

CDLL.removeAt(2)

CDLL.print()