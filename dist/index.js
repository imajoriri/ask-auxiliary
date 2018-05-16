function AskAuxiliary(){
}

AskAuxiliary.prototype = {
  // 一般的なスロット取得方法
  getSlot: function(handlerInput, key){
    var request = handlerInput.requestEnvelope.request;
    var slots = request.intent.slots[key];
    if(slots === undefined){
      throw new Error("not defined " + key + " slots");
    }else{
      return slots.value;
    }
  },

  // 類義語を設定している時
  getFixedSlot: function(handlerInput, key){
    var request = handlerInput.requestEnvelope.request;
    var slots = request.intent.slots[key];
    if(slots === undefined){
      throw new Error("not defined " + key + " slots");
    }else if(slots.resolutions.resolutionsPerAuthority[0].values === undefined){
      throw new Error(key + " の類義語設定してない場合は[getSlot]メソッドを使用してね");
    }else{
      return slots.resolutions.resolutionsPerAuthority[0].values[0].value.name;
    }
  },

  // id取得
  getSlotsId: function(handlerInput, key){
    var request = handlerInput.requestEnvelope.request;
    var slots = request.intent.slots[key];
    if(slots === undefined){
      throw new Error("not defined " + key + " slots");
    }else if(slots.resolutions.resolutionsPerAuthority[0].values === undefined){
      throw new Error(key + " の類義語設定してない場合は[getSlot]メソッドを使用してね");
    }else{
      return slots.resolutions.resolutionsPerAuthority[0].values[0].value.id;
    }
  },

}

module.exports = new AskAuxiliary();
