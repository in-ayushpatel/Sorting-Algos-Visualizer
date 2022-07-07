/* eslint-disable */
import {React, useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './main.css';
import {randArray, selectAlgo, resetColor, speedSelect, sortingUpdate} from '../reducer/sortingSlice';
import bubbleSortAlgo from '../alogrithms/bubbleSort'
import mergeSortAlgo from '../alogrithms/mergeSort'

function Home() {
    const array = useSelector(state => state.data.array);
    const algorithm =  useSelector(state => state.data.algorithm);
    const color = useSelector(state => state.data.color);
    const speed = useSelector(state => state.data.speed);
    const isSorting = useSelector(state => state.data.isSorting);

    const [size, setSize] = useState(10);
    const dispatch = useDispatch();
    const randomArrayGenerator = () => {
        dispatch(randArray(size));
        dispatch(resetColor('pink'));
    }

    useEffect(() =>{
        randomArrayGenerator();
    }, [size])

    const handleChange = (e) => {
        setSize(e.target.value);
    }

    const algorithmSelector = (e) => {
        dispatch(selectAlgo(e.target.value));
    }

    const playAlgo = () => {
        dispatch(resetColor('rgb(255,192,204)'));
        if(algorithm === 'bubbleSort'){
            bubbleSortAlgo(array.length, array, speed, dispatch);
            dispatch(sortingUpdate(true));
            
        }else if (algorithm === 'mergeSort'){
            mergeSortAlgo(array.length, array, speed, dispatch);
            dispatch(sortingUpdate(true));
        }
    }

    const handleSpeedChange = (e) => {
        dispatch(speedSelect(e.target.value));
    }

    return (
        <div>
            <div className='header'>
                <label> Array Size: </label>
                <input
                    id="changeSize"
                    type="range"
                    min="10"
                    max="80"
                    disabled={isSorting}
                    defaultValue={size}
                    style={{background: "blue", cursor: "pointer"}}
                    onChange={handleChange}
                />
                <label> Speed </label>
                <input
                    id="changeSpeed"
                    type="range"
                    min="1"
                    max="100"
                    disabled={isSorting}
                    defaultValue={speed}
                    style={{background: "blue", cursor: "pointer"}}
                    onChange={handleSpeedChange}
                />
                <button onClick={() => randomArrayGenerator()} disabled={isSorting}> Click me to generate array</button>
                
                <select name="also-select" onChange={(e) => algorithmSelector(e)} disabled={isSorting}> 
                    <option value="bubbleSort" >Bubble Sort</option>
                    <option value="mergeSort" >Merge Sort</option>
                </select>

                <button onClick={() => playAlgo()} id= 'play' disabled={isSorting}> Play </button>
            </div>
            {<div className='array_container' >
                {
                    array.map((item, index) => {
                        return <div> 
                                <div key={index} id={index} className='array_item' style={{height: `${item}px`, backgroundColor: `${color}`}} ></div>
                            </div>
                    }, )
                }
            </div>}
        </div>
    );
}

export default Home;