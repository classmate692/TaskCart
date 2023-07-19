import React, { useContext, useState } from "react";
import { BsSendFill } from "react-icons/bs";
import { GlobalList, Todo_Context } from "./Todo_Context";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import To_do from "./To_do.css";
import "react-toastify/dist/ReactToastify.css";
export const Todo = () => {
  const { list, setList } = useContext(GlobalList);
  const [input, setInput] = useState("");
  const [completedTasks, setCompletedTasks] = useState([]);
  const [task, setTask] = useState(0);

  const Addonlist = () => {
    if (input.trim() !== "") {
      setList([...list, input]);
      setInput("");
      setTask(task + 1);
      toast.success("Your Note is added!");
    } else {
      toast.error("Please fill input field!");
    }
  };
  const completedtask = (index) => {
    if (completedTasks.includes(index)) {
      setCompletedTasks((prevCompletedTasks) =>
        prevCompletedTasks.filter((completedIndex) => completedIndex !== index)
      );
    } else {
      setCompletedTasks((prevCompletedTasks) => [...prevCompletedTasks, index]);
    }
    toast.success("Task Completed!");
  };
  const deletelememt = (itemToDelete) => {
    const updatedItems = list.filter((item, index) => index !== itemToDelete);
    setList(updatedItems);
    setTask(task - 1);
    toast.success("Your Note is Deleted!");
  };
  
  return (
   
    <div className="todoContainer">
      <div className="totalContainer">
        <div className="completedTask">completedTask:{completedTasks.length}</div>
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
            <div key={index} className="card-container">
              <h2 className="card">
                {" "}
                <div className="elment">{element}</div>
                <input
                  type="checkbox"
                  id={`vehicle${index}`}
                  name={`vehicle${index}`}
                  value="Bike"
                  onClick={()=>completedtask(index)}
                />
                <MdDelete
                  onClick={() => {
                    deletelememt(index);
                  }}
                  className="deletebtn"
                />
              </h2>
            </div>
          );
        })}
      </div>
      <ToastContainer />
      </div>)}
    </div>
  );
};
