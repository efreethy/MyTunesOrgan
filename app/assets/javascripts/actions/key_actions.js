/* global KeyConstants */
/* global AppDispatcher  */

var KeyActions = {
  keyPressed: function(name){
    var action = {
      actionType: KeyConstants.ADD_KEY,
      noteName: name
    };
    AppDispatcher.dispatch(action);
  },

  keyReleased: function(){
    var action = {
      actionType: KeyConstants.RESET_KEYS
    };
    AppDispatcher.dispatch(action);
  }
};
