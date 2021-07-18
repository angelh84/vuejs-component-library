<template>
  <div class="wrapper notifications-content">
    <h1>Notifications</h1>
    <span class="headline-divider"></span>
    <p>Use notifications to communicate conditions, indicate an event, or to show responses to user actions. Content can include authentication, information, confirmation, warnings, and error messages. It is important to specify which of these the content of the message falls under in order to choose the correct icon and colors.</p>

    <h2>Notification Types</h2>
    <h3>Growlrs</h3>
    <p>Growlrs are used for confirmations, alerts, and acknowledgments that require minimal user interaction. These event-driven messages appear by overlaying content at the bottom right of the screen, emerging from the bottom of the screen. Growlrs have a max width of 350px.</p>

    <div class="notification-image-parent">
      <div class="notification-image-child">
        <img class="notification-image" :src="NotificationImage">
      </div>
    </div>

    <div class="notification-list-parent">
      <div class="notifcation-list-child">
        <ol>
          <li><strong>Icon</strong> - Icon and color are selected based on notification type</li>
          <li><strong>Title</strong> - Short, concise title in sentence case based on the action</li>
          <li><strong>Description</strong> - Informative description about the details of the notification. Descriptions are restricted to five lines in length. If the text overflows, it will truncate using an ellipsis.</li>
          <li><strong>Close icon</strong> - Used by the user to dismiss the notification</li>
          <li><strong>Actions (<span class="italic">optional</span>)</strong> - A maximum of two links that enable users to act on the notification’s content.</li>
        </ol>
      </div>
    </div>
    
    <h3 class="clear">Variations</h3>
    <p>Growlrs can contain a combination of a title, a description, and one or two actions. Growlers can also be used for success confirmations, warnings, errors or general information. </p>

    <div class="notification-buttons">
      <button @click="$refs.success.show()" type="button" class="btn-standard fa-check">Success Notification</button>
      <button @click="$refs.info.show()" type="button" class="btn-standard fa-info">Info Notification</button>
      <button @click="$refs.warning.show()" type="button" class="btn-standard fa-exclamation-triangle">Warning Notification</button>
      <button @click="$refs.critical.show()" type="button" class="btn-standard fa-exclamation-circle">Critical Notification</button>
    </div>
    
    <notification ref="success" group="success" class="success" title="Success Title" content="success content" />
    <notification ref="info" group="info" class="info" title="Info Title" content="info content" />
    <notification ref="warning" group="warning" position="bottom left" class="warning" title="Warning Title" content="warning content" />
    <notification ref="critical" group="critical" position="top right" class="critical" title="Critical Title" content="Used to help users avoid error situations. Consists of a description of potential errors. It should provide a recommended next step, and an option to be reminded at a later date. <br> <a href='#'>Link One</a> <a href='#'>Link Two</a>" />

  </div>
</template>

<script>
import Notification from '@/components/common/Notification'
import NotificationImage from '@/assets/image/notification-example.png'

export default {
  data () {
    return {
      NotificationImage: NotificationImage
    }
  },
  components: {
    Notification,
    NotificationImage
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

  .notification-buttons {
      button {
        min-width: 200px;
        margin-bottom: 25px;
      }
  }

  @media (min-width: 992px) {
    .notification-buttons {
      button {
        display: inline-block;
        margin-right: 25px;
      }
    }
  }

  @media (min-width: 1200px) {

    .notification-image-parent {
      @include column(50%);
    }

    .notification-list-parent {
      @include column(50%);
    }

    .notification-image-child {
      padding-right: 15px;
    }

    .notification-list-child {
      padding-left: 15px;
    }

  }
</style>
