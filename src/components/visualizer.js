function visualizer(index, value, color, c_delay){
    setTimeout(() => {
        document.getElementById(index).style.backgroundColor = color;
        document.getElementById(index).style.height = value + "px";
    }, c_delay);
}

export default visualizer;