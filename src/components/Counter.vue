<template>
  <div>
    <p>Count numbers: {{ counter }}</p>
    <button @click="startWorker">Start Worker</button>
    <button @click="stopWorker()">Stop Worker</button>
  </div>

</template>

<script>

var w

export default {
  name: 'counter',
  data () {
    return {
      counter: 0
    }
  },
  methods: {
    startWorker: function () {
      console.log('start Worker')
      var component = this
      if (typeof (Worker) !== 'undefined') {
        console.log('1')
        if (typeof (w) === 'undefined') {
          console.log('2')
          w = new Worker('/static/js/counter.js')
        }
        w.onmessage = function (event) {
          console.log('3')
          console.log('received data: ' + event.data)
          component.counter = event.data
        }
      } else {
        console.log('Sorry! No Web Worker support.')
      }
    },
    stopWorker: function () {
      console.log('stop Worker')
      w.terminate()
      w = undefined
    }
  }
}
</script>

