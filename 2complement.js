module.exports = {
    complement2int: function (_2complement, nBits = 16) {
        _2complement = _2complement & (Math.pow(2,nBits) - 1);
        if ((_2complement & Math.pow(2,nBits-1)) != 0)
            return -((Math.pow(2,nBits) - 1) & (-_2complement));
        else
            return ((Math.pow(2,nBits) - 1) & _2complement);
    },
    int2complement: function(number, nBits = 16){
        if(number < 0){
            return (number & (Math.pow(2,nBits) - 1));
        } else {
            return number & (Math.pow(2,nBits) - 1);
        }
    }
};