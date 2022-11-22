export function knapSackProblem(U, X, Y){
// Weights
const w = X;

// Values
const v = Y;

// Max weight
let M = U;
let n = v.length;

// Initialize empty arry
var B = [];
var rtn = [];
var max = 0;

// fill array with initial 0
for(var i=0; i<=n+1; i++ ){
    B[i] = Array(M+1).fill(i);
};

// Calculate array and problem
for(var i=1; i<=n; i++ ){
    for(var j=0; j<=M; j++ ){
        B[i][j] = B[i-1][j];
                
        if(j >= w[i-1] && B[i][j] <= (v[i-1] + B[i-1][j-w[i-1]])){
            B[i][j] = v[i-1] + B[i-1][j-w[i-1]];
        }
    }  
}

console.log("Max value is: " + B[n][M]);
max = B[n][M];

while (n != 0){
    if(B[n][M] != B[n-1][M]){
        console.log("Package " + n + " with W = "+ w[n-1] + " and Value = " + v[n-1]);
        M = M - w[n-1];
        rtn.push(n);
    }
    n--;
}

console.table(B);
rtn.push(max);

return rtn;
}