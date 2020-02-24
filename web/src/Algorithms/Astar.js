
class AStar
{
	constructor(mapArray)
	{
		for(var x = 0 ; x < mapArray.length; x++) 
		{
      		for(var y = 0; y < mapArray[x].length; y++) 
      		{
        		mapArray[x][y].f = 0;
        		mapArray[x][y].g = 0;
        		mapArray[x][y].h = 0;
        		mapArray[x][y].debug = "";
        		mapArray[x][y].parent = null;
      		}  
    	}
	}

	/**
	 * A* algorithm implementation (not optimized! should use Binary heap
	 * instead of list)
	 *
	 * @param      {2D array}  mapArray  The map array
	 * @param      {index}  start     The start index in map array
	 * @param      {index}  end       The end index in map array
	 * @return     {Array}   The array holding the path information
	 */
	search(mapArray,start, end)
	{
		var openList   = [];
    	var closedList = [];
    	openList.push(mapArray[start[0]][[start[1]]]);
 
	    while(openList.length > 0) 
	    {
	 
		    // Grab the lowest f(x) to process next
		    var lowInd = 0;
		    for(var i=0; i< openList.length; i++) 
		    {
		      	if(openList[i].f < openList[lowInd].f)
		      	{ 
		      		lowInd = i; 
		      	}
		    }
		    var currentNode = openList[lowInd];
		 
		    // End case -- result has been found, return the traced path
		    if(currentNode.pos == end.pos) 
		    {
		      	var curr = currentNode;
		      	var ret = [];
		      	while(curr.parent) 
		      	{
		      	  	ret.push(curr);
		      	  	curr = curr.parent;
		      	}
		      	return ret.reverse();
		    }
		 
		    // Normal case -- move currentNode from open to closed, process each of its neighbors
		    openList.removeGraphNode(currentNode);
		    closedList.push(currentNode);
		    var neighbors = astar.neighbors(mapArray, currentNode);
		 
		    for(var i=0; i<neighbors.length;i++) 
		    {
		      	var neighbor = neighbors[i];
		      	if(closedList.findGraphNode(neighbor) || neighbor.isWall()) 
		      	{
		      	  	// not a valid node to process, skip to next neighbor
		      	  	continue;
		    	}
		 
		        // g score is the shortest distance from start to current node, we need to check if
		        //   the path we have arrived at this neighbor is the shortest one we have seen yet
		        var gScore = currentNode.g + 1; // 1 is the distance from a node to it's neighbor
		        var gScoreIsBest = false;
		 
		 
		        if(!openList.findGraphNode(neighbor)) 
		        {
		          	// This the the first time we have arrived at this node, it must be the best
		          	// Also, we need to take the h (heuristic) score since we haven't done so yet
		 	        gScoreIsBest = true;
		 	        neighbor.h = astar.heuristic(neighbor.pos, end.pos);
		          	openList.push(neighbor);
		        }
		        else if(gScore < neighbor.g) {
		          	// We have already seen the node, but last time it had a worse g (distance from start)
		          	gScoreIsBest = true;
		        }
		 
		        if(gScoreIsBest) 
		        {
		          	// Found an optimal (so far) path to this node.   Store info on how we got here and
		          	//  just how good it really is...
		          	neighbor.parent = currentNode;
		          	neighbor.g = gScore;
		          	neighbor.f = neighbor.g + neighbor.h;
		          	neighbor.debug = "F: " + neighbor.f + "<br />G: " + neighbor.g + "<br />H: " + neighbor.h;
		        }
		    }
	    }
 
   	 	// No result was found -- empty array signifies failure to find path
    	return [];
	}
	heuristic(pos0,pos1)
	{
		// This is the Manhattan distance
		var d1 = Math.abs (pos1.x - pos0.x);
		var d2 = Math.abs (pos1.y - pos0.y);
		return d1 + d2;
	}
	/**
	 * Needs TBD
	 *
	 * @param      {TBD}     grid    The grid holding map informaiton
	 * @param      {TBD}  node    The node
	 * @return     {Array}   TBD
	 */
	neighbors(grid,node)
	{
		var ret = [];
	    var x = node.pos.x;
	    var y = node.pos.y;
	 
	    if(grid[x-1] && grid[x-1][y]) {
	      ret.push(grid[x-1][y]);
	    }
	    if(grid[x+1] && grid[x+1][y]) {
	      ret.push(grid[x+1][y]);
	    }
	    if(grid[x][y-1] && grid[x][y-1]) {
	      ret.push(grid[x][y-1]);
	    }
	    if(grid[x][y+1] && grid[x][y+1]) {
	      ret.push(grid[x][y+1]);
	    }
	    return ret;
	}
}