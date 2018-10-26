<template>
  <div class="wrapper tabs-and-accordions-content">
    <h1>TABS &amp; ACCORDIANS</h1>
    <span class="headline-divider">&nbsp;</span>

    <p>Tabs and accordians can be used to group content into distinct sections or containers. Tabs are commonly used for secondary navigation on pages while accordians are best suited for revealing more details about specific content blocks.</p>

    <h2>Vertical Tabs</h2>
    <p>Vertical tabs are commonly used for secondary page navigation. The provide a quick, intuitive way for users to jump between sections of content or pages. </p>

    <div class="vertical-tabs-image-wrapper clearfix">
      <img class="vertical-tabs-image" :src="VerticalTabsImage">
    </div>

    <div class="vertical-tabs-list clearfix">
      <ol>
        <li><strong>Inactive Tab</strong> - Text styling for an inactive tab</li>
        <li><strong>Active Page Indicator</strong> - Short line indicator of active tab</li>
        <li><strong>Active Page Title</strong> - Text styling for the active tab</li>
        <li><strong>Hover Tab</strong> - Text styling for tab on hover</li>
        <li><strong>Divider</strong> - If the tabs are being used as a secondary page navigation they should have a vertical divider separating from the main content area.</li>
      </ol>
    </div>

    <h2 class="horizontal-tabs-h2">Horizontal Tabs</h2>
    <p>Horizontal tabs are commonly used to display different sub-sections of content within a single page. The sections are related to the same page, yet should be divided into distinct sections to simplify the experience for the user.</p>

    <div class="horizontal-tabs-image-wrapper clearfix">
      <img class="horizontal-tabs-image" :src="HorizontalTabsImage">
    </div>

    <div class="horizontal-tabs-list clearfix">
      <ol>
        <li><strong>Inactive Tab</strong> - Text styling for an inactive tab</li>
        <li><strong>Active Page Indicator</strong> - Short line indicator of active tab</li>
        <li><strong>Active Page Title</strong> - Text styling for the active tab</li>
        <li><strong>Hover Tab</strong> - Text styling for tab on hover</li>
        <li><strong>Divider</strong> - If the tabs are being used as a secondary page navigation they should have a vertical divider separating from the main content area.</li>
      </ol>
    </div>

    <h2 class="vertical-tabs-h2">Vertical Tabs Demo</h2>
    <ul class="vertical-tabs">
      <tabs orientation="vertical" :nav="{myaccount: 'My Account', integrations: 'Integrations', billing: 'Billing', settings: 'Settings'}">
        <div slot="tab.myaccount">
          <p><strong>My Account Content</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum vel elit non convallis. Donec nec convallis tortor, id elementum arcu. Quisque id mauris vitae tortor congue blandit eu nec ex. Nunc suscipit risus nulla, vitae sagittis ante vestibulum ut. Vivamus tristique non nulla sed fermentum. Quisque varius gravida hendrerit. Nulla a risus enim. Vivamus commodo odio felis, eget accumsan neque bibendum et. Cras a odio ultricies, vehicula nibh quis, mattis tellus. Nam bibendum vel odio sed vestibulum.</p>
          <p>Vestibulum nisi tortor, pharetra a augue vel, finibus ultrices nisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas a felis vel lectus hendrerit ornare at sit amet nunc. Sed volutpat erat enim, eget pellentesque neque rhoncus sed. Nullam eu tempus neque. Nunc in ante odio. Donec luctus efficitur nulla ac fermentum. Duis id quam libero. Duis enim nisi, aliquet et tortor facilisis, luctus elementum sapien. Fusce porta mi mauris, sit amet sollicitudin lacus fringilla ac.</p>
        </div>
        <div slot="tab.integrations">
          <p><strong>Integrations Content</strong> Vestibulum nisi tortor, pharetra a augue vel, finibus ultrices nisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas a felis vel lectus hendrerit ornare at sit amet nunc. Sed volutpat erat enim, eget pellentesque neque rhoncus sed. Nullam eu tempus neque. Nunc in ante odio. Donec luctus efficitur nulla ac fermentum. Duis id quam libero. Duis enim nisi, aliquet et tortor facilisis, luctus elementum sapien. Fusce porta mi mauris, sit amet sollicitudin lacus fringilla ac.</p>
        </div>
        <div slot="tab.billing">
          <p><strong>Billing Content</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum vel elit non convallis. Donec nec convallis tortor, id elementum arcu. Quisque id mauris vitae tortor congue blandit eu nec ex. Nunc suscipit risus nulla, vitae sagittis ante vestibulum ut. Vivamus tristique non nulla sed fermentum. Quisque varius gravida hendrerit. Nulla a risus enim. Vivamus commodo odio felis, eget accumsan neque bibendum et. Cras a odio ultricies, vehicula nibh quis, mattis tellus. Nam bibendum vel odio sed vestibulum.</p>
        </div>
        <div slot="tab.settings">
          <p><strong>Settings Content</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum vel elit non convallis. Donec nec convallis tortor, id elementum arcu. Quisque id mauris vitae tortor congue blandit eu nec ex. Nunc suscipit risus nulla, vitae sagittis ante vestibulum ut. Vivamus tristique non nulla sed fermentum. Quisque varius gravida hendrerit. Nulla a risus enim. Vivamus commodo odio felis.</p>
        </div>
      </tabs>
    </ul>

    <h2 class="horizontal-tabs-h2">Horizontal Tabs Demo</h2>  
    <tabs :nav="['Overview', 'Offers', 'Analytics', 'Reporting', 'Pixels']">
      <div slot="tab.Overview">
        <p><strong>Overview Content</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum vel elit non convallis. Donec nec convallis tortor, id elementum arcu. Quisque id mauris vitae tortor congue blandit eu nec ex. Nunc suscipit risus nulla, vitae sagittis ante vestibulum ut. Vivamus tristique non nulla sed fermentum. Quisque varius gravida hendrerit. Nulla a risus enim. Vivamus commodo odio felis, eget accumsan neque bibendum et. Cras a odio ultricies, vehicula nibh quis, mattis tellus. Nam bibendum vel odio sed vestibulum.</p>
        <p>Vestibulum nisi tortor, pharetra a augue vel, finibus ultrices nisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas a felis vel lectus hendrerit ornare at sit amet nunc. Sed volutpat erat enim, eget pellentesque neque rhoncus sed. Nullam eu tempus neque. Nunc in ante odio. Donec luctus efficitur nulla ac fermentum. Duis id quam libero. Duis enim nisi, aliquet et tortor facilisis, luctus elementum sapien. Fusce porta mi mauris, sit amet sollicitudin lacus fringilla ac.</p>
      </div>
      <div slot="tab.Offers">
        <p><strong>Offers Content</strong> Vestibulum nisi tortor, pharetra a augue vel, finibus ultrices nisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas a felis vel lectus hendrerit ornare at sit amet nunc. Sed volutpat erat enim, eget pellentesque neque rhoncus sed. Nullam eu tempus neque. Nunc in ante odio. Donec luctus efficitur nulla ac fermentum. Duis id quam libero. Duis enim nisi, aliquet et tortor facilisis, luctus elementum sapien. Fusce porta mi mauris, sit amet sollicitudin lacus fringilla ac.</p>
      </div>
      <div slot="tab.Analytics">
        <p><strong>Analytics Content</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum vel elit non convallis. Donec nec convallis tortor, id elementum arcu. Quisque id mauris vitae tortor congue blandit eu nec ex. Nunc suscipit risus nulla, vitae sagittis ante vestibulum ut. Vivamus tristique non nulla sed fermentum. Quisque varius gravida hendrerit. Nulla a risus enim. Vivamus commodo odio felis, eget accumsan neque bibendum et. Cras a odio ultricies, vehicula nibh quis, mattis tellus. Nam bibendum vel odio sed vestibulum.</p>
      </div>
      <div slot="tab.Reporting">
        <p><strong>Reporting Content</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum vel elit non convallis. Donec nec convallis tortor, id elementum arcu. Quisque id mauris vitae tortor congue blandit eu nec ex. Nunc suscipit risus nulla, vitae sagittis ante vestibulum ut. Vivamus tristique non nulla sed fermentum. Quisque varius gravida hendrerit. Nulla a risus enim. Vivamus commodo odio felis, eget accumsan neque bibendum et. Cras a odio ultricies, vehicula nibh quis, mattis tellus. Nam bibendum vel odio sed vestibulum.</p>
      </div>
      <div slot="tab.Pixels">
        <p><strong>Pixels Content</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum vel elit non convallis. Donec nec convallis tortor, id elementum arcu. Quisque id mauris vitae tortor congue blandit eu nec ex. Nunc suscipit risus nulla, vitae sagittis ante vestibulum ut. Vivamus tristique non nulla sed fermentum. Quisque varius gravida hendrerit. Nulla a risus enim. Vivamus commodo odio felis.</p>
      </div>
    </tabs>
    
    <h2 class="accordion-h2">Accordions</h2>
    <p>Accordions are used to display details about specific groups of content. For example, elaborating on a list of key values for a particular feature or tool.  Accordians can be set to have only one section open at a time, or allow multiple sections to be active together.</p>

    <accordion>
      <accordion-row title="This is the title of the FIRST accordion tab">
      <p>This is some content related to this FIRST accordian section. It elaborates and give some advance details about the information listed in the accordian section title. This is a great UI component when you’re introducing software features at a high level and don’t want to overwhelm the user with content out of the gates. However, you also have advanced users who desire more details, therefore they can dig into the accordian to discover more about a particular feature which resonates with their needs.</p>
      </accordion-row>
      <accordion-row title="This is the title of the SECOND accordion tab">
      <p>This is some content related to this SECOND accordian section. It elaborates and give some advance details about the information listed in the accordian section title. This is a great UI component when you’re introducing software features at a high level and don’t want to overwhelm the user with content out of the gates. However, you also have advanced users who desire more details, therefore they can dig into the accordian to discover more about a particular feature which resonates with their needs.</p>
      </accordion-row>
      <accordion-row title="This is the title of the THIRD accordion tab">
      <p>This is some content related to this THIRD accordian section. It elaborates and give some advance details about the information listed in the accordian section title. This is a great UI component when you’re introducing software features at a high level and don’t want to overwhelm the user with content out of the gates. However, you also have advanced users who desire more details, therefore they can dig into the accordian to discover more about a particular feature which resonates with their needs.</p>
      </accordion-row>
    </accordion>

  </div>
