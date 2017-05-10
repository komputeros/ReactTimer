var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

var Countdown = require('Countdown');


describe('Countdown', ()=> {
  it('Should exist', ()=>{
    expect(Countdown).toExist();
  });

  describe('handleSetCountDown', ()=> {
    it('should set state to started and coutntdown', (done)=>{
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountDown(10);

      expect(countdown.state.count).toBe(10);
      expect(countdown.state.countdownStatus).toBe('started');

      setTimeout(()=> {
        expect(countdown.state.count).toBe(9);
        done();
      }, 1001);
    });


    it('should set state to 0 if minus', (done)=>{
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountDown(1);
      setTimeout(()=> {
        expect(countdown.state.count).toBe(0);
        done();
      }, 3000);
    });

    it('should pause coundown on paused status', (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountDown(3);
      countdown.handleStatusChange('paused');
      setTimeout(()=> {
        expect(countdown.state.count).toBe(3);
        expect(countdown.state.countdownStatus).toBe('paused');
        done();
      }, 1001);
    });

    it('should reset coundown on stopped status', (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountDown(3);
      countdown.handleStatusChange('stopped');
      setTimeout(()=> {
        expect(countdown.state.count).toBe(0);
        expect(countdown.state.countdownStatus).toBe('stopped');
        done();
      }, 1001);
    });

  });

});
