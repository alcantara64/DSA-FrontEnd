import React, { ReactNode, Component } from 'react';
import  './modal.module.css';

 class  Modal extends Component<IModalProps> {

   componentDidUpdate(prevProps:IModalProps, prevState:any){
     if(this.props.show != prevProps.show){
       this.setState({
         ...this.state,
       })
     }
   }
   render(){
   console.log(this.props, 'props in Modal')
  let divStyle = {display :!this.props.show?'none':''}
  return (
  <div style={divStyle}  className="em-c-modal em-js-modal-only" id="">
          <div className="em-c-modal__window em-js-modal-window">
            <div className="em-c-modal__header">
              <h3 className="em-c-modal__title text-center">Interests</h3>
              <button className="em-c-btn em-c-btn--bare em-c-modal__close-btn em-js-modal-close-trigger em-c-modal__close-btn">
                <span style={{color:'#0c69b0'}}
                  onClick={this.props.close}
                  className="em-c-btn__text custom-modal"
                >
                  Close
                </span>
              </button>
            </div>

            <div className="em-c-field em-c-field--checkbox em-is-valid">
              <div className="em-c-field__body">
                <ul className="em-c-option-list">
                  {this.props.children}
                </ul>
              </div>
            </div>

            <div className="em-c-modal__footer em-c-text-passage em-c-text-passage--small">
            
            </div>
          </div>
        </div>
  )
   }
}
export default Modal;

interface IModalProps {
  title : string;
  close() :void;
  openHander(): void;
  show : boolean;
  children: ReactNode


}