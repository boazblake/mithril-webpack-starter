import m from "mithril"
import Default from "./component.js"

export const registerForm = {
  view: function() {
    return(
      m("form", {
        onsubmit: function(e) {
          e.preventDefault()
          Default.register()
        }
      },
      [
        m("label.label", "Email"),
        m("input.input[type=text][placeholder=First name][required=true]", {
          oninput: m.withAttr("value", value => Default.state.email = value)}),

        m("label.label", "Password"),
        m("input.input[placeholder=Last name][required=true][type=password]", {
          oninput: m.withAttr("value", value => Default.state.password = value)}),

        m("button.button[type=submit]",{class: "c-button button-brand"},"Save"),
      ]))
  }
}

module.exports = registerForm