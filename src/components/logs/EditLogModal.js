import React, {useState} from "react";
import M from 'materialize-css/dist/js/materialize'
const EditLogModal = () =>{
  const [message , setMessage] = useState('');
  const [attention , setAttention] = useState(false);
  const [tech , setTech] = useState('')
  const onSubmit = () =>{
    if(message === '' || tech === ''){
      M.toast({html:'Please enter a message and tech'})
    }else{
      console.log(message , tech , attention)

      //clear Fields

      setMessage('');
      setAttention(false);
      setTech('')
    }

  }
  return(
    <div id="edit-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content"><h4>Enter System Log</h4>
        <div className="row">
          <div className="input-field">
            <input type="text" name="message" value={message} onChange={(e)=> setMessage(e.target.value) }/>
            <label htmlFor="mesaage" className="active">Log Message</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <select type="text" name="tech" value={tech} onChange={(e)=> setTech(e.target.value) }
                    className="browser-default">
              <option value="" disabled>Select Technician</option>
              <option value="John Doe">John Doe</option>
              <option value="John Doe">John Doe</option>
              <option value="John Doe">John Doe</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <p>
              <label><input type="checkbox" className="filled-in" checked={attention} value={attention}
                            onChange={(e)=>setAttention(!attention)}/>
                <span>Needs Attention</span></label>
            </p>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a href="#!" onClick={onSubmit} className="modal-close blue waves-effect btn">Enter</a>
      </div>
    </div>
  )
}

const modalStyle ={
  width: '75%',
  height: '75%',
}

export default  EditLogModal
