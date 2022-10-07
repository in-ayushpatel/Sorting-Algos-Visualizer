import visualizer from '../components/visualizer';
import {sortingUpdate} from '../reducer/sortingSlice';

function insertionSortAlgo(n, arr, sp, dispatch) {
    var array = arr.slice(0);
    let c_delay=500;
    const speed = parseInt(sp);

    for(var j=0;j<n;j++){
        visualizer(j, array[j], "yellow", c_delay+=speed);//Color 

        var key= array[j];
        var i=j-1;
        while(i>=0 && array[i]>key){
            visualizer(i, array[i], "red", c_delay+=speed);//Color 
            visualizer(i+1, array[i+1], "red", c_delay+=speed);//Color 

            array[i+1]=array[i];

            visualizer(i, array[i], "red", c_delay+=speed);//Height 
            visualizer(i+1, array[i+1], "red", c_delay+=speed);//Height 
    
            visualizer(i, array[i], "blue", c_delay+=speed);//Color 
            if(i===(j-1)){
                visualizer(i+1, array[i+1], "yellow", c_delay+=speed);//Color 
            }
            else{
                visualizer(i+1, array[i+1], "blue", c_delay+=speed);//Color 
            }
            i-=1;
        }
        array[i+1]=key;

        for(var t=0;t<j;t++){
            visualizer(t, array[t], "#47B5FF", c_delay+=speed);//Color 
        }
    }
    visualizer(j-1, array[j-1], "#47B5FF", c_delay+=speed);//Color 
    
    setTimeout(() => {
        dispatch(sortingUpdate(false));
    }, c_delay);
}

export default insertionSortAlgo;