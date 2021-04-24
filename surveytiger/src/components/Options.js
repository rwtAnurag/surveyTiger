
const Options =({qType,uid,addOptions,deleteOptions,updateOptionstext})=>{
    return(
        <>
         <div className="col-md-8 offset-md-2 col-12 input-group my-3"> 
            <input type="text" className="form-control" placeholder="Options Text" onChange={event=>{updateOptionstext(uid,event.target.value) }}/>
            <div className="input-group-append">
            <button className="btn btn-outline-secondry" type="button" onClick={()=>{
                if(qType==1)
                  addOptions();

            }}>+</button>
            <button className="btn btn-outline-secondry" type="button" onClick={()=>{deleteOptions()}}>-</button>
            </div>
         </div>
        </>
    );
}

export default Options;