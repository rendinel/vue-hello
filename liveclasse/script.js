 var app = new Vue({
 el: '#root',
 data: {
   name:'',
   surname:'',
   boxClassName: 'box',
   color:'red',
   titleColor:'red'
 },
 methods: {
   saluta: function () {
     alert('ciao')
   },
   submitFunction: function () {
     alert('ted')
   },
   changeColor: function() {
     this.titleColor = 'blue';
   }

 }
});
Vue.config.devtools = true;
