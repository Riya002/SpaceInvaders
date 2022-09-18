# SpaceInvaders
Problem Statement
----------------------
Gagannaut Anand wants to go to moon in a Chandravahan.But Chandravahan object destroyer beam is damaged so the harmful objects need to be avoided at all costs to keep Gagannaut Anand safe and hopes for a bright future alive. You are working in the Control and Operationalteam of ISRO which regulates Satellite's launch,reorbiting,disposal,etc.You need to perform certain checks to make Chandravahan decipher the shortest possible path between two satellites and to avoid any possible orbital debris collision. Chandravahan is fast enough to treat special obstacles i.e. asteroids, meteoroids, comets, etc as stationary objects. But you will need to take in account relativistic effects.

Technologies Used
----------------------
1. HTML
2. CSS
3. JAVASCRIPT

Algorithms Applied
------------------
The algorithms which have been implemented to find the shortest path -
1. Breadth First Finder
2. Bi Breadth First Finder
3. A* Finder
4. Bi A* Finder
5. Dijkstra Finder
6. Bi Dijkstra Finder,

where the Bi prefix enables the algorithm to be much faster as it searches for an optimal path from both the start and the end points.

Diagonal movement has also been implemented in all the algorithms and functionalities, wherein enabling the diagonal movement allows the path to go from one corner of a node to another, and shorter paths can be found, where the measure of length is the number of nodes crossed to reach the destination.

The algorithms implemented in the functionalities -
----------------------------------------------------
1. Breadth First Finder
2. A* Finder
3. Prim's Algorithm

Project Features -
--------------------------
1. Multiple possible destination points, where the pathfinder has to find the closest destination and find the shortest path to that point too.
2. Stop points, which stand for data collection points on Mars, and the pathfinder has to find the shortest route covering all the points, like a circuit.
3. Visitation points, and the pathfinder has to find the shortest path from the start to the end which is the shuttle boarding point, and hence has to be the final point visited, and visit all the points.
4. Optimise the code in algorithms by using OOP and data structures that enhance speed (for example: binary heaps in A * algorithm)

Libraries Used -
--------------------
1. Node.js was used to run the application
2. State Machine.js -to process various inputs and states
3. Raphael.js -to create the SVG (scalable vector graphics)
