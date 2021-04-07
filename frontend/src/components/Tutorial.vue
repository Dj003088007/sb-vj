<template>
  <div v-if="currentTutorial">
    <div v-if="!submitted">
      <div class="edit-form">
        <h4>Tutorial</h4>
        <form>
          <div class="form-group">
            <label for="title">Title</label>
            <input type="text" class="form-control" id="title"
              v-model="currentTutorial.title"
            />
          </div>
          <div class="form-group">
            <label for="description">Description</label>
            <input type="text" class="form-control" id="description"
              v-model="currentTutorial.description"
            />
          </div>

          <div class="group-btn">
            <label><strong>Status:</strong></label>
            {{ currentTutorial.published ? "Published" : "Pending" }}
          </div>
        </form>
      </div>
      <div class="group-btn">
        <button class="badge badge-light mr-2"
          @click="back"
        >
          Cancel
        </button>
        <button class="badge badge-primary mr-2"
          v-if="currentTutorial.published"
          @click="updatePublished(false)"
        >
          UnPublish
        </button>
        <button v-else class="badge badge-primary mr-2"
          @click="updatePublished(true)"
        >
          Publish
        </button>

        <button class="badge badge-danger mr-2"
          @click="deleteTutorial"
        >
          Delete
        </button>

        <button type="submit" class="badge badge-success"
          @click="updateTutorial"
        >
          Update
        </button>
      </div>
    </div>
    <div v-else>
      <h1 class="text-center">{{ message }}</h1>
    </div>
  </div>

  <div v-else style="text-align: center;" class="border border-light mt-2">
    <br />
    <p>Please click on a Tutorial...</p>
  </div>
</template>

<script>
import TutorialDataService from '../services/tutorialDataService';

export default {
  name: 'tutorial',
  data() {
    return {
      currentTutorial: null,
      message: '',
      submitted: false,
    };
  },
  mounted() {
    this.message = '';
    this.getTutorial(this.$route.params.id);
  },
  methods: {
    back() {
      return this.$router.push({ name: 'tutorials' });
    },
    getTutorial(id) {
      TutorialDataService.get(id)
        .then((response) => {
          this.currentTutorial = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    updatePublished(status) {
      const data = {
        id: this.currentTutorial.id,
        title: this.currentTutorial.title,
        description: this.currentTutorial.description,
        published: status,
      };
      TutorialDataService.update(this.currentTutorial.id, data)
        .then((response) => {
          this.currentTutorial.published = status;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    updateTutorial() {
      TutorialDataService.update(this.currentTutorial.id, this.currentTutorial)
        .then((response) => {
          console.log(response.data);
          this.submitted = true;
          this.message = 'The tutorial was updated successfully!';
          setTimeout(() => {
            this.submitted = false;
            this.$router.push({ name: 'tutorials' });
          }, 1000);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    deleteTutorial() {
      TutorialDataService.delete(this.currentTutorial.id)
        .then((response) => {
          this.submitted = true;
          this.message = 'The tutorial was deleted successfully!';
          setTimeout(() => {
            console.log(response.data);
            this.submitted = false;
            this.$router.push({ name: 'tutorials' });
          }, 1000);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: 0 auto;
}
.group-btn {
  text-align: center;
  max-width: 300px;
  margin: 0 auto;
}
</style>
