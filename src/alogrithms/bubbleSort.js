import visualizer from '../components/visualizer';
import {sortingUpdate} from '../reducer/sortingSlice';

function bubbleSortAlgo(n, arr, sp, dispatch) {
    var array = arr.slice(0);
    var j;
    let c_delay=500;
    const speed = parseInt(sp);
    for(var i=0; i<n-1; i++){
        for(j=0;j<n-i-1;j++){
            visualizer(j, array[j],"yellow", c_delay+=speed);//Color
            if(array[j]>array[j+1]){
                visualizer(j,array[j], "red", c_delay+=speed);//Color 
                visualizer(j+1,array[j+1], "red", c_delay+=speed);//Color 
                var temp=array[j];
                array[j]=array[j+1];
                array[j+1]=temp;
                visualizer(j,array[j], "red", c_delay);//Height 
                visualizer(j+1,array[j+1], "red", c_delay+=speed);//Height 
            }
            visualizer(j,array[j], "#06283D", c_delay+=speed);//Color 
        }
        visualizer(j,array[j], "#47B5FF", c_delay+=speed);//Color 
    }
    visualizer(0,array[0], "#47B5FF", c_delay+=speed);//Color 
    
    
    setTimeout(() => {
        dispatch(sortingUpdate(false));
    }, c_delay);
}

export default bubbleSortAlgo;