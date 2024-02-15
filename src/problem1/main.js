var sum_to_n_a = function(n) {
    if(n < 1){
        return 0;
    }

    return n + sum_to_n_a(n-1);
};

var sum_to_n_b = function(n) {
    sum = 0;
    for(i = 1; i < n + 1; i++){
        sum += i;
    }

    return sum;
};

var sum_to_n_c = function(n) {
    return (n * (n+1)) / 2;
};