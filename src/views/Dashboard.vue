<template>
  <main>
    <SideBar />
    <section class="container">
      <Alert v-if="isNotify"/>
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
        <form @submit="createRecord" id="recordForm">
          <!--X-Ray section starts here  -->
          <div class="container-section">
            <h5>X-Ray</h5>
            <RecordListShimmer v-if="!APIXrayList.length" />
            <ul v-else>
              <li v-for="record in APIXrayList" :key="record.id">
                <input :id="record.id" :value="record.id" v-model="selectedInvestigations" type="checkbox"/>
                <h6>{{ record.title }}</h6>
              </li>
            </ul>
          </div>

          <hr />
          <!-- ends here -->
          <!-- Ultrasound Scan starts here -->
          <div class="container-section">
            <h5>Ultrasound Scan</h5>
            <RecordListShimmer v-if="!APIUltrasoundList.length" />
            <ul v-else>
              <li v-for="record in APIUltrasoundList" :key="record.id">
                <input :id="record.id" :value="record.id" v-model="selectedInvestigations" type="checkbox" />
                <h6>{{ record.title }}</h6>
              </li>
            </ul>
          </div>
          <hr />
          <!-- ends here -->

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
import SelectWidget from "../components/SelectWidget.vue";
import FormBtn from "../components/FormBtn.vue";
import RecordListShimmer from "../components/RecordListShimmer.vue";
import Alert from '../components/Alert.vue'
import { useMutation } from '@vue/apollo-composable'
import { gql } from "graphql-tag";

export default {
  name: "Dashboard",
  components: {
    SideBar,
    SelectWidget,
    FormBtn,
    RecordListShimmer,
    Alert,
  },
  data() {
    return {
      isNotify: false,
      selectedInvestigations: [],
      // Select fields lists
      scanOptions: [
        {
          title: "Scan needed in the left cerebral hemisphere",
        },
      ],
      mriOptions: [
        {
          title: "Full body MRI",
        },
      ],
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
  methods: {
    async notifyUser(){
      this.isNotify = true
      document.getElementById( "recordForm" ).reset()
      this.selectedInvestigations =[]
      await new Promise(resolve => setTimeout(resolve, 2000));
      this.isNotify = false
    },
    async createRecord(e){
      e.preventDefault()
      const CREATE_RECORD_MUTATION = gql`
        mutation {
          add_medical_record(
              investigations: [${this.selectedInvestigations.toString()}], 
              ctscan: "Scan needed in the left cerebral hemisphere",
              mri: "Full body MRI",
              developer: "Developer"
            ){
              id,
              patient{
                id,
                name,
                email
              },
              investigations{
              id,
              title,
              type{title}
              },
              ctscan,
              mri,
              created_at
            }
        } 
      `;
      console.log('QUERY : ', CREATE_RECORD_MUTATION)
      let res = await useMutation(CREATE_RECORD_MUTATION)
      this.notifyUser()
      console.log('DATA : ', res)    
      
    }
  },
};
</script>


