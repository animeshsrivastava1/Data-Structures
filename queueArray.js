class Queue{
    arr;
    front;
    cap;

    constructor(cap)
    {
        this.arr =[];
        this.cap = cap;
        this.size = 0;
        this.front = 0;
    }

    enqueue(val)
    {
        if(this.size>=this.cap)
        return

     
        this.arr[this.size] = val;
        this.size++;
    }

    dequeue()
    {
        if(this.size<=0 || this.front>=this.size)
        return

        this.front++;
    }

    peek()
    {
        if(this.size<=0)
        return;

        return this.arr[this.front];
    }

    calsize()
    {
        return this.size-this.front;
    }

    print()
    {
        let res ='';
        for(let i = this.front ; i< this.size ; i++)
        {
            res+=this.arr[i]+'->'
        }

        console.log(res)
    }
}

let q = new Queue(5);
q.enqueue(678)
q.enqueue(3)
q.enqueue(6)
q.enqueue(12);
q.enqueue(45);
q.dequeue();
q.enqueue(44444);
// q.enqueue(6668)
q.print()
console.log(q.calsize())