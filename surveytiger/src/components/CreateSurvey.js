import TypeSelector from "./TypeSelector";
import Questions from "./Questions";
import Options from "./Options";
import { useState } from "react";//import Published from "./Published";
import { useHistory } from "react-router";


const CreateSurvey =({squestions,setSquestions})=>{
    const history = useHistory();
    const getRandom = () =>{
        return Math.floor((Math.random()*1000) + 1)
    }
    const defaultOptionsState =[{uid: getRandom(),value:''},{uid: getRandom(),value:''}];
    const [qText,setQtext] = useState('');
    const [qType,setQtype] = useState(0);
    const [options, setOptions] = useState(defaultOptionsState);
    const addOptions = ()=>{
        
        let newOptions ={
            uid: getRandom(),
            value: ''
        }
        let updateOptions = [...options];
        updateOptions.push(newOptions);
        setOptions(updateOptions);
    }
    const deleteOptions = ()=>{
        
        if(options.length === 2){
            alert("Error: A select type question should have atlest 2 Options");
        }
        else{
            let updateOptions = [...options];
            updateOptions.pop();
            setOptions(updateOptions);
        }
    }
    const updateOptionstext=(id, text) =>{
        let updateOptions = [...options];
        let changeIndex = updateOptions.findIndex(x=> x.uid === id);
        updateOptions[changeIndex].value =text;
        setOptions(updateOptions);
    }

     const updateSurveyQuestion =()=>{
          let newSurveyQuestion = [...squestions];
          let newQ = {
              qtext : qText,
              qtype : qType,
              options : options
          }
          console.log("qtype",newQ.qtype);
          newSurveyQuestion.push(newQ);
          setSquestions(newSurveyQuestion);
          setQtype(0);
          setQtext('');
          setOptions(defaultOptionsState);
          
     }

     const publish =()=>{
           updateSurveyQuestion();
           history.push('/published');
     }

    return (
        <>
        <TypeSelector qType={qType} setQtype={setQtype}/>
        {qType !==0 ? 
        <>
           <Questions onTextUpdate = {setQtext} />
             {options.map((opt,key)=>(
               
                  <Options key={key} 
                  uid={opt.uid}
                  addOptions={addOptions}
                  deleteOptions={deleteOptions}
                  updateOptionstext={updateOptionstext}
                  qType={qType} 
                  />
               
             ))}
            <button className="btn btn-primary m-1" onClick={()=>{updateSurveyQuestion()}}>Add Question</button>
            <button className="btn btn-primary m-1" onClick={()=>publish()}>Publish</button>
        </>
        :null}
      
        </>
    )
}
export default CreateSurvey;