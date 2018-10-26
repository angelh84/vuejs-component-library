export default {
  bind: function (el, binding, vnode) {
    el.event = function (event) {
      let code = (event.keyCode ? event.keyCode : event.which)
      let input = el
      // Check if the objective of the directive is another component, if so, us the input ref
      if (vnode.componentInstance !== undefined && vnode.componentInstance.$refs.input !== undefined) {
        input = vnode.componentInstance.$refs.input
      }
      if (code === 9 && input === document.activeElement) {
        vnode.context[binding.expression](event)
      }
    }
    document.body.addEventListener('keyup', el.event)
  },
  unbind: function (el) {
    document.body.removeEventListener('keyup', el.event)
  }
}
