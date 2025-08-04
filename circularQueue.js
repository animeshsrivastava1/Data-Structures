class Queue{
    arr;
    front;
    cap;
    size;

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

     
        this.arr[((this.front+this.size)%this.cap)] = val;
        this.size++;
    }

    dequeue()
    {
        if(this.size<=0 )
        return


        this.front = (this.front+1)%this.cap
        this.size--;
    }

    peek()
    {
        if(this.size<=0)
        return;

        return this.arr[this.front];
    }

    calsize()
    {
        return this.size;
    }

    print()
    {
        let res ='';
        for(let i = 0 ; i< this.size ; i++)
        {
            res+=this.arr[(this.front+i)%this.cap]+'->'
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