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

     getDerivedStateFromProps(nextProps:IModalProps) {
    this.setState({
    ...this.state,
    loading : true,

    });
  }

   componentDidUpdate(prevProps:IModalProps, prevState:any){
     if(this.props.show != prevProps.show){
       this.setState({
         ...this.state,
       })
     }
   }
   render(){
   console.log(this.props, 'props in Modal')

  if(this.props.show){
  return (
  <div   className="em-c-modal em-js-modal-only" id="">
          <div className="em-c-modal__window em-js-modal-window">
            <div className="em-c-modal__header">
              <h3 className="em-c-modal__title text-center">Interests</h3>
              {/* <button className="em-c-btn em-c-btn--bare ">
                <span style={{color:'#0c69b0'}}
                  onClick={this.props.close}
                  className="em-c-btn__text custom-modal"
                >
                  Close
                </span>
              </button> */}
              <button className="em-c-btn em-c-btn--secondary em-js-modal-cancel-trigger em-c-btn__text custom-modal pullRight"  onClick={this.props.close}
              
              >
          <span className="em-c-btn__text ">Cancel</span>
        </button>
            </div>

            <div className="em-c-field em-c-field--checkbox em-is-valid">
              <div className="em-c-field__body">
                 {this.props.children}
                
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
  show : boolean;
  children: ReactNode


}