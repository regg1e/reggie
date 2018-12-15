const $ = require('jquery')
require('./css/index.css')

$(function(){
  $('body').css('backgroundColor','pink')
  $('body').html('御剑乘风来')
})

class Animal{
  static info = '动物'
}

console.log(Animal.info)
