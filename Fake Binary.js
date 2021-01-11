https://www.codewars.com/kata/57eae65a4321032ce000002d/train/javascript

    function fakeBin(x){
        return x.replace(/./g, el => el < 5 ? 0 : 1);
    }