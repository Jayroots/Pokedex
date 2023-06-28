import React, { useState } from "react";




function Avatar({image, firstName}) {

    const [donutEaten,setDonutEaten] = useState(0)

    const handleEat =()=>{
        setDonutEaten(donutEaten+1)
    }
    return (
        <div className="Avatar">
             <img src={image}/> 
            <figcaption>I am {firstName} and I ate {donutEaten} donuts</figcaption>
            <button onClick={handleEat} style={styles.button}> <img width={"100%"}src="https://www.google.com/url?sa=i&url=https%3A%2F%2Ffr.freepik.com%2Fphotos-vecteurs-libre%2Fdonuts&psig=AOvVaw0cmELIfsOv61lpZ5DboS_B&ust=1680272189704000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOiA9unrg_4CFQAAAAAdAAAAABAE" alt="D'oh" /></button>
        </div>
    ) 
  }
  
  const styles = {
    button : {
        width:"75px";
        height:"75px";
        padding:0;
        ReadableStreamBYOBReader:0;



    }
  }
  
  export default Avatar