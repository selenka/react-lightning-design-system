import React from 'react';

import { Modal, Button } from 'react-lightning-design-system';

const { Header, Content, Footer } = Modal;

export default class ModalExamples extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal1: { opened: false },
      modal2: { opened: false }
    };
  }

  showModal(name) {
    this.setState({
      [name]: { ...this.state[name], opened: true }
    });
  }

  hideModal(name) {
    this.setState({
      [name]: { ...this.state[name], opened: false }
    });
  }

  render() {
    const styles = { padding: '12px' };
    const headingClass = 'slds-p-top--large';
    const hideModal1 = this.hideModal.bind(this, 'modal1');
    const hideModal2 = this.hideModal.bind(this, 'modal2');
    return (
      <div>
        <h2 className='slds-m-vertical--medium'>Modal</h2>
        <div style={ styles }>
          <Button type='neutral' onClick={ this.showModal.bind(this, 'modal1') }>Show Modal #1</Button>
          <Modal
            opened={ this.state.modal1.opened }
            onHide={ hideModal1 }
          >
            <Header title='Modal #1' closeButton />
            <Content>
              <div>
                <p>Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis. Cillum sunt ad dolore
                  quis aute consequat ipsum magna exercitation reprehenderit magna. Tempor cupidatat consequat elit dolor adipisicing.</p>
                <p>Dolor eiusmod sunt ex incididunt cillum quis nostrud velit duis sit officia. Lorem aliqua enim laboris do dolor eiusmod officia. Mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident. Eiusmod et adipisicing culpa deserunt
                  nostrud ad veniam nulla aute est. Labore esse esse cupidatat amet velit id elit consequat minim ullamco mollit enim excepteur ea.</p>
              </div>
            </Content>
            <Footer>
              <Button type='neutral' label='Cancel' onClick={ hideModal1 }/>
              <Button type='brand' label='Done' onClick={ hideModal1 } />
            </Footer>
          </Modal>
          <Button type='neutral' onClick={ this.showModal.bind(this, 'modal2') }>Show Modal #2</Button>
          <Modal
            opened={ this.state.modal2.opened }
            size='large'
            onHide={ hideModal2 }
          >
            <Header title='Modal #2' closeButton />
            <Content>
              <div>
                <p>Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis. Cillum sunt ad dolore
                  quis aute consequat ipsum magna exercitation reprehenderit magna. Tempor cupidatat consequat elit dolor adipisicing.</p>
                <p>Dolor eiusmod sunt ex incididunt cillum quis nostrud velit duis sit officia. Lorem aliqua enim laboris do dolor eiusmod officia. Mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident. Eiusmod et adipisicing culpa deserunt
                  nostrud ad veniam nulla aute est. Labore esse esse cupidatat amet velit id elit consequat minim ullamco mollit enim excepteur ea.</p>
              </div>
            </Content>
            <Footer directional>
              <Button type='neutral' label='Cancel' onClick={ hideModal2 }/>
              <Button type='brand' label='Done' onClick={ hideModal2 } />
            </Footer>
          </Modal>
        </div>
      </div>
    );
  }
}
