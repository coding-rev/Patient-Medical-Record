<template>
  <main>
    <SideBar />
    <section class="container">
      <div class="container-header">
        <ul>
          <li>
            <a class="title" href="#">Take a tour</a>
          </li>
          <li>
            <ion-icon name="mail-unread"></ion-icon>
          </li>
          <li>
            <ion-icon name="notifications"></ion-icon>
          </li>
          <li>
            <img id="user-image" src="assets/images/user.png" />
          </li>
        </ul>
      </div>
      <div class="container-title">
        <h3>Update Patient Medical Record</h3>
        <p>Click the tabs to view and edit patient medical details</p>
      </div>
      <div class="container-form">
        <!--X-Ray section starts here  -->
        <div class="container-section">
          <h5>X-Ray</h5>
          <!-- <RecordList :recordlist="APIXrayList" /> -->
          <RecordListShimmer/>
        </div>

        <hr />
        <!-- ends here -->
        <!-- Ultrasound Scan starts here -->
        <div class="container-section">
          <h5>Ultrasound Scan</h5>
          <!-- <RecordList :recordlist="APIUltrasoundList" /> -->
          <RecordListShimmer/>
        </div>
        <hr />
        <!-- ends here -->
        <form>
          <div id="fields">
            <div class="form-control">
              <label class="title">CT Scan</label>
              <SelectWidget :options="scanOptions" />
            </div>
            <div class="form-control">
              <label class="title">MRI</label>
              <SelectWidget :options="mriOptions" />
            </div>
          </div>
          <FormBtn label="Save and Send" />
        </form>
      </div>
    </section>
  </main>
</template>

<script>
import SideBar from "../components/SideBar.vue";
// import RecordList from "../components/RecordList.vue";
import SelectWidget from "../components/SelectWidget.vue";
import FormBtn from "../components/FormBtn.vue";
import RecordListShimmer from '../components/RecordListShimmer.vue'
import { gql } from 'graphql-tag'

export default {
  name: "Dashboard",
  components: {
    SideBar,
    // RecordList,
    SelectWidget,
    FormBtn,
    RecordListShimmer
  },
  data() {
    return {
      // Select fields lists
      scanOptions: [
        {
          title: "Scan Option 1",
        },
      ],
      mriOptions: [
        {
          title: "MRI Option 1",
        },
      ]
    };
  },
  mounted() {
    this.$store.dispatch("retrieve_data");
  },
  computed: {
    APIXrayList() {
      return this.$store.state.xrayList;
    },
    APIUltrasoundList() {
      return this.$store.state.ultrasoundList;
    },
  },
  methods:{
    async login() {
      let result = await this.$apollo.mutate({
        // Query
        mutation: gql`mutation{
        login(email: "tester@kompletecare.com", password: "password")
    }`
      })
      console.log("LOGIN RESULT")
      console.log(result)
    }
  }
};
</script>


