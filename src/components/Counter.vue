<template>
  <div>
    <p>Count numbers: {{ counter }}</p>
    <button @click="startWorker">Start Worker</button>
    <button @click="stopWorker()">Stop Worker</button>
  </div>

</template>

<script>

let w

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
      if (typeof (Worker) !== 'undefined') {
        if (typeof (w) === 'undefined') {
          w = new Worker('/static/js/counter.js')
        }
        w.onmessage = (event) => {
          console.log('received data: ' + event.data)
          this.counter = event.data
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

