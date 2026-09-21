# knights-trevails

A function that gives the shortest path between two knight locations in a game of chess.

# How it's made

**Tech Used**: JavaScript and Node

This was easily the hardest of the Odin Project computer science projects. I took a lot of time at the start
just thinking about the problem and reading the resources provided. The first thing I noticed was that knight
locations on a chess board can be represented as a graph. Then I realized that if we search each location's
edge list, we can find the shortest path from one point to another. So, when given one vertex, we can search its
edge list for the other vertex, and if it's not in there, we search the vertices in the edge list, and so on.
It turns into a graph traversal problem.

I decided to go with breadth first search on this project because I found I could reason with it better. It made
more sense in my brain. We take a vertex, search it's children, then search those children.

I also did not make an actual Node and Graph class for this as it's not necessary. The algorithm creates a sort of
"implicit" graph due to how it's designed.

I started by creating pseudocode. I knew I'd need a function to generate the edge list from a given vertex, so I
created that first. It simply uses the chess board's logic to generate the possible moves a knight can make from
a specific spot. Then, I planned out what the actual knightMoves function would do. It needs to take a firstVertex
and a secondVertex as argument, search the firstVertex's edge list for secondVertex, then search it's children's edge
lists, and so on. This is the BFS part. I used a simple textbook example of BFS with graphs to create the algorithm.
There's a queue for discovered vertices, a set of visited vertices, and eventually I added a map of each vertex's
predecessor.

The hardest part of this was figuring out how to store the path itself. I could get the algorithm to find the secondVertex
eventually, but actually storing the path there was difficult. I used a map of vertices where the key is the current
vertex and the value is its predecessor. Then, once the secondVertex was found, we'd loop back up the map to find the
path. This ended up working.

# Lessons learned

This was the first time I had ever really put computer science ideas directly into practice, like into a problem.
I had exercises in my algorithms class that were similar but nothing like this. I think taking the time to step back
and think about the problem not only improved my problem solving skills, but also made me feel very confident once
the project was finished.
