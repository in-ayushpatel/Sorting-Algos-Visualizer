import visualizer from '../components/visualizer';
import {sortingUpdate} from '../reducer/sortingSlice';

var c_delay;
var speed;

function mergeSortAlgo(n, arr, sp, dispatch){
    c_delay = 500;
    speed = parseInt(sp);
    var array = arr.slice(0);
    merge_partition(0,n-1, array);
    setTimeout(() => {
        dispatch(sortingUpdate(false));
    }, c_delay);
}

function merge_sort(start,mid,end, array){
    var p=start,q=mid+1;
    var temp_arr=[],k=0;
    for(var i=start; i<=end; i++){
        if(p>mid){
            temp_arr[k++]=array[q++];
            visualizer(q-1,array[q-1],"red", c_delay+=speed);//Color update
        }
        else if(q>end){
            temp_arr[k++]=array[p++];
            visualizer(p-1,array[p-1],"red", c_delay+=speed);//Color update
        }
        else if(array[p]<array[q]){
            temp_arr[k++]=array[p++];
            visualizer(p-1,array[p-1],"red", c_delay+=speed);//Color update
        }
        else{
            temp_arr[k++]=array[q++];
            visualizer(q-1,array[q-1],"red", c_delay+=speed);//Color update
        }
    }

    for(var t=0;t<k;t++){
        array[start++]=temp_arr[t];
        visualizer(start-1,array[start-1],"green", c_delay+=speed);//Color update
    }
}

function merge_partition(start,end, array){
    if(start < end)
    {
        var mid=Math.floor((start + end) / 2);
        visualizer(mid,array[mid],"yellow", c_delay+=speed);//Color update

        merge_partition(start,mid, array);
        merge_partition(mid+1,end, array);

        merge_sort(start,mid,end, array);
    }
}
export default mergeSortAlgo;
