import visualizer from '../components/visualizer';
import {sortingUpdate} from '../reducer/sortingSlice';

var c_delay;
var speed;


function quickSortAlgo(n, arr, sp, dispatch){
    c_delay = 500;
    speed = parseInt(sp)-10;
    var array = arr.slice(0);
    quick_sort(0,n-1,array);
    setTimeout(() => {
        dispatch(sortingUpdate(false));
    }, c_delay);
}


function quick_partition (start, end, array) {
    var i = start + 1;
    //taking first element as a pivot element.
    var piv = array[start] ;
    visualizer(start, array[start], "yellow", c_delay+=speed);//Color 

        for(var j =start + 1; j <= end ; j++ ){
            // we are re-arranging the array
            // putting elements which are less than pivot on one side
            // and greater than the pivot the other side.
            if (array[ j ] < piv){
                visualizer(j, array[j], "yellow", c_delay+=speed);//Color 
                visualizer(i, array[i], "red", c_delay+=speed);//Color 
                visualizer(j, array[j], "red", c_delay+=speed);//Color 

                var temp=array[i];
                array[i]=array[j];
                array[j]=temp;

                visualizer(i, array[i], "red", c_delay+=speed);//Height 
                visualizer(j, array[j], "red", c_delay+=speed);//Height 

                visualizer(i, array[i], "blue", c_delay+=speed);//Height 
                visualizer(j, array[j], "blue", c_delay+=speed);//Height 

                i += 1;
            }
    }
    visualizer(start, array[start], "red", c_delay+=speed);//Color 
    visualizer(i-1, array[i-1], "red", c_delay+=speed);//Color 
    
    //putting the  pivot element in its ordered(proper) place.
    temp=array[start];
    array[start]=array[i-1];
    array[i-1]=temp;

    visualizer(start, array[start], "red", c_delay+=speed);//Height 
    visualizer(i-1, array[i-1], "red", c_delay+=speed);//Height 

    for(var t=start;t<=i;t++){
        visualizer(t, array[t], "#47B5FF", c_delay+=speed);//Color 
    }
    //return position of pivot
    return i-1;
}

function quick_sort (start, end, array){
    if( start < end ){
        //stores position of pivot ele
        var piv_pos = quick_partition (start, end, array);
        //sorts the left of pivot.     
        quick_sort (start, piv_pos -1, array);
        //sorts the right of pivot.
        quick_sort (piv_pos +1, end, array) ;
    }
 }

export default quickSortAlgo;
