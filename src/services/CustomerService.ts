export default class CustomerService {

    data: any;

    getCustomersSmall() {
        return fetch('demo/data/customers-small.json').then(res => res.json())
                .then(d => d.data);
    }

    getCustomersMedium() {
        return fetch('demo/data/customers-medium.json').then(res => res.json())
                .then(d => d.data);
    }

    async getCustomersLarge() {

        const response = await fetch("http://localhost/customer/api/1/5/10");
        const data = await response.json();
        this.data = data;        

        return this.data;
    }

    async created() {
        // GET request using fetch with async/await
        const response = await fetch("http://localhost/customer/api/1/5/10");
        const data = await response.json();
        this.totalVuePackages = data;
        console.log(this.totalVuePackages);
      }

    getCustomersXLarge() {
        return fetch('demo/data/customers-xlarge.json').then(res => res.json())
                .then(d => d.data);
    }

    getCustomers(params: any) {
        const queryParams = params ? Object.keys(params).map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k])).join('&') : '';
        return fetch('https://www.primefaces.org/data/customers?' + queryParams).then(res => res.json())
    }
}