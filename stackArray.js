class Stack {

    arr;
    top;
    cap;

    constructor(val)
    {
        this.cap = val;
        this.arr = new Array(val);
        this.top  = -1;
    }


    push(val)
    {
        if(this.cap<=this.top+1)
        return;


        this.top++;
        this.arr[this.top] = val;
    }

    pop()
    {
        if(this.top<0)
        return;

        const retVal = this.arr[this.top]

        this.top--;
        return retVal;
    }

    peek()
    {
        return this.arr[this.top]
    }

    size()
    {
        return this.top+1;
    }

    print()
    {
        let curr = this.top;
       
        while(curr>=0)
        {
            console.log(this.arr[curr]);
            curr--;
        }
    }

    isEmpty()
    {
        return this.top==-1
    }
}



let st = new Stack(5);

st.push(78);
st.push(8);
st.push(23);
st.push(83);
st.push(2);

st.push(999);

st.print();


