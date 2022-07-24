import visualizer from '../components/visualizer';
import {sortingUpdate} from '../reducer/sortingSlice';

function selectionSortAlgo(n, arr, sp, dispatch) {
    var array = arr.slice(0);
    let c_delay=500;
    const speed = parseInt(sp);

    var index_min;
    for(var i=0;i<n-1;i++){
        visualizer(i,array[i],"red",  c_delay+=speed);//Color 
        index_min=i;
        for(var j=i+1;j<n;j++){
            visualizer(j,array[j],"yellow", c_delay+=speed);//Color 
            if(array[j]<array[index_min]){
                if(index_min!=i){
                    visualizer(index_min,array[index_min],"blue", c_delay+=speed);//Color 
                }
                index_min=j;
                visualizer(index_min,array[index_min],"red", c_delay+=speed);//Color 
            }else{
                visualizer(j,array[j],"blue", c_delay+=speed);//Color 
            }
        }
        
        if(index_min!=i){
            var temp=array[index_min];
            array[index_min]=array[i];
            array[i]=temp;

            visualizer(index_min,array[index_min],"red", c_delay+=speed);//Height 
            visualizer(i,array[i],"red", c_delay+=speed);//Height 
            visualizer(index_min,array[index_min],"blue", c_delay+=speed);//Color 
        }
        visualizer(i,array[i],"green", c_delay+=speed);//Color 
    }
    visualizer(i,array[i],"green", c_delay+=speed);//Color 
    
    
    setTimeout(() => {
        dispatch(sortingUpdate(false));
    }, c_delay);
}

export default selectionSortAlgo;