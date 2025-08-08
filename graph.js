class Graph{
    graphList
    constructor(params) {

        this.graphList = {};
        
    }


    addEdge(v1,v2)
    {
        this.graphList[v1] = this.graphList[v1]!=undefined ? [...this.graphList[v1],v2]:[v2]
        this.graphList[v2] = this.graphList[v2]!=undefined ? [...this.graphList[v2],v1]:[v1]
    }


    printGraph(){

        for (const curr in this.graphList) {
            console.log(curr+"->"+this.graphList[curr])

    }


 
}


BFS(start)
{
    // console.log(this.graphList[start])
    let visited = {}; //as a queue
    let q = [];
    q.push(start)
    visited[start] = true
    // console.log(start)
  while(q.length>0)
  {
  
    let curr = q.shift();
    console.log(curr);
    for(let i = 0; i< this.graphList[curr].length;i++)
    {
        let currItem = this.graphList[curr][i]

        if(visited[currItem]==undefined)
        {
            visited[currItem] = true; 
            q.push(currItem)
        }
        
    }
    
  }

}



dfsUtil(start,visited)
{
    visited[start] = true;
    console.log(start);
    // console.log(typeof this.graphList[0])
    for(let i = 0 ;i < this.graphList[start].length ; i++)
    {
        // console.log(this.graphList[start][i])
        // console.log(visited)
        if(visited[this.graphList[start][i]]==undefined)
        {
            this.dfsUtil(this.graphList[start][i],visited)
        }
   
    }
}

dfsPrint(start)
{
    let visited = {};
    this.dfsUtil(start,visited)
}

removeEdge(v2)
{
    if(this.graphList[v2]!=undefined)
    {
        delete this.graphList[v2];
    }

    for(let curr in this.graphList)
    {
        for(let i = 0; i < this.graphList[curr].length ; i++)
        {
            if(this.graphList[curr][i]==v2)
            this.graphList[curr] = [...this.graphList[curr].slice(0,i),...this.graphList[curr].slice(i+1)]
        }
    }


}




}

let gr = new Graph();
gr.addEdge(0,1);
gr.addEdge(3,2);
gr.addEdge(2,4);
gr.addEdge(1,4);
gr.addEdge(3,1);
gr.addEdge(2,0);

// gr.removeEdge(10)
gr.BFS(0)
// gr.printGraph();