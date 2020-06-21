function MergeSort(arr)
{
    if (arr.length == 1)
    {
        return arr;
    }
    len = arr.length;
    let mid = Math.floor(len/2);
    let left = arr.slice(0,mid);
    let right = arr.slice(mid);
    return merge(MergeSort(left),MergeSort(right));
}

function merge(left,right)
{
    let result = [];
    let leftPtr = 0;
    let rightPtr = 0;

    while (leftPtr < left.length && rightPtr < right.length)
    {
        if (left[leftPtr] < right[rightPtr])
        {
            result.push(left[leftPtr]);
            leftPtr++;
        }
        else
        {
            result.push(right[rightPtr]);
            rightPtr++;
        }
    }
    return result.concat(left.slice(leftPtr),right.slice(rightPtr));
}


arr = [5,6,2,4,1,3,8,7];
console.log(MergeSort(arr));