</template>

<script>
import Tabs from '@/components/common/Tabs'
import Accordion from '@/components/common/Accordion'
import AccordionRow from '@/components/common/AccordionRow'
import VerticalTabsImage from '@/assets/image/vertical-tabs.png'
import HorizontalTabsImage from '@/assets/image/horizontal-tabs.png'

export default {
  components: {
    Tabs,
    Accordion,
    AccordionRow
  },
  data () {
    return {
      VerticalTabsImage: VerticalTabsImage,
      HorizontalTabsImage: HorizontalTabsImage
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

  .clear {
    clear: both;
  }

  .vertical-tabs-image {
    width: 100%;
    max-width: 350px;
  }

  .horizontal-tabs-image {
    width: 100%;
    max-width: 660px;
  }

  .horizontal-tabs-list {
    margin-bottom: 45px;
  }

  .horizontal-tabs-h2 {
    clear: both;
    padding-top: 75px;
  }

  .vertical-tabs-h2 {
    padding-top: 35px;
  }

  ul li {
    list-style-type: none;
  }

  .accordion-h2 {
    clear: both; 
    padding-top: 50px;
  }

  @media (min-width: 968px) {
    .vertical-tabs-image-wrapper,
    .vertical-tabs-list {
      @include column(50%);
    }

    .vertical-tabs-image-wrapper {
      img {
        float: right;
      }
    }

  }

</style>
