class Node{
    val;
    next;
    constructor(val)
    {
        this.val = val
        this.next = null;
    }
 
}


class Queue
{
    front;
    size;
    constructor()
    {
        this.front = null;
        this.size=0;
    }

    enqueue(val)
    {
        let curr = new Node(val);
        if(this.front==null)
        {
            this.front = curr;
            return;
        }
        else
        {
            let tracker = this.front;
            while(tracker.next!=null)
            {
                tracker = tracker.next;
            }
            tracker.next = curr;
        }
    }

    dequeue()
    {
        if(this.front == null)
        return;
        else
        this.front = this.front.next;
    }

    peek()
    {
        if(this.front!=null)
        return this.front.val;
    }

    print()
    {
        let res = '';

        let tracker = this.front;

        while(tracker!=null)
        {
            res = res+'-'+tracker.val
            tracker = tracker.next;

        }
        console.log(res)
    }
}


let q = new Queue();
q.enqueue(76)
q.enqueue(4)
q.enqueue(7)
q.enqueue(23);

q.dequeue();


q.enqueue(2)
q.print();
