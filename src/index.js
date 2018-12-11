import React from 'react';

import './style.css'; 

export default class ReactOtpComponent extends React.Component{ 
  
  constructor(props){
    super(props);

    this.otp = [];
    this.inputs = [];
  }

  componentDidMount() { 
    //this.textInput.focus();
  }

  focusNext(e){ 
    if(e.target.value !="" && e.target.nextSibling){
      e.target.nextSibling.focus();
    } 
  } 

forceNumberOnly(event) {  

    const keyCode = event.keyCode || event.which;
    let keyValue = String.fromCharCode(keyCode);

    if(event && event.type == "paste"){
       keyValue  = event.clipboardData.getData('text');  
    }   
    if (!/^\d+$/.test(keyValue)){
      event.preventDefault();
    } 
}


  renderInputs() {
   
    let numInputs = this.props.inputs || 4;
    for (let i = 0; i < numInputs; i++) {
      this.inputs.push(
        <div className="otp_item" key={i} > 
          <input 
            type="tel"
            maxLength="1" 
            onKeyPress={(e)=> this.forceNumberOnly(e)}
            onPaste={(e)=> this.forceNumberOnly(e)} 
            onChange={(e)=> this.focusNext(e)} 
            
          />
          {i !=numInputs-1 && <span>-</span>}
        </div>
      );
    }

    return this.inputs;
  }

  render() { 
    return (
      <div  className="otp_container">  
          <div className="otp_block">
            {this.renderInputs()}
          </div> 
      </div>
    );
  }

} 