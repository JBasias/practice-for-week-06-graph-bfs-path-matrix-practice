function findNeighbors(N, M) {

    let n=M.length; let m=M[0].length;
    let ret=[]; let x = N[0]; let y=N[1];

    if(y>0) ret.push([x,y-1]);
    if(y<m-1) ret.push([x,y+1]);

    if(x>0) ret.push([x-1,y]);
    if(x<n-1) ret.push([x+1,y]);



    return ret;

    // Up

    // Down

    // Left

    // Right

    // Your code here
}

function bfsPath(M, S, E) {
    //let B = [S];

    //if(M[S[0]][S[1]]==E)

    let B = new Set(); let m=M[0].length;

    B.add(S[0]*m + S[1]);
    let Q = [S]; let cur; let Is=false;
    let ret=[];

    if(M[S[0]][S[1]] === E) return Q;

    //console.log(B);

    while (Q.length !== 0) {

      //console.log(B.length);
      cur = Q.shift();
      ret.push(cur);
      // Check if the current position (cur) has the value E
      if (M[cur[0]][cur[1]] === E) Is=true;
       // return true; // Found the value E
     // }

      for (const v of findNeighbors(cur, M)) {
        if (!B.has(v[0]*m + v[1])) {

          B.add(v[0]*m + v[1]);
          //B.add(v);
          Q.push(v);
        }
      }
    }

    if(!Is) return false;
    //console.log(ret);

    return ret;
}




// ***** UNCOMMENT FOR LOCAL TESTING *****

// const matrix1 = [
//     [  1,  2,  3,  4 ],
//     [  5,  6,  7,  8 ],
//     [  9, 10, 11, 12 ],
//     [ 13, 14, 15, 16 ]
// ];

// // EXAMPLE TESTS #1. Tests for findNeighbors function
// console.log(findNeighbors([1,1], matrix1)) // Finds all 4 neighbors from an
// // internal node (left, right, down, up)
// // [ [ 0, 1 ], [ 2, 1 ], [ 1, 2 ], [ 1, 0 ] ]

// console.log(findNeighbors([0,0], matrix1)); // Finds two neighbors from a
// // corner node // [ [ 1, 0 ], [ 0, 1 ] ]

// console.log(findNeighbors([3,1], matrix1)); // Finds three neighbors from
// // an edge node // [ [ 2, 1 ], [ 3, 2 ], [ 3, 0 ] ]


// EXAMPLE TESTS #2. Tests for bfsPath function

// console.log(bfsPath(matrix1, [0,0], 16)); // can traverse the entire matrix
// returns an array of coordinates with no duplicates:

// [
//     [ 0, 0 ], [ 1, 0 ],
//     [ 0, 1 ], [ 2, 0 ],
//     [ 1, 1 ], [ 0, 2 ],
//     [ 3, 0 ], [ 2, 1 ],
//     [ 1, 2 ], [ 0, 3 ],
//     [ 3, 1 ], [ 2, 2 ],
//     [ 1, 3 ], [ 3, 2 ],
//     [ 2, 3 ], [ 3, 3 ]
//  ]

// Note for debugging purposes: The coordinates should represent the following matrix values, in order:
// 1 5 2 9 6 3 13 10 7 4 14 11 8 15 12 16

// console.log(bfsPath(matrix1, [2,2], 11)); // returns a single node if end
// // value is located at start node
// // [ [ 2, 2 ] ]

// console.log(bfsPath(matrix1, [1,2], 8)); // can handle various start nodes
// // and end values
// // [ [ 1, 2 ], [ 0, 2 ], [ 2, 2 ], [ 1, 1 ], [ 1, 3 ] ]

// console.log(bfsPath(matrix1, [0,0], 17)); // can return false if end value
// // is not found
// // false

/*************DO NOT MODIFY UNDER THIS LINE ***************/

module.exports = [findNeighbors, bfsPath];
