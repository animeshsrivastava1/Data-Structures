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
gr.addEdge(5,6);
gr.addEdge(9,3);
gr.addEdge(5,10);
gr.removeEdge(10)
gr.printGraph();