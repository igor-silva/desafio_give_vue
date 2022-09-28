<script setup lang="ts"></script>
<template>
  <div class="reports">
    <h1>Relatórios</h1>


    <div id="app">
      <DataTable
        :value="customers"
        :paginator="true"
        :rows="10"
        paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
        :rowsPerPageOptions="[10, 20, 50]"
        responsiveLayout="scroll"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
      >
        <Column field="id" header="Id"></Column>
        <Column field="first_name" header="Nome"></Column>
        <Column field="last_name" header="Sobrenome"></Column>
        <Column field="gender" header="Genêro"></Column>
        <Column field="email" header="E-mail"></Column>
        <template #paginatorstart>
          <Button type="button" icon="pi pi-refresh" class="p-button-text" />
        </template>
        <template #paginatorend>
          <Button type="button" icon="pi pi-cloud" class="p-button-text" />
        </template>
      </DataTable>
    </div>
  </div>
</template>

<script>
import CustomerService from "../services/CustomerService";

export default {
  el: "#app",
  data() {
    return {
      data: [],
      customers: [],
    };
  },
  customerService: null,
  /*mounted() {
    axios
      .get("http://localhost/customer/api/1/5/10")
      .then((response) => (this.data = response.data));
  },*/
  created() {
    this.customerService = new CustomerService();
  },
  mounted() {
    this.customerService
      .getCustomersLarge()
      .then(data => {
            this.customers = data;
        });
      //.then((res) => (this.customers = res));
  },
};
</script>

<style>
@media (min-width: 1024px) {
  .reports {
    min-height: 100vh;
    display: grid;
  }
}
</style>
