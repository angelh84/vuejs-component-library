<template>
  <div class="wrapper modals-content">
    <h1>Modals</h1>
    <span class="headline-divider"></span>
    <p>Use modal dialogs when you need a response from a user, to reveal critical information, or to show info without losing the context of the page. No other interactions on the main page can be accessed while a modal dialog is active.</p>

    <h2>Basic Modals</h2>
    <p>The basic dialog for modals should contain only valuable and relevant information. Simplify dialogs by removing unnecessary elements or content that doesn't support user tasks. If you find that the number of required elements for your design are making the dialog excessively large, then try a different design solution.</p>

    <div class="modal-explained-parent">
      <img class="modal-explained" :src="ModalExplained">
    </div>

    <div class="modal-list">
      <div class="padding">
        <ol class="modal-explained-list">
          <li><strong>Title</strong> -  The title provides a concise overview of the contents of the modal dialog. The underline for the modal title should span 50% of the modal width despite the length of the title text.</li>
          <li><strong>Content</strong> - The contents of the dialog. Don't try to cram too much info in here or include multiple steps. If multiple steps are required, consider using a whole page or wizard pattern instead.</li>
          <li><strong>Footer</strong> - Contains a primary action, the ability to cancel the dialog, and may contain a text hint (in detailed dialogs). Should remain fixed to the bottom of the modal.</li>
          <li><strong>Close Icon</strong> - Used to dismiss the modal.</li>
          <li><strong>Background Overlay</strong> - <span class="italic">n400</span> - Clooney at 70% opacity should overlay all content on the page. No actions on the main page are available while the modal is active.</li>
          <li><strong>Actions</strong> - Contains a primary action and the ability to cancel and close the dialog. The main action should be a primary button that uses self-describing action verbs ('Add' instead of 'OK').</li>
          <li><strong>Header</strong> - Contains the title of the modal and provides access to additional information and filters (in detailed dialogs). Remains fixed to the top of the modal</li>
        </ol>
      </div>
    </div>

    <div class="modal-height">
      <div class="padding">
        <h2>Scrolling &amp; Modal Height</h2>
        <p>The height of a dialog is determined by the content. Once it reaches a certain threshold, the body content will scroll while the header and footer remain fixed until it reaches the bottom of the modal dialog.</p>
        <p>Content will begin scrolling once the modal has reached 90% of the screen height.</p>
      </div>
    </div>

    <h2 class="sizes-headline">Modal Sizes</h2>
    <p>Modals are available in 4 sizes and should be used based on the content and action required from the user within the modal content. </p>

    <div class="modal-buttons">
      <button @click="ModalSmall = true" type="button" class="btn-standard">Small (400px wide)</button>
      <button @click="ModalMedium = true" type="button" class="btn-standard">Medium (600px wide)</button>
      <button @click="ModalLarge = true" type="button" class="btn-standard">Large (800px wide)</button>
      <button @click="ModalXL = true" type="button" class="btn-standard">Extra-Large (968px wide)</button>
    </div>

    <modal class="modal-small" :modal="ModalSmall" @close="ModalSmall = false">
      <div slot="modal-title">This is a 400 pixel wide modal</div>
      <div slot="modal-body">
        <p>Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis.</p>
        <p>Sunt ad dolore quis aute consequat. Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor adipisicing.</p>
      </div>
    </modal>

    <modal class="modal-medium" :modal="ModalMedium" @close="ModalMedium = false">
      <div slot="modal-title">This is a 600 pixel wide modal</div>
      <div slot="modal-body">
        <p>Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis.</p>
        <p>Sunt ad dolore quis aute consequat. Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor adipisicing.</p>
      </div>
    </modal>

    <modal class="modal-large" :modal="ModalLarge" @close="ModalLarge = false">
      <div slot="modal-title">This is a 800 pixel wide modal</div>
      <div slot="modal-body">
        <p>Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis.</p>
        <p>Sunt ad dolore quis aute consequat. Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor adipisicing.</p>
      </div>
    </modal>

    <modal class="modal-xl" :modal="ModalXL" @close="ModalXL = false">
      <div slot="modal-title">This is a 968 pixel wide modal</div>
      <div slot="modal-body">
        <p>Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis.</p>
        <p>Sunt ad dolore quis aute consequat. Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor adipisicing.</p>
      </div>
    </modal>

    <h2>Modals in the url</h2>
    <div class="modal-buttons">
      <router-link :to="{name: 'Modal1'}" tag="button" class="btn-standard show-modal">
        Activate Small Modal
      </router-link>
      <router-link :to="{name: 'Modal2'}" tag="button" class="btn-standard show-modal">
        Activate XL Modal
      </router-link>
    </div>

  </div>
</template>

<script>
import ModalExplained from '@/assets/image/modal-explained.png'
import Modal from '@/components/common/Modal'

export default {
  components: {
    ModalExplained,
    Modal
  },
  data () {
    return {
      ModalExplained: ModalExplained,
      ModalSmall: false,
      ModalMedium: false,
      ModalLarge: false,
      ModalXL: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .modal-explained {
    width: 100%;
    max-width: 642px;
    margin: 0 auto;
  }

  .modal-explained-parent {
    background-color: #7a8aa3;
    width: 100%;
    padding: 25px 15px;
  }

  .modal-explained-list {
    margin-top: 37px;
  }

  .modal-buttons {
    button {
      min-width: 200px;
      margin-bottom: 25px;
    }
  }

  .sizes-headline {
    clear: both;
    padding-top: 25px;
  }

  @media (min-width: 992px) {

    .modal-list {
      padding-right: 20px;
      @include column(50%);
    }

    .modal-height {
      @include column(50%);
      padding-left: 20px;
    }

    .modal-buttons {
      button {
        display: inline-block;
        margin-right: 25px;
      }
    }
    
  }
</style>
