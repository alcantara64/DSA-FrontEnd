import React, { ReactNode, Component } from 'react';
import  './modal.module.css';

 class  Modal extends Component<IModalProps> {
   constructor(props:IModalProps){
       super(props);
       this.state ={
          loading:false,
          error : false,
       }
   }
   render(){

  if(this.props.show){
  return (
  <div   className="em-c-modal em-js-modal-only" id="">
          <div className="em-c-modal__window em-js-modal-window">
            <div className="em-c-modal__header modalHeader">
              <h3 className="em-c-modal__title text-center">Interests</h3>
              
            </div>

            <div className="em-c-field em-c-field--checkbox em-is-valid">
              <div className="em-c-field__body">
                 {this.props.children}
                <button onClick={this.props.close} className="em-c-btn em-c-btn--secondary em-js-modal-cancel-trigger em-c-btn__text custom-modal pullRight modalDisplay" ><span className="em-c-btn__text ">Close</span></button>
              </div>
             
            </div>

            <div className="em-c-modal__footer em-c-text-passage em-c-text-passage--small">
            
            </div>
          </div>
        </div>
  )
  }else{
    return <div></div>
  }
   }
}
export default Modal;

interface IModalProps {
  title : string;
  close() :void;
  openHander(): void;
  save() : void;
  show : boolean;
  children: ReactNode


}