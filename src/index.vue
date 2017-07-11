<template>
  <div>
    <tabbar :tabItems="tabItems"></tabbar>
  </div>
</template>
<script>
  import config from './config'
  console.log('jane ' + config.js('test.js'));
  var getBaseURL = require('./include/base-url.js').getBaseURL
  module.exports = {
    data: {
      tabItems: [
          {
            index: 0,
            title: 'tab1',
            titleColor: '#000000',
            icon: '',
            image: 'http://gtms01.alicdn.com/tps/i1/TB1qw.hMpXXXXagXXXX9t7RGVXX-46-46.png',
            selectedImage: 'http://gtms04.alicdn.com/tps/i4/TB16jjPMpXXXXazXVXX9t7RGVXX-46-46.png',
            src: 'http://192.168.16.208:8080/dist/native/test.js',
            visibility: 'visible',
          },
          {
            index: 1,
            title: 'tab2',
            titleColor: '#000000',
            icon: '',
            image: 'http://gtms03.alicdn.com/tps/i3/TB1LEn9MpXXXXaUXpXX9t7RGVXX-46-46.png',
            selectedImage: 'http://gtms02.alicdn.com/tps/i2/TB1qysbMpXXXXcnXXXX9t7RGVXX-46-46.png',
            src: 'http://dotwe.org/raw/dist/7e24b83c5868dbd4462e30549999245d.js?itemId=tab2',
            visibility: 'hidden',
          },
          {
            index: 2,
            title: 'tab3',
            titleColor: '#000000',
            icon: '',
            image: 'http://gtms01.alicdn.com/tps/i1/TB1B0v5MpXXXXcvXpXX9t7RGVXX-46-46.png',
            selectedImage: 'http://gtms04.alicdn.com/tps/i4/TB1NxY5MpXXXXcrXpXX9t7RGVXX-46-46.png',
            src: 'http://dotwe.org/raw/dist/8a8b49b67084423e097a6b7f549f1453.js?itemId=tab3',
            visibility: 'hidden',
          },
          {
            index: 3,
            title: 'tab4',
            titleColor: '#000000',
            icon: '',
            image: 'http://gtms01.alicdn.com/tps/i1/TB1B0v5MpXXXXcvXpXX9t7RGVXX-46-46.png',
            selectedImage: 'http://gtms04.alicdn.com/tps/i4/TB1NxY5MpXXXXcrXpXX9t7RGVXX-46-46.png',
            src: 'http://dotwe.org/raw/dist/8a8b49b67084423e097a6b7f549f1453.js?itemId=tab3',
            visibility: 'hidden',
          }
      ]
    },
    components: {
        tabbar: require('./include/tabbar.vue')
    },
    created: function() {
      var baseURL = getBaseURL(this)
      for(var i = 0; i < this.tabItems.length; i++) {
        // var tabItem = this.tabItems[i];
        // tabItem.src = baseURL + tabItem.src;
        // tabItem.src = config.js(tabItem.src);
        // console.log('jane ' + tabItem.src)
      }
    },
    methods: {
      tabBarOnClick: function (e) {
        console.log('tabBarOnClick', e.index)
      }
    }
  }
</script>