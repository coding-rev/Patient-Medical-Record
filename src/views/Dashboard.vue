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
          <RecordList :recordlist="xrayList" />
        </div>

        <hr />
        <!-- ends here -->
        <!-- Ultrasound Scan starts here -->
        <div class="container-section">
          <h5>Ultrasound Scan</h5>
          <RecordList :recordlist="scanList" />
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
import RecordList from "../components/RecordList.vue";
import SelectWidget from "../components/SelectWidget.vue";
import FormBtn from "../components/FormBtn.vue";

export default {
  name: "Dashboard",
  components: {
    SideBar,
    RecordList,
    SelectWidget,
    FormBtn,
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
      ],
      //  Main listing lists
      scanList: [
        {
          id: "1",
          title: "Chest",
          type: {
            title: "X-Ray",
          },
        },
        {
          id: "2",
          title: "Cervical Vertebrae",
          type: {
            title: "X-Ray",
          },
        },
        {
          id: "3",
          title: "Thoracic Vertebrae",
          type: {
            title: "X-Ray",
          },
        },
        {
          id: "4",
          title: "Lumbar Vartebrae",
          type: {
            title: "X-Ray",
          },
        },
        {
          id: "5",
          title: "Lumbo Sacral Vertebrae",
          type: {
            title: "X-Ray",
          },
        },
        {
          id: "6",
          title: "Wrist Joint",
          type: {
            title: "X-Ray",
          },
        },
        {
          id: "7",
          title: "Ankle",
          type: {
            title: "X-Ray",
          },
        },
        {
          id: "8",
          title: "Fingers",
          type: {
            title: "X-Ray",
          },
        },
        {
          id: "9",
          title: "Toes",
          type: {
            title: "X-Ray",
          },
        },
      ],
      xrayList: [
        {
          id: "1",
          title: "Chest",
          type: {
            title: "X-Ray",
          },
        },
        {
          id: "2",
          title: "Cervical Vertebrae",
          type: {
            title: "X-Ray",
          },
        },
      ],
    };
  },
};
</script>


