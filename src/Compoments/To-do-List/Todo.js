import React, { useContext, useState } from "react";
import { BsSendFill } from "react-icons/bs";
import { GlobalList, Todo_Context } from "./Todo_Context";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import To_do from "./To_do.css";
import "react-toastify/dist/ReactToastify.css";
import { nanoid } from "nanoid";
export const Todo = () => {
  const { list, setList } = useContext(GlobalList);
  const [input, setInput] = useState("");
  const [completedTasks, setCompletedTasks] = useState(0);
  const [task, setTask] = useState(0);

  const Addonlist = (e) => {
    const id=nanoid();
    if (input.trim() !== "") {
     setList([...list,{id:id,task:input,iscompleted:false}])
     setInput("")
     setTask(task+1);
      toast.success("Your Note is added!");
    } else {
      toast.error("Please fill input field!");
    }
  };
  const completedtask = (index) => {
   list.map((element,id)=>{
    if(element.id==index && element.iscompleted==false){
              element.iscompleted=true;
              setCompletedTasks(completedTasks+1);
              toast.success("Task Completed!");
     }
     else if(element.id==index && element.iscompleted==true){
      element.iscompleted=false;
      setCompletedTasks(completedTasks-1);
     }
   })
    
  };
  const deletelememt = (itemToDelete) => {
    const updatedItems = list.filter((item, index) => item.id !== itemToDelete);
    setList(updatedItems);
    setTask(task - 1);
    toast.success("Your Note is Deleted!");
  };
  
  return (
   
    <div className="todoContainer">
      <div className="totalContainer">
        <div className="completedTask">completedTask:{completedTasks}</div>
        <div className="Task" id="Taskid">
          Task:{task}
        </div>
      </div>
      
      <div className="inputConatiner">
        <div>
          {" "}
          <input
            className="inputfield"
            type="text"
            placeholder="Text Here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div className="addbtn">
          {" "}
          <BsSendFill
            onClick={Addonlist}
            size="3em"
            style={{ backgroundColor: "white" }}
          />
        </div>
      </div>
      {(list.length===0 ) ?(
     <div>
      <img src='./images/lazy.jpg' style={{width:"450px",height:"200px" ,display:"flex",alignContent:"center",opacity:"0.5",margin:"100px",marginLeft:"450px"}}></img>
    </div>
  ):(<div>
      <div className="grid-container">
     {list.map((element, index) => {
          return (
            <div key={element.id} className="card-container">
              <div className="card">
                {" "}
                <div className="elment"><h1>{element.task}</h1></div>
                <input
                  type="checkbox"
                  id={`vehicle${index}`}
                  name={`vehicle${index}`}
                  value="Bike"
                  onClick={()=>completedtask(element.id)}
                />
                <MdDelete
                  onClick={() => {
                    deletelememt(element.id);
                  }}
                  className="deletebtn"
                />
              </div>
            </div>
          );
        })}
      </div>
      <ToastContainer />
      </div>)}
    </div>
  );
};
