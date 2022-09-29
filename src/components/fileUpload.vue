<template>
  <div class="container">
    <div class="row">
      <h1>Importar dados</h1>
      <div class="col-md-10">
        <div class="input-group">
          <input
            name="file"
            type="file"
            id="file"
            class="form-control"
            ref="file"
            accept=".csv"
          />
          <button
            type="submit"
            v-on:click="uploadFile()"
            class="btn btn-primary"
          >
            Importar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      file: "",
    };
  },
  methods: {
    uploadFile: function () {
      this.file = this.$refs.file.files[0];
      let formData = new FormData();
      formData.append("file", this.file);
      this.$refs.file.value = "";
      this.axios
        .post("http://localhost:8080/customer/insert", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(function (response) {
          console.log(response);

          if (!response.data) {
            alert("File not uploaded.");
          } else {
            console.log(response);
            alert("File uploaded successfully.");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>
