import visualizer from '../components/visualizer';
import {sortingUpdate} from '../reducer/sortingSlice';

function bubbleSortAlgo(n, arr, sp, dispatch) {
    var array = arr.slice(0);
    var j;
    let c_delay=500;//This is updated ov every div change so that visualization is visible.
    const speed = parseInt(sp);
    for(var i=0; i<n-1; i++){
        for(j=0;j<n-i-1;j++){
            visualizer(j, array[j],"yellow", c_delay+=speed);//Color update
            if(array[j]>array[j+1]){
                visualizer(j,array[j], "red", c_delay+=speed);//Color update
                visualizer(j+1,array[j+1], "red", c_delay+=speed);//Color update
                var temp=array[j];
                array[j]=array[j+1];
                array[j+1]=temp;
                visualizer(j,array[j], "red", c_delay);//Height update
                visualizer(j+1,array[j+1], "red", c_delay+=speed);//Height update
            }
            visualizer(j,array[j], "blue", c_delay+=speed);//Color updat
        }
        visualizer(j,array[j], "green", c_delay+=speed);//Color update
    }
    visualizer(0,array[0], "green", c_delay+=speed);//Color update
    
    
    setTimeout(() => {
        dispatch(sortingUpdate(false));
    }, c_delay);
}

export default bubbleSortAlgo;